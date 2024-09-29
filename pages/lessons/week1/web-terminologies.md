# Web Terminologies

### L1.1: What is an App?

- **I. Introduction to Applications**
  - App: software/program.

- **II. Types of Applications**
  - **Desktop Applications**
    - Windows, macOS, Linux.
    - Keyboard, mouse, big screen.
    - Files and folders paradigm.
    - Notepad, VS Code, Chrome, VLC, Spotify.

  - **Mobile Applications**
    - Android, iOS.
    - Apps downloaded from app stores (Play Store, Apple App Store).
    - Constraints: memory, processing power, battery, screen space.
    - Spotify Android App (Play Store).

  - **Web Applications**
    - Dynamic and interactive.
    - Runs on browsers (Chrome, Firefox, Safari, Edge, Opera).
    - Common platform across OS; best for cross-platform.
    - Easy to code (HTML, CSS, JavaScript); easy to distribute (URL).
    - Requires server maintenance; servers can be expensive.
    - Spotify Web App (open.spotify.com).

  - **Embedded Applications**
    - Runs on specific devices.
    - Smart fridge, Smart TV, Smart POS systems, digital car dashboards.

- **III. Development Frameworks**

  - **Libraries**
    - Collection of utilities, functions, tools.
  - **Frameworks**
    - All-in-one package with architectural principles.
  - **SDKs**
    - Similar to frameworks but on a larger scale.

  - Libraries, frameworks, SDKs help developers focus on priorities, avoiding low-level details.

- **IV. User Interaction**

  - **Graphical User Interface (GUI)**
    - Uses mouse, touch, icons, buttons.
  - **Command Line Interface (CLI)**
    - Terminal for commands.
  - **Other Interaction Mechanisms**
    - Voice, gestures.

- Apps may require network to communicate with servers. Example: WhatsApp needs internet; a calculator doesn't.

### L1.2: Components of an App

- **Storage (Model)**

  - Where data is stored (cloud, local).
  - Gmail uses cloud storage.

- **Computation (Controller)**

  - Manipulating data.
  - Sort, filter, edit, delete, search on emails.

- **Presentation (View)**

  - Displaying data to users.
  - Formatting, rendering emails.
  - Sometimes in the form of audio (voice systems).

### L1.3: Client-Server and Peer-to-Peer Architecture

- **Client-Server Architecture**

  - Components: server, clients, network.
  - Server stores data, responds to requests.
  - Clients request data based on user interactions.
  - Network connects clients to server.
  - Examples:
    - Web servers: serve content to clients.
    - Email servers: store emails; clients display them.
    - Database servers: provide data to client applications.
    - Gmail Android app: client displays emails stored on the server.
    - Browsers: clients that request and display web content.

- **Peer-to-Peer Architecture**

  - All nodes are peers, no central server.
  - Tolerant to failures.
  - Examples:
    - BitTorrent: file sharing.
    - Blockchain: distributed trust systems.
    - IPFS: distributed file systems.
    - WebRTC: enables peer-to-peer real-time communication.

- **Request and Response**

  - **Request**: Info about what client wants.
  - **Response**: Providing what was requested.
  - Both have:
    - **Headers**: Metadata (key-value pairs).
    - **Body**: Actual content.

- **Network Types**

  - **Local Network (WiFi)**: 192.168.x.x. Only works within your WiFi. Devices have local addresses for communication (e.g., live server pages on mobile).
  - **Internet IP Address**: Provided by ISP. Used for global internet access.
  - **IPv4/IPv6**: Address formats (IPv4: 255.255.255.255, IPv6: long hexadecimal string).
  - **Loopback Address (127.0.0.1 or ::1)**: Localhost, points to the same machine.
  - **Machine Clients**: Windows update software, antivirus software.

### L1.4: Software Architectures

- **Design Patterns**
  - Reusable solutions to common software problems.

- **MVC (Model-View-Controller)**
  - **Model**: Storage part of application (e.g., emails, messages, files).
    - Stored in database or memory.

  - **View**: Presentation part of application.
    - Multiple views for the same data.
    - Can be audio or other formats.

  - **Controller**: Business logic part of application.
    - Manages user interactions.
    - Manipulates model (e.g., sort, delete).

  - **Feedback Loop**
    - User manipulates model via controller.
    - Controller updates view.

    ```
    +-------------+
    |    View     |
    +-------------+
          ↑
          | Updates
          |
    +-------------+
    | Controller  |
    +-------------+
          |
          | Manipulates
          ↓
    +-------------+
    |    Model    |
    +-------------+
    ```

