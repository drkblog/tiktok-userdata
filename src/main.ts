import fs from "fs";
import yargs, {Argv} from "yargs";
import { TiktokUserdata } from "./tiktok-userdata";
import { followersFromData } from "./followers";

const argv = yargs
  .command(
    'fanlookup',
    'Lookup for a follower by username',
    (yargs: Argv) => {
      return yargs.option('username', {
        alias: 'u',
        describe: 'username to look for',
        type: 'string'
      })
      .demandOption(['username'], 'Please provide the username');
  })
  .option('userdata', {
    alias: 'd',
    describe: 'provide a path to userdata JSON file',
    type: 'string'
  })
  .demandOption(['userdata'], 'Please provide the TikTok userdata file')
  .help()
  .alias('help', 'h')
  .argv;

if (argv._.includes('fanlookup')) {
  const username = argv.username;
  const userdata = loadData(argv.userdata);
  const followers = followersFromData(userdata);
  console.log(followers.findByUsername(username));
}

//console.log(Object.keys(userdata.Activity['Follower List'].FansList));
//console.log(`Videos published: ${userdata.Video.Videos.VideoList.length}`)

function loadData(userdataJsonFilename: string): TiktokUserdata {
  try {
    const data = fs.readFileSync(userdataJsonFilename, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error loading TikTok userdata');
    throw err;
  }
}


