#!/bin/bash

#find ./ -name "*" -type d > list.txt
find ./ -maxdepth 1 -name "*" -type d >list.txt
find ./*.md -maxdepth 1 -name "*" >>list.txt
find ./*.ipynb -maxdepth 1 -name "*" >>list.txt