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
