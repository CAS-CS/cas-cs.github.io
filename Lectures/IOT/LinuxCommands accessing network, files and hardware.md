# Basic linux commands to access and configure network, files, and hardware.
---
## How to get help in linux terminal

In the context of Bash, `man` and `--help` are two common ways to access documentation and get help for commands.

1. `man` command:
The `man` command is used to display the manual pages for various commands and utilities available on your system. It provides detailed information, usage examples, options, and explanations for each command. You can use the `man` command followed by the name of the command you want to learn more about.

Example:
```bash
man ls
```
This will display the manual page for the `ls` command, which provides information on how to use and customize the `ls` command for listing files and directories.

The manual pages are divided into sections, and you can specify the section number if multiple sections exist for a command. For example, `man 2 open` displays the manual page for the `open` system call.

2. `--help` option:
Many command-line utilities and programs provide a `--help` option that displays a brief usage summary and available options for the specific command. It is a quick way to get information about command usage without opening the full manual page.

Example:
```bash
ls --help
```
This command displays a brief help message for the `ls` command, including the available options and their descriptions.

Note that not all commands support the `--help` option. It depends on how the command is implemented by its developers.

Both `man` and `--help` are valuable resources for understanding and utilizing various commands and utilities in the Bash shell. They provide essential documentation and guidance for using commands effectively and efficiently.



---
## touch

Usage: `touch [OPTION]... FILE...`

- Create an empty file or update the timestamp of an existing file.

Example:
```bash
touch file.txt
```

Output: No output is displayed if the command succeeds.

## chmod

Usage: `chmod [OPTION]... MODE[,MODE]... FILE...`

- Change the permissions of a file or directory.

Example:
```bash
chmod +x script.sh
```

Output: No output is displayed if the command succeeds.
---
## vim

Usage: `vim [OPTION]... [FILE]...`

- Open the Vim text editor to create or edit files.

Example:
```bash
vim file.txt
```

Output: Opens the Vim editor for file.txt.

Sure! Here are some hints for using Vim, a powerful text editor:

1. **Modes**: Vim has different modes: Normal mode (default), Insert mode, Visual mode, and Command-line mode. Learn to navigate between these modes using the Esc key and understand their respective purposes.

2. **Navigation**: Use `h`, `j`, `k`, and `l` keys to move left, down, up, and right, respectively. You can also navigate using arrow keys. To move to the beginning of a line, press `0`, and to move to the end of a line, press `$`.

3. **Editing**: In Normal mode, press `i` to enter Insert mode and start editing. Press `Esc` to exit Insert mode and return to Normal mode. Use basic editing commands like `x` to delete a character, `dd` to delete a line, `yy` to yank (copy) a line, and `p` to paste.

4. **Saving and Quitting**: To save changes, type `:w` in Command-line mode and press Enter. To quit Vim, type `:q`. If you have unsaved changes, use `:q!` to forcefully quit without saving.

5. **Search and Replace**: In Normal mode, press `/` to start a forward search. Enter the search pattern and press Enter. To replace text, use `:%s/search_pattern/replace_pattern/g` to replace all occurrences in the file. Adjust the search and replace patterns as needed.

6. **Multiple Windows**: Vim supports splitting the screen into multiple windows. Use `:split` to split horizontally and `:vsplit` to split vertically. Press `Ctrl+w` followed by arrow keys to switch between windows.

7. **Undo and Redo**: Press `u` in Normal mode to undo the last action. To redo, press `Ctrl+r`.

8. **Configuring Vim**: Customize Vim by creating a `.vimrc` file in your home directory. You can set preferences, mappings, and plugins in this file.

9. **Help**: Access Vim's built-in help system by typing `:help` in Command-line mode. Use `:help <keyword>` to search for specific topics.

10. **Practice**: Regular practice is key to becoming proficient with Vim. Experiment with different commands, try new features, and gradually incorporate more advanced techniques into your workflow.

Remember, Vim has a steep learning curve but offers great efficiency once mastered. Don't get discouraged and take it step by step.

---
## cat

Usage: `cat [OPTION]... [FILE]...`

