Title: 2017 April Fool's Day Summary & Solutions
Date: 2018-03-18 19:20
Slug: 2017-afpc-summary
Author: vehk

## Level 0
 - Clue: IyMjIyMjTlNRMjAxN0ZnbmVnLVBlbGNnYkFyamY=
 - The answer: `######AFD2017Start-CryptoNews` decoding the clue with base64, and then rot13

## Level 1
 - Clues: NFRHI4TENB4WC5DBMF2GWYY= | `1<<5`
 - From `1<<5`, participants were expected to arrive at base32
 - Decoding the first clue using base32 yields: `ibtrdhyataatkc`
 - Swapping each pair of letters results in `######birthdayattack`

## Level 2
 - Clues: Common Vulnerabilities and Exposures | Stocks
 - A quick Google search finds Cenovus Energy, of which the TSX and NYSE is `CVE`
 - The answer: `######CenovusEnergy`

## Level 3
 - Clues: 0154 0252 0158 0254 0236 0231 0239 0244 0250 0154 | ⎇ | http://i.imgur.com/hGNGTd8.png
 - Using the last two hints, people were expected to arrive at https://en.wikipedia.org/wiki/Alt_code
 - Looking up the alt codes results in `šüžþìçïôúš`
 - The answer: `######suspicious`

## Level 4
 - Clues: On light clouds of the upper zone, Pillows meet for our reclining, We may rest while day is shining. | https://i.imgur.com/XAyi8DY.png | CVE
 - The first clue is an excerpt of `Nimrod`,  a poem by Robert William Jameson
 - The second clue consists of the logo of Avira, a security software company - and a trailing m
 - Nimrod Aviram was one of the original reporters of the DROWN attack
 - The answer: `######CVE-2016-0800`

## Level 5
 - Clues: 1487289600 - 1487894400 | answer is rot13'd
 - The first clue consists of two dates, giving a range in which the Cloudbleed bug was discovered and discussed
 - The answer, after applying the second clue: `######PybhqOyrrq`

## Level 6
 - Clues: https://is.gd/gGJ0T0 | Append "Schneier" to solution | Sigma | Ouroboros | reverse, apply |
 - The first URL points to an image of a whirlpool
 - Participants were expected to realized the connection between what the image portrays and the WHIRLPOOL hashing algorithm
 - Experimentation, or applying the last few hints, was expected to lead to people looking at the WHIRLPOOL hash of the image itself
 - The answer: `######facadeSchneier`

## Level 7
 - Clues: 31.198056, 121.336389 | https://is.gd/HJJX2m | Ш | Append "Blue" to solution | family
 - Each of the first three clues resolves to `SHA`
 - Three SHAs, or SHA-3
 - Hunting on wikipedia for SHA-3 was expected to lead people to Keccak, a cryptographic primitive family
 - The answer: `######keccakBlue`

## Level 8
 - Clues: Tq\uGTwqtt | Append "ShakeIt" to solution | pattern
 - Converting the first hint into a stream of bits results in morse code (in the form of 1-bits interspersed between 0-bits)
 - The answer, after applying the second hint: `######StubbornShakeIt`

## Level 9
 - Clues: ######quadrooter | sms | Международная организация по стандартизации
 - The quadrooter channel linked to the music video of Call Me Maybe
 - Players were expected to type `quadrooter` on a mobile phone keyboard
 - The answer: `######778823777666666833777`

## Level 10
 - Clues: https://is.gd/qLde0I | Hertz
 - The URL pointed to an audio file
 - Examining the spectrogram of said file was expected to make people realize they were looking at bytes
 - The least significant bit is represented by a frequency around 1.9kHz, whilst the most significant bit is
   represented by a frequency around 7.5kHz
 - Decoding the bytes as ASCII leads to: `BerenstainBears`
 - The answer: `######BerenstainBears`

## Level 11
 - Clues: https://is.gd/b9oNHn | free speech
 - Each colour of the flag corresponds to three ASCII characters (one per colour channel), plus a final character at the end
 - The answer: `######CouNTEriNtUiTIvE`

## Level 12
 - Clues: E7 D2 C3 C4 40 C3 D3 C9 C9 C9 | xkcd.com/927 | ♫
 - The bytes given as the first clue were expected to be interpreted as EBCDIC
 - This yields `XKCD CLIII` - https://www.xkcd.com/153/
 - The comic in question contains a reference to Missy Elliott
 - Players were expected to hit search engines and come up with...
 - The answer: `######WorkIt`

## Level 13
 - Clues: KPCfjoIzMiAtIENWRS0tKSArICjwn5Kp8J+QhCAtIENWRS0tKQo= | arithmetic
 - Decoding the first clue using base64 results in `(🎂32 - CVE--) + (💩🐄 - CVE--)`
 - The emoji hint at Sweet32 and Dirty COW
 - Corresponding CVEs are 2016-2183 and 2016-5195
 - Using the last hint, people were expected to add 20162183 and 20165195, resulting in...
 - The answer: `######40327378`

## Level 14
 - Clues: https://is.gd/VXqYzD | 字 | ローマ字
 - The linked picture is a nonogram - solving it results in the kanji 没: drown
 - The second and third clue (字: character/word, ローマ字: romanization) hint at the Japanese translation for drown
 - The answer: `######oboreru`

## Level 15
 - Clues: MSAyIDIgMSAxIDIgMiAyIDMgMCAxIDIKMiAzIDAgMyAzIDEgMyAxIDEgMyAyIDEKMiAwIDAgMiAyIDAgMiAwIDAgMSAwIDIK | touch | ⚅ | U+2800
 - Decoding the first clue using base64 yields:
   ```
   1 2 2 1 1 2 2 2 3 0 1 2
   2 3 0 3 3 1 3 1 1 3 2 1
   2 0 0 2 2 0 2 0 0 1 0 2
   ```
 - Converting each number into binary form:
   ```
   01 10 10 01 01 10 10 10 11 00 01 10
   10 11 00 11 11 01 11 01 01 11 10 01
   10 00 00 10 10 00 10 00 00 01 00 10
   ```
 - The last three hints were expected to lead people to try decoding the bits as braille
 - The answer: `######marc.stevens`
