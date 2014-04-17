describe('AES', function () {
  
  var testStr = 'Mary had a little key.';
  
  it ('AES.Codec.strToBytes - should encode utf8 to bytes', function () {
    
    expect(AES.Codec.strToWords(testStr)).toEqual(
      [1298231929, 543711588, 543236204, 1769239660, 1696623461, 17594219102208]);
    
  });
  
  it ('AES.Codec.strToWords - should reject non-string input', function () {
    
    expect(function () { AES.Codec.strToWords(0); }).toThrow();
    
  });
  
  it ('AES.Codec.wordsToStr - should decode bytes to utf8', function () {
    
    var testWords = [1298231929, 543711588, 543236204, 1769239660, 1696623461, 17594219102208];
    
    expect(AES.Codec.wordsToStr(testWords)).toEqual(testStr);
    
  });
  
  it ('AES.Codec.wordsToStr - should reject non-array input', function () {
    
    expect(function () { AES.Codec.wordsToStr(0); }).toThrow();
    
  });
  
  it ('AES.ECB - should initialize a new AES cipher in ECB mode', function () {
    
    var key = [745595179, 2047231737, 578417703, -944533901],
        block = [980332665, 255437959, -917555114, -1294128035];
    
    var cipher = new AES.ECB(key);
    
    expect(cipher.encrypt(block)).toEqual(
      [-1598498949, 1386161378, 1470041745, 325501824] );
    
  });
  
  
  it ('AES.CTR - should initialize an AES cipher in CTR mode', function () {
  
    var key = [729683222, 682545830, -1409870456, 164581180],
        iv = [-252579085, -185207049, -117835013, -50462977],
        pt1 = [1807859426, 775987094, -381845999, 1939019562],
        expected = [-2024971887, -1239358682, 468674660, -1727154482];
    
    var cipher = new AES.CTR(key, iv),
        result = cipher.encrypt(pt1);
    
    expect(result).toEqual(expected);
    
  });
  
});