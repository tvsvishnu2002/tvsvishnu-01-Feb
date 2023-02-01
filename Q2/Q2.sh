#!/bin/bash


echo "--- 2 ---"
echo "Enter directory name to check"
read direc

if [ -d "$direc" ]; then
  echo "Given directory exists"
else
  echo "Given directory not found"
  mkdir $direc
fi
