#!/bin/sh

#find ./ -name "*" -type d > list.txt
find ./ -maxdepth 1 -name "*" -type d >list.txt
find ./*.md -maxdepth 1 -name "*" >>list.txt
find ./*.ipynb -maxdepth 1 -name "*" >>list.txt
find ./*.pdf -maxdepth 1 -name "*" >>list.txt
find ./*.csv -maxdepth 1 -name "*" >>list.txt
find ./*.docx -maxdepth 1 -name "*" >>list.txt
find ./*.pptx -maxdepth 1 -name "*" >>list.txt
