import { Video, TiktokUserdata } from "./tiktok-userdata";

export class Videos {
  private videosRaw: Video[];
  constructor(videosRaw: Video[]) {
    this.videosRaw = videosRaw;
  }
}

export function videosFromData(userdata: TiktokUserdata): Videos {
  const videosRaw: Video[] = userdata.Video.Videos.VideoList;
  return new Videos(videosRaw);
}