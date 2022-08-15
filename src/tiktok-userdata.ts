export type TiktokUser = {
  UserName: string;
  Date: Date;
}
export type Hashtag = {
  HashtagName: string;
  HashtagLink: string;
}
export type Like = {
  Date: Date;
  VideoLink: string;
}
export type Login = {
  Date: Date;
  IP: string;
  DeviceModel: string;
  DeviceSystem: string;
  NetworkType: string;
  Carrier: string;
}
export type Share = {
  Date: Date;
  SharedContent: string;
  Link: string;
  Method: string;
}
export type Status = {
  Resolution: string;
  AppVersion: string;
  Idfa: string;
  GAid: string;
  OpenUdid: string;
  Clientudid: string;
}
export type Video = {
  Date: Date;
  VideoLink: string;
  Likes: number;
}

export type TikTokFollowers = {
  FansList: TiktokUser[];
}
export type TikTokFollowing = {
  Following: TiktokUser[];
}
export type Hashtags = {
  HashtagList: Hashtag[]
}
export type Likes = {
  ItemFavoriteList: Hashtag[]
}
export type Logins = {
  LoginHistoryList: Login[]
}
export type Shares = {
  ShareHistoryList: Share[]
}

export type TikTokActivity = {
  ['Follower List']: TikTokFollowers;
  ['Following List']: TikTokFollowing;
  Hashtag: Hashtags;
  ['Like List']: Likes;
  ['Login History']: Logins;
  ['Share History']: Shares;
  Status: Status;
}

export type TikTokVideo = {
  Videos: TikTokVideos;
}

export type TikTokVideos = {
  VideoList: Video[];
}

export type Block = {
  BlockList: TiktokUser[];
}

export type Settings = {
  Block: Block;
}

export  type TiktokUserdata = {
  Activity: TikTokActivity;
  Video: TikTokVideo;
  ['App Settings']: Settings;
}