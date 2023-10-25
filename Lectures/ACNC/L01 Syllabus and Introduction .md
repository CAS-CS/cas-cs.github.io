# ADVANCED COMPUTER NETWORKS AND COMMUNICATION

### MCSC-103

Lectures: 3

Practical: 2

Credits: 4

[Dr. Prateek Raj Gautam](mailto:prateek@cas.res.in) 
Assitant Professor CSED


---

# Course Outlines

1. Telecommunications history;
2. Telecommunications media (conducted and radiated);
3. Transmission characteristics (including an introduction to coding and modulation techniques);
4. Error characteristics, detection, and correction;
5. Local and wide area networking applications, hardware, and software; 
6. The OSI model;
7. Industry standards;
8. Topologies;
9. Protocols;
10. Internetworking devices;
11. Communications management;
12. Security and recovery;
13. Information system applications; and
14. The selection of telecommunications and networking systems communication security, 

---

# Other important topics

* Digital signatures, authentication protocols. 
* WLAN, Mobile IP. SNMP (V1 and V2)-Organizational model-System Overview, 
* The information model, communication model-Functional model, 
* SNMP proxy server. 
* Broadband networks and services, ATM Technology, Configuration management, Fault management, performance management. 
* Network Management Tools, Network Statistics Measurement Systems
* WebBased Management, XML Based Network Management

---

## Text Books

1. Computer Networking: A Top-Down Approach, James F. Kuros and Keith W. Ross, Pearson, 6th Edition,2012
2. A Practical Guide to Advanced Networking , Jeffrey S. Beasley and Piyasat Nilkaew, Pearson, 3rd Edition,2012
3. Computer Networks , Andrew S. Tanenbaum, David J. Wetherall, Prentice, 5th Edition,2010

## Reference Book

1. Data Communication and Computer Networks, by Prakash C.Gupta, PHI.
2. Networking Ali-in-one Desk Reference by Doug Lowe, Wiley Dreamtech
3. Computer Network by Godbole, Tata McGraw Hill.
4. Computer Networking, by Stanford H. Rowe, Marsha L. Schu

---

# LAB Sessions

1. Programming protocol USING C/C++, PYTHON, and MATLAB and practicing theory.
2. Cisco Packet Tracer / GNS3  / wireshark



---

# What is communication ?

## Difference between communication and Data Communication or Computer Network Communication

---



# Components of Data Communication

##### Message :

A message is a piece of information that is to be transmitted from one person to another. It could be a text file, an audio file, a video file, etc. In our case its commonly in binary format.

##### Sender :

It is simply a device that sends data messages. It can be a computer, mobile, telephone, laptop, video camera, or workstation, etc.

##### Receiver :

It is a device that receives messages. It can be a computer, telephone mobile, workstation, etc.

##### Transmission Medium / Communication Channels :

Communication channels are the medium that connect two or more workstations. Workstations can be connected by either wired media or wireless media.

##### Protocol (Set of rules) :

When someone sends the data (The sender), it should be understandable to the receiver also otherwise it is meaningless. 

---


# Two Important Protocols in Computer Networks (CN)

### TCP (Transmission Control Protocol):

1. Dividing messages into packets on the source computer and reassembling the received packet at the destination 
2. It adds source and destination address to the packets.
3. It adds sequence number in which the message data should be re-assembled
4. It ensures correct data delivery (acknowledgements and error correction)

### IP (Internet Protocol):

Well! IP is responsible for handling the address of the destination computer so that each packet is sent to its proper destination.  

---



# Type of data communication

1. Simplex Communication: 
   one-way communication, unidirectional communication 
* one device only receives and another device only sends data and devices uses their entire capacity in transmission.  
> For example, IoT, entering data using a keyboard, listing music using a speaker, etc.
2. Half Duplex communication:  
* two-way communication, bidirectional communication 
* both the devices can send and receive data but not at the same time. 
* When one device is sending data then another device is only receiving and vice-versa. 
> For example, walkie-talkie. 
1. Full-duplex communication: 
* two-way communication, bidirectional communication
* both the devices can send and receive data at the same time. 
> For example, mobile phones, landlines, etc.

---

# Communication Channels

* Communication channels are the medium that connects two or more workstations. 

* Workstations can be connected by either wired media or wireless media. 

* It is also known as a transmission medium. 

* The transmission medium or channel is a link that carries messages between two or more devices.

* There are two types of Channels
1. Guided media transmission
2. Unguided media transmission

---

## Guided media transmission

In this transmission medium, the physical link is created using wires or cables between two or more computers or devices, and then the data is transmitted using these cables in terms of signals.

1. Twisted pair cable
2. Coaxial Cable
3. Optical fibers

---

## Guided media transmission

1. Twisted pair cable
> In a twisted-pair cable, two identical wires are wrapped together in a double helix. 
> The twisting of the wire reduces the crosstalk (interferance from signal in different cable) which can cause errors in communication. 

### Types

1. Unshielded Twisted Pair (UTP)
2. Shielded Twisted Pair (STP)
> *Shielding protects from external interference however increases cost.*

---

## Guided media transmission

2. Coaxial Cable
* It consists of a solid wire core that is surrounded by one or more foil or wire shields. 
* The inner core of the coaxial cable carries the signal and the outer shield provides the ground. 
* television signals, security systems. 
* Data transmission of this cable is better but expensive as compared to twisted pair.

---

## Guided media transmission

3. Optical fibers
4. Core: Core is the piece through which light travels. It is generally created using glass or plastic.
5. Cladding: It is the covering of the core and reflects the light back to the core.
6. Sheath: It is the protective covering that protects fiber cable from the environment.

---

# Unguided Media

The signals are propagated from one device to another device wirelessly
---

# Unguided Media

### 1. Microwave:

Microwave signals are just like radio and television signals. 

It is used in long-distance communication. 

Microwave transmission consists of a transmitter, receiver, and atmosphere**. 

In microwave communication, there are parabolic antennas that are mounted on the towers to send a beam to another antenna. The higher the tower, the greater the range.
---

# Unguided Media

### 2. Radio wave:

When communication is carried out by radio frequencies, then it is termed radio waves transmission. 

It offers mobility. It is consists of the transmitter and the receiver. 

Both use antennas to radiate and capture the radio signal.
---

# Unguided Media

### 3. Infrared:

It is short-distance communication and can pass through any object. 
> It is generally used in TV remotes, wireless mouse, etc.

---

# Study Assignment:

## Difference between Radio waves and Microwaves and their application ?

---

# Reference

1. Computer Networking: A Top-Down Approach, James F. Kuros and Keith W. Ross, Pearson, 6th Edition,2012
1. [Data Communications and Networking by Forouzan]()

#### Telegram Group

![](./telegramGroup.jpg)
