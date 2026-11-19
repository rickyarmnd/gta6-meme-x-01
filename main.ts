// gta6-meme-x-01 entry (Node 22, standard library only).
// The entry is the X post itself: this program just hands the
// post's address from POST.json at the repo root to /output,
// where the gate reads it. The house reads the post from X
// (its first picture, then its text) and judges that.
// No network, no clock, no files outside the repository.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, 'POST.json'), join(outDir, 'POST.json'));