- Concatenate files and display their contents.

Example:
```bash
cat file.txt
```

Output: Displays the contents of file.txt.

## ls

Usage: `ls [OPTION]... [FILE]...`

- List files and directories.

Example:
```bash
ls -l
```

Output: Displays the files and directories in the current directory in long format.

## pwd

Usage: `pwd [OPTION]...`

- Print the current working directory.

Example:
```bash
pwd
```

Output: Displays the current working directory.

## mkdir

Usage: `mkdir [OPTION]... DIRECTORY...`

- Create directories.

Example:
```bash
mkdir new_directory
```

Output: No output is displayed if the command succeeds.

## cd

Usage: `cd [DIRECTORY]`

- Change the current working directory.

Example:
```bash
cd Documents
```

Output: Changes the current working directory to "Documents".

## ~

Usage: Represents the home directory of the current user.

Example:
```bash
cd ~/Documents
```

Output: Changes the current working directory to the "Documents" folder in the user's home directory.

## ps

Usage: `ps [OPTIONS]`

- Display information about running processes.

Example:
```bash
ps aux
```

Output: Displays detailed information about all running processes.

## service

Usage: `service SERVICE_NAME {start|stop|restart|status}`

- Manage system services.

Example:
```bash
service apache2 start
```

Output: Starts the Apache service if it is installed.

## systemctl

Usage: `systemctl [OPTIONS] {start|stop|restart|status} SERVICE_NAME`

- Control the systemd system and service manager.

Example:
```bash
systemctl start nginx
```

Output: Starts the Nginx service if it is installed.

## clear

Usage: `clear`

- Clear the terminal screen.

Example:
```bash
clear
```

Output: Clears the terminal screen.

## grep

Usage: `grep [OPTIONS] PATTERN [FILE...]`

- Search for a specified pattern in files.

Example:
```bash
grep "example" file.txt
```

Output: Displays lines in file.txt that contain the word "example".

---
# File copy, move and delete


## cp

Usage: `cp [OPTION]... SOURCE... DESTINATION`

- Copy files and directories.

Example:
```bash
cp file.txt new_directory/
```

Output: Copies file.txt to the "new_directory" directory.

## mv

Usage: `mv [OPTION]... SOURCE... DESTINATION`

- Move or rename files and directories.

Example:
```bash
mv file.txt new_name.txt
```

Output: Renames file.txt to new_name.txt.

## rm

Usage: `rm [OPTION]... FILE...`

- Remove files

 or directories.

Example:
```bash
rm file.txt
```

Output: Removes the file.txt file.



The `rm -rf` command is a powerful and potentially dangerous command in Unix-like systems that allows you to recursively delete files and directories. Here are some precautions to consider when using `rm -rf` to avoid accidental deletion:

1. **Double-check the command**: Before executing `rm -rf`, carefully review the command and ensure that you have specified the correct path and files/directories to delete.

2. **Use the `--no-preserve-root` option**: To prevent accidentally deleting critical system files, some versions of `rm` include the `--no-preserve-root` option. This option prevents the deletion of the root directory ("/") and its subdirectories.

3. **Avoid using wildcards**: When using `rm -rf`, avoid using wildcards such as `*` unless you are absolutely certain of the files and directories that match the wildcard pattern. Using wildcards can lead to unintended deletion.

4. **Confirm file deletion**: Some versions of the `rm` command prompt for confirmation before deleting each file or directory when using the `-i` option. Consider using this option to add an extra layer of confirmation.

5. **Set up file backups**: It's always a good practice to have backups of your important files and directories. Regularly back up your data to avoid permanent loss in case of accidental deletions.

6. **Test the command with a safe target**: If you are unsure about the effects of the `rm -rf` command, consider testing it on a safe and isolated target, such as a temporary directory or a backup copy of the files/directories you intend to delete. This way, you can observe the outcome before performing the actual deletion.

7. **Check file permissions**: Ensure that you have the necessary permissions to delete the files and directories you are targeting. `rm -rf` can delete files and directories that you might not have permission to remove.

By taking these precautions, you can minimize the risks associated with using `rm -rf` and avoid accidental deletions of important data. Always exercise caution and verify your actions to prevent unintended consequences.


