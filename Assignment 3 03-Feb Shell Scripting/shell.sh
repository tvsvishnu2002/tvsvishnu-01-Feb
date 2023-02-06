#!/bin/bash

#Initially, find line numbers of the { bracket and store them in a file starting_numbers.txt

grep -n '^{' log_file.log >> starting_numbers.txt

#Similarly, store the line numbers of } bracker in a file ending_numbers.txt

grep -n '^}' log_file.log >> ending_numbers.txt

#Replacing unwanted information in both the files
sed -i 's/:}//g' starting_numbers.txt

sed -i 's/:}//g' ending_numbers.txt

#Merge both files alternately to get one single file with alternating starting, ending line numbers

awk '{print; getline < "ending_numbers.txt"; print}' starting_numbers.txt >> final_numbers.txt

input="final_numbers.txt"
i=0
j=0
while IFS= read -r line
do
  echo $line
  
  rem=$(($i%2))
  if [ $rem -eq 0 ];
  then 
    
    req_line=$(expr $line + 1)
    line_content=$(head -$req_line log_file.log | tail +$req_line)
    line_content_2=$(head -$line log_file.log | tail +$line)
    if [[ $line_content=="level: 'verbose'," ]];
    then 
        j=1
    else
        j=0
    fi
  else
    if [ $j -eq 1 ];
    then 
        line_content_3=$(head -$line log_file.log | tail +$line)
        append_line=$(head -$req_line log_file.log | tail +$req_line)
        echo $append_line >> final_answer.txt
    fi
  
  fi
  ((i++))
done < "$input"