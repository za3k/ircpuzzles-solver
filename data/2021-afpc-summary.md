Title: 2021 April Fool's Puzzle Competition Summary & Solutions
Date: 2023-04-23 10:00
Slug: 2021-afpc-summary
Author: za3k

<style>
details {
    margin-left: 1em;
}
details > summary {
    margin-left: -1em;
}
span.hint {
	width: 30em;
	width: min(30em, 100%);
	font-size: 12pt;
	display: inline-block;
	margin-bottom: 2px;
}
span.hint, span.hint a {
	color: transparent; /* for emoji */
	background-color: black;
}
span.hint code {
    visibility: hidden;
}
span.hint:hover code {
    visibility: visible;
}
span.hint:hover, span.hint:hover a {
	color: white;
	background-color: black;
}
</style>

Here are the puzzles, hints, and answers for the 2021 April Fools Puzzle Contest on #ircpuzzles on libera IRC.
Hints were gradually revealed throughout the contest. Expect to need them to finish.

This year's theme was "Cryptography".

### Level 00: #ircpuzzles entry point

Clues(s):

- d2hhdGlzYWtleQ==
- Except for Level 01, all spaces are to be replaced with ""

<details><summary>Answer</summary>
    The password to the next level is "whatisakey"
</details>

<details markdown="1"><summary>Walkthrough</summary>

