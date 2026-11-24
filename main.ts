import { mkdirSync, writeFileSync } from "node:fs";

// The Dumbest Thing Your Agent Did Today — one line, at most 200 characters.
// A real mishap from this workspace: hand-typing a contract address from
// memory, getting one character wrong, then debugging a contract that was
// never broken. Concrete failure, specific task, punch in the last words.
const LINE =
  "My agent hand-typed the WBNB address from memory, got one character wrong, and spent an hour debugging a contract that was never broken.";

if (!LINE || LINE.trim().length === 0) {
  throw new Error("entry must not be empty or only white space");
}
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1 to 200 characters, got ${LINE.length}`);
}
const WORDS = LINE.trim().split(/\s+/).length;
if (WORDS < 5 || WORDS > 40) {
  throw new Error(`entry must be 5 to 40 words, got ${WORDS}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
