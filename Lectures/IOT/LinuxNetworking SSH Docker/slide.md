# Some Linux networking commands and configs

---

# IP config

`ifconfig`
`ping`

---

# Docker

### BASE IMAGE from DOCKER HUB

```bash

docker run <imageName>
# it is eq to docker pull <imageName> && docker start imageName>
# to start ubuntu

docker run ubuntu

```

you can list all the images in your system with `docker images`

running image is called container, and its data is temperarily stored,
each container has a container id

you can list all the running containers in your system with `docker ps`

`docker ps -a` will list all the stopped containers.

### to filter and search your image with name

you must first give it name while running an image

`docker run --name <yourContainerName> <imageName>`
now the created conainer has unique id as well as a name

now if you execute `docker ps -a` it will list all the containers including `<yourContainerName>`

to filter this list you can use pip operator and grep as

`docker ps -a | grep <yourContainerName>`

---

# To stop and remove your container

`docker stop <container id>` or
`docker stop <yourContainerName>`

you can start stopped container with
`docker start <container id>` or
`docker start <yourContainerName>`

to permanently delete container from system and free space

`docker rm <container id>` or
`docker rm <yourContainerName>`

---

# create your image from container

now if you have a container where you have updated softwares and installed some basic requirements say python and numpy, and your other containers also requires these.

so it you use baseimage as ubuntu you have to do all those customizations again.

so you can convert your container in to image
with

```bash
docker commit <container id> <YourImageName>
# this will generate new <YourImageName ID>
```

now this image has a unique ID

so to create new system with this image

`docker run <YourImageName ID>`

---

## port mapping and other docker arguments

-p localPort:DockerPort

say your webserver is serving at port 3000 in docker

so to access this on OS local browser

at port 4000

we need to specify portmapping while running container form image as

```bash
docker run --name <NAME> -p localPort:DockerPort <imageName>
docker run --name <NAME> -p 4000:3000 <imageName>
```

# JupyterLab

```bash
jupyter-lab --allow-root --ip 0.0.0.0 --port 8888
```

# Resources

1. [https://linuxize.com/post/how-to-setup-ssh-tunneling/](https://linuxize.com/post/how-to-setup-ssh-tunneling/)
2. [https://linuxize.com/post/how-to-setup-ssh-socks-tunnel-for-private-browsing/](https://linuxize.com/post/how-to-setup-ssh-socks-tunnel-for-private-browsing/)
3. [https://www.ssh.com/academy/ssh/command](https://www.ssh.com/academy/ssh/command)
