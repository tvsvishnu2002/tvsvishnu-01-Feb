#!/bin/bash

#Removing all previous text files
rm *.txt

#Taking input from user 

echo "Enter a Level Name (Debug, Info, Verbose )"
read required_level 

#Initially, find line numbers of the { bracket and store them in a file starting_numbers.txt

grep -n '^{' log_file.log >> starting_numbers.txt

#Similarly, store the line numbers of } bracker in a file ending_numbers.txt

grep -n '^}' log_file.log >> ending_numbers.txt

#Replacing unwanted information in both the files
sed -i 's/:}//g' starting_numbers.txt

sed -i 's/:}//g' ending_numbers.txt

#Merge both files alternately to get one single file with alternating starting, ending line numbers

awk '{print; getline < "ending_numbers.txt"; print}' starting_numbers.txt >> final_numbers.txt

number_of_lines=`wc --lines < ending_numbers.txt`

i=1
closing=0

#Read Data from log file
while (($i<=$number_of_lines))
do
  opening=`expr $closing + 1`
  #Check the i th line
  closing=$( head -$i ending_numbers.txt | tail +$i )
  ((i++))

  #Extract one log level
  first=$( head -$closing log_file.log | tail +$opening )

  #Append all corresponding lines to it
  for j in $required_level
    do
    echo  $first | grep $j >> $j.txt
  done

done
