](mailto:prateekrajgautam@gmail.com)
---

# Network Model

A network is a combination of hardware and software that sends data from one location
to another. 

The hardware consists of the physical equipment that carries signals from one point of the network to another. 

The software consists of instruction sets that make
possible the services that we expect from a network.


---

# Layered Task

We use the concept of layers in our daily life.

-  Letter through post office

1. sender write data and address drops it to post box
2. postman picks it and send it to postoffice
3. postoffice sorts and sent to respective city postoffice

and at destination post office process is done in reverse

* Each layer does its responsibilities and provides services to other layers.

---

The layered model that dominated data communications and networking literature
before 1990 was the Open Systems Interconnection (OSI) model. 

Everyone believed
that the OSI model would become the ultimate standard for data communications, but this did not happen. 

The *TCP/IP* protocol suite became the dominant commercial archi-
tecture because it was used and tested extensively in the Internet; 

*the OSI model was
never fully implemented.*

---


# The OSI Model

The International Standards Organization (ISO): (in 1947) is a multinational
body dedicated to worldwide agreement on international standards. An ISO standard
that covers all aspects of network communications is the Open Systems Interconnection
model. It was first introduced in the late 1970s

An open system is a set of protocols that allows any two different systems to communicate regardless of their underlying architecture.

* The OSI model is not a protocol
* It is a model for understanding and designing a network architecture that is **flexible, robust, and interoperable.**


## ISO is the organization. OSI is the model.
---


The OSI model is a layered framework for the design of network systems that allows communication between all types of computer systems. It consists of seven separate but related layers, each of which defines a part of the process of moving information
across a network

![](./osi1.png)

---

# Peer-to-Peer process

The processes on each machine that communicate at
a given layer are called peer-to-peer processes.

![](p2p.png)



---
# Encapsulation

![](excnange.png)

---
# Encapsulation

A packet (header and data) at level 7 is encapsulated in a packet at level 6. The
whole packet at level 6 is encapsulated in a packet at level 5, and so on.

For level N - 1, the whole packet coming from level N is treated
as one integral unit.



---
The Seven Layers of OSI Model
-----------------------------

| Layers No. | Layers Name | Function |
| --- | --- | --- |
| Layer 1 | Physical Layer | Transmission method used to propagate bits through a network |
| Layer 2 | Data Link Layer | Frame formatting for transmitting data across a physical communication line. |
| Layer 3 | Network Layer | Network addressing and packet transmission on the network. |
| Layer 4 | Transport Layer | Data tracking as it moves through a network. |
| Layer 5 | Session Layer | Job management tracking |
| Layer 6 | Presentation Layer | Encoding the language used in transmission. |
| Layer 7 | Application Layer | User networking applications and interfacing to the network. |


---
1 Physical Layer
--------------

The Physical Layer is the lowermost layer in the OSI model and its major responsibility includes the actual propagation of the unstructured data bits **(0’s and 1’s)** across the network, from the physical layer of the sending device to the physical layer of the receiving device.

- The Physical layer contains information in the form of bits. 
- It transmits individual bits from one node to the next node.
- The transmission media defined by the physical layer include metallic cable, optical fiber, and the wireless radio-wave.
---
## Physical Layer Includes 

*   **Bit Synchronization** – Physical layer provides the bit synchronization of bits by providing a clock. This clock controls the sender and receiver providing synchronization at bit level.

*   **Bit Rate Control** – Physical layer defines the transmission rate. The number of bits sent per second.

*   **Physical Topologies** – The physical layer specifies how the different devices are arranged in a network (bus, ring, star, and mesh topology).

*   **Transmission mode** – The physical layer checks if the transmission is simplex, half-duplex, or full-duplex. It defines how the data flows between the two connected devices.
---
2 Data Link Layer
---------------

It is the second layer of the OSI model. 

The data link layer is responsible for providing error-free communication across the physical link connecting the primary and secondary nodes within a network. 
It provides _hop-to-hop delivery_.
It packages the data from the physical layer into a group called _blocks_.

The data link layer provides the **final framing of the information signal, and it provides synchronization facilities for the orderly flow of data between the nodes.**
---
2 Data Link Layer
---------------
*   **Framing** − Breaks messages into frames and reassembles frames into messages.

*   **Error handling** − It is used to soles the damaged, lost, and duplicate frames.

*   **Flow Control** − It keeps a fast transmitter from flooding a slow receiver.

*   **Access Control** − In access control, if many hosts have usage of the medium, When a single communication channel is shared by multiple devices, the MAC sub-layer of data link layer helps to determine which device has control over the channel at a given time.

