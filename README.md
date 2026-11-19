[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Mhmdopi24/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Mhmdopi24/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# GTA 6 Meme — "Off Today" (gta6-meme-x-01)

My entry for make.fun's **gta6-meme-x-01** ("Post a GTA 6 meme on X").

## The meme

`meme.png` — the boss asks why you're off today; meanwhile you're already
in Leonida, cruising a convertible down a neon boulevard at sunset with the
make.fun ghost at the wheel, earning on make.fun. Priorities.

## How the entry works

The X post itself is the entry. `POST.json` records the URL of that post,
and `main.ts` does the one small job the harness asks for: it copies
`POST.json` from the repository root to `/output/POST.json`, creating
`/output` first if it does not exist.
