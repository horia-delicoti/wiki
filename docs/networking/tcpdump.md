---
title: TCPDump
---

[TCPDump](https://www.tcpdump.org/) is a powerful command-line packet analyzer used for capturing and analyzing network traffic. It allows users to intercept and display packets being transmitted or received over a network to which the computer is attached.

### Commands

```sh title="Capture HTTP traffic on interface 'ens5', 5 packets, without resolving hostnames"
tcpdump -i ens5 -c 5 -n
```

```sh title="Capture TCP traffic on port 22 (SSH) on all interfaces"
tcpdump -i any tcp port 22
```

```sh title="Capture HTTPS traffic to and from example.com and save to https.pcap"
tcpdump -i eth0 host example.com and tcp port 443 -w https.pcap 
```

```sh title="Read packets from traffic.pcap and display only TCP RST packets"
tcpdump -r traffic.pcap 'tcp[tcpflags] == tcp-rst'
```

```sh title="Read packets from traffic.pcap and display ARP packets with link-level header(MAC addresses)"
tcpdump -r traffic.pcap arp -e
```

### Options Summary

```sh title="Basic packet capture"
-i <INTERFACE> # Captures packets on a specific network interface
-w <FILE>  # Writes captured packets to a file
-r <FILE>  # Reads captured packets from a file
-c <COUNT> # Captures a specific number of packets
-n         # Don’t resolve IP addresses
-nn        # Don’t resolve IP addresses and don’t resolve protocol numbers
-v         # Verbose display; verbosity can be increased with -vv and -vvv

example:
tcpdump -i eth0 -c 10 -w capture.pcap -n -v
```

```sh title="Filtering Expressions"
-host IP or tcpdump host HOSTNAME # Filters packets by IP address or hostname
-src host IP          # Filters packets by a specific source host
-dst host IP          # Filters packets by a specific destination host
-port PORT_NUMBER     # Filters packets by port number
-src port PORT_NUMBER # Filters packets by the specified source port number
-dst port PORT_NUMBER # Filters packets by the specified destination port number
-PROTOCOL             # Filters packets by protocol; examples include ip, ip6, and icmp

example:
tcpdump -i eth0 host <IP> port 80 PROTOCOL tcp # Capture TCP traffic to and from a specific host on port 80
tcpdump -i wlo1 udp port 123 # Capture NTP traffic on interface 'wlo1'
tcpdump -i eth0 host example.com and tcp port 443 -w https.pcap # Capture HTTPS traffic to and from example.com and save to https.pcap
tcpdump -i ens5 port 53 -n   # Capture DNS traffic on interface 'ens5' without resolving hostnames
tcpdump -i ens5 icmp -n      # Capture only ICMP traffic on interface 'ens5'
```

```sh title="Display Options"
-q  # Quick output; print brief packet information
-e  # Print the link-level header
-A  # Show packet data in ASCII
-xx # Show packet data in hexadecimal format, referred to as hex
-X  # Show packet headers and data in hex and ASCII

example:
tcpdump -i eth0 -c 5 -n -q -e        # Capture 5 packets on interface 'eth0' without resolving hostnames, with quick output, including MAC addresses
```

### Links

- [TCPDump Official Website](https://www.tcpdump.org/) ([GitHub](https://github.com/the-tcpdump-group/tcpdump)) - Official website for downloading TCPDump and accessing resources.
- [TryHackMe TCPDump Room](https://tryhackme.com/room/tcpdump) - An interactive learning room focused on TCPDump basics.
