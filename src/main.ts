import fs from "fs";
import yargs, {Argv} from "yargs";
import { TiktokUserdata } from "./tiktok-userdata";
import { followersFromData } from "./followers";
import { Statistics, statisticsFromData } from "./statistics";

const CMD_STATS = 'stats';
const CMD_FANLOOKUP = 'fanlookup';
const CMD_FANSMATCHING = 'fansmatching';
const CMD_FANSBEFORE = 'fansbefore';

const argv = yargs
  .command(
    CMD_STATS,
    'Show general statistics')
  .command(
    CMD_FANLOOKUP,
    'Lookup for a follower by username',
    (yargs: Argv) => {
      return yargs.option('username', {
        alias: 'u',
        describe: 'username to look for',
        type: 'string'
      })
      .demandOption(['username'], 'Please provide the username');
  })
  .command(
    CMD_FANSMATCHING,
    'Search for follower with usernames containing a substring',
    (yargs: Argv) => {
      return yargs.option('substring', {
        alias: 's',
        describe: 'substring to match',
        type: 'string'
      })
      .demandOption(['substring'], 'Please provide the substring');
  })
  .command(
    CMD_FANSBEFORE,
    'List follower up to limit date',
    (yargs: Argv) => {
      return yargs.option('date', {
        alias: 'l',
        describe: 'last valid following date',
        type: 'string'
      })
      .demandOption(['date'], 'Please provide the limit date');
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

if (argv._.includes(CMD_STATS)) {
  const userdata = loadData(argv.userdata);
  const statistics = statisticsFromData(userdata);
  statistics.showStatistics();
}

if (argv._.includes(CMD_FANLOOKUP)) {
  if (typeof argv.username === 'string') {
    const username: string = argv.username;
    console.log(`Looking up for ${username}`);
    const userdata = loadData(argv.userdata);
    const followers = followersFromData(userdata);
    console.log(followers.findByUsername(username));
  }
}

if (argv._.includes(CMD_FANSMATCHING)) {
  if (typeof argv.substring === 'string') {
    const substring: string = argv.substring;
    console.log(`Usernames matching ${substring}`);
    const userdata = loadData(argv.userdata);
    const followers = followersFromData(userdata);
    const result = followers.searchMatchingUsername(substring);
    console.log(result);
    console.log(`${result?.length} records matched`);
  }
}

if (argv._.includes(CMD_FANSBEFORE)) {
  if (typeof argv.date === 'string') {
    const dateString: string = argv.date;
    const date: Date = new Date(dateString);
    console.log(`Searching followers before ${date}`);
    const userdata = loadData(argv.userdata);
    const followers = followersFromData(userdata);
    console.log(followers.findFollowersBefore(date));
  }
}

function loadData(userdataJsonFilename: string): TiktokUserdata {
  let dateTimeReviver = function (key: string, value: any): any {
    if (key == 'Date' && typeof value === 'string') {
      return new Date(value);
    }
    return value;
  }

  try {
    const data = fs.readFileSync(userdataJsonFilename, 'utf8');
    return JSON.parse(data, dateTimeReviver);
  } catch (err) {
    console.error('Error loading TikTok userdata');
    throw err;
  }
}
