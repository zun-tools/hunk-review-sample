import test from "node:test";
import assert from "node:assert";
import { createMemo } from "../src/builder.js";
import { totalPages } from "../src/memo.js";

test("createMemo はタイトルを持つ", () => {
  assert.strictEqual(createMemo(1, "牛乳").title, "牛乳");
});

test("totalPages は切り上げ", () => {
  assert.strictEqual(totalPages([1, 2, 3], 2), 2);
});