- **Origins of MVC**
  - Developed in Smalltalk (1979).
  - Separates concerns in complex apps.

- **Alternatives to MVC**
  - Other patterns (Model View Adapter, Model View Presenter).

- **Course Focus**
  - Web-based app development.
  - Client-server architecture.
  - MVC.

### L1.5: Introduction to the Web

- Introduction to the web as a platform, historical context, and networking concepts.

- **Cross-platform**: Works on any OS, any device. Common interface for users. Access from anywhere.

- **Evolution of Networks**

  - **Circuit-switched networks**: Dedicated path between sender and receiver. Used in early phone systems. Wastes resources when not in use.
  - **Packet-switched networks**: Data split into packets (header + body). More efficient. Packets take different routes and reassemble at the destination.

- **Internet History**

  - **ARPANET**: Developed by universities and military (e.g., CERN). First successful packet-switched network.
  - **Internet**: Global network of networks. Unified under common protocols (IP).
  - **Internet Protocol (IP)**: Defines how devices communicate; splits data into packets.
  - **TCP/IP**: Ensures reliable data transfer. TCP handles packet sequencing, retries; IP handles addressing and routing.
  - **UDP**: Faster but less reliable. Used in live streams, gaming where speed is priority.

- **DNS and Names**

  - **IP Addresses**: Unique identifiers for devices (IPv4: 32-bit, 0-255; IPv6: newer format for growing number of devices).
  - **DNS**: Like a phonebook for the internet. Maps human-friendly names (e.g., google.com) to IPs. IPs can change without affecting users.

- **Birth of the Web**

  - **Hypertext**: Text with clickable links to other documents. Foundation of the web.
  - **World Wide Web (WWW)**: Created by Tim Berners-Lee in 1989. Made the internet usable by everyone. Combines hyperlinks, browsers, and URLs.


### L1.6: How does the Web work?


- **Servers**: Computer programs that listen on specific ports, handle requests, and send responses. They run continuously, waiting for clients.

- **Ports**: Like doors in a house (with IP as the address). Each port handles a different service (e.g., HTTP on port 80, HTTPS on port 443).

- **Protocols**: Define how clients request and servers respond. Both agree on a protocol for communication. Example: **HTTP** (Hypertext Transfer Protocol) for web traffic.

- **IANA (Internet Assigned Numbers Authority)**: Manages global IP address allocation, DNS root zones.

- **RIRs (Regional Internet Registries)**: Distribute IP addresses in regions (e.g., ARIN for North America, RIPE for Europe, APNIC for Asia-Pacific).

- **ISPs (Internet Service Providers)**: Provide internet access to users. They assign IPs from RIR pools. Examples: Jio and Airtel in India.

- **Submarine Cables**: Fiber optic cables under oceans. Carry 99% of global data traffic. Connect continents for faster data transfer.

- **What Happens When You Enter google.com**:
  
  1. **DNS Lookup**: Browser queries DNS to get Google’s IP.
  2. **Packet Journey**: Data packet created with your IP and Google’s IP in header.
  3. **Routing**: Packet hops through routers, possibly across oceans via submarine cables.
  4. **Google Server**: Receives request, processes it, and sends back data.
  5. **Receive and Display**: Browser renders webpage after receiving data packets.

- **Hops**: Each router packet passes through is called a hop. More hops mean longer delays. Traceroute shows the path packets take.

### L1.7: Simple Web Server

- **Creating Servers**:
  1. `python -m http.server`: Serves files, shows directory listing if no index file.
  2. Lecture server: Uses Netcat (Linux) for simple communication.

- **Clients**:
  1. **Chrome**: Web browser for accessing content.
  2. **curl (PowerShell)**: Windows terminal tool; doesn't work with lecture server.
  3. **curl (Git Bash)**: Error encountered with lecture server.
  4. **curl (Ubuntu in WSL)**: Successfully connects to the lecture server.
  5. **Postman**: Software for testing APIs, user-friendly interface.

