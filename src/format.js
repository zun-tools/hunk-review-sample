export function formatMemo(memo) {
  const date = new Date(memo.createdAt).toISOString().slice(0, 10);
  return `#${memo.id} ${memo.title} (${date})`;
}

export function formatList(memos) {
  if (memos.length === 0) return "メモはありません";
  return memos.map(formatMemo).join("\n");
}
