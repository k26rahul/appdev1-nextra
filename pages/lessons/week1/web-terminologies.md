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

  - **Cross-platform**: Works on any OS, any device. Common interface for users.
  - **Efficiency**: Optimizes costs, storage, networking.

- **Evolution of Networks**

  - **Circuit-switched networks**: Direct path for calls. Inefficient.
  - **Packet-switched networks**: Data split into packets. Flexible routing.

- **Internet History**

  - **ARPANET**: Early network with incompatible protocols.
  - **Internet Protocol (IP)**: Standard communication method.
  - **TCP/IP**: Reliable data transfer.

- **DNS and Names**

  - **IP Addresses**: Unique numerical identifiers. Example: 192.168.1.1.
  - **DNS**: Translates domain names (e.g., google.com) to IP addresses.

- **Birth of the Web**

  - **Hypertext**: Text links to other documents.
  - **World Wide Web (WWW)**: Created by Tim Berners-Lee in 1989. Uses hyperlinks.

### L1.6: How does the Web work?

### L1.7: Simple Web Server

### L1.8: What is a Protocol?

### L1.9: Performance of a Website

### Tutorial 1.1: Application Development using Replit

### Screencast 1.1: How to serve HTML files on LAN?
