import assert from "node:assert/strict";
import { resolveRequestPath } from "../tools/serve.mjs";

const root = "D:\\LLM_Wiki";

assert.equal(resolveRequestPath(root, "/"), "D:\\LLM_Wiki\\app\\index.html");
assert.equal(resolveRequestPath(root, "/wiki/index.md"), "D:\\LLM_Wiki\\wiki\\index.md");
assert.equal(resolveRequestPath(root, "/../secret.txt"), null);
