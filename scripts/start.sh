#!/usr/bin/env bash

for file in ../public/media/photos/*.jpg
do
  filename="${file##*/}"
  shortname="${filename%%.*}"
  response=`curl -s https://themaggie.gallery/api/v1/photos/$shortname`

  if [ "$response" == "null" ]
  then
    echo "$shortname is not in the database."
    date=`exiftool -s -s -s -createdate "$file"`
    extension=`exiftool -s -s -s -filetypeextension "$file"`
    dimensions=`exiftool -s -s -s -imagesize "$file"`
    width=`exiftool -s -s -s -imagewidth "$file"`
    height=`exiftool -s -s -s -imageheight "$file"`

    if [ "$width" -gt "$height" ]
    then
      layout="landscape"
    else
      layout="portrait"
    fi

    data="date=$date&description=&dimensions=$dimensions&extension=$extension&filename=$shortname&width=$width&height=$height&layout=$layout&type=photo"
    curl -d "$data" -i "https://themaggie.gallery/api/v1/photos/$shortname"
  fi
done