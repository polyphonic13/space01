set -e

DEPLOY_DIR="public/deploy/"
GAME_DIR="games/keke"

echo "DEPLOY GAME"

echo "RUNNING GRUNT"
grunt

echo "COPYING DEPLOY FILES"
. ./bin/dreamhost_copy.sh $DEPLOY_DIR $GAME_DIR

echo "GAME DEPLOY COMPLETE!"

exit 0