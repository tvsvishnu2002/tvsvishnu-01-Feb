#!/bin/bash

echo "--- 6 ---"

only_directories=$(find . -mindepth 1 -maxdepth 1 -type d | wc -l)

all=$(ls -l | wc -l)
only_files=$(expr $all - $only_directories)
echo "Only Files : $only_files"
