Title: 2022 April Fool's Puzzle Competition Summary & Solutions
Date: 2023-04-23 11:00
Slug: 2022-afpc-summary
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

Here are the puzzles, hints, and answers for the 2022 April Fools Puzzle Contest on #ircpuzzles on libera IRC.
Hints were gradually revealed throughout the contest. Expect to need them to finish.

In addition to the below writeup, check out the excellent [writeup by Amal Murali](https://amalmurali.me/posts/what-a-ctf-on-irc-looks-like/) (spoilers!).

### Level 00: #ircpuzzles entry point

Clue(s):

- aGlzdG9yeQ==

<details><summary>Answer</summary>
    The password to the next level is "history".
</details>

<details markdown="1"><summary>Walkthrough</summary>

Decoding the [base64](https://en.wikipedia.org/wiki/Base64) text, for example with `base64 -d` in linux, we get:

> history

</details>

### Level 01

Clue(s):

- MKMyoaD=

Hint(s):

- <span class="hint">Caesar's cipher</span>
- <span class="hint">Caesar first</span>
- <span class="hint">rot13</span>

<details><summary>Answer</summary>
    The password to the next level is "event".
</details>

<details markdown="1"><summary>Walkthrough</summary>

Running `MKMyoaD=` through [ROT13](https://en.wikipedia.org/wiki/ROT13) (a [caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)) we get:

> ZXZlbnQ=

Decoding this as base64, we get

> event

</details>

### Level 02, by wolf

Clue(s):

- ET TV
- AVC

Hint(s):

- <span class="hint">τέκνον</span>
- <span class="hint">[image #1](https://files.ircpuzzles.org/2022/Pantheon_(Rome).jpg)</span>
- <span class="hint">year</span>
- <span class="hint">V = U</span>

<details><summary>Answer</summary>
    The password to the next level is "710".
</details>

<details markdown="1"><summary>Walkthrough</summary>

In roman carvings, "U" was carved as "V". This is hinted in the pantheon picture and "V=U". The clues are actually `ET TU` and `AUC`.

Julius's Caesar's last words may have been [Et tu, Brute?](https://en.wikipedia.org/wiki/Et_tu,_Brute%3F) ("you too, Brutus?"). This is from William Shakespeare's *Julius Caesar* rather than historical fact, and turned out to be more familiar to native English speakers. The hint refers to the same words in Greek: "Και συ τέκνον" (you too, child?).

A.U.C. is [Ab urbe condita](https://en.wikipedia.org/wiki/Ab_urbe_condita), which expresses a date in years since 753 B.C. (the founding of Rome).

The assassination of Julius Caesar was in 44 B.C., or `710` A.U.C.

</details>

### Level 03, by wolf

Clue(s):

- 𒃲 𐦂 ♌︎

<details><summary>Answer</summary>
    The password to the next level is "galileo".
</details>

<details markdown="1"><summary>Walkthrough</summary>

The glyphs are:

- The Sumerian cuneiform, [GAL](https://en.wikipedia.org/wiki/GAL_(cuneiform))
- The Meroitic hieroglyph for "i"
- The Zodiac sign, Leo.

GAL-i-Leo, or `galileo`.

</details>

### Level 04, by wolf

Clue(s):

- -18697508872
- 선

Hint(s):

- <span class="hint">[image #1](https://files.ircpuzzles.org/2022/Mazafati_dates.jpg)</span>
- <span class="hint">禪</span>
- <span class="hint">seconds since epoch</span>

<details><summary>Answer</summary>
    The password to the next level is "jikji".
</details>

<details markdown="1"><summary>Walkthrough</summary>

`선` is a chinese character, one meaning of which is "Zen". `禪` has a few Buddhist-related meanings.

-18697508872, interpreted as a unix time is 1377, July 1. This is the date of publication of [Anthology of Great Buddhist Priests' Zen Teachings](https://en.wikipedia.org/wiki/Jikji), or `Jikji`.

The answer is `jikji`.

</details>

### Level 05, by wolf

Clue(s):

- [https://clue.ircpuzzles.org](https://clue.ircpuzzles.org)

Hint(s):

- <span class="hint">decimal</span>
- <span class="hint">unicode</span>
- <span class="hint">TXT me maybe</span>

<details><summary>Answer</summary>
    The password to the next level is "basho".
</details>

<details markdown="1"><summary>Walkthrough</summary>

The image is a common haiku meme:

> It's not DNS / There's no way it's DNS / It was DNS

The TXT record for clue.ircpuzzles.org contains a clue

```
$ dig TXT clue.ircpuzzles.org

...
;; ANSWER SECTION:
clue.ircpuzzles.org.    300     IN      TXT     "\232\161\140\227\129\143\230\152\165\227\130\132 / \233\179\165\229\149\188\227\129\141\233\173\154\227\129\174 / \231\155\174\227\129\175\230\179\170"
...
```

Interpreting `\232` as the byte with decimal value 232, we get the haiku:

> 行く春や / 鳥啼き魚の / 目は泪

Translated:

> spring is leaving / birds sing and the eyes of fish / are full of tears

This is a haiku by Matsuo Bashō. The answer is `basho`.

</details>

### Level 06, by wolf

Clue(s):

- [image #1](https://files.ircpuzzles.org/2022/sVYQbQNhpVMFGaHr0QNnqV9bHDdqss8c.jpg)

Hint(s):

- <span class="hint">[image #2](https://files.ircpuzzles.org/2022/God_of_War.jpg)</span>
- <span class="hint">[image #3](https://files.ircpuzzles.org/2022/Mars_bar_bitten.jpg)</span>

<details><summary>Answer</summary>
    The password to the next level is "ingenuity".
</details>

<details markdown="1"><summary>Walkthrough</summary>

The picture contains photos of the two [Wright brothers](https://en.wikipedia.org/wiki/Wright_brothers) as children. The third symbol is not "male", but that of the god and planet "Mars". Both hints also point toward Mars.

The [*Ingenuity*](https://en.wikipedia.org/wiki/Ingenuity_(helicopter)) helicopter was the first powered flight on Mars. It is dedicated to the Wright Brothers, and includes a small scrap of the [Wright Flyer](https://en.wikipedia.org/wiki/Wright_Flyer). 

The answer is `ingenuity`.

</details>

### Level 07, by nortti

Clue(s):

- [audio](https://files.ircpuzzles.org/2022/uLRFzb5EIgHUk86uMOqefvBYXTvezAnb.mp3) (License Information: MrAuralization "[Relay](https://freesound.org/people/MrAuralization/sounds/203600/)" (adapted) CC-BY 3.0)
- where?

Hint(s):

- <span class="hint">[image #1](https://files.ircpuzzles.org/2022/d38.jpg)</span>

<details><summary>Answer</summary>
    The password to the next level is "baltimorewashington".
</details>

<details markdown="1"><summary>Walkthrough</summary>

The sounds are (simulated) relay clicks of a [Telegraph Sounder](https://en.wikipedia.org/wiki/Telegraph_sounder). Relays were used instead of buzzing or tones in older telegraphs.

The dit-dah code is:

> .--/..../.-/-||..../.-/-/....||--./. ./-..||.--/. . ./. ./..-/--./..../.

This is in [American Morse code](https://en.wikipedia.org/wiki/American_Morse_code), not the modern [International Morse code](https://en.wikipedia.org/wiki/International_Morse_Code). Some American Morse letters have short spaces within them.

Decoding it correctly gives:

> WHAT HATH GOD WROUGHT

This was the first official US Morse telegraph message. It opened the [Baltimore-Washington](https://en.wikipedia.org/wiki/Baltimore%E2%80%93Washington_telegraph_line) telegraph line. 

As hinted by "where?" and two of them", the answer is `baltimorewashington`.

</details>

### Level 08, by wolf

Clue(s):

- [image #1](https://files.ircpuzzles.org/2022/j80ubl60cyxqcy8cg9klkt3qkv0rhv1e.jpg)
- whodunit

Hint(s):

- <span class="hint">metadata</span>

<details><summary>Answer</summary>
    The password to the next level is "frankworsley".
</details>

<details markdown="1"><summary>Walkthrough</summary>

The image is of "Endurance", from the movie Interstellar. The [Endurance](https://en.wikipedia.org/wiki/Endurance_(1912_ship)) was the ship from Ernest Shackleton's [Trans-Antarctic Expedition](https://en.wikipedia.org/wiki/Imperial_Trans-Antarctic_Expedition). 

In the EXIF metadata there is a date, time, and location:

> Image timestamp : 1915:11:21 19:00:00Z
> GPS: 68°38'30" south, 52°58'0" west, 0m above sea level


The date is when the wreck of the Endurance sank--"late afternoon of 21 November", 1915.

The coordinates are not the actual location of the ship's wreck (which was finally found a month before the contest), but those fixed at the time of sinking.

The coordinates were fixed by [Frank Worsley](https://en.wikipedia.org/wiki/Frank_Worsley), captain of the Endurance and third in command.

The answer is `frankworsley`.

</details>

### Level 09, by Wolf

Clue(s):

- [image #1](https://files.ircpuzzles.org/2022/nFtCnpOvF9rehx8fbHIGglf12c82wk5n.png)
- [image #2](https://files.ircpuzzles.org/2022/z39dmsxflln7cp1cej53vzap9evl8nge.jpg)

Hint(s):

- <span class="hint">[image #3](https://files.ircpuzzles.org/2022/XSk42NwBcT.jpg)</span>
- <span class="hint">How about some more [image #4](https://files.ircpuzzles.org/2022/Mazafati_dates.jpg)</span>
- <span class="hint">0DD0M0YYYY</span>
- <span class="hint">[image #5](https://files.ircpuzzles.org/2022/Test_it_after_plug_it_in_to_the_computer.jpg)</span>
- <span class="hint">railroad event</span>

<details><summary>Answer</summary>
    The password to the next level is "dewittclinton".
</details>

<details markdown="1"><summary>Walkthrough</summary>

The picture is a damage [KarTrak](https://en.wikipedia.org/wiki/KarTrak) barcode. Several of the hints point toward barcodes.

Decoded, it reads

> <START> 0240901(8)31 <STOP> 2

The (8) in parentheses is too damaged to read, but can be reconstructed from the check digit.

Interpreting the code as a date in the format `0DD0M0YYYY`, yields the date 1931-09-24. This was the opening date of the [Albany and Schenectady Railroad](https://en.wikipedia.org/wiki/Albany_and_Schenectady_Railroad).

The photograph is [Socks Clinton](https://en.wikipedia.org/wiki/Socks_(cat)), the family cat of [Bill](https://en.wikipedia.org/wiki/Bill_Clinton) and [Hillary](https://en.wikipedia.org/wiki/Hillary_Clinton) Clinton.

The locomotive making the inaugural run of the Albany & Schenectady railroad was the [DeWitt Clinton](https://en.wikipedia.org/wiki/DeWitt_Clinton_(locomotive)) locomotive.

The answer is `dewittclinton`.

</details>

### Level 10, by pavonia

Clue(s):

- [image #1](https://files.ircpuzzles.org/2022/YEQbncshcECVal6AeUgjyJBbdTm9Qlwz.png)
- ♘ < ♗
- ♙ < ♟

Hint(s):

- <span class="hint">[image #2](https://files.ircpuzzles.org/2022/Battleship_NES_cover.jpg)</span>
- <span class="hint">coordinates</span>
- <span class="hint">location, rotation, stringification</span>
- <span class="hint">one codepoint per piece</span>
- <span class="hint">hïñt</span>
- <span class="hint">[image #3](https://files.ircpuzzles.org/2022/0rWLPjNaDj.png)</span>

<details><summary>Answer</summary>
    The password to the next level is "apollo11".
</details>

<details markdown="1"><summary>Walkthrough</summary>

The image is of many pieces on a chessboard, some rotated 90 degrees. There are 16 pieces, one of each color and type. It is not a legal chess position because the two kings are adjacent, which can't happen in a real chess game.

First, group the pieces by color. Then, order according to their usual chess values.

- white pawn at B3
- white knight at D4, rotated
- white bishop at E8
- white rook at E6, rotated
- white queen at E2, rotated
- white king at F4, rotated
- black pawn at D1
- black knight at B7
- black bishop at D6, rotated
- black rook at F8
- black queen at F2
- black king at E4, rotated

Dropping the piece names, we get:

- B3
- D4, rotated
- E8
- E6, rotated
- E2, rotated
- F4, rotated
- D1
- B7
- D6, rotated
- F8
- F2
- E4, rotated

If we assume `D4` when rotated becomes `4D`, we get the following hex string:

> B3 4D E8 6E 2E 4F D1 B7 6D F8 F2 4E

Decoded as UTF8, this reads `³Mèn.OÑ·møòN`, or "three men on moon".

The answer is `apollo11`.

</details>

### Level 11, by wolf

Clue(s):

- [image #1](https://files.ircpuzzles.org/2022/d9bDX41cAqn5U2rCZktUU53QNmG1SInj.png)
- 名

<details><summary>Answer</summary>
    The password to the next level is "hanxin".
</details>

<details markdown="1"><summary>Walkthrough</summary>

The clue is a [Nonogram](https://en.wikipedia.org/wiki/Nonogram). The [solution](https://files.ircpuzzles.org/2022/amalmurali1.png) (credit: participant) is a [han xin](https://en.wikipedia.org/wiki/Barcode#Matrix_(2D)_barcodes) barcode.

"名" means "name". The barcode is named after the famous general [Han Xin](https://en.wikipedia.org/wiki/Han_Xin). It's also a clue that we want the name of the barcode not the contents.

If decoded, the barcode reads [多多益善](https://en.wiktionary.org/wiki/%E5%A4%9A%E5%A4%9A%E7%9B%8A%E5%96%84). This is from the Shiji quote:

> Once Emperor Gaozu of Han talks with \[Han Xin\] about how many soldiers a military officer can command. Han Xin asserted that the emperor can command no more than one million, but when asked about himself, he said: "As for me, **the more, the better.**"

The answer is `hanxin`.

</details>

### Level 12, by wolf

Clue(s):

- [image #1](https://files.ircpuzzles.org/2022/eiPBAVJWc80CbPqz4lm1AcH8fjVGKzSV.jpg)

Hint(s):

- <span class="hint">[link](https://musicbrainz.org/release/58a1c084-332d-4012-86af-88b0cf8e47a7)</span>

<details><summary>Answer</summary>
    The password to the next level is "cygnusx1".
</details>

<details markdown="1"><summary>Walkthrough</summary>

The picture is of a swan. The Latin name for swan is "Cygnus".

Overlaid subtly (an image editor will help) is a [picture](https://files.ircpuzzles.org/2022/Bell_X-1.jpg) of the [Bell X-1](https://en.wikipedia.org/wiki/Bell_X-1) aircraft.

[Cygnus X-1](https://en.wikipedia.org/wiki/Cygnus_X-1) is a well-known galaxy, and the first galactic X-ray source widely accepted to be a black hole.

The EXIF data of the jpg credits the artist as`0d0f04a0-c0b8-447b-8a37-b1536da5b8f1`. Searching this UUID turns up the music alnum ["A Farewell to Kings"](https://musicbrainz.org/release/0d0f04a0-c0b8-447b-8a37-b1536da5b8f1/cover-art), containing the song [Cygnus X-1](https://en.wikipedia.org/wiki/Cygnus_X-1_(song_series))

The hint is a rickroll, but also confirms that the musicbrainz.org search result is correct.

The answer is `cygnusx1`.

</details>

### Level 13, by tris

Clue(s):

- [game](https://wordgame.ircpuzzles.org/2JZiF4j1yvM1RPFciP9a/)
- le chiffrage indéchiffrable
- Admin note: if you choose to make automated requests, please do so no more frequently then once a second, thanks!

Archivist's note: The above game is likely down by the time you read this. If you really want to play:

- Download and extract the [source-code](https://files.ircpuzzles.org/2022/pwg.tar). Don't read the source if you want to avoid spoilers.
- Install python and flask, which are required to run.
- Run `python wordgame.py`
- Play by directing your browser to [http://localhost:8082/2JZiF4j1yvM1RPFciP9a/](http://localhost:8082/2JZiF4j1yvM1RPFciP9a/). You're allowed to right click and view source in your browser (but it won't help). 

<details><summary>Answer</summary>
    The password to the next level is "modernity".
</details>

<details markdown="1"><summary>Walkthrough</summary>

The first clue is an interactive game, where the player makes a single 9-letter guess, and two "answers" are hinted as as in the popular word game, [Wordle](https://en.wikipedia.org/wiki/Wordle). The rules are that letters in the correct position are marked green, and correct letters in the wrong position are marked yellow. The player gets 8 guesses--not enough to solve both words at once, even one is difficult.

The player is expected to deduce that the solution on the left is always a 9-letter word, while the one on the right is not a word.

The second clue, `le chiffrage indéchiffrable`, refers to the [Vigenère cipher](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher).

Given these hints, the player is expected to deduce one of the following ways of thinking about the puzzle:

- The left word, when deciphered using the right word, gives the answer.
- The right word is a vigenère-ciphered version of the left word, using the same key each time. That key is the answer.

Both ways of thinking about the puzzle give the same answer, `modernity`.

</details>

### Level 14, by pavonia

Clue(s):

```
😮😐😐😶😮😐😐😶😮😮😐😶😮😶😮😮😮😶😮😮😶
😶😶😮😐😮😶😐😐😐😐😶😮😮😐😶😮😮😐😶😮😮
😐😶😮😐😮😶😮😮😮😶😮😐😶😮😮😐😶😮😐😐😶
😶😶😮😮😐😶😮😮😐😶😮😮😮😶😮😐😶😮😮😐😶
😮😐😐😮😶😮😮😐😮😶😮😮😮😮😶😮😮😮😶😮😐
😐😶😶😶😮😮😐😶😮😐😮😮😶😮😮😐😶😮😐😮😶
😮😮😐😶😮😐😐😮😶😮😮😐😶😮😮😮😐😶😮😮😐
😶😮😐😮😶😮😮😐😶😮😮😮😐😶😶😶😮😐😐😶😮
😮😮😶😮😮😮😶😮😐😮😶😮😮😮😶😮😐😶😮😮😐
😶😮😐😮😮😶😮😮😐😶😮😐😮😶😮😮😐😶😮😮😮
😐😶😮😮😮😶😮😮😶😮😮😐😶😮😶😮😮😐😶😮😮
😐😐😶😮😮😐😶😮😶😮😮😮😶😮😐😐😶😮😐😶😮
```

Hint(s):

- <span class="hint">😐😶😮😶😮😐😶😮😮</span>
- <span class="hint">[image #1](https://files.ircpuzzles.org/2022/Eoh0WH.jpg)</span>

<details><summary>Answer</summary>
    The password to the next level is "reistelephone".
</details>

<details markdown="1"><summary>Walkthrough</summary>

The text is made of characters `😮/😐/😶`. They are deliberately meant to look like `./_/ `, as in Morse code, which is a red herring. Actually, decoding works as follows. 

First replace "😮/😐/😶" by "1/0/ ". This gives:

> 100 100 110 1 111 11   101 0000 110 110 110 101 111 10 110 100   110 110 111 10 110 1001 1101 1111 111 100   110 1011 110 101 110 1001 110 1110 110 101 110 1110   100 111 111 101 111 10 110 1011 110 101 110 1110 111 11 110 1 110 1100 110 1 111 100 10 1

All sequences start with "1", hinting these are human-readable binary numbers. The hint "😐😶😮😶😮😐😶😮😮" was meant to help with decoding. With the same substitution, it gives the first binary numbers:

> 0 1 10 11

All binary numbers present are 4 digits or less, meaning we can interpret them as hex, getting:

> 446173 5066657264 667269df74 6b65696e656e 4775726b656e73616c617421

As five hex-encoded byte strings, this is:

> [b'Das', b'Pferd', b'fri\xdft', b'keinen', b'Gurkensalat!']

(`\xdf` is `ß` in german locales).

"Das Pferd frißt keinen Gurkensalat!" translates as "The horse does not eat cucumber salad!"

This was the phrase used in 1861 in a demonstration of the [Reis telephone](https://en.wikipedia.org/wiki/Reis_telephone) by [Johann Philipp Reis](https://en.wikipedia.org/wiki/Johann_Philipp_Reis).

The answer is `reistelephone`.

</details>

### Level 15, by wolf

Clue(s):

- [data](https://files.ircpuzzles.org/2022/TLvVv8x0ri89MTyeJch8sDrb32eBZ2zH.data)

<details><summary>Answer</summary>
    The password to the next level is "flagday".
</details>

<details markdown="1"><summary>Walkthrough</summary>

The file is a [pcap](https://en.wikipedia.org/wiki/Pcap) packet capture file, containing a small amount of internet traffic. Tip: use the linux/osx `file` command to identify unknown files.  Wireshark is a common tool used to examine files like this one.

Examining it shows the packet is a TCP "SYN" packet, or "synchronize" packet, requesting that a connection be established.

The packet sequence number is 19830101, hinting at the date 1983-01-01.

The TCP packet payload is a UTF8 encoded "🏁" (checkered flag).

The ARPANET [Flag Day](https://en.wikipedia.org/wiki/Flag_day_(computing)) where TCP/IP came online, replacing the older NCP, was on 1983-01-01. All computers and interfaces had to be shut down and restarted across the whole network.

The answer was `flagday`.

</details>

### Level 16, by pavonia

Clue(s):

- [image #1](https://files.ircpuzzles.org/2022/uPZiWPIJrnvCLpCKZhze2BQjD5zeCnxt.png)

Hint(s):

- <span class="hint">protons</span>

<details><summary>Answer</summary>
    The password to the next level is "haberboschprocess".
</details>

<details markdown="1"><summary>Walkthrough</summary>

Several molecules are shown, using standard [CPK coloring](https://en.wikipedia.org/wiki/CPK_coloring) white = H, black = C, red = O, blue = N, yellow = S, green = Cl, orange = P). Summing the atomic numbers ("protons") of all atoms per molecule gives

> 95 42 28 / 33 39 7 90 / 99 53 16

Interpreting these as atomic numbers, we read:

> Am Mo Ni / As Y N Th / Es I  S

Or, "ammonia synthesis". The standard industrial process for ammonia production is the [Haber-Bosch Process](https://en.wikipedia.org/wiki/Haber_process).

The answer is `haberbosch`.

</details>

### Level 17, by wolf

Clue(s):

- [image](https://files.ircpuzzles.org/2022/8y0fyA4vdp.png)

<details><summary>Answer</summary>
    The password to the next level is "winner"
</details>

<details markdown="1"><summary>Walkthrough</summary>

Another nonogram. When you [complete it](https://files.ircpuzzles.org/2022/amalmurali2.png) (credit: participant), there's a large heart and the text

> YOU WON / CHMMYR

"Chmmyr" run through ROT13 gives the answer, `winner`.

</details>

### Level 18, *Winner's Circle*

Welcome to the winner's circle!
