---
title: Wireshark
---

[Wireshark](https://www.wireshark.org/) is a powerful open-source network protocol analyzer used for capturing, inspecting, and analyzing network traffic in real time.

### Commands

```sh title="Capture FTP traffic on interface en0 and save to packet_capture.pcap"
sudo tshark -i en0 -f "tcp port 21" -w packet_capture.pcap
```

```sh title="Read and analyze a previously saved packet capture file"
sudo tcpdump -i en0 icmp
```

### Useful Links

- [Wireshark Website](https://www.wireshark.org/) ([GitLab](https://gitlab.com/wireshark/wireshark/)) - Official website for downloading Wireshark and accessing resources.
- [Wireshark Wiki](https://wiki.wireshark.org/) - Comprehensive resource for Wireshark users.
- [Wireshark User Guide](https://www.wireshark.org/docs/wsug_html_chunked/) - Official user guide for Wireshark.
- [TryHackMe Wireshark Room](https://tryhackme.com/room/wiresharkthebasics) - An interactive learning room focused on Wireshark basics.
- [PyShark](https://github.com/KimiNewt/pyshark) - A Python wrapper for tshark, allowing for easy packet parsing and analysis in Python scripts.
- [Termshark](https://github.com/gcla/termshark) - A terminal UI for Wireshark using TShark.