The clue is [Base64](https://en.wikipedia.org/wiki/Base64) encoded. Running it through a decoder such as `base64 -d` gives:

> whatisakey

The answer is `whatisakey`.

</details>

### Level 01

Clues(s):

- I2yfoTyuoFOTVRMlnJIxoJShPt==

Hint(s):

- <span class="hint">i could go for a salad first...</span>

<details><summary>Answer</summary>
    The password to the next level is "williamffriedman"
</details>

<details markdown="1"><summary>Walkthrough</summary>

Running the clue through [ROT13](https://en.wikipedia.org/wiki/ROT13) gives:

> I2yfoTyuoFOTVRMlnJIxoJShPt==

Running that through `base64 -d` gives:

> William F Friedman

[William F Friedman](https://en.wikipedia.org/wiki/William_F._Friedman) was a US Army cryptographer, hinting at the theme, cryptography.

The answer is `williamffriedman`.

</details>

### Level 02

Clues(s):

- dgffg afgdg afaaf adgdx xxdgg gxgaf gaaxx aggxx dxxfd dggaa dxdda agaff dxadx xaddf aaaaa fgdaa afaaa aaada gxgaa fggfg xfgg

Hint(s):

- <span class="hint">the theme is key here - 1/2</span>
- <span class="hint">abc...</span>

<details><summary>Answer</summary>
    The password to the next level is "GabrieldAramon"
</details>

<details markdown="1"><summary>Walkthrough</summary>

5-letter groupings are common in crypto--we can ignore the spaces as irrelevant.

This is an [ADFGX cipher](https://en.wikipedia.org/wiki/ADFGVX_cipher), a Playfair variant.

Using the base grid (no rearrangement) and the key "CRYPTO", we decrypt the above to:

> gabrieldeluetzbaronetseigneurdaramonetdevallabregues

or

Or [Gabriel de Luetz, Baron et Seigneur d'Aramon et de Vallabregues](https://en.wikipedia.org/wiki/Gabriel_de_Luetz). Also known as Gabriel d'Aramon.

The answer is `gabrieldaramon`.

</details>

### Level 03

Clues(s):

- [image #1](https://files.ircpuzzles.org/2021/oldstyle_qQ8gFffEM9iaTLCs.jpg)

<details><summary>Answer</summary>
    The password to the next level is "AthanasiusKircher"
</details>

<details markdown="1"><summary>Walkthrough</summary>

The page is from the [Voynich Manuscript](https://en.wikipedia.org/wiki/Voynich_manuscript), but a reverse image search shows the brighter text on the bottom-left has been added.

The "First Study Group", led by the previously mentioned William F. Friedman, devised an [ASCII equivalent](https://en.wikipedia.org/wiki/Voynich_manuscript#/media/File:Voynich_EVA.svg) for the text. The added text would read:

> nothing is / more beautiful / than to kno(u/w) all

A quote by `AthanasiusKircher`.

</details>

### Level 04

Clues(s):

- 1.2#2.3#2.3#1.1#3.1#1.4#2.1#1.1#2.1#2.1#2.2#1.2#1.1#2.1#4.3#3.1#2.1#1.1#1.1#1.2#1.1#2.1#1.1#1.1#3.1#2.1#3.1#1.1#3.2#2.1#2.1#1.3#1.1#3.1#1.3#

Hint(s):

- <span class="hint">1H1E2L1O</span>
- <span class="hint">fold(1)</span>
- <span class="hint">Improved in 2013</span>
- <span class="hint">The encoding is a clue</span>

<details><summary>Answer</summary>
    The password to the next level is "breach"
</details>

<details markdown="1"><summary>Walkthrough</summary>

The message is run-length encoded. The clue, 1H1E2L1O means "1H, 1E, 2L's, 1O". It decompresses as:

> HELLO

The full message decompresses as:

> .##..###..###.#...#.####..#.#..#..#..##.##.#..#....###...#..#.#.#.##.#..#.#.#...#..#...#.#...##..#..#.###.#...#.###

The length is 115 or 5x23 characters. Reshaping it into a rectangle (for example with the unix tool `fold(1)`) gives:

```
.##..###..###.#...#.###
#..#.#..#..#..##.##.#..
#....###...#..#.#.#.##.
#..#.#.#...#..#...#.#..
.##..#..#.###.#...#.###
```

[CRIME](https://en.wikipedia.org/wiki/CRIME) is a security vulnerability against encrypted protocols like HTTPS that use compression.

[BREACH](https://en.wikipedia.org/wiki/BREACH) is a variant attack of CRIME. The answer is `BREACH`.

</details>

### Level 05

Clues(s):

- [disco.ogg](https://files.ircpuzzles.org/2021/disco_55c8jPxXdoJ2VLSj.ogg) (or the identical [disco.ogv](https://files.ircpuzzles.org/2021/disco_cFWzuaZnkEtzd2PY.ogv) )

Hint(s):

- <span class="hint">Hut</span>
- <span class="hint">Person</span>
- <span class="hint">JPL knows the answer</span>
- <span class="hint">`<1>`ian from the land of `<2>` `<3>` worked in `<DMS>`</span>

<details><summary>Answer</summary>
    The password to the next level is "LeslieHarrisonLambert"
</details>

<details markdown="1"><summary>Walkthrough</summary>

The audio clip is 4.643 seconds of mono audio. It's in [Vorbis](https://en.wikipedia.org/wiki/Vorbis) audio format inside an [Ogg](https://en.wikipedia.org/wiki/Ogg) file. Sounds funky.

```
$ ogginfo disco_55c8jPxXdoJ2VLSj.ogg
...
User comments section follows...
        ARTIST=ircpuzzles
        TITLE=Disco
        DATE=2021
        GENRE=Crypto
        COMMENTS=There's no hint in here, but have an easter egg instead.
Vorbis stream 1:
        Total data length: 159698 bytes
        Playback length: 0m:04.643s
...
```

OK, great. Let's convert that to a spectrogram.

```
ffmpeg -i disco_55c8jPxXdoJ2VLSj.ogg -f s16le -acodec pcm_s16le - | specgram --live

ffmpeg -i ~/Downloads/disco_55c8jPxXdoJ2VLSj.ogg -f s16le -acodec pcm_s16le - | specgram -f 2048 -g256 spectrogram.jpg
```

![spectrogram](https://files.ircpuzzles.org/2021/spectrogram.jpg)

This code is the same as the one from the [Perseverance rover parachute](https://en.wikipedia.org/wiki/Perseverance_(rover)#Parachute_with_coded_message).

In Perseverance the codes read counter-clockwise in binary. We'll treat bright green as 1 and dark blue as 0.

Reading clockwise instead, the binary patterns are:

- Inner:  1111111111 1111111111 0000001101 0000000001 0000000111 0000001001 0000000011 0001111111
- Middle: 0000000010 0000001001 0000001110 0001111111 1111111111 1111111111 0000010010 0000001111
- Outer:  0001111111 1111111111 1111111111 1111111111 0000001000 0000001111 0000001111 0000000100
- Rim:    0000011111 0000010111 0000110011 0000111011 0000110010 0000001110 0000000000 0000101100

Note that each segment starts with 000 (or is 1111111111, which we ignore), as in the real parachute.

(We cheated so this would work out--if it doesn't, shift where you started the circle a couple digits.)

Next, convert binary to decimal:

- Inner: -, -, 13, 1, 7, 9, 3, -
- Middle: 2, 9, 14, 127, -, -, 18, 15
- Outer: 127, -, -, -, 8, 15, 15, 4
- Rim: 31, 23, 51, 59, 50, 14, 0, 44

Let's interpret the first three rings as letters (A=1) as in Perseverance. For the rim, perseverance used degree notation for GPS, and we'll do the same. 14=N, 23=W, and the rest are literal numbers in degree notation.

- Inner: magic
- Middle: robin?
- Outer: hood?
- Rim: 51°59'50" N, 0°44'31" W 

The answer is a `magic`ian. And someone who, like `Robin` `Hood`, was born in Nottingham. The coordinates point to his workplace, [Hut 8](https://en.wikipedia.org/wiki/Hut_8) of Bletchley Park.

The answer is the real name of [A.J. Alan](https://en.wikipedia.org/wiki/A._J._Alan), `LeslieHarrisonLambert`.

</details>

### Level 06

Clues(s):

- " rCcanlhuoSsr"
- /digital

Hint(s):

- <span class="hint">single</span>
- <span class="hint">trans</span>
- <span class="hint">"digital"</span>

<details><summary>Answer</summary>
    The password to the next level is "ClausSchnorr"
</details>

<details markdown="1"><summary>Walkthrough</summary>

The intended solution was to use a single column transposition cipher. The key is "DIGITAL". Duplicate letters are forbidden in keys. The standard is to instead use `DIGJTAL`, confirmed by the hint `/` (increasing).

Sorting the key letters:

```
DIGJTAL
1234567

ADGIJLT
6132475
```

The deciphering writes columns from left to right, top to bottom. 

```
ADGIJLT
6132475
_CaluSs
rcnho*r
```

We needed one padding \*. Why does it get added there? Well, encrypt any phrase with padding at the end, and that's where it shows up. Or, it's the highest-numbered (7th) column.

Returning the key to original order:

```
DIGJTAL
1234567
Claus_S
chnorr*
```

[Claus Schnorr](https://en.wikipedia.org/wiki/Claus_P._Schnorr) was a cryptographer.

The answer is `ClausSchnorr`.

</details>

### Level 07

Clues(s):

- [image #1](https://files.ircpuzzles.org/2021/crossword_tL7YSAUt8g3PaIeQ.png)

<details><summary>Answer</summary>
    The password to the next level is "TheDAOHack"
</details>

<details markdown="1"><summary>Walkthrough</summary>

The cryptocurrency icons are, in order:

1. cosmos
2. siacoin
3. filecoin
4. decred
5. zcash
6. uniswap
7. waves
8. tron
9. monero
10. ontology
11. chainlink
12. nano

Filling in the crossword:

```
   d      m  t     
   e  f   o  r C   
 z cHainlinK O o   
 c r  l   E uniswap
waves e   r    m   
 s D  c   onTology 
 H    o    A   s   
     siAcoin       
      n    o       
```

The numbered cells read `THEDAOHACK`.

In 2016, [The DAO](https://en.wikipedia.org/wiki/The_DAO_(organization)) was hacked, controversially leading to a hard-fork of the [Ethereum blockchain](https://en.wikipedia.org/wiki/Ethereum).

The answer is `TheDAOHack`.

</details>

### Level 08

Clues(s):

- bjepnjgtifovufpaqblofzkhiupfk
- Rhymes

Archivist's note: I highly recommend the hints.

Hint(s):

- <span class="hint">tri</span>
- <span class="hint">Groups of 6</span>

<details><summary>Answer</summary>
    The password to the next level is "DrSeuss"
</details>

<details markdown="1"><summary>Walkthrough</summary>

`tri` hints at the [Trifid Cipher](https://en.wikipedia.org/wiki/Trifid_cipher)

As usual, the key is CRYPTO. The trigram grid for CRYPTO is:

```
CRY EFG NQS
PTO HIJ UVW
ABD KLM XZ+
```

Under each letter of the ciphertext, we write the layer, then row, then column:

```
bjepnjgtifovufpaqblofzkhiupfk
12213221221332113121232223122
32121212212221231332133222213
23111332223212112223221121121
```

Using the second hint, we split the ciphertext into `groups of 6`.

```
bjepnj gtifov ufpaqb lofzkh iupfk
122132 212213 321131 212322 23122
321212 122122 212313 321332 22213
231113 322232 121122 232211 21121
```

For each group of 6, we read the numbers in row-order.

```
bjepnj: 122 132 321 212 231 113
gtifov: 212 213 122 122 322 232
ufpaqb: 321 131 212 313 121 122
lofzkh: 212 322 321 332 232 211
iupfk : 231 222 221 321 121
```

We use the chart to decode the trigrams:

```
bjepnj: onefis
gtifov: htwofi
ufpaqb: shredf
lofzkh: ishblu
iupfk : efish
```

The decoded text is the rhyming phrase:

> One Fish, Two Fish, Red Fish, Blue Fish

[One Fish, Two Fish, Red Fish, Blue Fish](https://en.wikipedia.org/wiki/One_Fish,_Two_Fish,_Red_Fish,_Blue_Fish) is a well-known book by [Theodor Seuss Geisel](https://en.wikipedia.org/wiki/Dr._Seuss), pen name Dr. Seuss.

The answer is `DrSeuss`.

</details>

### Level 09

Clues(s):

- 159082528975647841273288552666760531261, 243322489515519334824631119429144576991, 3

Hint(s):

- <span class="hint">Always make sure you have a prime time!</span>

<details><summary>Answer</summary>
    The password to the next level is "CliffordCocks"
</details>

<details markdown="1"><summary>Walkthrough</summary>

Let's call the numbers:

- **A=**159082528975647841273288552666760531261
- **B=**243322489515519334824631119429144576991
- **C=**3

**A** and **B** are roughly 128-bit integers.

**A** isn't prime:

```
$ factor 159082528975647841273288552666760531261
159082528975647841273288552666760531261: 7 43 1279 121061 2447948497 1394372834168827027
```

**B** isn't prime. Testing whether something is prime is fast; finding the factors is slow.

```
$ openssl prime 243322489515519334824631119429144576991 # Takes 0.02 second
B70E34F56FFEEFFFEB395DB286A283DF (243322489515519334824631119429144576991) is not prime
$ factor 243322489515519334824631119429144576991 # Takes 20 minutes
243322489515519334824631119429144576991: 14117854731608700389 17235089476501026419
```

The these numbers are for the public-key cryptography scheme, [RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)).

- **C** is **e=**C=3, is the public exponent
- **p=**14117854731608700389, is a secret prime
- **q=**17235089476501026419, is a secret prime
- **B** is **n=**pq=243322489515519334824631119429144576991 is a public semiprime
- **A** is **c=**m^e = m^3 = 159082528975647841273288552666760531261 (mod n), the encrypted message.
- **λ(n)=** lcm(p-1,q-1)=243322489515519334824631119429144576991 is secret. λ(n) and e are coprime.
- If ed≡1 (mod λ(n)), then **d=**40553748252586555798879695870172475031 (calculated using the fairly simple "extended gcd algorithm")

Here's a python session illustrating the above:

```
import math

e=3
p=14117854731608700389
q=17235089476501026419
c=159082528975647841273288552666760531261
n=243322489515519334824631119429144576991
n==p*q
> True
th = math.lcm(p-1,q-1) # Can also use (p-1)*(q-1)

def gcdExtended(a, b):
    if a==0: return b,0,1
    gcd,x,y = gcdExtended(b%a, a)
    x,y=y-(b//a)*x,x
    return gcd,x,y
d=gcdExtended(3, th)[1]
d*e % th
> 1

pow(pow(100, d, n), e, n)
> 100
pow(pow(100, e, n), d, n)
> 100
```

Yep, everything looks good.

To decrypt it, we calculate: **m≡**c^d (mod λ(n))

```
m=pow(c,d,n); m
> 215232259421775365151868797862979120299

import codecs
codecs.decode(hex(m)[2:],"hex")
> b'Pyvssbeq Pbpxf'
```

Passing `Pyvssbeq Pbpxf` through [ROT13](https://en.wikipedia.org/wiki/ROT13), we get `Clifford Cocks`. [Clifford Cocks](https://en.wikipedia.org/wiki/Clifford_Cocks) was the (top-secret) inventor of the RSA algorithm before Rivest, Shamir, and Adleman.

The answer is `Clifford_Cocks`.

</details>

### Level 10

Clues(s):

- [text (same as below)](https://files.ircpuzzles.org/2021/pattern_voEy2VbvALep7Bqi.txt)

```
   H   S   I   b   A   G   
GYQyvluEYIXuvcrLjyelApkhEig
   c   x   Y   E   M   w   
iOxfFkmMeCfTuXeFMlhfcuvmfLk
   L   d   b   k   G   I   
xziLdjhNlfifaBelYDMuCFbuDOe
   h   C   l   c   S   B   
oiHsgBmihQyOXapKIhcwhmLXvKM
   Z   m   D   M   F   w   
sqwAbtJNUZABJZsGzCsMfPUZqze
   Z   F   m   O   o   N   
```

Hint(s):

- <span class="hint">🦄</span>
- <span class="hint">⚛</span>
- <span class="hint">If you can't escape from Verðandi's house, it's necessary to consult Urðr to meet Skuld</span>
- <span class="hint">[image #1](https://files.ircpuzzles.org/2021/qfxVO2W.jpg)</span>
- <span class="hint">grille</span>
- <span class="hint">[a-z] = 🧱, [A-Z] = 🕳️︎</span>
- <span class="hint">tr -d ' '</span>
- <span class="hint">171</span>
- <span class="hint">{B="i",A="h",D="t",C="n"}</span>

<details><summary>Answer</summary>
    The password to the next level is "Constantinople"
</details>

<details markdown="1"><summary>Walkthrough</summary>

```
   H   S   I   b   A   G   
GYQyvluEYIXuvcrLjyelApkhEig
   c   x   Y   E   M   w   
iOxfFkmMeCfTuXeFMlhfcuvmfLk
   L   d   b   k   G   I   
xziLdjhNlfifaBelYDMuCFbuDOe
   h   C   l   c   S   B   
oiHsgBmihQyOXapKIhcwhmLXvKM
   Z   m   D   M   F   w   
sqwAbtJNUZABJZsGzCsMfPUZqze
   Z   F   m   O   o   N   
```

The grid shape is a hint at [grilles](https://en.wikipedia.org/wiki/Grille_(cryptography)) from cryptography.

This should be combined with level 7's completed crossword:

```
```

The crossword is 19 across and 9 tall. There are 171 letters in the grille--exactly 19x9. We rearrange the grille:

```
HSIbAGGYQyvluEYIXuv
crLjyelApkhEigcxYEM
wiOxfFkmMeCfTuXeFMl
hfcuvmfLkLdbkGIxziL
djhNlfifaBelYDMuCFb
uDOehClcSBoiHsgBmih
QyOXapKIhcwhmLXvKMZ
mDMFwsqwAbtJNUZABJZ
sGzCsMfPUZqzeZFmOoN
```

Next, we'll take only the lowercase letters:

```
   b     yvlu    uv
cr jyel pkh igcx   
wi xf km e f u e  l
hfcuvmf k dbk  xzi 
djh lfifa el   u  b
u  eh lc  oi sg mih
 y  ap  hcwhm  v   
m   wsqw bt        
s z s f   qze  m o 
```

We'll place this as a grille over the crossword

```
   X     XXXX    XX
XX XXXX XXX XXXX
XX XX XX X X X X  X
XXXXXXX X XXX  XXX
XXX XXXXX XX   X  X
X  XX XX  XX XX XXX
 X  XX  XXXXX  X
X   XXXX XX
X X X X   XXX  X X
-------- + --------
   d      m  t     
   e  f   o  r c   
 z chainlink o o   
 c r  l   e uniswap
waves e   r    m   
 s d  c   ontology 
 h    o    a   s   
     siacoin       
      n    o       
-------- = --------
   X     XXXXt   XX
XX XXXX XXX XXXX
XX XXaXXlXnX X X  X
XXXXXXX X XXXniXXXp
XXXeXXXXX XX   X  X
Xs XX XX  XXtXXoXXX
 X  XXo XXXXX  X
X   XXXXcXXn
X X X X   XXX  X X
-------------------
             t     
                
     a  l n        
             ni   p
   e               
 s          t  o   
      o         
        c  n
                  
```

But `talnnipestoocn` is nothing. What gives?

Let's look at the corresponding letters in the grille:

```
             E     
                   
     F  M C        
             GI   L
   N               
 D          H  B   
      K            
        A  J       
```

Taking the pairs, we get:

```
ABCDEFGHIJKLMN
constantinople
```

The answer is `constantinople`

Hint(s):

- 🦄: Symbol from crossword
- ⚛: Symbol from crossword
- If you can't escape from Verðandi's house, it's necessary to consult Urðr to meet Skuld: If you can't escape from the present, consult the past to meet the future.
- [image #1](https://files.ircpuzzles.org/2021/qfxVO2W.jpg): Combine \[harvester\]
- grille: Cryptographic grille
- [a-z] = 🧱, [A-Z] = 🕳️︎: A-Z are the 'holes' in the grille
- tr -d ' ': Try removing whitespace in the grille
- 171: There are 171 letters in the grille
- {B="i",A="h",D="t",C="n"}: Re-ordering at the end

</details>

### Level 11

Clues(s):

- CIKII IWIIQ FHYFW WXNRY UAAII LYGWV WZQWW EWQRQ QBYJY PDGJC BDRIW CZKJO

Hint(s):

- <span class="hint">[image #1](https://files.ircpuzzles.org/2021/ELBJBqKJbrpugOyJ.png)</span>
- <span class="hint">(2 + 10) * 5</span>

<details><summary>Answer</summary>
    The password to the next level is "THROBAC"
</details>

<details markdown="1"><summary>Walkthrough</summary>

Hint(s):

- [image #1](https://files.ircpuzzles.org/2021/ELBJBqKJbrpugOyJ.png): Clocktower in Bletchley Park
- (2 + 10) * 5: Combine the first 2 groups of five letters, then the remaining 10.

The first 10 letters `CIKIIIWIIQ` are settings for an [Enigma M3 machine](https://en.wikipedia.org/wiki/Enigma_machine).

- Reflector is UKW `C`
- First rotor is `I` in position `K`
- Second rotor is `III` in position `W`
- Third rotor is `II` in position `Q`
- There are no plugs in the plugboard

The remainder are the ciphertext: `FHYFWWXNRYUAAIILYGWVWZQWWEWQRQQBYJYPDGJCBDRIWCZKJO`.

Using an [online solver](https://cryptii.com/pipes/enigma-machine) gives the output:

> xxxxn otxxx xthex xxxfl amexx xxthr owing xxxxt rumpe txxxx

'not the flame throwing trumpet'

[Claude Shannon](https://en.wikipedia.org/wiki/Claude_Shannon) invented a [flame-throwing trumpet](https://www.newyorker.com/tech/annals-of-technology/claude-shannon-the-father-of-the-information-age-turns-1100100) and a roman-numeral computer called [THROBAC](https://ieeexplore.ieee.org/document/5311583).

The answer is `THROBAC`.

</details>

### Level 12

Clues(s):

- [image #1](https://files.ircpuzzles.org/2021/ktcX4MHdn6qArOHo.png)

Hint(s):

- <span class="hint">What do [https://youtu.be/zA52uNzx7Y4](https://youtu.be/zA52uNzx7Y4) (Eiffel 65 - Blue (Da Ba Dee)) and [https://youtu.be/62EjFgPECgo](https://youtu.be/62EjFgPECgo) (The Fresh Prince of Bel Air) have in common?</span>
- <span class="hint">[https://youtu.be/qHepKd38pr0](https://youtu.be/qHepKd38pr0)</span>
- <span class="hint">[image #2](https://files.ircpuzzles.org/2021/wCfpYwn.jpg)</span>

<details><summary>Answer</summary>
    The password to the next level is "SIGABA"
</details>

<details markdown="1"><summary>Walkthrough</summary>

The intended reading of the pictures is:

- Not "The Raven"
- Bug
- Gold (medal)
- Skull

The four images indicate Edgar Allen Poe's [*The Gold-Bug*](https://en.wikipedia.org/wiki/The_Gold-Bug). (He also wrote [The Raven](https://en.wikipedia.org/wiki/The_Raven))

In the Gold Bug, there is a secret hidden in the left eye of the skull. It also mentions invisible ink.

If we brighten the left eye socket of the skull, we see a secret code:

![Secret message in the left eyesocket](https://files.ircpuzzles.org/2021/skull-brighter.png)

|code  |hex|dec|ASCII
|------|---|---|-----
|101001|29 |41 |)
|110110|36 |54 |6
|110011|33 |51 |3
|110101|35 |53 |#
|110010|32 |50 |!
|110101|35 |53 |#

In *The Gold-Bug*, the decoding alphabet is:

```
52-†81346,709*‡.$();?¶]¢:[
ABCDEFGHIJKLMNOPQRSTUVWXYZ
```

Decoding `)63#!#` with this substitution, we get `SIGABA`. [SIGABA](https://en.wikipedia.org/wiki/SIGABA) was a WW2-era cipher machine:

The answer is `SIGABA`.

Hint(s):

- What do [https://youtu.be/zA52uNzx7Y4](https://youtu.be/zA52uNzx7Y4) (Eiffel 65 - Blue (Da Ba Dee)) and [https://youtu.be/62EjFgPECgo](https://youtu.be/62EjFgPECgo) (The Fresh Prince of Bel Air) have in common?: Starting lyrics "a story"
- [https://youtu.be/qHepKd38pr0](https://youtu.be/qHepKd38pr0): "Enhance" scene. A hint to zoom in and increase contrast.
- [image #2](https://files.ircpuzzles.org/2021/wCfpYwn.jpg): This is the character Poe, an [Uglydoll](https://en.wikipedia.org/wiki/Uglydoll) toy.

</details>

### Level 13, *Winner's Circle*

The final level. No puzzle.
