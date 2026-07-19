#!/bin/bash
cd "$(dirname "$0")"
node scripts/indexnow.mjs
echo ""
echo "Press any key to close..."
read -n 1
