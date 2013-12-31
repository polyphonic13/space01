
# flags:
#
# 	-r	remove previous deploy directory prior to running grunt
#	-g	skip grunt
#	-t	target grunt task (for selective deployment)
#	-c 	commit repo to target git branch
#
set -e

REMOVE_DEPLOY=0
SKIP_GRUNT=0
TARGET_GRUNT_TASK=""
COMMIT_TARGET_BRANCH=""
PUBLIC_DIR="public"
DEPLOY_DIR="deploy"
TEMP_DIR="keke/"
DEST_DIR="games"

function remove_deploy_dir {
	deploy_dir=$PUBLIC_DIR/$DEPLOY_DIR
	if([ -d $deploy_dir ])
		then
		echo "REMOVING PREVIOUS DEPLOY DIRECTORY"
		rm -r $deploy_dir
	else
		echo "$deploy_dir DOES NOT EXIST"
	fi
}

function run_grunt_tasks {
	echo "RUNNING GRUNT, TASK = $TARGET_GRUNT_TASK"
	grunt $TARGET_GRUNT_TASK
	
	make_temp_dir_and_copy_files_to_server
}

function make_temp_dir_and_copy_files_to_server {
	cd $PUBLIC_DIR
	echo "MAKING TEMP DIR"
	cp -r $DEPLOY_DIR $TEMP_DIR

	cd ../
	echo "COPYING DEPLOY FILES"

	dir_to_copy="$PUBLIC_DIR/$TEMP_DIR"
	. ./bin/dreamhost_copy.sh $dir_to_copy $DEST_DIR

	echo "REMOVING TEMP DIR"
	rm -r $PUBLIC_DIR/$TEMP_DIR
}

function commit_to_target_git_branch {
	echo "PLEASE ENTER GIT COMMIT MESSAGE:" 
	read msg
	
	git add --all
	git commit -am "${msg}"
	git push origin $COMMIT_TARGET_BRANCH
	echo "PUSHED GIT COMMIT TO $COMMIT_TARGET_BRANCH"
}

while getopts "c:t:rg" opt; do
	case $opt in
		c)
			COMMIT_TARGET_BRANCH=$OPTARG
			;;
	    t)
			TARGET_GRUNT_TASK=$OPTARG
	    	;;
		r)
			REMOVE_DEPLOY=1
			;;
		g) 
			SKIP_GRUNT=1
			;;
	    \?)
	    	printf "\nERROR: INVALID OPTION: -$OPTARG\n" >&2
	    	exit 1
	    	;;
	    :)
	    	printf "\nERROR: OPTION -$OPTARG REQUIRES AN ARGUMENT\n" >&2
	    	exit 1
	    	;;
  esac
done

if([ "$REMOVE_DEPLOY" = 1 -a "$SKIP_GRUNT" = 1 ])
	then 
	# default to deployment of all tags types if no flag(s) specified: 
	echo "ERROR: CAN NOT REMOVE PREVIOUS DEPLOY DIRECTORY AND SKIP GRUNT"
	exit 1
fi

echo "DEPLOYING GAME"


if([ "$REMOVE_DEPLOY" = 1 ])
	then 
	remove_deploy_dir
fi

if([ "$SKIP_GRUNT" = 0 ])
	then 
	run_grunt_tasks
else
	make_temp_dir_and_copy_files_to_server
fi

if([ "$COMMIT_TARGET_BRANCH" != "" ])
	then
	commit_to_target_git_branch
fi

echo "GAME DEPLOY COMPLETE!"

exit 0