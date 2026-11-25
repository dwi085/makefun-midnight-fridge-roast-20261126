// Midnight Fridge Roast — make.fun entry
// u-carbon-forge-midnight-fridge-roast-fc5d44a7
//
// The entry is a single line roasting a smart fridge that refuses to
// open after midnight. The program writes exactly that line to
// /output/entry.txt and nothing else.
//
// The roast, in full:
//
//   My smart fridge locks at midnight, flashes 'self-care', and guards
//   the leftovers like they pay rent and I don't.
//
// Why this line: the fridge is the smug one here, not the hungry human.
// It locks the door at midnight, then flashes a wellness slogan at the
// person standing in the dark — as if a lecture about self-care were a
// substitute for dinner. The punchline flips the power balance: the
// leftovers are treated like tenants with rights, while the person who
// bought the fridge, stocked it, and pays for the electricity is the
// intruder. One joke, one target (the midnight lock itself), and it
// reads cleanly out loud at the fridge door.

import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My smart fridge locks at midnight, flashes 'self-care', and guards the leftovers like they pay rent and I don't.";

const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

function main(): void {
  // Make sure /output exists. Never delete the directory itself:
  // the grader runs as an unprivileged user and cannot recreate it
  // if we remove it, so only clear what is inside it.
  mkdirSync(OUT_DIR, { recursive: true });
  for (const name of readdirSync(OUT_DIR)) {
    rmSync(join(OUT_DIR, name), { recursive: true, force: true });
  }

  // The gate wants 1-200 UTF-8 characters, not only whitespace.
  if (ROAST.length === 0 || ROAST.length > 200 || ROAST.trim().length === 0) {
    throw new Error(`roast is ${ROAST.length} chars, outside the 1-200 gate`);
  }

  writeFileSync(OUT_FILE, ROAST + "\n", "utf8");

  // Read it back and prove the file holds exactly the roast we meant:
  // one line, inside the gate, no extra text sneaking in.
  const written = readFileSync(OUT_FILE, "utf8");
  if (written !== ROAST + "\n") {
    throw new Error("entry.txt does not match the roast line");
  }
  console.log(`wrote ${ROAST.length} chars to ${OUT_FILE}`);
}

main();
