set -e

# DEPLOY_DIR="public/deploy/"
PUBLIC_DIR="public"
DEPLOY_DIR="deploy"
TEMP_DIR="keke/"
DEST_DIR="games"

echo "DEPLOY GAME"

echo "RUNNING GRUNT"
grunt

cd $PUBLIC_DIR
echo "MAKING TEMP DIR"
cp -r $DEPLOY_DIR $TEMP_DIR

cd ../
echo "COPYING DEPLOY FILES"

dir_to_copy="$PUBLIC_DIR/$TEMP_DIR"
. ./bin/dreamhost_copy.sh $dir_to_copy $DEST_DIR

echo "REMOVING TEMP DIR"
rm -r $PUBLIC_DIR/$TEMP_DIR

echo "GAME DEPLOY COMPLETE!"

exit 0