# Web Server 

## What's a web server and HTTP ?

Web server is a program which processes the network requests of the users and serves them with files that create web pages. This exchange takes place using Hypertext Transfer Protocol (HTTP).

1. Web servers are computers used to store HTTP files which makes a website and when a client requests a certain website, it delivers the requested website to the client. 
1. Any computer that can implement http or https is able to play the role of a web server. 
1. The web server can be any software or hardware but is usually a software running on a computer.
1. It must be always connected to the internet, otherwise, it cannot receive and process requests.

[](https://media.geeksforgeeks.org/wp-content/uploads/20190927155217/webserver.png)


## Web Server Definition

It consists of the hardware and software that is responsible for responding to requests on the World Wide Web, with the use of hypertext transfer protocol (HTTP) and other protocols. *These requests are made by clients.*


The main thing that it is responsible for, is displaying the contents of a website to each user who requests it. This process involves storing, processing, and delivering data.


The exchange of data among devices is facilitated by a web server’s hardware. The software component of a web server controls the users’ access to the hosted files. All systems that host websites need to have the web server software.


---

## HTTP: Hyper Text Transport Protocol

Http is a protocol, a way of communication which supplies web pages. 

* It is pretty widely used and easy to implement. 

* Through http you can transfer html and create simple user interfaces 
* It can implement JavaScript and make more complicated web pages 
* It is available in most of the browsers. 


> One of the great qualities of this protocol is that it replaced complicated and heavy displays, with user friendly web pages.



---
# Functions of a Web Server


1. Web servers store and configure all website data. This is done to protect data from unauthorized users.
1. Web servers have the prime responsibility to enable accessibility to hosted websites. This includes the availability of back-end database server services and more.
1. When potential clients around the globe are trying to access your website, your website’s web server would serve them accordingly. Such potential clients and visitors are known as end users and their access requests are known as end-user requests.
1. Web servers help in controlling the bandwidth; they are equipped to minimize excess network traffic, thus regulating the overall traffic in the network. *This feature of web servers prevents downtime to a great extent. Downtime is usually caused by surplus web traffic.*
1. The presence of a web server enables the creation of dynamic web pages in popular scripting languages such as Perl, Ruby, Python, and others.


---

# How does it work? 

A web browser uses HTTP to request a file hosted on a web server. The HTTP server accepts this request, finds the file, and then sends it back to the browser using HTTP.  

###  Steps involved in the process:
* A user specifies the URL they want to access in the address bar.
* The browser fetches the IP address of the domain name. This would take the web browser to the web server.
* The browser requests the file from the web server using HTTP.
* The web server will send back the requested file via HTTP. If, in case, the file does not exist, an error message will be sent.
* The browser displays the web page.

> The request will consist of information about the kind of browser that is used, about the computer or about the document requested. 

It will have a **method**, a **URL**, a **query string** and the **upload body** in case you want data to be sent to the server.

### Response Status

* The **response will** include the status, which tells the browser if the page was found or not.

> 400s are about a not found page, 
> 300 are redirections and 
> 200s are confirmations of the page being found. 


[](https://ocw.cs.pub.ro/courses/_media/iot2015/courses/picture1.png?cache=&w=827&h=306&tok=dcc09f)

---

# HTTPS: Hyper Text Transport Protocol Secure
## Https has two important security roles.

1. **It encripts the data.** The request and the response will be both encripted on sending and decripted when read.
1. The server is always asked for a certificate of authenticity before it is asked for a page. This prevents against stolen data through false web pages.
    
---

## What does a query consist of? 

It will always look like this: 
```html

http://address:port/URL?querystring

```


The port can be absent, in which case it will be 80 for http and 443 for https. 

It has to be specified if it is not one the two. 

Concerning the URL, when it is not written, the default will be `/`.

> The available methods in http are : get, post, put and delete. The main ones being the first two.


---


### GET

* Get method needs no upload body. It will only ask for data from the server and send only the headers, the address, the URL.
    

### POST

* Post sends important data to the server, which will be uploaded. Post has the role of modifying data on the server. The response of both these methods is the page and any additional information that was requested.
    

### PUT

* Put is similar to post, only that in the semantic way, this method only creates an object on the server.
    

### DELETE

* Delete also plays a semantic part. It needs no upload body and it delets objects on the server. The same action can be performed however using get.
    
---


> On one server there can be more than one websites, which means that, if the host is not specified in the request, the response may not be the one the browser expects.

Also, the response may have more than text. Any additional feature: images, JavaScript objects and so on will need a new request, so the process will be slowed down.



---


# Resources 

### webserver on IOT modules like ESP8266

1. [https://github.com/esp8266/ESPWebServer](https://github.com/esp8266/ESPWebServer)

1. [https://www.instructables.com/How-to-Use-ESP8266-As-Webserver/](https://www.instructables.com/How-to-Use-ESP8266-As-Webserver/)


## LAB Experiment

[ESP8266 Based Webserver to Control LED from Webpage](https://iotdesignpro.com/projects/esp8266-based-webserver-to-control-led-from-webpage)