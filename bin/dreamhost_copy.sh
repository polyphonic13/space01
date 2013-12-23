set -e

DREAMHOST_SERVER="phds@dhaka.dreamhost.com"
DREAMHOST_PATH="home/phds/polyworksgames.com"
TO_COPY=$1

if [[ -d $TO_COPY ]]; then
    echo "$TO_COPY is a directory"
	scp -r $TO_COPY phds@dhaka.dreamhost.com:/home/phds/polyworksgames.com/$2
elif [[ -f $TO_COPY ]]; then
    echo "$TO_COPY is a file"
	scp $TO_COPY phds@dhaka.dreamhost.com:/home/phds/polyworksgames.com/$2
else
    echo "$TO_COPY is not valid"
    exit 1
fi

# tar cf - $1 | ssh $DREAMHOST_SERVER "tar xf - -C $DREAMHOST_PATH/"

exit 0
