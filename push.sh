#!/bin/sh
#find ./lectures -name "*" -type d > list.txt
./generateDirectoryList
clear
echo git add .
git add .
git status
echo
read -p "Enter commit message:" commit
#echo $commit
echo git commit
git commit -m "$commit"
echo git push
git push
echo completed