---
3 Network Layer
-------------

The network layer provides details that enable data to be routed between devices in an environment using multiple networks, sub-networks, or both.

The networking components that operate at the network layer include routers and their software. 

It determines which network configuration is most appropriate for the function provided by the network and addresses and routes data within a network by *establishing, maintaining, and terminating* connectors between them.

It provides the upper layers of the hierarchy with *independence from the data transmission and switching technologies* used to interconnect systems.

It also provides the source and destination network addresses, subnet information, and source and destination node addresses. 
    
    In this, the network is subdivided into subnet-work that is separated by routers.
---
4 Transport Layer
---------------

Transport layer controls and ensures the end-to-end integrity of the data message propagated through the network between two devices, providing the reliable, transparent transfer of data between the endpoints.

---
4 Transport Layer
---------------
### Responsibilities of Transport Layer

*   **Segmentation and Reassembly** − In this, a message is divided into small pieces. Reassemble the message correctly upon arriving at the destination.

*   **Reliability** − It ensures that packets arrive at their destination. Reassembles out-of-order messages.

*   **Service Decisions** − It is used to check what types of service to provide error-free point-to-point, datagram, etc.

*   **Mapping** − It determines which messages belong to which connections.

*   **Naming** − It must be translated into an internal address and route, send to node XYZ.

*   **Flow Control** − It keeps a fast transmitter from flooding a slow receiver.

*   **Error Control** − To retransmit the damaged segments.
---
5 Session Layer
-------------

The session layer creates communication channels between devices. It is responsible for opening sessions, ensuring they remain open and functional while the data is being transferred, and close the session when the communication ends.

The session layer can also set checkpoints during a data transfer. If a session is interrupted, then the devices can resume data transfer from the last checkpoint.

The session layer is responsible for network availability for data storage and processes capacity. It provides the logical connection entities at the application layer.
---
5 Session Layer
-------------

### Session Layer Responsibilities −

*   Network log-on and log-off procedures

*   User authentication

*   Determines the type dialog available − simplex, half-duplex, and full-duplex.

*   Synchronization of data flow for recovery purposes.

*   Creation of dialog units and activity units.
---
6 Presentation Layer
------------------

The presentation layer prepares the data for its upper layer or the application layer. It defines how two devices should encode, encrypt, and compress the data.

*   The presentation layer receives any data transmitted by the application layer and prepares it for transmission over the session layer.

*   It specifies how the end-user applications should format the data.

*   This layer provides for the translation between the local representation of data and the representation of data that will be used for transfer between the end-users. 

>The result of encryption, data compression, and virtual terminals are examples of translation services.
---
7 Application Layer
-----------------

The application layer is the topmost layer in the OSI model and acts as the general manager of the network by proving access to the OSI environment. 

This layer provides distributed information services and controls the sequence of activities within an application and also the sequence of events between the computer application and the user of the application. 

It communicates directly with the user’s application program.

The application layer uses **HTTP, FTP, POP, SMTP, and DNS protocols** that allow the software to send and receive information and present meaningful data to users.

---

The advantages of the OSI model 
-----------------------------------

*   It is a generic model and acts as a guidance tool to develop any network model.
*   It is a layered model. Changes are one layer do not affect other layers, provided that the interfaces between the layers do not change drastically.
*   It distinctly separates services, interfaces, and protocols. Hence, it is flexible in nature. Protocols in each layer can be replaced very conveniently depending upon the nature of the network.
*   It supports both connection-oriented services and connectionless services.
---
The disadvantages of the OSI model 
--------------------------------------

*   It is purely a theoretical model that does not consider the availability of appropriate technology. This restricts its practical implementation.
*   The launching timing of this model was inappropriate. When OSI appeared, the TCP/IP protocols were already implemented. So, the companies were initially reluctant to use it.
*   The OSI model is very complex. The initial implementation was cumbersome, slow and costly.
*   Though there are many layers, some of the layers like the session layer and presentation layer have very little functionality when practically deployed.
*   There is a duplication of services in various layers. Services like addressing, flow control and error control are offered by multiple layers.
*   The standards of OSI model are theoretical and do not offer adequate solutions for practical network implementation.
*   After being launched, the OSI model did not meet the practical needs as well as the TCP/IP model. So it was labeled as inferior quality.
*   TCP/IP model was very much preferred by the academia. It was believed that OSI was a product of the European communities and the US government, who were trying to force an inferior model to researchers and programmers. Hence, there was considerable resistance in adopting it.


---
# Reference

1. [Data Communications and Networking by Forouzan]()



