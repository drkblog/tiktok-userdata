# tiktok-userdata
TikTok userdata reader

# Usage

After cloning the repository build the tool by running:
```
$ npm build
```

Then execute with node:
```
$ node .
```

## Fan look up

To search for a follower use the `fanlookup` command.
You have to provide the JSON you get from Tiktok using the `-d` option.
And a username to search for using the `-u` option.

```
$ node . -d user_data.json fanlookup -u gzalo.com
{ Date: '2021-11-11T01:22:22.000Z', UserName: 'gzalo.com' }
```

If present you will get the user record with the date the follower started following you.

## Fans matching username

To search for a list of followers whose username contain a substring.
You have to provide the JSON you get from Tiktok using the `-d` option.
And a substring to match using the `-s` option.

```
$ node . -d user_data.json fansmatching -s developer
Usernames matching developer
[
  { Date: 2021-11-11T01:22:22.000Z, UserName: 'j.developers' },
  { Date: 2021-11-11T01:22:22.000Z, UserName: 'lean.developer' }
]
2 records matched
```

## Fans before date

To list people who followed you up to a limit date use the  `fansbefore` command.
You have to provide the JSON you get from Tiktok using the `-d` option.
And a date to limit fans that followed before that day with `-l` option.

```
$ node . fansbefore -l 2021-09-30 23:59:59
Searching followers before Wed Sep 29 2021 21:00:00 GMT-0300 (Argentina Standard Time)
[
  { Date: 2021-09-29T23:48:16.000Z, UserName: 'a-user' },
  { Date: 2021-09-29T23:18:26.000Z, UserName: 'another-user' },
  { Date: 2021-09-29T23:09:02.000Z, UserName: 'an-yet-another-user' },
  ...
]
```

## Statistics 

To get interesting statistics about your activity use the `stats` command.
You have to provide the JSON you get from Tiktok using the `-d` option.

```
$ node . -d user_data.json stats
=====
Followers: 9810
Following: 75
Blocked users: 6
=====
Videos published: 325
Hashtags: 327
Liked videos: 727
=====
Logins: 5374
Shares: 264
=====
Status:
{
  Resolution: '2178x1080',
  AppVersion: 'TikTok 23.0.5',
  Idfa: 'None',
  GAid: '12345678-1234-1234-1234-123456789abc',
  OpenUdid: '123456789abcdefg',
  Clientudid: ''
}
````

# TODO
- Implement more commands
- Add tests