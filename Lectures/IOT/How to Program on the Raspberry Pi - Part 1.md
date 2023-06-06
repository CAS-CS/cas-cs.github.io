Many (absolute) beginners get a Raspberry Pi as a gift, but have often little or no programming knowledge. Therefore I would like to clear that hurdle in this series of tutorials and encourage learning to program with the Raspberry Pi. The big advantage is that we can also write a hardware-related code, which allows us to use the Raspberry Pi’s GPIO pins.

We use Python as the programming language, since it is one of the easiest languages to learn for beginners and there are also usually the most references and examples available.

Required Hardware Parts
-----------------------

A note in advance: The tutorial series is intended to make it easier to get started with programming on the Raspberry Pi, but should not be taken as an independent course. A book is very useful for deepening your knowledge and looking things up. In particular, I can recommend one of these two books for learning:

*   pure Python basics: [Python Crash Course](https://www.amazon.com/Python-Crash-Course-Eric-Matthes-ebook/dp/B07J4521M3/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=python+beginner&qid=1588433623&tag=754u-20&sr=8-1)\* (Eric Matthes )
*   [Programming the Raspberry Pi: Getting Started with Python](https://www.amazon.com/Programming-Raspberry-Pi-Second-Getting-ebook/dp/B015K0URT8/ref=sr_1_1?dchild=1&keywords=python+raspberry+pi&qid=1588433909&tag=754u-20&sr=8-1) \* (Simon Monk)

### Hardware

To get started, we need the following hardware parts:

*   [Raspberry Pi](https://www.amazon.com/s?k=Raspberry+Pi&ref=nb_sb_noss&tag=754u-20)\* (the model doesn’t matter – I don’t recommend Model Zero)
*   [micro SD card](https://www.amazon.com/s?k=micro+SD+16+GB&ref=nb_sb_noss&tag=754u-20)\* (min. 8 GB)
*   [Keyboard](https://www.amazon.com/s?k=usb+keyboard&crid=DMX4MT13HCUV&sprefix=USB+KEY%2Caps%2C264&ref=nb_sb_ss_i_1_7&tag=754u-20)\*
*   [Mouse](https://www.amazon.com/s?k=usb+mouse&ref=nb_sb_noss_2&tag=754u-20)\*
*   [HDMI cable](https://www.amazon.com/s?k=hdmi+cable&ref=nb_sb_noss_1&tag=754u-20)\*
*   [USB power adapter](https://www.amazon.com/s?k=USB+power+adapter&ref=nb_sb_noss&tag=754u-20)\* + [micro USB cable](https://www.amazon.com/s?k=Micro+USB+cable&ref=nb_sb_noss_2&tag=754u-20)\*
*   [WLAN adapter](https://www.amazon.com/s?k=usb+wlan+adapter&crid=1WFLAC86R6IOM&sprefix=usb+WLAN+adapter%2Caps%2C259&ref=nb_sb_ss_i_1_16&tag=754u-20)\* if necessary

Preparation
-----------

Before we start programming, we need to take a few steps to set up the environment. First of all, it is necessary that the Raspberry Pi gets an operating system. The Raspberry Pi Foundation provides the so-called [Raspbian OS](https://www.raspberrypi.org/downloads/raspbian/), which we need to download. Then we transfer the included file to the micro SD card. You can find detailed instructions here:

[Transfer Raspberry Pi Raspbian OS to an SD Card (Windows)](https://tutorials-raspberrypi.com/transfer-raspberry-pi-raspbian-os-to-an-sd-card-windows/)

After the image is on the SD card, we insert it into the Raspberry Pi. As soon as the keyboard, mouse and display are connected via HDMI cable, we can start it. This is done simply by connecting the micro USB cable and connecting it to power. The display should now light up and a few lines of code should appear on a black background.

Shortly after, the startup process is complete and we see the desktop:

![Raspberry Pi Start Screen](https://tutorials-raspberrypi.com/ezoimgfmt/tutorials-raspberrypi.de/wp-content/uploads/Raspberry-Pi-Startscreen-600x450.png?ezimgfmt=rs:600x450/rscb1/ng:webp/ngcb1)

We now open the Python console, in which we can immediately enter program code. Open this by firstly clicking the Raspberry Pi symbol in the top left and then under Programming on “mu”. If you don’t see this option, you can either install it (Preferences -> Recommended Software) or also use the Thonny Python IDE.

![Raspberry Pi Start Menu Programming Python](https://tutorials-raspberrypi.com/wp-content/uploads/Raspberry-Pi-Start-Menu-Programming-Python.png?ezimgfmt=rs:646x425/rscb1/ng:webp/ngcb1)

First, you are asked for the Editor Mode. Select Python 3.

![Python Editor Mode](https://tutorials-raspberrypi.com/wp-content/uploads/Python-editor-Mode.jpg)

The Python console now opens and it looks like this. We will write our code in this:

![Raspberry Pi Start Python IDLE](https://tutorials-raspberrypi.com/wp-content/uploads/Raspberry-Pi-Start-Python-IDLE.jpg)

Click on “REPL” on the Top bar, so that we can see our output immediately.

If you are wondering why we took **Python 3** and whether you can use Python 2, the answer is that both are possible. There are a few differences between those two versions, but they do not matter to get started. The code we write is executable on both versions.  
If you are interested in the differences in detail, you can read [this article](https://wiki.python.org/moin/Python2orPython3).

Hello World Plus
----------------

Enough words, we’re starting! In the console we want to start with a typical “Hello World” application. All you need to do is type in the following line and send it with Enter:

```
print("Hello World")
```

With that we get our first output:

![](https://tutorials-raspberrypi.com/wp-content/uploads/helloworld-python.jpg)

`Print` is the function that we call here. Within the brackets, we give parameters which the function needs. Since it is a character string, we have to put also the quotation marks at the beginning and end, since other words are interpreted as variables, which we will come to in a moment.

Now it is quite boring to just print out a sentence. Therefore, we now create a so-called variable. This is sort of a placeholder that can take on different values and can be addressed via its name. Would you like an example? Here:

```
number = 7
print(number)
```

The advantage of variables is that we can easily overwrite their value. In the next example we create two variables and add the first to the second (and save the result in the second variable – so we overwrite it):

```
number_1 = 7
number_2 = 3.5
number_2 = number_1 + number_2
print(number_2)
```

But be careful: In addition to (integer) numbers, variables can also e.g. contain strings. An addition is not possible here and would lead to an error.

By the way: The variable can be named as you wish, but must not begin with a number. Also, no special characters (apart from the underscore) may be used. There are also no two variables that can have the same name.

#### Comments

Another useful feature is comments that explain the code in case someone else or you look at the code again later. Such comments are available in every programming language and can also be used to “mute” parts of the code so that they are not executed. That process is called commenting out.

In Python, comments begin with a hashtag (#). The rest of the line is then no longer executed. Here’s an example:

```
# This is a comment
print("Line1") # another comment
#print("Line2")
print("Line 3")
```

As you can see, only line 1 and line 3 are output because we commented out the middle command.

First Queries
-------------

As already said, variables can have different values. So that we can query them again, there is also a possibility for this. We can do this with `if .. else`. Here is an example:

```
number = 7
# assuming an unknown number is added here
if number == 10:
    print("number = 10")
elif number < 10:
    print("less than 10")
else:
    print("greather than 10")
```

There is a lot to consider here:

1.  At the end of the `if`, `elif` or `else` line there must be a colon because we are saying that the condition has ended. We can also link several conditions.
2.  For queries, the following options exist `==` (equality), `<` (smaller), `>` (larger), `<=` (smaller/equal), `>=` (larger/equal). When checking for equality, the simple equal sign must not be used, since this only assigns variables.
3.  The commands that are executed if the condition is true must be indented with spaces. Everything must be on the same level or indented equally. The default is 4 spaces to indent.

I will now show an extended example so that the syntax is a bit easier to understand (fictitious person with a date of birth on July 30, 1980):

```
birth_day = 30
birth_month = 7
birth_year = 1980
output = "" # empty string

if birth_year < (2017 - 18):
    # user is old enough
    output = "age > 18"
else:
    if (birth_month >= 6) and (birth_month <= 9):
        output = "child has birthday in the summer"
    else:
        # here e.g. there is another command
        output = "not a summer child"
print(output)
```

As you can see, it is very easy to nest queries. It is only important that you always keep an eye on the indentations, otherwise, you will get an error (or the program will be executed incorrectly).

Loops
-----

Now we go one step further and look at so-called loops. Basically, these represent simple repetitions, whereby after each repetition (also called iteration) it is checked whether the specified condition is (still) true.

The two types of loops are called [ForLoop](https://wiki.python.org/moin/ForLoop) and [WhileLoop](https://wiki.python.org/moin/WhileLoop). The while loop initially checks whether the query is true. Here’s an example:

```
x = 0
while x < 5:
    print(x)
    x += 1
```

In each repetition, it is initially checked whether x is less than 5 and if so, the indented part is executed. We output the number once and then add 1 to x. The numbers 0 to 4 are thus output.

In contrast, the structure of the for loop is a little different. In Python, its definition is `for .. in .. :` where the first parameter is a variable (which is available within the loop) and the second parameter is e.g. a list. We have the following options for outputting the numbers from 0 to 4:

```
# first alternative
for number in range(5): # range(x) outputs the numbers from 0 to x-1
     print (number)


# second alternative
for number in [0,1,2,3,4]:
    print (number)
```

As you can see, a for loop is better for easy counting.

Outsourcing the Code in Files
-----------------------------

As a final step of this tutorial, I want to show you how to write the code into a file and execute it. Since you usually write whole blocks of code, you also want to have them executed sequentially. The so-called compiler, which translates the readable (human-understandable) code into machine code, can execute individual commands or entire files.

Click on the folder symbol in the navigation bar and right-click on the free space. Under “Create New”> “Empty File” you can create a new file:

![Program RaspberryPi Entry Folder File](https://tutorials-raspberrypi.com/ezoimgfmt/tutorials-raspberrypi.de/wp-content/uploads/RaspberryPi-programmieren-Einstieg-Folder-Datei-600x450.png)

Name them e.g. “program1.py” (without quotes). Don’t forget the “.py” extension, so it is clear that it is a Python script.

You can open the created file with a double click. Here you can write your code and save it via the menu. I pasted the code from above:

![Raspberry Pi Programming Learning Python File](https://tutorials-raspberrypi.com/wp-content/uploads/Raspberry-Pi-Programming-Learning-Python-File.jpg)

After saving, we can already start the file. This happens via the terminal/console. To do this, click the icon to the right of the folder in the taskbar. A black window opens in which you can enter something.

Here you write the following (send with Enter):

```
python3 program1.py
```

The program will now run from start to finish. All queries are executed until the program has reached the end where there are no further commands. Then it terminates.

![Raspberry Pi Programming Learning Python Shell Execute](https://tutorials-raspberrypi.com/ezoimgfmt/tutorials-raspberrypi.de/wp-content/uploads/Raspberry-Pi-Programmieren-Lernen-python-Shell-execute-600x450.png)

This was it with the first part of my little overview to get started with programming with the Raspberry Pi. In the next part, we will focus on reading and writing the GPIO pins, which we can use to control electronic components such as LEDs and read buttons.

PS: No Python code can be seen in the entry picture since it should only be a symbol picture 🙂

PPS: Comments/suggestions (especially from beginners) are welcome so that I can adapt the other parts accordingly.