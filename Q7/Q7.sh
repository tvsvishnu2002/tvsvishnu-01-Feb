#!/bin/bash

echo "--- 7 ---"

only_directories=$(find . -mindepth 1 -maxdepth 1 -type d | wc -l)

all=$(ls -l | wc -l)
only_files=$(expr $all - $only_directories)


echo "No. of Sub - Directories : $only_directories"

if [ $only_directories -lt 5 ]; 
then
  echo "Less than 5 directories, creating Backflipt directory"
  comm=$(rmdir Backflipt)
  echo $comm
  mkdir Backflipt
elif [ $only_directories -gt 5 ];
then
  echo "Greater than 5 directories, creating Xenovus directory"
  rmdir Xenovus
  mkdir Xenovus
else
  echo "Equal to 5 directories, Directory creation not needed"
fi

