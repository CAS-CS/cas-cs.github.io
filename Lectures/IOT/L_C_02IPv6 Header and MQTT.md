


# IP version 6 Header Format :
   
 

![](https://media.geeksforgeeks.org/wp-content/uploads/ipv6-header.png)

---
# Version (4-bits):
 Indicates version of Internet Protocol which contains bit sequence 0110. 
---

# Traffic Class (8-bits):
The Traffic Class field indicates class or priority of IPv6 packet which is similar to _Service Field_ in IPv4 packet.
 
  It helps routers to handle the traffic based on the priority of the packet. If congestion occurs on the router then packets with the least priority will be discarded.
     
As of now, only 4-bits are being used (and the remaining bits are under research), in which 0 to 7 are assigned to Congestion controlled traffic and 8 to 15 are assigned to Uncontrolled traffic. 
---
### Priority assignment of Congestion controlled traffic :   
 

![](https://media.geeksforgeeks.org/wp-content/uploads/congestion-table.png)


Uncontrolled data traffic is mainly used for Audio/Video data. So we give higher priority to Uncontrolled data traffic.   

The source node is allowed to set the priorities but on the way, routers can change it. 

Therefore, the destination should not expect the same priority which was set by the source node. 
---

# Flow Label (20-bits):
 Flow Label field is used by a source to label the packets belonging to the same flow in order to request special handling by intermediate IPv6 routers, such as non-default quality of service or real-time service. 
 In order to distinguish the flow, an intermediate router can use the source address, a destination address, and flow label of the packets. 
 
 Between a source and destination, multiple flows may exist because many processes might be running at the same time. Routers or Host that does not support the functionality of flow label field and for default router handling, flow label field is set to 0. 
 While setting up the flow label, the source is also supposed to specify the lifetime of the flow. 

---
# Payload Length (16-bits):
 It is a 16-bit (unsigned integer) field, indicates the total size of the payload which tells routers about the amount of information a particular packet contains in its payload. 
 
 The payload Length field includes extension headers(if any) and an upper-layer packet. 
 
 In case the length of the payload is greater than 65,535 bytes (payload up to 65,535 bytes can be indicated with 16-bits), then the payload length field will be set to 0 and the jumbo payload option is used in the Hop-by-Hop options extension header. 

---
# Next Header (8-bits):
 Next Header indicates the type of extension header(if present) immediately following the IPv6 header.
 
 Whereas In some cases it indicates the protocols contained within upper-layer packets, such as TCP, UDP. 

---
# Hop Limit (8-bits):
 Hop Limit field is the same as TTL in IPv4 packets. 
 
 It indicates the maximum number of intermediate nodes IPv6 packet is allowed to travel. 
 
 Its value gets decremented by one, by each node that forwards the packet and the packet is discarded if the value decrements to 0. 
 
 This is used to discard the packets that are stuck in an infinite loop because of some routing error. 

---
# Source Address (128-bits):
 Source Address is the 128-bit IPv6 address of the original source of the packet. 


# Destination Address (128-bits):
 The destination Address field indicates the IPv6 address of the final destination(in most cases).
 
  All the intermediate nodes can use this information in order to correctly route the packet. 
---

# Extension Headers:
 In order to rectify the limitations of the _IPv4 Option Field_, Extension Headers are introduced in IP version 6. The extension header mechanism is a very important part of the IPv6 architecture. 
 
 The next Header field of IPv6 fixed header points to the first Extension Header and this first extension header points to the second extension header and so on. 

![](https://media.geeksforgeeks.org/wp-content/uploads/ext-header.png)
---
IPv6 packet may contain zero, one or more extension headers but these should be present in their recommended order: 

![](https://media.geeksforgeeks.org/wp-content/uploads/next-header-2.png)

---
# Rule:
 Hop-by-Hop options header(if present) should always be placed after the IPv6 base header.   
 

---
# Conventions :
 

1.  Any extension header can appear at most once except Destination Header because Destination Header is present two times in the above list itself.
2.  If Destination Header is present before Routing Header then it will be examined by all intermediate nodes specified in the routing header.
3.  If Destination Header is present just above the Upper layer then it will be examined only by the Destination node.

Given order in which all extension header should be chained in IPv6 packet and working of each extension header 

 

![](https://media.geeksforgeeks.org/wp-content/uploads/ext-header-1.png)

---
# References

https://www.ietf.org/rfc/rfc2460.txt   
https://www.ietf.org/rfc/rfc3697.txt   


---
# MQTT Protocol
---

# MQTT
### MQ Telemetry Transport 


[MQTT](https://mqtt.org/) is an OASIS standard messaging protocol for the Internet of Things (IoT). 

It is designed as an extremely lightweight publish/subscribe messaging transport that is ideal for connecting remote devices with a small code footprint and minimal network bandwidth. 

MQTT today is used in a wide variety of industries, such as automotive, manufacturing, telecommunications, oil and gas, etc. 

---
Why MQTT?
---------

### Lightweight and Efficient

MQTT clients are very small, require minimal resources so can be used on small microcontrollers. MQTT message headers are small to optimize network bandwidth.

### Bi-directional Communications

MQTT allows for messaging between device to cloud and cloud to device. This makes for easy broadcasting messages to groups of things.

### Scale to Millions of Things

MQTT can scale to connect with millions of IoT devices.

### Reliable Message Delivery

Reliability of message delivery is important for many IoT use cases. This is why MQTT has 3 defined quality of service levels: 0 - at most once, 1- at least once, 2 - exactly once

### Support for Unreliable Networks

Many IoT devices connect over unreliable cellular networks. MQTT’s support for persistent sessions reduces the time to reconnect the client with the broker.

### Security Enabled  
 

MQTT makes it easy to encrypt messages using TLS and authenticate clients using modern authentication protocols, such as OAuth.

---
MQTT Publish / Subscribe Architecture
-------------------------------------

![MQTT: publish / subscribe architecture](https://mqtt.org/assets/img/mqtt-publish-subscribe.png)
"MQTT: publish / subscribe architecture"



---

##  References

[Get Started](https://mqtt.org/getting-started/)



<style>
    img{  filter:hue-rotate(90deg);
}
</style>