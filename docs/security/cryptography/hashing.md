---
title: Hashing
---

Hashing is a process that takes input data and produces a hash value, a fixed-size string of characters, also referred to as digest. This hash value uniquely represents the data, and any change in the data, no matter how small, should lead to a change in the hash value. Hashing should not be confused with encryption or encoding; hashing is one-way, and you can’t reverse the process to get the original data. It helps protect data’s integrity and ensure password confidentiality.

### Hash Functions

| Algorithm | Output Size | Security      | Typical Use                 |
| --------- | ----------- | ------------- | --------------------------- |
| [MD5](https://en.wikipedia.org/wiki/Md5sum)       | 128-bit     | Weak          | Checksums, legacy systems   |
| [SHA-1](https://en.wikipedia.org/wiki/SHA-1)     | 160-bit     | Weak/Moderate | Legacy digital signatures   |
| [SHA-256](https://en.wikipedia.org/wiki/SHA-2)   | 256-bit     | Strong        | Modern security, blockchain |
| [SHA-3](https://en.wikipedia.org/wiki/SHA-3)     | 224-512-bit | Strong        | Next-gen secure hashing     |
| Argon2 | Memory-hard | Strong        | Password hashing            |
| Scrypt | Memory-hard | Strong        | Password hashing            |
| Bcrypt  | Adaptive    | Strong        | Password hashing            |
| PBKDF2  | Adaptive    | Strong        | Password hashing            |
| yescrypt | Memory-hard | Strong        | Password hashing            |

### Hashing Commands

```sh
md5sum filename.txt        # Generate MD5 hash
sha1sum filename.txt       # Generate SHA-1 hash
sha256sum filename.txt     # Generate SHA-256 hash
sha512sum filename.txt     # Generate SHA-512 hash
openssl dgst -sha256 filename.txt  # Generate SHA-256 hash using OpenSSL
sha3sum -a 256 filename.txt  # Generate SHA-3-256 hash
```

### Password Cracking

You can’t “decrypt” password hashes. They’re not encrypted. You have to crack the hashes by hashing many different inputs (such as rockyou.txt as it covers many possible passwords), potentially adding the salt if there is one and comparing it to the target hash. Once it matches, you know what the password was. Tools like [Hashcat](https://hashcat.net/hashcat/) and [John the Ripper](https://www.openwall.com/john/) are commonly used for these purposes.

```sh
hashcat -m <hash_type> -a 0 target_hash.txt wordlist.txt
john --wordlist=wordlist.txt --format=<hash_type> target_hash.txt
```

### Links

- [Crack Station](https://crackstation.net/) - CrackStation uses massive pre-computed lookup tables to crack password hashes. These tables store a mapping between the hash of a password, and the correct password for that hash.
- [Python Library hashID](https://pypi.org/project/hashID/) - A tool to identify the different types of hashes used to encrypt data.
- [Online Hash Tools](https://emn178.github.io/online-tools/) - A collection of simple, free, and easy-to-use online hash tools.
- [TryHackMe Hashing Basics](https://tryhackme.com/room/hashingbasics)
- [What is Hashing?](https://www.codecademy.com/resources/blog/what-is-hashing)
- [Hash Algorithm Comparison](https://shautils.com/hash-algorithm-comparison)
- [Hashcat Examples Hashes](https://hashcat.net/wiki/doku.php?id=example_hashes)
- [GnuPG (GPG)](https://gnupg.org/) - A complete and free implementation of the OpenPGP standard for encrypting and signing data.
- [OpenSSL](https://www.cryptool.org/en/cto/openssl/) - Command-line crypto toolkit (`openssl dgst`, `openssl genpkey`)
- [Hashcat](https://hashcat.net/hashcat/) - A powerful password recovery tool supporting various hash algorithms.
- [John the Ripper](https://www.openwall.com/john/) - A fast password cracker with support for many hash types.
