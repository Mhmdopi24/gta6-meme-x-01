import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The whole job of this entry's program: hand the post record to the
// grader by copying POST.json from the repository root into /output.
// The source sits next to this script, wherever the repo was checked out.
const repoRoot = dirname(fileURLToPath(import.meta.url));
const sourceFile = join(repoRoot, "POST.json");
const outputDir = "/output";
const outputFile = join(outputDir, "POST.json");

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourceFile, outputFile);
