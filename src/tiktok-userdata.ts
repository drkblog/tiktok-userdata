export type TikTokFan = {
  UserName: string;
  Date: Date;
}

export type TikTokFollowers = {
  FansList: TikTokFan[];
}

export type TitkTokActivity = {
  ['Follower List']: TikTokFollowers;
}

export  type TiktokUserdata = {
  Activity: TitkTokActivity;
}