- **Content-Type**: `text/html` indicates HTML content in the body. 
  - **MIME Type**: Format is type/subtype (e.g., `text/html`, `image/png`); `*/*` means any type.

- **HTTP Request Example**:
  - **Line 1**: `GET /music-app/trending.html HTTP/1.1`
    - **Method**: GET
    - **Path**: `/music-app/trending.html`
    - **HTTP Version**: HTTP/1.1

- **Netcat**: Known as "nc." Tool for device communication over the internet.

- **Terminals**:
  - **PowerShell**: Windows built-in terminal.
  - **Git Bash**: Lightweight Linux-like terminal for Git.
  - **MSYS2**: Full-scale Linux environment (virtual).

- **User-Agent Example (Chrome)**:
  - `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36`

- **curl Request Analysis**:
```bash
$ curl -v localhost:8000/msg.txt
* Host localhost:8000 was resolved.
* IPv6: ::1
* IPv4: 127.0.0.1
*   Trying [::1]:8000...
* Connected to localhost (::1) port 8000
* using HTTP/1.x
> GET /msg.txt HTTP/1.1
> Host: localhost:8000
> User-Agent: curl/8.10.1
> Accept: */*
>
* HTTP 1.0, assume close after body
< HTTP/1.0 200 OK
< Server: SimpleHTTP/0.6 Python/3.12.6
< Date: Sun, 29 Sep 2024 12:41:16 GMT
< Content-type: text/plain
< Content-Length: 44
< Last-Modified: Sun, 29 Sep 2024 12:40:58 GMT
<
Hello Vidu, You are Rahul's favorite person.
* Connection closed.
```

- **Request Headers**:
  - **Host**: `localhost:8000`
  - **User-Agent**: `curl/8.10.1`
  - **Accept**: `*/*`

- **Response Headers**:
  - **HTTP/1.0 200 OK**: Indicates success.
  - **Server**: `SimpleHTTP/0.6 Python/3.12.6`
  - **Date**: `Sun, 29 Sep 2024 12:41:16 GMT`
  - **Content-Type**: `text/plain`
  - **Content-Length**: `44`
  - **Last-Modified**: `Sun, 29 Sep 2024 12:40:58 GMT`

- **Response Body**:
  - `Hello Vidu, You are Rahul's favorite person.`

### L1.8: What is a Protocol?

- **Definition**: Set of rules for communication between devices.

- **HTTP Methods**:
  - **GET**: Retrieve data; data in URL.
  - **POST**: Send data to server.
  - **PUT**: Update existing data.
  - **DELETE**: Remove data.
  - **PATCH**: Partially update data.

- **CRUD Example**: Messaging context (Create, Read, Update, Delete).
  - `/messages`: Retrieve messages.
  - `/messages/:id`: Get specific message.
  - `/messages`: Create message (POST).
  - `/messages/:id`: Update message (PUT).
  - `/messages/:id`: Delete message (DELETE).

- **HTTP Versions**:
  - **HTTP/1.1**: Standard version; persistent connections.
  - **HTTP/2**: Multiplexing, binary protocol for performance.
  - **HTTP/3**: Based on QUIC; faster, reliable connections.

- **Web Generations**:
  - **Web 1.0**: Static content; read-only web.
  - **Web 2.0**: Interactive content; user-generated data, social media.


### L1.9: Performance of a Website

- **Latency**: Data travels at light speed. 1000 km in 5 ms. If server is 10,000 km away, request takes 50 ms; same for response. Total round-trip time (RTT) = 100 ms. Client can send 10 requests per second. More distance = higher RTT, fewer requests.

- **Bandwidth**: If a request is 150 KB and you want to serve 1 million users, needed bandwidth = 1 million * 150 KB = 150,000,000 KB = 150 GB. Measures data transfer rate to/from server.

- **Memory**: For 1 crore (10 million) users watching IPL live, if each uses 5 MB, total RAM required = 10 million * 5 MB = 50,000,000 MB = 50,000 GB = 50 TB.

- **Server Hardware**: Requires powerful processors and cooling systems for optimal performance.

### Tutorial 1.1: Application Development using Replit

- Create HTML files in VS Code.
- Use Live Server extension to launch.

### Screencast 1.1: How to Serve HTML Files on LAN?

- Run `ipconfig` to get local IP.
- Open local IP on phone.
- Access live server on phone.

