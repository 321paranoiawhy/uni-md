// https://github.com/nuxt-modules/icon/pull/63#issuecomment-1506079746
export interface NuxtIconModuleOptions {
  size?: string | false;
  class?: string;
  aliases?: { [alias: string]: string };
}

export default defineAppConfig({
  // error TS2339: Property 'aliases' does not exist on type '{}'.
  // https://github.com/nuxt-modules/icon/pull/63#issuecomment-1480219327
  nuxtIcon: {
    size: "24px", // default <Icon> size applied
    class: "icon", // default <Icon> class applied
    aliases: {},
  } as NuxtIconModuleOptions,
});
