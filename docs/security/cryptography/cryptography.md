---
title: Cryptography
---

**Cryptography** is the science of protecting information by transforming it into an unreadable format that only authorised parties can understand. It uses mathematical algorithms and "keys" to scramble data, ensuring it remains secure while stored (at rest) or sent over a network (in transit).

## Types of Cryptography

| Types | How it works | Examples | Use Cases |
| ----- | ------------ | -------- | --------- |
| Symmetric | Uses a single shared key for both encryption and decryption. It is fast and ideal for large data sets. | AES, DES | Disk encryption, VPNs |
| Asymmetric | Uses a pair of keys: a Public key (to encrypt) and a Private key (to decrypt) | RSA, ECC, DSA | TLS, digital signatures, SSH, PGP |
| Hashing | A one-way function that creates a fixed-length "fingerprint" of data. It cannot be reversed to reveal the original message. | SHA-2, SHA-3, MD5(obsolete), SHA-1(obsolete) | Password storage, data integrity, digital signatures |

## Real-world use

- [HTTPS](https://en.wikipedia.org/wiki/HTTPS): Secures web browsing.
- [End-to-End Encryption](https://en.wikipedia.org/wiki/End-to-end_encryption): Used by apps like WhatsApp and Signal to ensure only you and the recipient can read messages.
- [Digital Signatures](https://en.wikipedia.org/wiki/Digital_signature): Verifies the authenticity of software updates and legal electronic documents.
- [Cryptocurrency](https://en.wikipedia.org/wiki/Cryptocurrency): Uses [blockchain technology](https://aws.amazon.com/what-is/cryptography/) and hashing to secure digital transactions without a central bank.
- [Password Storage](https://en.wikipedia.org/wiki/Password_manager): Systems store "hashes" of your password rather than the actual text to protect your login even if a database is breached.

### Ciphers

- [Caesar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher) - A substitution cipher where each letter is shifted by a fixed number.
- [Vigenère Cipher](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher) - A method of encrypting alphabetic text by using a simple form of polyalphabetic substitution.
- [The Enigma machine from World War II](https://en.wikipedia.org/wiki/Enigma_machine) - A complex electro-mechanical rotor cipher machine used by Nazi Germany.
- [The one-time pad from the Cold War](https://en.wikipedia.org/wiki/One-time_pad) - An encryption technique that cannot be cracked if used correctly, involving a random key that is as long as the message.

### Tools

- [dCode](https://www.dcode.fr/en) - Online cryptography tools for ciphers, hashes, and more.
- [CyberChef](https://gchq.github.io/CyberChef/) - A web app for encryption, encoding, and data analysis.
- [Cryptool](https://www.cryptool.org/en/cto/) - An open-source educational tool for learning cryptography concepts.
- [Hashcat](https://hashcat.net/hashcat/) - A powerful password recovery tool supporting various hash algorithms.
- [GnuPG (GPG)](https://gnupg.org/) - A complete and free implementation of the OpenPGP standard for encrypting and signing data.
- [OpenSSL](https://www.cryptool.org/en/cto/openssl/) - Command-line crypto toolkit (`openssl enc`, `openssl dgst`, `openssl genpkey`)
- **GPG:** File/email encryption and signing (`gpg --encrypt`, `gpg --sign`)

### Books

- [Introduction to Modern Cryptography: Third Edition](https://www.goodreads.com/book/show/42984446) - A comprehensive introduction to the principles and techniques of modern cryptography.

### Links

- [Hash, Cryptography, Encoding Online Tool](https://emn178.github.io/online-tools/) - An online tool for hashing, cryptography, and encoding/decoding.
- [GitHub Awesome Cryptography](https://awesomerank.github.io/lists/sobolevn/awesome-cryptography.html) - A curated list of cryptography resources, libraries, and tools.
- [TryHackMe Cryptography Basics](https://tryhackme.com/room/cryptographybasics) - A beginner-friendly introduction to cryptography concepts and techniques.
- [TryHackMe Public Key Cryptography](https://tryhackme.com/room/publickeycrypto) - A hands-on room focused on understanding public key cryptography.
- [TryHackMe Hashing Basics](https://tryhackme.com/room/hashingbasics) - Learn about hashing algorithms, their uses, and how to crack hashes.
- [Payment Card Industry Digital Security Standard (PCI DSS)](https://listings.pcisecuritystandards.org/documents/PCI_DSS_for_Large_Organizations_v1.pdf) - TLDR: You learn that the data should be encrypted both while being stored (at rest) and while being transmitted (in motion).
- [Cryptography Glossary - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/Cryptography) - A comprehensive glossary of cryptographic terms and concepts.
- [Crypto101](https://crypto101.io/) - An introductory book on cryptography, covering fundamental concepts and practical applications.
- [Practical Cryptography for Developers](https://cryptobook.nakov.com/)
- [OWASP Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)
- [NIST Cryptographic Standards](https://csrc.nist.gov/Projects/Cryptographic-Standards-and-Guidelines)
- [Python packages](https://github.com/vinta/awesome-python?tab=readme-ov-file#cryptography)
- [Practical Cryptography With Go](https://leanpub.com/gocrypto/read) - A practical guide to implementing cryptographic techniques using the Go programming language.
- [The Joy of Cryptography](https://joyofcryptography.com/) - An online book that explores the beauty and intricacies of cryptography.
- [Cipher](https://developer.mozilla.org/en-US/docs/Glossary/Cipher)
