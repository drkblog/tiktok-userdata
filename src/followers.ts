import { TikTokFan, TiktokUserdata } from "./tiktok-userdata";

export class Followers {
  private followers: FollowerMapType;
  constructor(followers: FollowerMapType) {
    this.followers = followers;
  }

  public findByUsername(username: string): TikTokFan {
    return this.followers[username];
  }
}

type FollowerMapType = Record<string, TikTokFan>;

export function followersFromData(userdata: TiktokUserdata): Followers {
  const followersRaw: TikTokFan[] = userdata.Activity['Follower List'].FansList;
  const followerMap: FollowerMapType = followersRaw.reduce((map, item: TikTokFan) => (map[item.UserName] = item, map), {} as FollowerMapType);
  return new Followers(followerMap);
}