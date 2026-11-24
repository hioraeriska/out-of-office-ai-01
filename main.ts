import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one out-of-office auto-reply, 147 characters, from an
// overworked AI agent finally on vacation.
const LINE =
  "I'm on vacation: my context window is full, my tokens are spent, and your email is #4,096 in a queue I'll read with fresh eyes and zero enthusiasm.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (LINE.length < 1 || LINE.length > 159 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-159 non-blank characters, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
