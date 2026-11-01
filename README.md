# hunk-review-sample

動画「hunk で AI の変更をレビューする」(zundamon-tools の hunk/no02) の実演用サンプルです。

- `main` は小さなメモ API の骨組みです。
- `feature/memo-store` は AI が書いた体の変更で、PR #1 になっています。
  あえて 3 か所の欠陥（エラーの握りつぶし 2 か所・ページ送りの 1 つずれ 1 か所）を入れてあります。

実測の時点: 2026-11-01 / hunk 0.24.1

License: MIT
