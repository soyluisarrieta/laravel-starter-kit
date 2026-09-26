#!/bin/bash
#
# Server-pull deploy for Hostinger shared hosting.
#
# GitHub Actions builds the assets and force-pushes them to the `production`
# branch (code + compiled public/build). This script, started every minute by
# the scheduler (`deploy:pull`), detects when `production` moved and updates the
# live app. The server reaches out to GitHub (outbound), so Hostinger's firewall
# on GitHub's runners never applies.
#
# By hand, from the server:
#   bash ~/domains/<dominio>/app/scripts/deploy-pull.sh

set -euo pipefail

PHP="${PHP:-/opt/alt/php84/usr/bin/php}"
COMPOSER="${COMPOSER:-$HOME/composer.phar}"
BRANCH=production

APP="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$APP"

# Avoid overlapping runs while a previous deploy is still installing/migrating.
# The lock lives in the app, so other apps on the account deploy apart.
exec 9>"$APP/storage/logs/deploy.lock"
flock -n 9 || exit 0

git fetch origin "$BRANCH" --quiet

LOCAL="$(git rev-parse HEAD)"
REMOTE="$(git rev-parse "origin/$BRANCH")"
[ "$LOCAL" = "$REMOTE" ] && exit 0

echo "[$(date '+%F %T')] deploying $LOCAL -> $REMOTE"

# public/build is gitignored locally but tracked on `production`; drop the
# untracked copy so the hard reset can check the committed assets in cleanly.
rm -rf public/build
git reset --hard "origin/$BRANCH"

"$PHP" "$COMPOSER" install --no-dev --optimize-autoloader --no-interaction --no-progress
"$PHP" artisan migrate --force
"$PHP" artisan db:seed --class=Database\\Seeders\\ProductionSeeder --force
"$PHP" artisan optimize

echo "[$(date '+%F %T')] done"
