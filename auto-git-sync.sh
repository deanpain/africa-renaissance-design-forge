#!/bin/bash

REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_FILE="$REPO_DIR/auto-git-sync.log"

while true; do
  cd "$REPO_DIR"
  # Check for changes
  if [[ -n $(git status --porcelain) ]]; then
    git add .
    COMMIT_MSG="Auto-sync: $(date '+%Y-%m-%d %H:%M:%S')"
    git commit -m "$COMMIT_MSG"
    git push
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] Changes committed and pushed." >> "$LOG_FILE"
  else
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] No changes to commit." >> "$LOG_FILE"
  fi
  sleep 300 # 5 minutes

done 