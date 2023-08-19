// import { Document } from 'mongoose';

// export interface MarkdownFile extends Document {
//   readonly _id: string;
//   readonly url: string;
// }

export interface GithubConfig {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
}

export interface GithubPayload {
  client_id: string;
  client_secret: string;
  code: string;
  redirect_uri: string;
}

export interface GithubAuthResponse {
  access_token: string;
  scope: string;
  token_type: string;
}

/**
 * 需用到的 GitHub 用户信息
 *
 * https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28
 */
export interface GitHubUser {
  login: string;
  avatar_url: string;
  email: string;
}

export interface IUser extends Document {
  name: string;
  email: string;
  avatar_url: string;
}