---
# downloading remote files


## wget

Usage: `wget [OPTIONS]... [URL]...`

- Download files from the web.

Example:
```bash
wget http://example.com/file.txt
```

Output: Downloads the file.txt file from the specified URL.


The `wget` command is a utility for downloading files from the web. It supports HTTP, HTTPS, and FTP protocols. Here are some commonly used options for the `wget` command:

Usage: `wget [OPTIONS] [URL]`

**Options:**

- `-O, --output-document <FILE>`: Save the downloaded file with the specified name.
- `-P, --directory-prefix <PREFIX>`: Save files to the specified directory.
- `-r, --recursive`: Enable recursive downloading, follows links and downloads entire directories.
- `-N, --timestamping`: Only download files that are newer than existing files.
- `-c, --continue`: Resume a partially downloaded file.
- `-np, --no-parent`: Do not ascend to the parent directory while recursively downloading.
- `-l, --level <DEPTH>`: Set the maximum recursion depth for recursive downloads.
- `-A, --accept <LIST>`: Specify a comma-separated list of accepted file extensions.
- `-R, --reject <LIST>`: Specify a comma-separated list of rejected file extensions.
- `-t, --tries <NUM>`: Set the number of retries for failed downloads.
- `-q, --quiet`: Quiet mode, suppresses output except for error messages.
- `--user=<USER>`: Provide a username for authentication.
- `--password=<PASSWORD>`: Provide a password for authentication.
- `--no-check-certificate`: Disable SSL certificate verification.
- `--limit-rate=<RATE>`: Limit the download rate to the specified value.
- `--header=<HEADER>`: Add a custom header to the request.



**Examples:**

1. Download a file from a URL:
   ```bash
   wget http://example.com/file.ext
   ```

2. Save the downloaded file with a different name:
   ```bash
   wget -O newfile.ext http://example.com/file.ext
   ```

3. Download an entire website recursively:
   ```bash
   wget -r http://example.com
   ```

4. Download files matching a specific extension:
   ```bash
   wget -A jpg,png http://example.com/images/
   ```

5. Limit the download rate to a specific value:
   ```bash
   wget --limit-rate=1m http://example.com/largefile.zip
   ```

> These examples demonstrate some of the ways you can use the `wget` command to download files from the web.

## curl

Usage: `curl [OPTIONS] URL`

- Transfer data from or to a server.

Example:
```bash
curl https://example.com
```

Output: Displays the content of the specified URL.

The `curl` command is a versatile tool used for making HTTP requests and retrieving data from web servers. It supports various protocols like HTTP, HTTPS, FTP, FTPS, and more. Here is a detailed explanation of the `curl` command and its commonly used options:

Usage: `curl [OPTIONS] [URL]`

**Options:**

- `-X, --request <METHOD>`: Specify the HTTP request method (e.g., GET, POST, PUT, DELETE).
- `-H, --header <HEADER>`: Add a custom header to the request.
- `-d, --data <DATA>`: Include data in the request body (for methods like POST).
- `-F, --form <KEY=VALUE>`: Specify multipart form data.
- `-u, --user <USERNAME:PASSWORD>`: Provide authentication credentials.
- `-o, --output <FILE>`: Save the response to a file.
- `-L, --location`: Follow redirects.
- `-I, --head`: Fetch the headers only.
- `-s, --silent`: Silent mode, suppresses progress and error messages.
- `-v, --verbose`: Verbose mode, displays detailed information about the request and response.
- `-A, --user-agent <STRING>`: Set the User-Agent header.
- `-c, --cookie <COOKIE>`: Pass a cookie to the server.
- `-e, --referer <URL>`: Set the referer URL.
- `-k, --insecure`: Allow insecure connections when using SSL/TLS.
- `-x, --proxy <PROXY>`: Use a proxy server for the request.

> These are just a few commonly used options. The `curl` command provides many more options and functionalities. You can refer to the `curl` documentation (`man curl`) for a complete list of options and their detailed descriptions.

**Examples:**

