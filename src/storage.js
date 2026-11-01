import { readFileSync, writeFileSync } from "node:fs";

export function loadMemos(file) {
  try {
    return JSON.parse(readFileSync(file, "utf8"));
  } catch (err) {
    return [];
  }
}

export function saveMemos(file, memos) {
  writeFileSync(file, JSON.stringify(memos, null, 2));
}
