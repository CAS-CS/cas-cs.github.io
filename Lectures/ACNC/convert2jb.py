#!/bin/python3

import os
import stat
import pathlib
import re


rootPath = os.getcwd()
dirList = os.listdir()
outputPath = os.path.join(rootPath, 'notes')

os.makedirs("notes", exist_ok=True)

# pattern='''(<textarea [a-zA-Z=\s\d\w\"]*>)([\|~a-zA-Z\s\w\d\.:,\#\-()/\[\]?=!*%$@&`\\{}^;:'\"+]*)(</textarea>)'''
# pattern = """(<textarea [^>]*>)([.\n\s\w:\-,#()[\]/!@`=*~'\"⋅+<>;^|$&]*)((</textarea>))"""
pattern = "(<textarea [^>]*>)(.(?!</textarea>))*"
pat = re.compile(pattern=pattern, flags=re.M | re.I | re.S)
titlePattern = """(L\d{0,2}[^\n]+)"""
titleSearch = re.compile(titlePattern)


def createmd(path, filename, content):
    #print(f"processing {filename}")
    #print(content[0:400])
    filePath = os.path.join(path, filename + '.md')
    
    mainPattern = r"""(Prateek Raj Gautam|Gautam.*-{3})(.*)(\# References|Do send feedback)"""
    mainp = re.compile(mainPattern, flags=re.I | re.M | re.S)
    ## To remove sections
    # mainContent = mainp.search(content).group(2).replace("---", "")
    mainContent = mainp.search(content).group(2)
    #mainContent = mainp.search(mainContent).group(2)

    with open(filePath, 'w') as f:
        f.write(mainContent)


YML_IndexFilePath = os.path.join(outputPath, 'generatedIndex.yml')
with open(YML_IndexFilePath, 'w') as f:
    f.write("")

# indexFile = open(YML_IndexFilePath, 'a')


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
                #print(html[50:100])
                if len(html) > 10:
                    try:
                        md = pat.search(html).group(0)
                        # print(md)
                        title=""
                        title = titleSearch.search(md).group(0)
                        #print(title)
                        chTitle = dir + " "+title
                        #print(f"Title: {chTitle}")

                        
                        mdFilename = chTitle.replace(" ", "-")
                        print(mdFilename)
                        with open(YML_IndexFilePath, 'a') as fyml:
                            fyml.write(f"\n- file: {mdFilename}")
                        createmd(outputPath, mdFilename, md)
                    except:
                        print("err")
                        pass

            # print(html)


bashScriptToGenereteDirList="""#!/bin/bash

#find ./ -name "*" -type d > list.txt
find ./ -maxdepth 1 -name "*" -type d >list.txt
find ./*.md -maxdepth 1 -name "*" >>list.txt
find ./*.ipynb -maxdepth 1 -name "*" >>list.txt"""

os.chdir(outputPath)
bashFileName="generateDir_Md_ipynbList.sh"

try:
    os.chmod(bashFileName,0o777)
except:
    pass
with open(os.path.join(outputPath,bashFileName), 'w') as bashFile:
        bashFile.write(bashScriptToGenereteDirList)


#os.chmod(bashFileName,Oo777)
os.chmod(bashFileName,0o777)

os.system(os.path.join(outputPath,bashFileName))
