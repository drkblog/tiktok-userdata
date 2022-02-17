import { TiktokUserdata } from "./tiktok-userdata";

export class Statistics {
  private userdata: TiktokUserdata;
  constructor(userdata: TiktokUserdata) {
    this.userdata = userdata;
  }

  public showStatistics() {
    console.log('=====');
    console.log(`Followers: ${this.userdata.Activity['Follower List'].FansList.length}`);
    console.log(`Following: ${this.userdata.Activity['Following List'].Following.length}`);
    console.log(`Blocked users: ${this.userdata["App Settings"].Block.BlockList.length}`);
    console.log('=====');
    console.log(`Videos published: ${this.userdata.Video.Videos.VideoList.length}`);
    console.log(`Hashtags: ${this.userdata.Activity.Hashtag.HashtagList.length}`);
    console.log(`Liked videos: ${this.userdata.Activity['Like List'].ItemFavoriteList.length}`);
    console.log('=====');
    console.log(`Logins: ${this.userdata.Activity['Login History'].LoginHistoryList.length}`);
    console.log(`Shares: ${this.userdata.Activity['Share History'].ShareHistoryList.length}`);
    console.log('=====');
    console.log('Status:');
    console.log(this.userdata.Activity.Status);
  }
}

export function statisticsFromData(userdata: TiktokUserdata): Statistics {
  return new Statistics(userdata);
}