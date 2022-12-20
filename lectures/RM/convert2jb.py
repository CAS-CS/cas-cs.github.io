#!/bin/python3

import os
import pathlib
import re



rootPath=os.getcwd()
dirList=os.listdir()
outputPath=os.path.join(rootPath,'notes')

pattern='''(<textarea [a-zA-Z=\s\d\w\"]*>)([\|~a-zA-Z\s\w\d\.:,\#\-()/\[\]?=!*%$@&`\\{}^;:'\"+]*)(</textarea>)'''
pat=re.compile(pattern=pattern)
titlePattern="""(### )([a-zA-Z\w\d ]*)([\s]*)(by\n)"""
titleSearch=re.compile(titlePattern)




def createmd(path,filename,content):
    filePath=os.path.join(path,filename)
    with open(filePath,'w') as f:
        f.write(content)

indexFilePath=os.path.join(outputPath,'generatedIndex.md')
with open(indexFilePath,'w') as f:
    f.write("")

indexFile=open(indexFilePath,'a')


for dir in dirList:
    if dir =='notes':
        pass
    
    p=rootPath + dir
    dirPath=os.path.join(rootPath, dir)
    fp=p+'/index.html'
    # print(p,dirPath)
    # print(os.path.isdir(p),os.path.isdir(dirPath))
    if os.path.isdir(dirPath):
        html=''
        with open(dirPath+'/index.html','r') as f:
            print(f'\nDIR: {dir}\n')
        
            html=f.read()
            if len(html)>10:
                try:
                    md= pat.search(html).group(2)
                    # print(md)


                    title=titleSearch.search(md).group(2)
                    chTitle=dir +" "+title
                    print(f"Title: {chTitle}")
                    mdFilename=chTitle+'.md'
                    indexFile.write('\n'+chTitle)
                    createmd(outputPath,mdFilename,md)
                except:
                    pass


        # print(html)

        





