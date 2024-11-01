Title: 2020 April Fool's Puzzle Competition Summary & Solutions
Date: 2023-04-23 09:00
Slug: 2020-afpc-summary
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

Here are the puzzles, hints, and answers for the 2020 April Fools Puzzle Contest on #ircpuzzles on libera IRC.
Hints were gradually revealed throughout the contest. Expect to need them to finish.

### Level 0

Clue(s):

- V2VEb250TGV0Q09WSUQxOVJ1aW5BRlA= 
- Except for Level 01, all spaces are to be replaced with "_" (no quotes)

<details><summary>Answer</summary>
    The solution was: "WeDontLetCOVID19RuinAFP".
</details>

<details markdown="1"><summary>Walkthrough</summary>

The solution is to decode the [base64](https://en.wikipedia.org/wiki/Base64), for example with the Linux command `base64 -d`.

> WeDontLetCOVID19RuinAFP

</details>

### Level 1, by pavonia

Clue(s):

- Q'bu!

Hint(s):

- <span class="hint">Qb guvf!</span>
- <span class="hint">cbq onl qbbef</span>
- <span class="hint">a = n</span>
- <span class="hint">every long journey begins with the first 1852 metres</span>

<details><summary>Answer</summary>
    The solution was: "Bqlffrl".
</details>

<details markdown="1"><summary>Walkthrough</summary>
	
As hinted by `a = n` and `Qb guvf!`, the first step is to run the clue through [ROT13](https://en.wikipedia.org/wiki/ROT13):

> D'oh!

Hinting at Homer Simpson.

Homer hints at Homer's Odyssey. `cbq onl qbbef` becomes "pod bay doors", hinting at "2001: A Space Odyssey".

"Odyssey" ROT13'd is the answer, `Bqlffrl`.

</details>

### Level 2, by pavonia

Clue(s):

- (3, 4, 5), (5, 12, 13), (8, 15, 17), ...

Hint(s):

- <span class="hint">old</span>
- <span class="hint">older than that Greek guy</span>

<details><summary>Answer</summary>
    The solution was "Plimpton_322".
</details>

<details markdown="1"><summary>Walkthrough</summary>

These are [Pythagorean triples](https://en.wikipedia.org/wiki/Pythagorean_triple).

The oldest list of such triples is [Plimpton 322](https://en.wikipedia.org/wiki/Plimpton_322).

</details>

### Level 3, by pavonia

Clue(s):

- David Gibbins, Donovan, Stargate

<details><summary>Answer</summary>
    The solution was "Atlantis".
</details>

<details markdown="1"><summary>Walkthrough</summary>

- [David Gibbins](https://en.wikipedia.org/wiki/David_Gibbins) is an underwater archaeologist and a bestselling author of the Jack Howard series, which begins with [*Atlantis*](https://en.wikipedia.org/wiki/Atlantis_(novel)).

- [Donovan](https://en.wikipedia.org/wiki/Donovan) is a Scottish songwriter who wrote and sang [Atlantis](https://en.wikipedia.org/wiki/Atlantis_(Donovan_song)) (1968). It has been parodied in Futurama.

- [Stargate: Atlantis](https://en.wikipedia.org/wiki/Stargate_Atlantis) is a spin-off series of the well known Stargate francise.

The answer is `Atlantis`.

</details>

### Level 4, by simplexish

Clue(s):

- [image #1](https://files.ircpuzzles.org/2020/qV7d2Zz.png)
- Archivist's note: This puzzle contains errors. I recommend reading the first three hints.

Hint(s):

- <span class="hint">Goddess of beauty is hint for all the cells </span>
- <span class="hint">[image #1 v2](https://files.ircpuzzles.org/2020/YBiZWa2.png)</span>
- <span class="hint">[image #1 v3](https://files.ircpuzzles.org/2020/E4l60xO.png)</span>
- <span class="hint">[image #2](https://files.ircpuzzles.org/2020/JlCdPEV.gif)</span>
- <span class="hint">double whammy</span>

<details><summary>Answer</summary>
    The solution was: "Freyja_Prende".
</details>

<details markdown="1"><summary>Walkthrough</summary>

![solutions](https://files.ircpuzzles.org/2020/level04-solved.png)

One slot could hold two answers. Combine them for the password, `Freyja_Prende`.

Archivist's notes on possible errors:

- Xochipilli is male.
- The only reference to the Hausa Zamani I found is https://en.wikipedia.org/wiki/List_of_love_and_lust_deities. It claims Zamani is male.
- It is unclear that Bastet and Qetesh are beauty goddesses.

</details>

### Level 5, by pavonia

Clue(s):

- ΡΑ·ΟΗ·ΡΙΑ·ΟΒ·ΡΙΒ·ΞΘ·ΠΓ·ΡΙΔ·ΡΑ·Π

Hint(s):

- <span class="hint">The answer is between ΞΕ and ΡΚΒ</span>
- <span class="hint">STX ETX</span>

<details><summary>Answer</summary>
    The solution was "Kore".
</details>

<details markdown="1"><summary>Walkthrough</summary>

All the symbols (some look like english) are uppercase greek letters.

The solution is to interpret the letters as [Greek/Ionic numerals](https://en.wikipedia.org/wiki/Greek_numerals)

This gives the numeric values: `101-78-111-72-112-69-83-114-101-80`

Interpreted as ascii byte values, this reads: `eNoHpESreP`. Or backwards, `PerSEpHoNe`.

Another name for Persephone is `Kore`.

Hints:

- The answer is between 65 and 122 (`A` and `z` in ASCII). Hints at greek numerals and readable ASCII text.
- STX ETX. ASCII control codes for "start of text" and "end of text". Hints at ASCII encoding.

</details>

### Level 6, by simplexish

Clue(s):

- [audio](https://files.ircpuzzles.org/2020/level6.wav)

Hint(s):

- <span class="hint">number</span>

<details><summary>Answer</summary>
    The solution was "42".
</details>

<details markdown="1"><summary>Walkthrough</summary>

Morse dits and dahs are: `__ ._ _.__ ._ ___... / .... / ..`

In international morse (ITU) this might read `MAYA: / H / I`

But actually, everything after the colon (`.... ..`) is [maya numerals](https://en.wikipedia.org/wiki/Maya_numerals), not morse.

The answer is simply `42`.

</details>

### Level 7, by pavonia

Clue(s):

- [text](https://files.ircpuzzles.org/2020/level07.txt)

<details><summary>Answer</summary>
    The solution was "Merytre_Hatshepsut"
</details>

<details markdown="1"><summary>Walkthrough</summary>

The text is unicode symbols (white chess kings and mountain emoji) in the shape of an egyptian ankh.

Interpreting the symbols as binary (♔=0,⛰=1) and ignoring whitespace, we get the following bytes: `https://www.youtube.com/watch?v=bFND5bGUYxM`

[https://www.youtube.com/watch?v=bFND5bGUYxM](https://www.youtube.com/watch?v=bFND5bGUYxM) is Mozart's "Grabmusik - KV 42 (35a)". "Grabmusik" is literally "Grave Music".
"KV42" is a [catalogue number](https://en.wikipedia.org/wiki/K%C3%B6chel_catalogue)--the catalogue is called Köchel Verzeichnis.

The two symbols (mountain, crown), the ankh, and the name "Grave Music" hint at the valley of the kings.

[KV42](https://en.wikipedia.org/wiki/KV42), or King's Valley Tomb 42, was constructed for [Merytre-Hatshepsut](https://en.wikipedia.org/wiki/Merytre-Hatshepsut), the wife of Pharaoh Thutmose III, although she was never buried there.

The answer is `merytre_hatshepsut`.

</details>

### Level 8, by pavonia

Clue(s):

- [image](https://files.ircpuzzles.org/2020/level08.png)

Hint(s):

- <span class="hint">John Gardner Wilkinson</span>

<details><summary>Answer</summary>
    The solution was "mutnedjmet".
</details>

<details markdown="1"><summary>Walkthrough</summary>

An image of a maze. There is only one path from the outside to the center. [Solution](https://files.ircpuzzles.org/2020/level08-solved.png)

The letters along the path spell (from outside in): `HOREMHEB`

[Horemheb](https://en.wikipedia.org/wiki/Horemheb) was a pharaoh around 1319BC.

The hieroglyphs in the center of the maze are M23-N41:X1-G36:X1. They spell [hmt-nswt-wrt](https://en.wiktionary.org/wiki/%E1%B8%A5mt-nswt-wrt), "Great Royal Wife'.

Horemheb's wife was the former queen of Egypt, `mutnedjmet`.

</details>

### Level 9, by pavonia

Clue(s):

- 👨‍❤️ 〦〧 〡〇〤 ❤️ 〩〧 〡一〇 ❤️ 〡〇〣 〣〩 ❤️ 〡〇〡 〥〢 ❤️‍👩 ([as html](https://files.ircpuzzles.org/2020/puzzle-09_9a8634a86603da37adb037f79f8cb018a0aed389ddbdda1f7a831358c825c23e.html))

<details><summary>Answer</summary>
    The solution was "Magpie_Bridge".
</details>

<details markdown="1"><summary>Walkthrough</summary>

The glyphs are [Suzhou numerals](https://en.wikipedia.org/wiki/Suzhou_numerals).
    
> man ❤️ 67 104 ❤️ 97 110 ❤️ 103 39 ❤️ 102 52 ❤️ woman

The decimal numbers 67-104-97-110-103-39-102-52, when decoded as ASCII read `Chang'e4`.

[Chang'e](https://en.wikipedia.org/wiki/Chang%27e) is the Chinese goddess of the moon. It's also the namesame of the Chinese Lunar Exploration Program, the most recent mission of which was Chang'e 4.

[The Cowherd and the Weaver Girl](https://en.wikipedia.org/wiki/The_Cowherd_and_the_Weaver_Girl) is the tale of two lovers, reunited once a year by a bridge of magpies between them. It's also the name of the most recent Chinese relay satellite, part of the Chang'e 4 mission.

The answer is `Magpie_Bridge`.

</details>

### Level 10, by pavonia

Clue(s):

- [image](https://files.ircpuzzles.org/2020/level10.jpg)

<details><summary>Answer</summary>
    The solution was "Aulus_Livius_Proculus".
</details>

<details markdown="1"><summary>Walkthrough</summary>

Decoding the roman numerals, we get:

```
-- -- 15 23 14 10 15 10 <- 1
18 21  2  2  5  4 17 21 -> 10
-- -- -- -- 24  6  8 23 <- 5
```

Decoding using A=1, Z=26 we get:

```
--OWNJOJ
RUBBEDQU
----XFHW
```

Caesar shifting the first line back 1, the second forward 10, and the last back 5, we get:

> NVMINI BELLONAE SACR

A quick search shows this the the beginning of an inscription in the [Temple of Bellona](https://en.wikipedia.org/wiki/Temple_of_Bellona,_Ostia). The reverse begins:

> A(ulus) LIVIVS PROCVLVS P(ublius) LVCILIVS GAMALA F(ilius) IIVIR PRAEF(ectus) CAESAR(is)		

That names Aulus Livius Proculus and the duovir Publius Lucilius Gamala Filius as rebuilding the temple.

Or, "A.L.P. & P.L.G.F.", the initials in the inscription.

The answer is the missing name from the image, `Aulus_Livius_Proculus`.

</details>

### Level 11, by pavonia

Clue(s):

- And Odin instructed his son to indite the Great Book of Hvatvetna, and Höðr did as he was bidden ... 1643O131425O13155226O13461643O13155226O52262553O132435O131425

Hint(s):

- <span class="hint">the one-eyed man</span>
- <span class="hint">11548-1</span>
- <span class="hint">draw a conclusion</span>

<details><summary>Answer</summary>
    The solution was "Hamskerpir".
</details>

<details markdown="1"><summary>Walkthrough</summary>

[Höðr](https://en.wikipedia.org/wiki/H%C3%B6%C3%B0r) is the blind son of Odin and Figg. He is instructed to write the book of "whatever". We have hints toward Braille (Odin with one eye, Höðr being blind). We also have hints toward historical norse writing--[Runes](https://en.wikipedia.org/wiki/Elder_Futhark).

Split at each "O" to get:

> 1643 131425 13155226 13461643 13155226 52262553 132435 131425

All strings are even length. This hints at the correct interpetation as pairs:

> 16/43 13/14/25 13/15/52/26 13/46/16/43 13/15/52/26 52/26/25/53 13/24/35 13/14/25

Braille cells dots are numbered 1-3 in the first column, 3-6 in the second column. (Hinted by `11548-1`, a braille standard)

![Braille cell](https://files.ircpuzzles.org/2020/Braille_cell.svg)

We are hinted to `draw a conclusion`. `16/43` is `1->6, 4->3` or `draw a line from 1 to 6, then draw a line from 4 to 3`.

This forms 8 drawings for the 8 groups. We interpret them as [Elder Futhark](https://en.wikipedia.org/wiki/Elder_Futhark) runes with some imagination.

> ᚷᚨᚱᛞᚱᛟᚠᚨ

Or, "gardrofa". The horses [Hamskerpir and Garðrofa](https://en.wikipedia.org/wiki/Hamskerpir_and_Gar%C3%B0rofa) are from Norse mythology.

The answer is `hamskerpir`.

</details>

### Level 12

Clue(s):

- [image](https://files.ircpuzzles.org/2020/level12.png)

<details><summary>Answer</summary>
    The solution was "Nemontemi".
</details>

<details markdown="1"><summary>Walkthrough</summary>

The image is a [nonogram](https://en.wikipedia.org/wiki/Nonogram).

Archivist's note: The nonogram has two solutions. Only one was intended.

You can solve by hand or use an [online solver](http://a.teall.info/nonogram/). <span style="font-size: 6pt">{"ver":[[7,1,1],[3,1,3,2],[4,1,2],[13,1],[2,1,1,2],[1,5,1,1],[1,1,1,4],[4,1,1,1,2,1],[2,1,1,2],[4,5,1,2],[1,1,2,1],[1,11],[1,1,1],[2,1,2,2],[5,1,1,4]],"hor":[[3,1,3],[4,1,1,2],[4,3,2],[12,1],[1,1,1,1],[1,1,5,2,1],[2,1,1,1,1,1],[1,1,1,1,1,2,1],[4,1,1,1,1],[1,1,5,1,2],[1,1,2],[9,1],[4,3,2,1],[2,1,1,1,1,2],[1,5,2,2]]}</span>

Decoded, it looks like:

![solved nonogram](https://files.ircpuzzles.org/2020/level12-solved.png)

Which is an [Aztec](https://en.wikipedia.org/wiki/Aztec_Code) barcode.

The code reads [Nemontemi](https://en.wikipedia.org/wiki/N%C4%93mont%C4%93mi).

The answer is `nemontemi`.

</details>

### Level 13

Welcome to the end of the #ircpuzzles 2020 April Fool's Puzzle Competition!