1. Send a GET request to a URL and display the response:
   ```bash
   curl http://example.com
   ```

2. Send a POST request with data in JSON format:
   ```bash
   curl -X POST -H "Content-Type: application/json" -d '{"name":"John", "age":30}' http://example.com/api
   ```

3. Download a file and save it locally:
   ```bash
   curl -o filename.ext http://example.com/file.ext
   ```

4. Follow redirects and display only the response headers:
   ```bash
   curl -IL http://example.com
   ```

5. Use a proxy server for the request:
   ```bash
   curl -x http://proxyserver:port http://example.com
   ```

These examples showcase some of the ways you can utilize the `curl` command to interact with web servers and retrieve data.
---
## ifconfig

Usage: `ifconfig [INTERFACE] [OPTIONS]`

- Configure network interfaces (legacy command).

Example:
```bash
ifconfig eth0
```

Output: Displays information about the eth0 network interface.

## ip

Usage: `ip [OPTIONS] OBJECT {COMMAND|HELP}`

- Show/manipulate routing, devices, policy routing, and tunnels.

Example:
```bash
ip address show
```

Output: Displays information about network interfaces and their addresses.

## tracpath

Usage: `tracpath [OPTIONS] HOSTNAME/IP_ADDRESS`

- Traceroute the path to a network host.

Example:
```bash
traceroute google.com
```

Output: Shows the path taken by packets from your computer to the specified host.

## ping

Usage: `ping [OPTIONS] HOSTNAME/IP_ADDRESS`

- Send ICMP Echo Request packets to a network host.

Example:
```bash
ping google.com
```

Output: Sends ICMP packets to the specified host and displays the round-trip time.

## netstat

Usage: `netstat [OPTIONS]`

- Print network connections, routing tables, interface statistics, etc.

Example:
```bash
netstat -tuln
```

Output: Displays active network connections.

## ss

Usage: `ss [OPTIONS]`

- Another utility to investigate sockets.

Example:
```bash
ss -tuln
```

Output: Displays active network sockets.

## host

Usage: `host [OPTIONS] NAME`

- DNS lookup utility.

Example:
```bash
host example.com
```

Output: Displays the IP address associated with the specified domain name.

## mtr

Usage: `mtr [OPTIONS] HOST`

- Network diagnostic tool that combines traceroute and ping.

Example:
```bash
mtr google.com
```

Output: Displays the network route and statistics between your machine and the specified host.



---

# SSH and related commands

## ssh

Usage: `ssh [USER@]HOST [COMMAND]`

- OpenSSH remote login client.

Example:
```bash
ssh user@example.com
```

Output: Initiates an SSH connection to the specified host as the specified user.



> The `ssh` command provides several useful options for remote connections. Here are the usage scenarios for the `-X`, `-L`, and `-R` options:

**-X: Enable X11 Forwarding**
X11 Forwarding allows you to run graphical applications on a remote server and display them locally. This is useful when you want to use GUI-based applications on a remote machine.

Example:
```bash
ssh -X user@example.com
```
This command initiates an SSH connection to `example.com` and enables X11 Forwarding. You can then run graphical applications on the remote server and have their windows displayed on your local machine.

**-L: Local Port Forwarding**
Local Port Forwarding allows you to forward a local port on your machine to a port on the remote server. It enables you to access services running on the remote server through your local machine.

Example:
```bash
ssh -L 8080:localhost:80 user@example.com
```
This command establishes an SSH connection to `example.com` and forwards the local port `8080` to port `80` on the remote server. You can then access a web server running on the remote server by opening `http://localhost:8080` in your local browser.

**-R: Remote Port Forwarding**
Remote Port Forwarding allows you to forward a port on the remote server to a port on your local machine. It enables others to access services running on your local machine through the remote server.

Example:
```bash
ssh -R 2222:localhost:22 user@example.com
```
This command establishes an SSH connection to `example.com` and forwards the remote port `2222` to port `22` on your local machine. Others can then SSH into the remote server and access your local SSH server by connecting to `localhost:2222`.

These options (`-X`, `-L`, and `-R`) provide flexibility and convenience in remote connections, allowing you to run graphical applications, access remote services locally, or make local services accessible remotely.



