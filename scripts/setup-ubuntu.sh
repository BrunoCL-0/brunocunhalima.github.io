#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
NVM_DIR="${NVM_DIR:-$HOME/.nvm}"

if ! command -v curl >/dev/null 2>&1; then
  echo "curl is required. Install it with: sudo apt install curl"
  exit 1
fi

if [ ! -s "$NVM_DIR/nvm.sh" ]; then
  echo "Installing nvm..."
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
fi

# shellcheck source=/dev/null
. "$NVM_DIR/nvm.sh"

cd "$PROJECT_DIR"
nvm install
nvm use
npm ci

echo
echo "Setup complete."
echo "Run: npm run dev"
