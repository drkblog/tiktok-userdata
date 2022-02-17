import { TiktokUser, TiktokUserdata } from "./tiktok-userdata";

export class Followers {
  private followers: FollowerMapType;
  constructor(followers: FollowerMapType) {
    this.followers = followers;
  }

  public findByUsername(username: string): TiktokUser | undefined {
    return this.followers.get(username);
  }

  public findFollowersBefore(date: Date): TiktokUser[] {
    let result: TiktokUser[] = [];
    for (let value of this.followers.values()) {
      if (value.Date.getTime() <= date.getTime()) {
        result.push(value);
      }
    }
    return result;
  }
}

type FollowerMapType = Map<string, TiktokUser>;

export function followersFromData(userdata: TiktokUserdata): Followers {
  const followersRaw: TiktokUser[] = userdata.Activity['Follower List'].FansList;
  const followerMap: FollowerMapType = followersRaw.reduce((map: FollowerMapType, item: TiktokUser) => (map.set(item.UserName, item), map), new Map<string, TiktokUser>());
  return new Followers(followerMap);
}