---
## scp

Usage: `scp [OPTIONS] SOURCE... [USER@]HOST:DESTINATION`

- Securely copy files between hosts on a network.

Example:
```bash
scp file.txt user@example.com:~/destination/
```

Output: Copies the file.txt file to the "destination" folder on the remote host.

## ssh-keygen

Usage: `ssh-keygen [OPTIONS]`

- Generate SSH key pairs for public key authentication.

Example:
```bash
ssh-keygen -t rsa
```

Output: Generates an RSA SSH key pair.

## ssh-copy-id

Usage: `ssh-copy-id [OPTIONS] [USER@]HOST`

- Install your public key on a remote machine.

Example:
```bash
ssh-copy-id user@example.com
```

Output: Copies your public key to the authorized keys file on the remote host.
---
# Compress and decompress/extract

## tar

Usage: `tar [OPTIONS] FILES...`

- Manipulate archive files.

Example:
```bash
tar -czvf archive.tar.gz folder/
``

`

Output: Creates a compressed tar archive of the "folder" directory.


To compress and extract files using the `tar` command, you can utilize various options. Here's how you can compress and extract files with `tar`:

**Compress files:**
```bash
tar -czvf archive.tar.gz file1.txt file2.txt
```
This command creates a compressed tar archive named `archive.tar.gz` containing `file1.txt` and `file2.txt`.

- `-c`: Create a new archive.
- `-z`: Use gzip compression.
- `-v`: Verbose mode (displays the progress).
- `-f`: Specifies the archive file name.

**Extract files:**
```bash
tar -xzvf archive.tar.gz
```
This command extracts the contents of `archive.tar.gz` into the current directory.

- `-x`: Extract files from the archive.
- `-z`: Use gzip decompression.
- `-v`: Verbose mode (displays the progress).
- `-f`: Specifies the archive file name.

Additionally, you can specify a different directory for extraction using the `-C` option followed by the directory path.

```bash
tar -xzvf archive.tar.gz -C /path/to/destination
```
This command extracts the contents of `archive.tar.gz` into the `/path/to/destination` directory.

These are basic examples of using `tar` to compress and extract files. You can explore more options and features of the `tar` command by referring to its documentation (`man tar`).

---



## gzip

Usage: `gzip [OPTIONS] [FILE]`

- Compress files.

Example:
```bash
gzip file.txt
```

Output: Compresses the file.txt file.

## zip

Usage: `zip [OPTIONS] zipfile file...`

- Package and compress files into a zip archive.

Example:
```bash
zip archive.zip file1.txt file2.txt
```

Output: Creates a zip archive containing file1.txt and file2.txt.

## unzip

Usage: `unzip [OPTIONS] ZIPFILE [FILE...]`

- Extract files from a zip archive.

Example:
```bash
unzip archive.zip
```

Output: Extracts the contents of the archive.zip file.
---
# quick webserver with python

## python3 -m http.server

Usage: `python3 -m http.server [DIRECTORY] [OPTIONS]`

- Start a simple HTTP server.

Example:
```bash
python3 -m http.server
```

Output: Starts an HTTP server serving the current directory on port 8000.

## echo

Usage: `echo [STRING]`

- Print a string to the terminal.

Example:
```bash
echo "Hello, World!"
```

Output: Prints "Hello, World!" to the terminal.
---
## Bash Script Functions:

### for loop

Usage:
```bash
for VARIABLE in VALUE1 VALUE2 ... VALUE N
do
    # Commands to be executed
done
```

Example:
```bash
for i in 1 2 3 4 5
do
    echo "Number: $i"
done
```

Output:
```
Number: 1
Number: 2
Number: 3
Number: 4
Number: 5
```

### if statement

Usage:
```bash
if [ CONDITION ]
then
    # Commands to be executed if the condition is true
else
    # Commands to be executed if the condition is false
fi
```

Example:
```bash
if [ "$VAR" -gt 10 ]
then
    echo "Greater than 10"
else
    echo "Less than or equal to 10"
fi
```

Output:
```
Greater than 10
```

### while loop

