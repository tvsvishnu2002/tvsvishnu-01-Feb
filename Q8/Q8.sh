#!/bin/bash
no_of_arguments_passed=$#
if [ $no_of_arguments_passed -eq 0 ];
then
echo "No argument passed"
elif [ $no_of_arguments_passed -gt 1 ];
then
echo "More than 1 argument passed"
else
case $1 in 
    [dD][eE][sS])
        ls /mnt/c/Users/tvsvi/Desktop
        ;;
    [dD][oO][cC])
        ls /mnt/c/Users/tvsvi/Documents
        ;;
    [dD][oO][wW])
        ls /mnt/c/Users/tvsvi/Downloads
        ;;
    *)
        echo "Enter Doc, Des or Dow"
esac

fi