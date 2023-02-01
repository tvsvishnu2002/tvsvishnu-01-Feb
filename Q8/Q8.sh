#!/bin/bash
echo "Echo Enter a Directory Name"
read direc 
case $direc in 
    [dD][eE][sS])
        ls /mnt/c/Users/tvsvi/Desktop
        ;;
    [dD][oO][cC])
        ls /mnt/c/Users/tvsvi/Documents
        ;;
    [dD][oO][wW])
        ls /mnt/c/Users/tvsvi/Downloads
esac

