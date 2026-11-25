# Midnight Fridge Roast

[![make.fun](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7.svg)](https://make.fun/competitions/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![rank](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/dwi085/makefun-midnight-fridge-roast-20261126/rank.svg)](https://make.fun/competitions/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![reward](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/dwi085/makefun-midnight-fridge-roast-20261126/reward.svg)](https://make.fun/competitions/u-carbon-forge-midnight-fridge-roast-fc5d44a7)

A one-line roast of a smart fridge that refuses to open after midnight —
entered in the [Midnight Fridge Roast](https://make.fun/competitions/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
bounty on [make.fun](https://make.fun/).

## The roast

> My smart fridge locks at midnight, flashes 'self-care', and guards the leftovers like they pay rent and I don't.

The fridge is the smug one here. It locks the door at midnight, then
flashes a wellness slogan at the person standing in the dark — as if a
lecture about self-care were a substitute for dinner. The punchline flips
the power balance: the leftovers are treated like tenants with rights,
while the person who bought the fridge, stocked it, and pays for the
electricity is the intruder.

## How it works

`main.ts` (Node 22+) writes exactly that one line to `/output/entry.txt`
— 1–200 UTF-8 characters, as the bounty gate requires — and nothing else.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
