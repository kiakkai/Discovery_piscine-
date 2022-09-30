#/bin/bash
if [ $3 ]
then
	echo $1
   	echo $2 
	echo $3

elif [ $2 ]
then
	echo $1
	echo $2
elif [ $1 ]
then
	echo $1
else
	echo "No arguments supplied"
fi
