](mailto:prateekrajgautam@gmail.com)
---

---
Data Link Layer

*   In the OSI model, the data link layer is a 4<sup>th</sup> layer from the top and 2<sup>nd</sup> layer from the bottom. 


*   The communication channel that connects the adjacent nodes is known as links, and in order to move the datagram from source to the destination, the datagram must be moved across an individual link. 


*   The main responsibility of the Data Link Layer is to transfer the datagram across an individual link. 


*   The Data link layer protocol defines the format of the packet exchanged across the nodes as well as the actions such as Error detection, retransmission, flow control, and random access. 


*   The Data Link Layer protocols are Ethernet, token ring, FDDI and PPP. 


*   An important characteristic of a Data Link Layer is that datagram can be handled by different link layer protocols on different links in a path. 

 For example, the datagram is handled by Ethernet on the first link, PPP on the second link. 

---

### Following services are provided by the Data Link Layer:

![Data Link Layer](https://static.javatpoint.com/tutorial/computer-network/images/data-link-layer.png)

---


## Framing & Link access

 Data Link Layer protocols encapsulate each network frame within a Link layer frame before the transmission across the link. 

 A frame consists of a data field in which network layer datagram is inserted and a number of data fields. 

 It specifies the structure of the frame as well as a channel access protocol by which frame is to be transmitted over the link. 


---

## Reliable delivery

Data Link Layer provides a reliable delivery service, i.e., transmits the network layer datagram without any error. 

A reliable delivery service is accomplished with transmissions and acknowledgements. 

A data link layer mainly provides the reliable delivery service over the links as they have higher error rates and they can be corrected locally, link at which an error occurs rather than forcing to retransmit the data. 


---

## Flow control

A receiving node can receive the frames at a faster rate than it can process the frame. 

Without flow control, the receiver's buffer can overflow, and frames can get lost. 

To overcome this problem, the data link layer uses the flow control to prevent the sending node on one side of the link from overwhelming the receiving node on another side of the link. 


---

## Error detection

Errors can be introduced by signal attenuation and noise. 

Data Link Layer protocol provides a mechanism to detect one or more errors. 

This is achieved by adding error detection bits in the frame and then receiving node can perform an error check. 


---

## Error correction

Error correction is similar to the Error detection, except that receiving node not only detect the errors but also determine where the errors have occurred in the frame. 


---

## Half-Duplex & Full-Duplex

In a Full-Duplex mode, both the nodes can transmit the data at the same time. 

In a Half-Duplex mode, only one node can transmit the data at the same time. 




---
# Reference

1. [Data Communications and Networking by Forouzan]()