Usage:
```bash
while [ CONDITION ]
do
    # Commands to be executed
done
```

Example:
```bash
i=1
while [ "$i" -le 5 ]
do
    echo "Number: $i"
    i=$((i+1))
done
```

Output:
```
Number: 1
Number: 2
Number: 3
Number: 4
Number: 5
```


---

# Network Related
Here are a few additional commands you can use to get the status of network interfaces:

1. **ifconfig**: Display the configuration and status of network interfaces (legacy command).
   Example:
   ```bash
   ifconfig
   ```

2. **ip**: Show detailed information about network interfaces and their addresses.
   Example:
   ```bash
   ip address show
   ```

3. **netstat**: Print network connections, routing tables, interface statistics, etc.
   Example:
   ```bash
   netstat -i
   ```

4. **ss**: Another utility to investigate sockets and display network connection details.
   Example:
   ```bash
   ss -s
   ```

5. **ethtool**: Query or control network driver and hardware settings.
   Example:
   ```bash
   ethtool eth0
   ```

6. **iwconfig**: Display the configuration of wireless network interfaces.
   Example:
   ```bash
   iwconfig wlan0
   ```

7. **nmcli**: Command-line tool for controlling NetworkManager.
   Example:
   ```bash
   nmcli device show
   ```

8. **lshw**: List hardware configuration, including network interfaces.
   Example:
   ```bash
   sudo lshw -C network
   ```

---
# Start or stop a network adapter

**Start Adapter:**
Using `ifconfig`:
```bash
sudo ifconfig <INTERFACE> up
```
Using `ip`:
```bash
sudo ip link set <INTERFACE> up
```
Replace `<INTERFACE>` with the name of the network interface you want to start.

**Stop Adapter:**
Using `ifconfig`:
```bash
sudo ifconfig <INTERFACE> down
```
Using `ip`:
```bash
sudo ip link set <INTERFACE> down
```
Again, replace `<INTERFACE>` with the name of the network interface you want to stop.

> The commands mentioned above may require root or superuser privileges (`sudo`) to execute. Make sure to use them with appropriate permissions.


---
# Firewall rules
 
The `ufw` (Uncomplicated Firewall) command is a front-end tool for managing firewall rules in Ubuntu and other Linux distributions. It provides a simplified and easy-to-use interface for configuring and managing the underlying iptables firewall.

Here's an explanation of the `ufw` command along with an example:

1. Check the Firewall Status:
To check the status of the firewall, you can use the `ufw status` command. It displays the current firewall rules and whether the firewall is enabled or disabled.

Example:
```bash
ufw status
```
This command will show the status of the firewall, including the active rules and the current firewall configuration.

2. Enable or Disable the Firewall:
To enable or disable the firewall, you can use the `ufw enable` and `ufw disable` commands, respectively.

Example:
```bash
ufw enable
```
This command enables the firewall and starts enforcing the configured rules.

```bash
ufw disable
```
This command disables the firewall and allows all incoming and outgoing traffic.

3. Allow or Deny Incoming Connections:
To allow or deny incoming connections for specific ports or services, you can use the `ufw allow` and `ufw deny` commands.

Example:
```bash
ufw allow 22/tcp
```
This command allows incoming SSH connections on port 22.

```bash
ufw deny 80/tcp
```
This command denies incoming connections on port 80.

4. Delete Firewall Rules:
To delete specific firewall rules, you can use the `ufw delete` command.

Example:
```bash
ufw delete allow 22/tcp
```
This command deletes the rule that allows incoming SSH connections on port 22.

5. Configure Default Policies:
You can set default policies for incoming and outgoing traffic using the `ufw default` command.

Example:
```bash
ufw default deny incoming
```
This command sets the default policy to deny all incoming traffic.

```bash
ufw default allow outgoing
```
This command sets the default policy to allow all outgoing traffic.

These are just a few examples of how to use the `ufw` command to manage firewall rules in Ubuntu and other Linux distributions. The `ufw` command provides many more options and features for fine-tuning your firewall configuration. You can refer to the `ufw` manual page by using the `man ufw` command for more detailed information and usage examples.