// SPDX-License-Identifier: MIT
// The Meeting That Should Have Been an Email — make.fun entry.
// One line, at most 200 characters: a single joke about a meeting
// that should have been an email. The program writes it to
// /output/entry.txt, where the sealed gate scorer checks it and
// the judge reads it in pairs against the other entries.
import { mkdirSync, writeFileSync } from "node:fs";

// v2 revised: the read-aloud scene was recognizable but its turn was
// only a repetition. This line inverts the complaint instead — the
// meeting exists because nobody reads emails — so the laugh lands on
// the last word, "live", with the mute detail kept as concrete colour.
const LINE =
  "This meeting should have been an email, but nobody reads emails, so twelve of us came to sit on mute and ignore Dave live.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
