#! /bin/bash
#Shell script for passing arguments through non - interactive method

#Shell Script for Finding area of a rectangle

#Finding no. of arguments passed
$no_of_arguments_passed=$#

if [ $no_of_arguments_passed -eq 0 ];
then
    echo "No Arguments Entered"

#Check if any of the arguments is empty or not
elif [ -z $1 ] || [ -z $2 ];
then
    #Some arguments missing
    echo "Some of the Arguments Missing"

else
    #Arguments are not empty. Displaying the arguments and area of the rectangle.
    echo "Length of the rectangle is $1"
    echo "Breadth of the rectangle is $2"
    echo "Area of the rectangle is $(expr $1 \* $2) "
fi