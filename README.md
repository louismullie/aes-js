##aes-js

A fast and super-slim Javascript implementation of AES in ECB and CTR modes.

###Warning

If you are looking for a generic AES encryption library, this is probably not what you are looking for. If you  do not have a good reason for using ECB or CTR, or if you don't know what that means, **do not** use this library. Instead, use the well-reviewed [SJCL](https://github.com/bitwiseshiftleft/sjcl) library.

###Features

* Based on well-reviewed AES implementation (SJCL).
* Compatible with OpenSSL and NIST test vectors.
* Extremely portable (230 loc, 3 kb compressed).
* Provides helpers to convert string to bytes and back.

###Usage

**ECB mode**

```javascript

var key = AES.Codec.strToWords("a non secret key"),
    block = AES.Codec.strToWords("a non secret msg");

cipher = new AES.ECB(key);

cipher.encrypt(block);

```

**CTR mode**

```javascript

var key = AES.Codec.strToWords("a non secret key"),
    iv = AES.Codec.strToWords("a non secret iv"),
    block = AES.Codec.strToWords("a non secret msg");

cipher = new AES.CTR(key, iv);

cipher.encrypt(block);

```

###License

This code is licensed under the GPL v3.