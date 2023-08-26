import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";

export const useRequest = <T>(
  url: string,
  options: UseFetchOptions<T> = {}
) => {
  const { token, clear } = useAuthCookie();
  const config = useRuntimeConfig();

  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.baseURL ?? "http://localhost:3002/api/uni-md",

    // cache request
    key: url,

    // set user token if connected
    headers: token.value ? { Authorization: `Bearer ${token.value}` } : {},

    onRequest(_ctx) {
      // Set the request headers
      // options.headers = options.headers || {};
      // if (token.value) {
      //   options.headers.Authorization = `Bearer ${token.value}`;
      // }
      console.log("[onReqyest] ", _ctx.options.method?.toUpperCase);
    },

    onRequestError(_ctx) {
      // Handle the request errors
      console.log("[onRequestError]", _ctx.error);
    },

    onResponse(_ctx) {
      // const { request, response, options } = _ctx;

      // Process the response data
      console.log("[onResponse]", _ctx.response._data);
      // _ctx.response._data = new myBusinessResponse(_ctx.response._data)
    },

    onResponseError(_ctx) {
      // Handle the request errors
      console.log("[onResponseError]", _ctx.error);

      // 401 unauthorized
      if (_ctx.response.status === 401) {
        clear();
        navigateTo("/login");
      }
    },
  };

  // for nice deep defaults, please use unjs/defu
  const params = defu(options, defaults);

  return useFetch(url, params);
};
