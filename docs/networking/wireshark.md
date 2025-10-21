---
title: Wireshark
---

Wireshark is a powerful open-source network protocol analyzer used for capturing, inspecting, and analyzing network traffic in real time. It is widely used by network engineers, security professionals, and developers for troubleshooting, protocol analysis, and network forensics.

### Packet Flow Graph

```sh
[Your Device] <---> [Switch/Router] <---> [Internet]
        |                   |
   [Wireshark]         [Wireshark]
(Capturing traffic) (Capturing traffic)
```

Wireshark can capture traffic on any device/interface where it is installed and has the necessary permissions.

### Commands

```sh
sudo tshark -i en0 -f "tcp port 21" -w packet_capture.pcap
```

```sh
sudo tcpdump -i en0 icmp
```

### Useful Links

- [Wireshark User Guide](https://www.wireshark.org/docs/wsug_html_chunked/)
- [Wireshark Display Filter Reference](https://wiki.wireshark.org/DisplayFilters)
- [Wireshark Sample Captures](https://wiki.wireshark.org/SampleCaptures)
