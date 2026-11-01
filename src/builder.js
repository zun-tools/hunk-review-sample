export function createMemo(id, title, body = "") {
  return { id, title, body, createdAt: Date.now() };
}
