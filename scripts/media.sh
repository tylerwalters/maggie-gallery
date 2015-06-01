#!/usr/bin/env bash

for file in ../public/media/photos/*.jpg
do
  filename="${file##*/}"
  shortname="${filename%%.*}"

  if [ ! -f "../public/images/$shortname.mob.jpg" ]
  then
    gm convert -resize 320x1000 "$file" "../public/images/$shortname.mob.jpg"
    echo "Created image ../public/images/$shortname.mob.jpg."
  fi

  if [ ! -f "../public/images/$shortname.desk.jpg" ]
  then
    gm convert -resize 800x700 "$file" "../public/images/$shortname.desk.jpg"
    echo "Created image ../public/images/$shortname.desk.jpg."
  fi

  if [ ! -f "../public/images/$shortname.thumb.jpg" ]
  then
    gm convert -resize 100x100 -crop 100x100 "$file" "../public/images/$shortname.thumb.jpg"
    echo "Created image ../public/images/$shortname.thumb.jpg."
  fi

  if [ ! -f "../public/images/$shortname.large.jpg" ]
  then
    gm convert -resize 1100x1100 "$file" "../public/images/$shortname.large.jpg"
    echo "Created image ../public/images/$shortname.large.jpg."
  fi

  if [ ! -f "../public/images/$shortname.bg.jpg" ]
  then
    gm convert -resize 800x800 -blur 40x20 "$file" "../public/images/$shortname.bg.jpg"
    echo "Created image ../public/images/$shortname.bg.jpg."
  fi
done