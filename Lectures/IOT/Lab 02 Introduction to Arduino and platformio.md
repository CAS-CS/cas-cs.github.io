# How to install the Arduino Software (IDE) on Windows machines.

## Download the Arduino Software (IDE)


Get the latest version from the [download page](https://www.arduino.cc/en/Main/Software). You can choose between the Installer (.exe) and the Zip packages. We suggest you use the first one that installs directly everything you need to use the Arduino Software (IDE), including the drivers. With the Zip package you need to install the drivers manually. The Zip file is also useful if you want to create a [portable installation](https://arduino.cc/en/Guide/PortableIDE).

When the download finishes, proceed with the installation and please allow the driver installation process when you get a warning from the operating system.
---
![Choose the components to install.](https://docs.arduino.cc/static/33f20406f68c5707052471d78a90a5c6/9cb4e/DRV_Capture1.png)

Choose the components to install.
---
[![Choose the installation directory.](https://docs.arduino.cc/static/12311f50263afe3f12349d932fdeb3f5/9cb4e/DRV_Capture2.png "Choose the installation directory.")](https://docs.arduino.cc/static/12311f50263afe3f12349d932fdeb3f5/9cb4e/DRV_Capture2.png)

Choose the installation directory.
---
[![Installation in progress.](https://docs.arduino.cc/static/02501558f5cba4564376f0bb8adfcf01/ade6e/DRV_Capture3.png "Installation in progress.")](https://docs.arduino.cc/static/02501558f5cba4564376f0bb8adfcf01/ade6e/DRV_Capture3.png)

Installation in progress.
---
The process will extract and install all the required files to execute properly the Arduino Software (IDE)

The text of the Arduino getting started guide is licensed under a [Creative Commons Attribution-ShareAlike 3.0 License](http://creativecommons.org/licenses/by-sa/3.0/). Code samples in the guide are released into the public domain.


---
# Interface

---
## An introductory guide to the Arduino IDE 2.0.

The Arduino IDE 2.0 is an improvement of the classic IDE, with increased performance, improved user interface and many new features, such as [autocompletion](https://docs.arduino.cc/software/ide-v2/tutorials/ide-v2-autocomplete-feature), a [built-in debugger](https://docs.arduino.cc/software/ide-v2/tutorials/ide-v2-debugger) and [syncing sketches with Arduino Cloud](https://docs.arduino.cc/software/ide-v2/tutorials/ide-v2-cloud-sketch-sync).

In this guide, we will cover the basics of the Arduino IDE 2.0, where you will find links to more detailed resources on how to use specific features!

**_You can download the IDE 2.0 from the [Arduino Software page](https://www.arduino.cc/en/software)._**

**_You can also follow the [downloading and installing the Arduino IDE 2.0](https://docs.arduino.cc/software/ide-v2/tutorials/getting-started/ide-v2-downloading-and-installing) tutorial for more detailed guide on how to install the editor._**

---
Requirements
------------

*   [Arduino IDE 2.0](https://www.arduino.cc/en/software) installed.

---
Overview
--------

The Arduino IDE 2.0 features a new sidebar, making the most commonly used tools more accessible.

[![Arduino IDE 2.0](https://docs.arduino.cc/static/e534053def4bc0eb97a3b6ba9cf31853/a6d36/ide-2-overview.png "Arduino IDE 2.0")](https://docs.arduino.cc/static/e534053def4bc0eb97a3b6ba9cf31853/29114/ide-2-overview.png)

---
Arduino IDE 2.0

*   **Verify / Upload** - compile and upload your code to your Arduino Board.
*   **Select Board & Port** - detected Arduino boards automatically show up here, along with the port number.
*   **Sketchbook** - here you will find all of your sketches locally stored on your computer. Additionally, you can sync with the [Arduino Cloud](https://cloud.arduino.cc/), and also obtain your sketches from the online environment.
*   **Boards Manager** - browse through Arduino & third party packages that can be installed. For example, using a MKR WiFi 1010 board requires the
    
        Arduino SAMD Boards
    
    package installed.
*   **Library Manager** - browse through thousands of Arduino libraries, made by Arduino & its community.
*   **Debugger** - test and debug programs in real time.
*   **Search** - search for keywords in your code.
*   **Open Serial Monitor** - opens the Serial Monitor tool, as a new tab in the console.

---

Features
--------

The Arduino IDE 2.0 is a versatile editor with many features. You can install libraries directly, sync your sketches with Arduino Cloud, debug your sketches and much more. In this section, some of the core features are listed, along with a link to a more detailed article.
---
### Sketchbook

[![Arduino Sketchbook.](https://docs.arduino.cc/static/36ffc036e2c2e9fcdec541c603989a81/a6d36/local-sketchbook.png "Arduino Sketchbook.")](https://docs.arduino.cc/static/36ffc036e2c2e9fcdec541c603989a81/c6720/local-sketchbook.png)

Arduino Sketchbook.

Your sketchbook is where your code files are stored. Arduino sketches are saved as    `.ino` files, and must be stored in a folder of the exact name. For example, a sketch named

    `my_sketch.ino` must be stored in a folder named     `my_sketch`. Typically, your sketches are saved in a folder named    `Arduino` in your    `Documents` folder.

To access your sketchbook, click on the **folder icon** located in the sidebar.
---
### Boards Manager

[![Boards Manager.](https://docs.arduino.cc/static/3826a19d73de5886f0415e287f385de9/a6d36/board-manager.png "Boards Manager.")](https://docs.arduino.cc/static/3826a19d73de5886f0415e287f385de9/29114/board-manager.png)
---
Boards Manager.

With the Boards Manager, you can browse and install packages, or "cores" for your boards. A board package is always required when compiling and uploading code for your board.

There are several Arduino board packages available, such as **avr, samd, megaavr** and more.

**_To learn more about the Boards Manager, visit the [Installing new boards tutorial](https://docs.arduino.cc/software/ide-v2/tutorials/ide-v2-board-manager)._**
---
### Library Manager

[![Library Manager.](https://docs.arduino.cc/static/2c770aa439752c4e134a19f64d304605/a6d36/library-manager.png "Library Manager.")](https://docs.arduino.cc/static/2c770aa439752c4e134a19f64d304605/29114/library-manager.png)
---
Library Manager.

With the library manager you can browse and install thousands of libraries. Libraries are extensions of the Arduino API, and makes it easier to for example control a servo motor, read specific sensors, or use a Wi-Fi module.

**_To learn more about the library manager, visit the [Installing libraries tutorial](https://docs.arduino.cc/software/ide-v2/tutorials/ide-v2-installing-a-library)._**
---
### Serial Monitor

[![Serial Monitor.](https://docs.arduino.cc/static/e787bbea82bbd7f55b1c41d1a4f1f323/a6d36/serial-monitor.png "Serial Monitor.")](https://docs.arduino.cc/static/e787bbea82bbd7f55b1c41d1a4f1f323/c6720/serial-monitor.png)

Serial Monitor.

The Serial Monitor is a tool that allows you to view data streaming from your board, via for example the     `Serial.print()` command.

Historically, this tool has been located in a separate window, but is now integrated with the editor. This makes it easy to have multiple instances running at the same time on your computer.

**_To learn more about the Serial Monitor, visit the [Serial Monitor tutorial](https://docs.arduino.cc/software/ide-v2/tutorials/ide-v2-serial-monitor)._**
---
### Serial Plotter

![Serial Plotter.](https://docs.arduino.cc/f155cf7066d171d7b88b80f3c921e7b1/potentiometer-plotter.gif)

The Serial Plotter tool is great for visualizing data using graphs, and to monitor for example peaks in voltage.

You can monitor several variables simultaneously, with options to enable only certain types.

**_To learn more about the Serial Plotter, visit the [Serial Plotter tutorial](https://docs.arduino.cc/software/ide-v2/tutorials/ide-v2-serial-plotter)._**
---
### Debugging

![Debugger tool.](https://docs.arduino.cc/3fb57be2d7a0519e5e06856322874177/playpause.gif)

The debugger tool is used to test and **debug** programs, hence the name. It can be used to navigate through a program's execution in a controlled manner.

**_To learn more about the debugger tool, visit the [Debugging tutorial](https://docs.arduino.cc/software/ide-v2/tutorials/ide-v2-debugger)._**
---
### Autocompletion

[![Autocompletion tool.](https://docs.arduino.cc/static/2d60917d221bc34a369dbb79e18f4f69/a6d36/autocomplete.png "Autocompletion tool.")](https://docs.arduino.cc/static/2d60917d221bc34a369dbb79e18f4f69/c6720/autocomplete.png)

Autocompletion tool.

Autocompletion is a must-have for code editors, and the 2.0 version comes well equipped. When writing code, this is useful to understand more about the elements of the Arduino API.

Note that you always need to select your board for autocompletion to work.

**_To learn more about the Autocompletion tool, visit the [Autocompletion tutorial](https://docs.arduino.cc/software/ide-v2/tutorials/ide-v2-autocomplete-feature)._**
---
### Remote Sketchbook

![Push and pull your sketches.](https://docs.arduino.cc/2fb698acbbf780714a05e443011617ff/remote-sketchbook.gif)

The Remote Sketchbook feature lets you sync sketches from your [Arduino Cloud](https://cloud.arduino.cc/) sketchbook with your local computer. To enable this feature, you will need to login to your Arduino Cloud account.

**_To learn more about the Remote Sketchbook feature, visit the [Synchronizing Sketches tutorial](https://docs.arduino.cc/software/ide-v2/tutorials/ide-v2-cloud-sketch-sync)._**
---
### Firmware & Certificate Uploader

[![Firmware & Certificate Uploader.](https://docs.arduino.cc/static/cb423d13d402efdffbe6dbf8bb4fcf75/a6d36/fw-cert-upload.png "Firmware & Certificate Uploader.")](https://docs.arduino.cc/static/cb423d13d402efdffbe6dbf8bb4fcf75/c6720/fw-cert-upload.png)
---
Firmware & Certificate Uploader.

You can upgrade and downgrade the firmware version for your Wi-Fi boards (with a NINA module), and upload SSL Root Certificates directly in the IDE.

**_To learn more, visit the [Firmware & Certificate Uploader tutorial](https://docs.arduino.cc/software/ide-v2/tutorials/ide-v2-fw-cert-uploader)._**
