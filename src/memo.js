export function pageOf(memos, page, pageSize) {
  const start = page * pageSize + 1;
  return memos.slice(start, start + pageSize);
}

export function totalPages(memos, pageSize) {
  return Math.ceil(memos.length / pageSize);
}
