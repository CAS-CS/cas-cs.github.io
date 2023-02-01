import numpy as np
import pandas as pd
import flet as ft
from datetime import datetime

today = datetime.today().strftime('%Y-%m-%d')
# Read in the data


def read_data(file):
    df = pd.read_excel(file)
    return df

def read_names(file):
    df = pd.read_excel(file)
    names=df["Name"].values
    attendance=[]
    for name in names:
        attendance.append({name:dict(present=1)})
    return attendance

fileName="Attendance.xlsx"
attendance=[]
attendance=read_names(fileName)

print(attendance)

def main(page: ft.Page):
    # file = "Attendance.xlsx"
    # df=read_data(file)
    print("starting main")
    page.title = "AttendanceUpdate"
    page.vertical_alignment = ft.MainAxisAlignment.CENTER
    page.window_height = 600
    page.window_width = 900
    MainRow = ft.Row()
    page.add(MainRow)

    col1 = ft.Column()
    MainRow.controls.append(col1)

    row1 = ft.Row()
    dateUI = ft.TextField(label="Date", value=today)
    row1.controls.append(dateUI)

    row2 = ft.Row()
    attUI = ft.TextField(label="Attendance")
    row2.controls.append(attUI)
    row3 = ft.Row()
    outputUI = ft.Text(value="Output")
    row3.controls.append(outputUI)

    col1.controls.append(row1)
    col1.controls.append(row2)
    col1.controls.append(row3)

    col2 = ft.Column()
    MainRow.controls.append(col2)

#    names = ["John", "Jane", "Joe", "Jill"]
#    values = range(0, len(names))*True
#    print(values)
    #print(attendance)
    for key,val in enumerate(attendance):
        name=list(val.keys())[0]
        present=val[name]['present']
        add_Button(col2, name)

    page.update()




def add_Button(target, label, data=True):
    def toggleAttendance(e):
        if B.data["value"] == True:
            print(B.data)
            B.data["value"] = False
            B.bgcolor = ft.colors.RED_300
        else:
            print(B.data)
            B.data["value"] = True
            B.bgcolor = ft.colors.GREEN_300

        attendance
        B.update()


    B = ft.FloatingActionButton(data=dict(name=label, value=True),
                                shape=ft.RoundedRectangleBorder(radius=5),
                                width=300,
                                mini=True,
                                bgcolor=ft.colors.GREEN_300,
                                content=ft.Row([ft.Text(label)]), on_click=toggleAttendance)
    target.controls.append(B)


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
