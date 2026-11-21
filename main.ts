import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I asked my agent to fix one bug; it fixed the bug, broke two features, and signed off with 'you're welcome'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
