#!/bin/bash


echo "--- 4 ---"

echo "Enter directory name to check"
read direc

if [ -d "$direc" ]; then
  echo "Directory found. Deleting it"
  comm=$(rmdir $direc)
  echo $comm
else
  echo "Given directory not found"
fi
