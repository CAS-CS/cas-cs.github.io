#!/bin/python3

import os
import pathlib
import re


rootPath = os.getcwd()
dirList = os.listdir()
outputPath = os.path.join(rootPath, 'notes')

# pattern='''(<textarea [a-zA-Z=\s\d\w\"]*>)([\|~a-zA-Z\s\w\d\.:,\#\-()/\[\]?=!*%$@&`\\{}^;:'\"+]*)(</textarea>)'''
# pattern = """(<textarea [^>]*>)([.\n\s\w:\-,#()[\]/!@`=*~'\"⋅+<>;^|$&]*)((</textarea>))"""
pattern = "(<textarea [^>]*>)(.(?!</textarea>))*"
pat = re.compile(pattern=pattern, flags=re.M | re.I | re.S)
titlePattern = """(### )([a-zA-Z\w\d ]*)([\s]*)(by\n)"""
titleSearch = re.compile(titlePattern)


def createmd(path, filename, content):
    filePath = os.path.join(path, filename)

    mainPattern = r"""(Dr\. Prateek Raj Gautam|Gautam)(.*)(\# References|Do send feedback)"""
    mainp = re.compile(mainPattern, flags=re.I | re.M | re.S)
    mainContent = mainp.search(content).group(2).replace("---", "")

    with open(filePath, 'w') as f:
        f.write(mainContent)


indexFilePath = os.path.join(outputPath, 'generatedIndex.yml')
with open(indexFilePath, 'w') as f:
    f.write("")

# indexFile = open(indexFilePath, 'a')


for dir in dirList:
    if dir == 'notes':
        pass
    else:
        p = rootPath + dir
        dirPath = os.path.join(rootPath, dir)
        fp = p+'/index.html'
        # print(p,dirPath)
        # print(os.path.isdir(p),os.path.isdir(dirPath))
        if os.path.isdir(dirPath):
            html = ''
            with open(dirPath+'/index.html', 'r') as f:
                print(f'\nDIR: {dir}')

                html = f.read()
                if len(html) > 10:
                    try:
                        md = pat.search(html).group(0)
                        # print(md)

                        title = titleSearch.search(md).group(2)
                        chTitle = dir + " "+title
                        print(f"Title: {chTitle}")
                        mdFilename = chTitle.replace(" ", "-")+'.md'
                        with open(indexFilePath, 'a') as f:
                            f.write(f"\n- file: {mdFilename}")
                        createmd(outputPath, mdFilename, md)
                    except:
                        print("err")
                        pass

            # print(html)
