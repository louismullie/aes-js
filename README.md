## aes-js

A fast and super-slim Javascript implementation of AES in ECB and CTR modes. **Warning:** this library should not be considered cryptographically secure.

### Warning

_If you are looking for a generic AES encryption library, this is probably not what you are looking for. If you  do not have a good reason for using ECB or CTR, or if you don't know what that means, **do not** use this library. Instead, use the [SJCL](https://github.com/bitwiseshiftleft/sjcl) library and the AES-CCM mode of operation._

### Features

* Based on well-reviewed AES implementation (SJCL).
* Uses 32-bit words internally for maximal JS performance.
* CTR mode compatible with OpenSSL and NIST test vectors.
* Extremely portable (230 loc, 3 kb compressed).
* Provides helpers to convert string to bytes and back.

### Usage

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

### License

This code is licensed under the BSD license. Most of the code comes from the [SJCL implementation](https://github.com/bitwiseshiftleft/sjcl/blob/master/core/aes.js) of AES, which is (c) Emily Stark, Mike Hamburg, Dan Boneh, Stanford University 2008-2010 and BSD-licensed.
