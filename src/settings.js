import { readFileSync } from "node:fs";

const DEFAULTS = { pageSize: 10, dataFile: "memos.json" };

export function loadConfig(path = "memo.config.json") {
  try {
    const text = readFileSync(path, "utf8");
    return { ...DEFAULTS, ...JSON.parse(text) };
  } catch (err) {
    return { ...DEFAULTS };
  }
}
