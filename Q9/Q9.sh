#!/bin/bash
echo "--- 9 ---"

echo "Enter Name, Contact, Email Id, Gender "  
read name phone email gender

if [ ! "$name" == "" ]  && [ ! "$phone" == "" ] && [ ! "$email" == "" ];
then 
  if [[ "$gender" == "male" ]] || [[ "$gender" == "female" ]] || [[ "$gender" == "pnsay" ]];
  then
    echo "User Name, Contact, Email Id, Gender : " > all_details_of_user.txt
    echo $name >> all_details_of_user.txt
    echo $phone >> all_details_of_user.txt
    echo $email >> all_details_of_user.txt
    echo $gender >> all_details_of_user.txt
  else
    echo "Gender Not Valid"
    exit 0
  fi
else
  echo "Some of the details missing"
fi