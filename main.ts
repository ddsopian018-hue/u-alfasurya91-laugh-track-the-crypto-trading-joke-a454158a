// Misdirection: The Three-Month Long Term
// One-line crypto trading joke for make.fun's "Laugh Track: The Crypto
// Trading Joke Contest". Writes the joke to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output), guarded to the competition's 1-200 character gate.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I used to say I'm a long-term investor. Then I checked my chart: I bought the top, sold the bottom, and while my group chat posts rockets, my 'long term' is three months too scared to open the app.";

// The gate: UTF-8 text of 1 to 200 characters, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`joke must be 1-200 characters, got ${JOKE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`wrote entry.txt (${JOKE.length} chars) to ${outDir}`);
