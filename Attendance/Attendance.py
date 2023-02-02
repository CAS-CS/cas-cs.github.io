import numpy as np
import pandas as pd
import openpyxl as xl
#from openpyxl import workbook work
import flet as ft
from datetime import datetime
import shutil

today = datetime.today().strftime('%Y-%m-%d')
# Read in the data
fileName="Attendance.xlsx"
df = pd.read_excel(fileName)







def read_data(file):
    df = pd.read_excel(file)
    return df

def read_names(file):
    df = pd.read_excel(file)
    
    names=df["Name"].values
    attendance={}
    for name in names:
        #attendance.append({name:dict(present=1)})
        attendance[name]=dict(present=1)
    return attendance


def main(page: ft.Page):
    attendance=read_names(fileName)
    def getAttendanceSequence():
            seq=''
            for i,name in enumerate(attendance):
                val=attendance[name]['present']
                breakSequence='meta,class,total,break'.lower().split(",")
                breakout=False
                for b in breakSequence:
                    if name.lower().__contains__(b):
                        breakout=True
                if breakout==True:
                    break
                if i%4==0:
                    seq += " "
                if val==1:
                    seq += "1"
                else:
                    seq += "0"
            return seq
        
    def serialAttendanceToList(serialAttendance):
        listAllendance=serialAttendance.replace(" ","").replace(",","").replace(";","").replace("\n","").replace("\t","").replace("p","1").replace("a","0")
        listAllendance=list(listAllendance)
        return listAllendance

    def saveAttendanceFn(e,fileName=fileName):
        StatusUI.value="Processing"
        StatusUI.update()
        saveDate=dateUI.value
        print(saveDate)
        serialAttendance=getAttendanceSequence()
        print(serialAttendance)
        saveAttendanceList=serialAttendanceToList(serialAttendance)
        DF=pd.DataFrame({f"{saveDate}":saveAttendanceList})
        DF=DF.reset_index(drop=True)
        df=pd.read_excel(fileName).reset_index(drop=True)
        df = pd.concat([df, DF], ignore_index=False, axis=1)
        df=df.reset_index(drop=True)
               
        StatusUI.value="Creating backup"
        StatusUI.update()
        shutil.copy(fileName,fileName+".bak")
        
        StatusUI.value="Saving"
        StatusUI.update()
        df.to_excel(fileName)
        
        StatusUI.value="Saved"
        StatusUI.update()
        
        StatusUI.value="Ready"
        StatusUI.update()
        
    



    def add_Button(target, label, data=True):
        def toggleAttendance(e):
            
            StatusUI.value="Processing"
            StatusUI.update()
            if B.data["value"] == True:
                B.data["value"] = False
                B.bgcolor = ft.colors.RED_300
            else:
                B.data["value"] = True
                B.bgcolor = ft.colors.GREEN_300
            name=B.data['name']
            if B.data['value']==False:
                present=0
            else:
                present=1
            attendance[name]['present']=present
            print(f"Current State {B.data}")
            print(f"updated attendance {attendance[name]}")
                       
            B.update()
            serialAttendance=getAttendanceSequence()
            serialAttendanceUI.value=serialAttendance
            serialAttendanceUI.update()
            
            StatusUI.value="Ready"
            StatusUI.update()


        B = ft.FloatingActionButton(data=dict(name=label, value=True),
                                    shape=ft.RoundedRectangleBorder(radius=5),
                                    width=250,
                                    mini=True,
                                    bgcolor=ft.colors.GREEN_100,                           
                                    content=ft.Row([ft.Text(label)],alignment="center"),
                                    on_click=toggleAttendance)


        target.controls.append(B)


        

    print("starting main")
    page.title = "AttendanceUpdate"
    page.vertical_alignment = ft.MainAxisAlignment.CENTER
    page.window_height = 600
    page.window_width = 900
    page.scroll = ft.ScrollMode.ADAPTIVE
    MainRow = ft.Row()
    page.add(MainRow)

    MenuCol1 = ft.Column()
    MainRow.controls.append(MenuCol1)

    row1 = ft.Row()
    dateUI = ft.TextField(label="Date", value=today)
    row1.controls.append(dateUI)

    row2 = ft.Row()
    serialAttendanceUI = ft.TextField(label="Attendance")
    row2.controls.append(serialAttendanceUI)
    row3 = ft.Row()
    StatusUI = ft.Text(value="Ready")
    row3.controls.append(StatusUI)
    submitButton=ft.FloatingActionButton(
        content=ft.Row(
            [
                ft.Icon(ft.icons.ADD),
                 ft.Text("Save Attendance")
                ],
            alignment="center", spacing=5
        ),
        bgcolor=ft.colors.BLUE_200,
        shape=ft.RoundedRectangleBorder(radius=5),
        mini=True,
        width=300,
        on_click=saveAttendanceFn
    )

    

    DefaultAttendanceRow=ft.Row()

    MenuCol1.controls.append(row1)
    MenuCol1.controls.append(row2)
    MenuCol1.controls.append(DefaultAttendanceRow)
    MenuCol1.controls.append(submitButton)

##    DefaultAttendanceRow.controls.append([
##        ft.TextButton(ft.Text(value='B1'),on_click=fn),
##        ft.TextButton(ft.Text(value='B1'),on_click=fn),
##        ft.TextButton(ft.Text(value='B1'),on_click=fn)
##        ])
    MenuCol1.controls.append(row3)

    AttendanceToggleColumn2 = ft.Column()
    MainRow.controls.append(AttendanceToggleColumn2)


    for name in attendance:
        val=attendance[name]['present']
        breakSequence='meta,class,total,break'.lower().split(",")
        breakout=False
        for b in breakSequence:
            if name.lower().__contains__(b):
                breakout=True
        if breakout==True:
            break
        if val==1:
            add_Button(AttendanceToggleColumn2, name,True)
        else:
            add_Button(AttendanceToggleColumn2, name,False)

    page.update()


   


def add_attendance(*args):
    if len(args) > 0:
        print(args)
    print("starting add_attendance")
    # df=read_data(file)
    # df.loc[df['Date'] == date, 'Attendance'] = att
    # df.to_excel(file, index=False)
    # output.value = "Attendance Updated"


ft.app(target=main)

ft.FloatingActionButton.style
