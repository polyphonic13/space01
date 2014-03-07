set -e

USER="phds"
DREAMHOST_SERVER="dhaka.dreamhost.com"
SSH_PATH="home/phds"
POLYWORKS_DIR="polyworksgames.com"
TO_COPY=$1
DEST_DIR=$2

# ssh -o "StrictHostKeyChecking no" $USER@$DREAMHOST_SERVER << ENDHERE
# 	cd $POLYWORKS_DIR
# 	echo "CONTENTS OF POLWORKS DIR: "
# 	ls -l
# 	echo "TESTING FOR EXISTENCE OF $DEST_DIR"
# 	# if [ ! -d "$DEST_DIR" ]; then
# 	#   # Control will enter here if $DIRECTORY doesn't exist.
# 	# 	echo "MAKING NEW DIR $DEST_DIR"
# 	# 	mkdir $DEST_DIR
# 	# else
# 	# 	echo "$DEST_DIR EXISTS. REMOVING THEN RE-ADDING"
# 	# 	
# 	# fi	
# 	if [ -d "$DEST_DIR" ]; then
# 		echo "REMOVING EXISTING $DEST_DIR"
# 		rm -r $DEST_DIR
# 	fi
# 	mkdir $DEST_DIR
# 	exit
# 	
# ENDHERE
echo "SCP'ING CONTENTS OF [ $TO_COPY ] TO [ $USER@$DREAMHOST_SERVER:/$SSH_PATH/$POLYWORKS_DIR/$DEST_DIR/ ]"
cd $TO_COPY

scp -r . $USER@$DREAMHOST_SERVER:/$SSH_PATH/$POLYWORKS_DIR/$DEST_DIR/
# for file in **/*
# do
# 	if [[ -d "$file" ]]; then
# 		echo "$file IS A DIRECTORY, USING SCP -R"
# 		scp -r "$file" $USER@$DREAMHOST_SERVER:/$SSH_PATH/$POLYWORKS_DIR/$DEST_DIR/
# 	elif [[ -f "$file" ]]; then
# 		echo "$file IS A FILE"
# 		scp "$file" $USER@$DREAMHOST_SERVER:/$SSH_PATH/$POLYWORKS_DIR/$DEST_DIR/
# 	else 
# 		echo "$file IS NOT VALID"
# 	fi
# done 

# if [[ -d $TO_COPY ]]; then
#     echo "$TO_COPY is a directory"
# 	scp -r $TO_COPY $USER@$DREAMHOST_SERVER:/$SSH_PATH/$POLYWORKS_DIR/$DEST_DIR/
# elif [[ -f $TO_COPY ]]; then
#     echo "$TO_COPY is a file"
# 	scp $TO_COPY $USER@$DREAMHOST_SERVER:/$SSH_PATH/$POLYWORKS_DIR/$DEST_DIR/
# else
#     echo "$TO_COPY is not valid"
#     exit 1
# fi

echo "SCP COPY COMPLETE"
# tar cf - $1 | ssh $DREAMHOST_SERVER "tar xf - -C $DREAMHOST_PATH/"

# exit 0
