---
title: HTTP
---

When you fire up your [browser](/web/browsers/), you mainly use [Hypertext Transfer Protocol (HTTP)](https://developer.mozilla.org/en-US/docs/Web/HTTP) and HTTPS (S stands for Secure) protocols. This protocols relies on [TCP (Transmission Control Protocol)](/networking/tcp) at [Transport Layer (Layer 4)](/networking#osi-model) and usually uses port 80 for HTTP and port 443 for HTTPS.

### Course

- [The HTTP Crash Course Nobody Asked For](https://fasterthanli.me/articles/the-http-crash-course-nobody-asked-for)

### Self-Host

- [Caddy](https://caddyserver.com/) - An easy-to-use web server with automatic HTTPS.
- [Nginx](https://www.nginx.com/) - A high-performance web server and reverse proxy server.
- [Apache HTTP Server](https://httpd.apache.org/) - A widely-used open-source web server.

### Tools

- [HTTPie](https://httpie.io/) ([GitHub](https://github.com/httpie/cli)) - A user-friendly command-line HTTP client.

### Status Codes

```sh
1xx: hold on
2xx: here you go
3xx: go away
4xx: you fucked up
5xx: I fucked up
```

### Methods used in HTTP

- **GET:** Requests data from a specified resource. It should not change the server state.
- **POST:** Submits data to be processed to a specified resource. It can change the server state.
- **PUT:** Uploads a representation of the specified resource. It can create or replace a resource.
- **DELETE:** Deletes the specified resource.

### Links

- [What is HTTP?](https://www.cloudflare.com/learning/ddos/glossary/hypertext-transfer-protocol-http/) - Cloudflare article explaining HTTP basics
