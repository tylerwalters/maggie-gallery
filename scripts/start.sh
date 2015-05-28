#!/usr/bin/env bash

for file in ../public/media/photos/*.jpg
do
  filename="${file##*/}"
  shortname="${filename%%.*}"
  response=`curl -s https://themaggie.gallery/api/v1/photos/$shortname`

  if [ "$response" == "null" ]
  then
    echo "$shortname is not in database."
  fi
done