---
title: John The Ripper
---

[John the Ripper](https://www.openwall.com/john/) - password cracking software, autodetects password hash types, and includes a customizable cracker. It is primarily used to perform dictionary attacks and brute-force attacks on password hashes.

```sh
john --wordlist=rockyou.txt --format=<hash_type> target_hash.txt
```

To identify the hash type, use:

- [Hash Identifier Website](https://hashes.com/en/tools/hash_identifier)
- [Hash Identifier Tool](https://gitlab.com/kalilinux/packages/hash-identifier/-/tree/kali/master)

### Links

- [TryHackMe - John the Ripper Basics](https://tryhackme.com/room/johntheripperbasics) - An introduction to using John the Ripper.
- [John the Ripper Password Cracker](https://www.openwall.com/john/) - ([GitHub](https://github.com/openwall/john))
