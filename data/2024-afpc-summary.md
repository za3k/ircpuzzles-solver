Title: 2024 April Fool's Puzzle Competition Summary & Solutions
Date: 2024-05-01 12:00
Slug: 2024-afpc-summary
Author: za3k

<style>
span.hint {
	width: 30em;
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

Here are the puzzles, hints, and answers for the 2024 April Fools Puzzle Contest on #ircpuzzles on libera IRC.
Hints were gradually revealed throughout the contest. Expect to need them to finish.

**The 2024 theme was "Potpourri of Past Themes"** in honor of the 10-year anniversary of ircpuzzles.

### Level 00: #ircpuzzles entry point

[https://ircpuzzles.org/](https://ircpuzzles.org/)

Rules: [https://ircp.link/rules](https://ircp.link/rules)

Tips: [https://ircp.link/tips](https://ircp.link/tips)

Links: [https://linktr.ee/ircpuzzles](https://linktr.ee/ircpuzzles)

Clue(s):

- join `#ircpuzzles-2024-afpc-01` with key "puzzle"

The password to #ircpuzzles-2024-afpc-01 was "puzzle"

### Level 01: *Intro* by wolf

If the key you find contains spaces, drop them. Join #ircpuzzles-2024-afpc-02. The key is "next level".

If the next level to join is not explicitly named, it is always the number of the previous level + 1.

<details><summary>Answer</summary>
    The password to #ircpuzzles-2024-afpc-02 was "nextlevel"
</details>

### Level 02, *Anniversary* by wolf

This year is #ircpuzzles' 10th Anniversary! 🎉

Expect a potpourri of past themes and check out: https://ircp.link/Ej0Zng 

Clue(s):

- れ🚌

<details><summary>Answer</summary>
    The password to #ircpuzzles-2024-afpc-03 was "rebus"
</details>

<details markdown="1"><summary>Walkthrough</summary>

This is a [rebus](https://en.wikipedia.org/wiki/Rebus) puzzle.

The symbols are the japanese character れ (re) and a bus.

The answer is 'rebus'.

</details>

### Level 03, *Hard Hat* by wolf

Theme: Cryptography

Clue(s):

- [image](https://ircp.link/78FmxZ)

Hint(s):

- <span class="hint">There are many ways to write a sentence</span>
- <span class="hint">One letter per symbol</span>
- <span class="hint">U must disconnect before carrying out maintenance or repair</span>
- <span class="hint">E connects an earth terminal to the ground</span>
- <span class="hint">ISO 7010</span>
- <span class="hint">1 = A</span>

<details><summary>Answer</summary>
    The password to #ircpuzzles-2024-afpc-04 was "reallyweird"
</details>

<details markdown="1"><summary>Walkthrough</summary>

A sentence made up from [ISO 7010](https://en.wikipedia.org/wiki/ISO_7010) hazard and safety signs. There’s a lowercase variant (mandatory signs) and an uppercase variant (prohibition signs). Each sign stands for a letter of the alphabet. The sign P001, for example, stands for 'A', and the sign M004 stands for 'd'.

The sentence is “You Wouldn't Believe Me If I Told You That The Key For The Next Level Is Really Weird”

The answer is "ReallyWeird"

</details>

### Level 04, *The Fork* by wolf

You are through the looking glass. There are two doors here, one leading to #ircpuzzles-2024-afpc-A1 labelled "jabber", and one leading to #ircpuzzles-2024-afpc-B1 labelled "wocky". There is also a trapdoor to 07 here, but you have a feeling you need to beat the other levels to figure out its key.

<details><summary>Regular answer</summary>
    The password to #ircpuzzles-2024-afpc-A1 was "jabber"<br>
    The password to #ircpuzzles-2024-afpc-B1 was "wocky"
</details>
<details><summary>End-of-puzzle-hunt answer</summary>
    The password to #ircpuzzles-2024-afpc-07 was "deafeningfinalist". 'deafening' comes from the end of path A, 'finalist' from the end of path B.
</details>
<details><summary>Secret Door</summary>
    #ircpuzzles-2024-afpc-05 could be entered with no password
</details>

### Level A1, *Lost Pet* by za3k

Theme: Cryptography

Clue(s): 

- [image](https://ircp.link/mqOBfS)
- Who is S.S.S.S.?
- Hope you speak parseltongue
- You don't need all the secret messages
- Recommended listening: [music](https://youtu.be/ahgcD1xjRiQ)
- For technical reasons, drop the final 2 letters from the answer.

Hint(s)

- <span class="hint">S.S.S.S. is the lost pet.</span>
- <span class="hint">S.S.S.S. = \_\_\_\_ \_\_\_\_ \_\_\_\_ Snake</span>
- <span class="hint">S.S.S.S. is the key.</span>
- <span class="hint">S.S.S.S. = Sh\_\_\_\_ \_\_\_\_ Sh\_\_\_ Snake</span>
- <span class="hint">S.S.S.S. = Sh\_\_\_\_ Secret Sha\_\_\_ Snake</span>

<details><summary>Answer</summary>
    The password to #ircpuzzles-2024-afpc-A2 was "shamirssecretsharingsna", instead of "shamirssecretsharingsnake". Turns out keys are limited to 23 characters on libera, who knew?
</details>

<details markdown="1"><summary>Walkthrough</summary>

Snake picture thanks to Colleen O'Dell, aka [StarGlade](https://pixabay.com/users/starglade-768093/).

The lost picture poster has 10 secret messages hidden in it.

1. The filename, `U2hhbWlyIGNhbid0IHJlYWQ=` decodes as base64 to **Shamir can't read**
2. In the EXIF of the JPG is hidden the comment **Shamir is actually twin brothers**
3. At the end of the file is the plain text string **Shamir is three kids in a trenchcoat**
4. (error) The four stripes at the bottom of the snake are colored. Their actual hex values are erroneously one off in some cases due to JPEG compression. Their hex values should instead have been: #416469 #486174 #65734B #697474 #656E73. In ASCII, this hex decodes as **AdiHatesKittens**.
5. Along the snake’s top belly stripes is hidden morse code: `... .... .- -- .. .-. / .-- . - ... / .... .. ... / -... . -..` decodes as **SHAMIR / WETS / HIS / BED**
6. Overlapping three sets of mystery glyphs reveals the text **Adi is the crown prince in disguise**
7. Written very small in grey text on the snake’s tail is **Shamir is afraid of mice**
8. Hidden in dark blue dots in the snake’s right eye is the text **HeIsPregnant**. (a reference to a previous year's goldbug puzzle)
9. The snake’s speech decodes in binary as: **ImHisPetSnake**
10. The snake's speech has groups of S's separated by spaces. The group lengths decode to letters (A=1,B=2): **Adi Shamir’s**

Note: [Shamir’s Secret Sharing](https://en.wikipedia.org/wiki/Shamir%27s_secret_sharing) is a method invented by Adi Shamir to share a secret using (say) any 4 out of 10 messages.

Who is S.S.S.S.? It’s this snake spilling all of Adi Shamir’s deepest secrets.

The key is "Shamir'sSecretSharingSna[ke]".

</details>

### Level A2, *Hallways* by wolf

Theme: Video Games

Clue(s):

- [video game](https://ircp.link/St3bG9)

Hint(s):

- <span class="hint">You begin to scribble on a piece of paper. You write "word", then cross it out.</span>
- <span class="hint">You have a feeling what is in your pockets is very important.</span>
- <span class="hint">You suddenly remember the theme of this puzzle, and feel more confident.</span>

<details><summary>Answer</summary>
    The password to #ircpuzzles-2024-afpc-A3 was "prose"
</details>

<details markdown="1"><summary>Walkthrough</summary>

The player is thrown into a text adventure with a series of passages. Hidden in the passages are 5 shapes drawn on the floor, 10 plaques, and a waiver.

The layout of the passages is as follows:
```
                        [H]
                        [ ]
                        [ ]
         [D][C][ ][ ][ ][ ][ ]
            [ ]         [ ]
      [G][ ][ ][ ][ ]   [ ]
   [Z]      [ ]
[P][ ][ ][ ][ ][ ][ ][ ]
   [ ]      [ ]
   [ ]   [F][ ][ ][ ][ ][ ][ ]
   [ ]      [*]
   [ ]
   [A][ ][I][ ][ ][ ]
         [ ]
         [ ]
   [M][ ][ ][ ][ ]
         [ ]
         [ ]
```
You start in location `*`. The hallways each have a plaque the the top or left end of the hallway.

In addition, you have a waiver in your inventory, which starts:

```
MINISTRY OF PUZZLES RELATED TO THE SURNAMES OF IMPORTANT PERSONAGES: ACCIDENT WAIVER...
```

The map forms a crossword, the answers of which are last names of interactive fiction authors. Clues are given in the plaques, and the first letter of the game is given in the hallway letter.

- C, Colossal Cave Adventure, Crowther
- D, Dunnet, Schnell
- H, Hobbit, Megler
- F, 1893: A World's Fair Mystery, Nepstad
- P, Planetfall, Meretzky
- I, Inform 7, Nelson
- A, Anchorhead, Gentry
- M, Amnesia, Ditsch
- Z, Zork, Lebling
- G, Galatea, Short

The filled-out crossword becomes

![Crossword solution](https://files.ircpuzzles.org/2024/a1-crossword-answers.png)

Read in order the dot, line, triangle, square, and pentagon (1, 2, 3, 4, 5). This spells out the answer, 'prose'.

</details>

### Level A3, *Photo Gallery* by za3k

Theme: Historic Personalities

Clue(s):

- [website](https://ircp.link/k2A3HR)

Hint(s):

- <span class="hint">Nice view.</span>

<details><summary>Answer</summary>
    The password to #ircpuzzles-2024-afpc-A4 was "hokusai"
</details>

<details markdown="1"><summary>Walkthrough</summary>

100 assorted images of Mt. Fuji were shown on the webpage.

This is a reference to [One Hundred Views of Mount Fuji](https://en.wikipedia.org/wiki/One_Hundred_Views_of_Mount_Fuji), a series of three gorgeous [ukiyo-e](https://en.wikipedia.org/wiki/Ukiyo-e) books by [Hokusai](https://en.wikipedia.org/wiki/Hokusai).

The answer was 'Hokusai'.
</details>

### Level A4, *Just Nonsense* by pavonia

Theme: Cryptography

Clue(s):

- Lq62c8hmBYj+u+56DX==

Hint(s):

- <span class="hint">Think out of the box</span>
- <span class="hint">clue is not in base64</span>
- <span class="hint">yet</span>
- <span class="hint">"Watch what everyone else does ..."</span>

<details><summary>Answer</summary>
    The password to #ircpuzzles-2024-afpc-A5 was "squeamishossifrage"
</details>

<details markdown="1"><summary>Walkthrough</summary>

The text given looks like base-64, but actually can't be *decoded* as anything interesting using base64.

Instead if you *encode* it in base-64, you get the message `THE2MmM4aG1CWWordSs1NkRYPT0=`, or "the two magic words in crypto".

The answer is the ciphertext of a [1977 RSA challenge](https://en.wikipedia.org/wiki/The_Magic_Words_are_Squeamish_Ossifrage), "The Magic Words are Squeamish Ossifrage".

The key is 'SqueamishOssifrage'.

</details>

### Level A5, *The Afterparty* by za3k

Theme: Space

Clue(s):

- 
    Hey, glad you could make it. Bacchus's afterparty has everything. Half of Bacchus’s hot nurses just showed up from another party! The musician was pretty famous but he left without his instrument. I hear that chick over there is some kind of royalty in Ancient Ethiopia, she’s been bragging about her kid for hours. Wait, I know you. What was your name again?

    Who came doesn’t matter. Who (and what) is still at the party?

Hint(s):

- <span class="hint">The answer is your name</span>
- <span class="hint">Constellations</span>
- <span class="hint">Story: A priest came earlier chanting latin, real old-school fundamentalist type. But Bacchus kicked him out. Took his cross and burned his bible too. I know the guy was a party pooper but geez, you know?</span>
- <span class="hint">It’s not a group, it’s a sequence. What order did they show up in? Make a list. [The narrator is not in the list]</span>
- <span class="hint">Story: Before that, some huge guy tracked down the party, but he left after he got really drunk and his pants fell down.</span>
- <span class="hint">Story: Before that this cute lil dog showed up, he's asleep in the corner.</span>
- <span class="hint">Story: The first person to the party was a little bear, but with real Alpha vibes, you know?</span>
- <span class="hint">Once you know the pattern, you can reasonably guess each new partygoer from the one before.</span>

<details><summary>Answer</summary>
    The password to #ircpuzzles-2024-afpc-A6 was "orion"
</details>

<details markdown="1"><summary>Walkthrough</summary>

The key insight in this puzzle was to make a list of everything still at the party, in the order it arrived:

1. a small alpha bear (a little bear, but with real Alpha vibes)
2. a small dog (this cute lil dog)
3. a belt (some huge guy tracked down the party, but he left after he got really drunk and his pants fell down)
4. a cross (A priest came earlier chanting latin, real old-school fundamentalist type. But Bacchus kicked him out. Took his cross and burned his bible too.)
5. an Ancient Ethiopian queen (that chick over there is some kind of royalty in Ancient Ethiopia, she’s been bragging about her kid for hours)
6. a musician's instrument (The musician was pretty famous but he left without his instrument)
7. Half of Bacchus’s hot nurses
8. You, the answer to the puzzle

The party guests are constellations:

1. Polaris (Alpha Ursae Minoris) - a little bear with alpha vibes
2. Canis Minor - a little dog
3. Orion’s Belt - a giant tracker’s belt
4. Southern/Latin Cross (Crux) - a cross
5. Cassiopeia - Ancient Ethiopian royalty
6. Lyra - a musician’s instrument
7. Pleiades - half of bachus’s nursemaids, the Nysiads

Polaris has one star, Canis Minor two stars, and so on up to the seven stars of the Pleiades. 

You are the most famous constellation with eight stars, Orion, back for your missing belt.

The answer is 'orion'.

</details>

### Level A6, *Static A* by za3k

Theme: History

Clue(s): 

- [video](https://ircp.link/hW8X9y) or [same video](https://ircp.link/aaVF5R) Warning: video contains flickering/flashing lights

Hint(s):

- <span class="hint">Try changing your perspective.</span>

<details><summary>Answer</summary>
    The password to #ircpuzzles-2024-afpc-A6 was "mockelection"
</details>

<details markdown="1"><summary>Walkthrough</summary>

The video appears to be static, but only certain pixels change. Staring at the outline or using an image diff tool, it's possible to see this shape:

![static](https://files.ircpuzzles.org/2024/YGKlWVgae1QUX.png)

Viewing the image at extreme angles, the shapes flatten into the words:

- April
- 21
- MMVII
- Bhutan

On April 21, 2007, Bhutan held a [practice election](https://en.wikipedia.org/wiki/2008_Bhutanese_National_Assembly_election#National_mock_election) to teach people how democracy works, before their first real election.

The answer was 'mockelection'.

</details>

### Level A7, *The Spiral* by pavonia

Theme: Historic Personalities

Clue(s): 

- Roses are amber, violets are blue, don't be a Sherlock to unsnarl the clew!
- [website](https://ircp.link/EGTAnV)

Hint(s):

- <span class="hint">#FACADE</span>
- <span class="hint">hex colors point to puzzle topic</span>
- <span class="hint">colors are colors, nothing hidden within them</span>
- <span class="hint">one circle, one base</span>
- <span class="hint">ph < 7 & strands</span>
- <span class="hint">fill 'em out</span>

<details><summary>Answer</summary>
    The password to #ircpuzzles-2024-afpc-A8 was "emmanuellecharpentier"
</details>

<details markdown="1"><summary>Walkthrough</summary>

Several hints should point the player to the relation to molecular biology:

- the spiral resembling a strand of RNA;
- the colors in the initial clue pointing to the hex colors in the HTML code, namely *amber*, *ochre*, *opal* and *umber*, which stand for the three RNA/DNA [stop codons](https://en.wikipedia.org/wiki/Stop_codon);
- the hint “don’t be a Sherlock” pointing to James Watson.

Each “pearl” in the spiral represents one [base](https://en.wikipedia.org/wiki/Nucleobase) in the RNA strand, where the HTML element class names give hints on how to map element colors to complementary base pairs (A, A inverted = U; C, C inverted = G). Reading the strand in standard 5-to-3-end direction yields:

> (5) UUYAUMUUA <span style="color:blue">AUG<span style="text-decoration:underline">GCBUGGGCDMGRGAC</span>UGA</span> CAYGC <span style="color:blue">AUG<span style="text-decoration:underline">GAAGAYAUMACSAUUAACGGV</span>UAG</span> AC <span style="color:blue">AUG<span style="text-decoration:underline">UGYMGGAUWUCKCCHMGA</span>UAA</span> UAUUUUAACGUUU (3)
> 
> (significant parts in blue, actual message parts underlined).

There are three significant substrings, each starting with an AUG triplet ([start codon](https://en.wikipedia.org/wiki/Start_codon)) and ending with one of the three triplets for [stop codons](https://en.wikipedia.org/wiki/Stop_codon).

Beside the specific bases A, C, G and U there are some parts of the string given as [degenerate base symbols](https://en.wikipedia.org/wiki/Nucleic_acid_notation) which represent several bases. The player has to replace those by matching concrete bases.

Translating all significant substrings of base triples [into amino acids](https://en.wikipedia.org/wiki/DNA_and_RNA_codon_tables) and taking their single-letter short codes gives the three words “AWARD”, “EDITING” and “CRISPR”, hinting to Nobel Prize winner Emmanuelle Charpentier (together with Jennifer Doudna) for the CRISPR gene editing technique.

If read in the wrong direction, the string starts with the message "FAIL&lt;stop&gt;".

The answer is 'EmmanuelleCharpentier'.

</details>

### Level B1, *Blocks "R" Us* by FireFly

Theme: Video Games

Clue(s): 

- [video game](https://ircp.link/24rJzU)

Hint(s):

- <span class="hint">shapes</span>
- <span class="hint">spelling 🐝</span>
- <span class="hint">reading source code is optional</span>
- <span class="hint">name 'em</span>
- <span class="hint">pentominoes</span>

<details><summary>Answer</summary>
    The password to #ircpuzzles-2024-afpc-B2 was "infinitylupin"
</details>

<details markdown="1"><summary>Walkthrough</summary>

The game was similar to tetris, with pentominos (5-square tiles) instead of 4-square tiles. The same tiles always fell each game, in a repeating loop.

[Pentominos](https://en.wikipedia.org/wiki/Pentomino) have a couple standard naming schemes.

![Naming Scheme](https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Pentomino_Naming_Conventions.svg/1024px-Pentomino_Naming_Conventions.svg.png)

According to one common scheme, the tiles falling are called: I, N, F, I, N, I, T, Y, L, U, P, I, N, (repeats)

The answer was 'infinitylupin'. ([lupin](https://en.wikipedia.org/wiki/Lupinus) is a flower)

</details>

### Level B2, *Secret Code* by za3k

Theme: Video Games

Clue(s):

- ankȯö\_eidmc
- 1. Unscramble 2. Same length 3. Rescramble

Hint(s):

- <span class="hint">_ is allowed to move</span>
- <span class="hint">anagram</span>
- <span class="hint">contra</span>
- <span class="hint">abbrev</span>
- <span class="hint">solution is 11 characters</span>
- <span class="hint">don't forget to start</span>

<details><summary>Answer</summary>
    The password to #ircpuzzles-2024-afpc-B3 was "dduublsralr"
</details>

<details markdown="1"><summary>Walkthrough</summary>

The letters of ankȯö\_eidmc can be unscrambled to read kȯnami\_cöde.

The [konami code](https://en.wikipedia.org/wiki/Konami_Code), popularized by Contra, is a common cheat code. In Contra it gave you 30 extra lives. The code is 11 key presses: Up, U, Down, Down, Left, Right, Left, Right, B, A, Start.

11 keys is the same length as `kȯnami\_cöde`.

</details>

### Level B3, *Thor's Puzzle* by pavonia

Theme: Mythology

Clue(s):

- [image](https://ircp.link/5hI9Sm)

Hint(s): 

- <span class="hint">Spot 'em</span>
- <span class="hint">Each panel has one</span>
- <span class="hint">ᚠᚢᚦᛅᚱᚴ</span>
- <span class="hint">Younger</span>
- <span class="hint">Ignore the confused old man</span>

<details><summary>Answer</summary>
    The password to #ircpuzzles-2024-afpc-B4 was "darksamus"
</details>

<details markdown="1"><summary>Walkthrough</summary>

Note: The puzzle was created in [Brick Link](https://www.bricklink.com/v3/studio/download.page)

The puzzler is presented with a comic story about a young Thor and his lively day. In each panel scene, one norse Futhark rune is hidden.

The hidden runes are from the long-branch Younger Futhark alphabet, which can be concluded from the ᛅ rune in scenes 2 and 6 which is only available in this specific runes alphabet. The theme also gives a hint, as long branch runes were primarily used in Denmark.

In the scenes the following runes occur in order:
1. A ᛏ rune is formed by the ducklings in front of Thor taking a bath.
2. Thor is engraving an ᛅ into the runestone behind the school class.
3. The weapons on the ground form a ᚱ next to the fighting arena.
One of the posts of the shed behind the pizza baking place looks like a ᚴ.
4. The path in the middle of the garden has a ᛋ-shape
5. There’s an ᛅ in the pattern of the floor in front of the safe.
6. The tree on the right looks like a big ᛘ.
7. Thor and Sif are watching a bunch of dragons forming an ᚢ.
8. Another ᛋ can be found in the shining stars between the alien and Thor.

Combining the runes gives “ᛏᛅᚱᚴᛋᛅᛘᚢᛋ” = “DarkSamus”, one of the main antagonists from the Metroid video game series.

The answer is 'DarkSamus'.

</details>

### Level B4, *Serial Experiments Lain* by za3k

Theme: Cryptography

Note: the original puzzle had 2 errors in the sixth layer. Most notably, "39" was typo-ed as "37"

Clue(s):

- [website](https://ircp.link/ZhhFtN)

Hint(s):

- <span class="hint">Only for the final layer: Dessert</span>
- <span class="hint">L,,psy</span>
- <span class="hint" markdown="1">[image](https://ircp.link/euwZTH)</span>
- <span class="hint">Layer 6: Take a bite</span>

Shitposts(s):

- [baka video](https://baka.dumb.ai/b4.mp4) [alt](https://files.ircpuzzles.org/2024/b4.mp4)
- [baka image](https://baka.dumb.ai/ircpuzzles/b4/notahint.jpg) [alt](https://files.ircpuzzles.org/2024/notahint.jpg)

<details><summary>Answer</summary>
    The password to #ircpuzzles-2024-afpc-B5 was "sevenlayerparfaitflambe"
</details>

<details markdown="1"><summary>Walkthrough</summary>

The player is presented with a website. It says "Shrek: There's a lot more to ogres than people think.", a line from the Shrek movie. There is a picture from the same scene.

As the player progresses, they must decrypt each layer of the puzzle, while seeing more quotes from the Shrek "Ogres have layers. Onions have layers" scene. Each layer is named after a "Layer", or episode, from the Serial Experiments Lain anime.

Clicking "View source" reveals this comment:

> Shrek: Ogres are like onions! 

> YNLRE 1: JRVEQ
> 
> Qbaxrl: Gurl fgvax?
> Fuerx: Lrf... Ab!
> 
> GRSMEIVtZwbtE0yFGSZXPxEiozgyrGbtG2tfVUEbMKxtoJSeMFO5o3HtL3W5CjbXFTyhqQbtq2uuqPOfMJ5aqTttnKZtqTuyVTAiMTIxVT1yp3AuM2H/PtcZYPkjp3x6oHk6oaLmM3cg4cFXrUu4rUu4DKy0pv7vyVcOpzqarat1oF5fo3u4rUu4rSyinT8hJIqdnF5knzclp3yerUu4rUu4EKIyqF5WVJq04evkrJL1rz1vrUu4rUu4rSWfrKGvyVcAJv5gGmc6MmW6nUu4rUu4rUtmMJqcIyWhDzuGJUS0oaAbrUu4rUu4rQcuMJ5cFaSiqyygMJfloKy4rUu4rUu4HUM0W2p0p2MfGUuzpJMcp3u4rUu4rUuGMJSfMGcypw9RraS6nl5drUu4rUu4rSxaoTyhEzSeFmIlqmI6I3S4rUu4rUu4D2IfqZBbHv52pwcmnQIxMzc4rUu4rUu4FT1vqUWHD25dIaN6pzSaoau4rUu4rUuSo3WfMIquMTASYP95Z2EdrUu4rUu4rBXHvaIiMrXHvyEup2qWnP9hM3qirUu4rUu4rRE0q3p2DJA5ryqmnmEwnzS4rUu4rUu4o2yhnTkQLKA2HaMjAJ11L3u4rUu4rUuhovkcMHSuoJ5RpJcgqUc2rUu4rUu4rTg0p3E04evkqaWxI2gzoUAfpau4rUu4rUuynUEyqRShraASoUIzATc3rUu4rUu4rUyyLJuyqz5arIqxpUcupv54rUu4rUu4BaAlLKWypl5mGayyrKc14evkrUu4rUu4rR91qTyeq3xhoIIkAzH2ozA4rUu4rUu4nT5mpzI5nF5loKqbpzAmrUu4rUu4rUtX

Running the ciphertext through [ROT13](https://en.wikipedia.org/wiki/ROT13) gives

> LAYER 1: WEIRD
 
> Donkey: They stink?
> Shrek: Yes... No!
 
> TEFZRVIgMjogR0lSTFMKCkRvbmtleTogT2gsIHRoZXkgbWFrZSB5b3UgY3J5PwoKSGludDogd2hhdCBsZW5ndGggaXMgdGhlIGNvZGVkIG1lc3NhZ2U/CgpMLCxwc3k6bUx6bnYzZ3pt4pSKeHh4eHh4QXl0ci7ilIpBcmdneng1bS5sb3h4eHh4eFlvaG8uWVdqaS5xampyc3lreHh4eHh4RXVldS5JIWd04rixeWY1em1ieHh4eHh4eFJseXTilIpNWi5tTzp6ZzJ6aHh4eHh4eHgzZWdpVlJuQmhTWHF0bnNoeHh4eHh4eDphZW5pSnFvdlltZWsybXl4eHh4eHh4UHZ0J2c0c2ZsTHhmcWZpc3h4eHh4eHhTZWFsZTplcj9EenF6ay5qeHh4eHh4eFknbGluRmFrSzVydzV6V3F4eHh4eHh4Q2VsdMOoUi52cjpzaDVkZmp4eHh4eHh4SG1idHJUQ25qVnA6cmFnbnh4eHh4eHhFb3JsZVdhZGNFLC95M2RqeHh4eHh4eOKUinVvZeKUilRhc2dJaC9uZ3dveHh4eHh4eER0d3c2QWN5eldzazRjamF4eHh4eHh4b2luaGxDYXN2UnZwNW11Y3h4eHh4eHhubixpZUFhbW5EcWptdHp2eHh4eHh4eGt0c3R04rixdnJkV2tmbHNscnh4eHh4eHhlaHRldEFuenNFbHVmNGp3eHh4eHh4eHllYWhldm5neVdkcHphci54eHh4eHh4OnNyYXJlcy5zTnlleXp14rixeHh4eHh4eE91dGlrd3kubVVxNmU2bmN4eHh4eHh4aG5zcmV5aS5ybXdocmNzeHh4eHh4eHgK

The next step is to [base64](https://en.wikipedia.org/wiki/Base64) decode the new ciphertext. The hint `L,,psy` confirms the correct base64 decoding.

> LAYER 2: GIRLS

> Donkey: Oh, they make you cry?

> Hint: what length is the coded message?

> L,,psy:mLznv3gzm┊xxxxxxAytr.┊Arggzx5m.loxxxxxxYoho.YWji.qjjrsykxxxxxxEueu.I!gt⸱yf5zmbxxxxxxxRlyt┊MZ.mO:zg2zhxxxxxxx3egiVRnBhSXqtnshxxxxxxx:aeniJqovYmek2myxxxxxxxPvt'g4sflLxfqfisxxxxxxxSeale:er?Dzqzk.jxxxxxxxY'linFakK5rw5zWqxxxxxxxCeltèR.vr:sh5dfjxxxxxxxHmbtrTCnjVp:ragnxxxxxxxEorleWadcE,/y3djxxxxxxx┊uoe┊TasgIh/ngwoxxxxxxxDtww6AcyzWsk4cjaxxxxxxxoinhlCasvRvp5mucxxxxxxxnn,ieAamnDqjmtzvxxxxxxxktstt⸱vrdWkflslrxxxxxxxehtetAnzsEluf4jwxxxxxxxyeahevngyWdpzar.xxxxxxx:srares.sNyeyzu⸱xxxxxxxOutikwy.mUq6e6ncxxxxxxxhnsreyi.rmwhrcsxxxxxxxx

The hint says to look at the length of the coded message. The ciphertext is 529 characters long. 529 = 23 x 23, a hint to arrange the letters in a 23x23 square.

```
L,,psy:mLznv3gzm┊xxxxxx
Aytr.┊Arggzx5m.loxxxxxx
Yoho.YWji.qjjrsykxxxxxx
Eueu.I!gt⸱yf5zmbxxxxxxx
Rlyt┊MZ.mO:zg2zhxxxxxxx
3egiVRnBhSXqtnshxxxxxxx
:aeniJqovYmek2myxxxxxxx
Pvt'g4sflLxfqfisxxxxxxx
Seale:er?Dzqzk.jxxxxxxx
Y'linFakK5rw5zWqxxxxxxx
CeltèR.vr:sh5dfjxxxxxxx
HmbtrTCnjVp:ragnxxxxxxx
EorleWadcE,/y3djxxxxxxx
┊uoe┊TasgIh/ngwoxxxxxxx
Dtww6AcyzWsk4cjaxxxxxxx
oinhlCasvRvp5mucxxxxxxx
nn,ieAamnDqjmtzvxxxxxxx
ktstt⸱vrdWkflslrxxxxxxx
ehtetAnzsEluf4jwxxxxxxx
yeahevngyWdpzar.xxxxxxx
:srares.sNyeyzu⸱xxxxxxx
Outikwy.mUq6e6ncxxxxxxx
hnsreyi.rmwhrcsxxxxxxxx
```

Reading the message top-to-bottom, and splitting sections at ┊, we see:

> LAYER3:PSYCHE

> Donkey:Oh,youleave'emoutinthesun,theygetallbrown,startsproutin'littlewhitehairs...

> Vigenère

> 6letterkey

> YIMRJ4:FRTWTACA⸱Avewy:AW!Znqsea.Caacaavnnsyimrjg.Bofrkvndsysmrzg...Lgitmhvl?Krjcgzvndsysmrzg.⸱OSYLD5:VEIWRDWEWNUmnzqy:Xmxzrsp,hsvqkldyqwvxjfzqefqwh://kpjfupe6h35j5gtkqz55ryn45mlfzyergmrz2n2fkzda3gcmts4az6cz.smzsmi.Wfgdwjuzljrunsmlybhhysjqjnjoacvrw.⸱cx

> okxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


Decoding the ciphertext section using a [Vigenère](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher) cipher and the 6-letter key NIONSO (or ONIONS), we get this message (splitting at ⸱):

> LAYER4:RELIGION
> 
> Shrek:NO!Layers.Onionshavelayers.Ogreshavelayers...Yougetit?Webothhavelayers.
> 
> BAKYV5:HRQIEVIREZHezmyk:Kejmzec,zeiywyvkdehkbrmyqsiiu://sbwxgcm6t35w5yfxyl55eqz45ztrmqqeoyer2z2sslqs3spuff4sl6ph.ezrezq.Isypjrgmdveczfexljtuqewyvabankheo.
> 
> ok

Going from 4 to 5 requires a monoalphabetic substitution cipher. There is no trick here--the substitution is random. Decoded, you get the following:


> LAYER 5: DISTORTION
> 
> Donkey: You know, not everybody likes http://hlvxcwk6m35v5efxej55osn45nmikssogeoi2n2hhjsh3hqpff4hj6qd.onion s. 
> The quick brown fox jumps over a lazy dog.

The link given is an [onion link](https://en.wikipedia.org/wiki/.onion) from [Tor](https://en.wikipedia.org/wiki/Tor_(anonymity_network)). Visiting it shows a text file:

> LAYER 6: KIDS

> Donkey: CAKE! Everybody loves cake! Cakes have layers!

> ₿ip39 era approve eyebrow picture address other life hazard drive enforce fence rather actor motor second voice monster slice tail dolphin report dash symptom auction half arm amount melody share penalty light put grace need flat tell elegant mother random coin grace okay siege film audit exist family piano connect acoustic orange shaft craft joke lawsuit raw vacuum wise gown thrive web skate level tomato hunt forward bulk valley maple destroy tiger audit

> 11+11+11+11+11+11+11+11=8+8+8+8+8+8+8+8+8+8+8

[BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) is a bitcoin addition which allows saving bitcoin cryptographic information as memorable english words. It encodes 11 bits as one of 2048 english words.

The given words decode as:

> 01001100010 00001010110 01010001010 10100100010 00000011011 10011101000 10000001010 01101001111 01000011010 01001010001 01010101000 10110010010 00000010101 10010000011 11000010011 11110101011 10001111010 11001011011 11011101010 01000000110 10110110111 00110111101 11011100100 00001110111 01101000011 00001011101 00001000000 10001010100 11000101001 10100010100 10000001100 10101110110 01100101011 10010011110 01011000100 11011110110 01000111100 10010000001 10110001101 00101101011 01100101011 10011001111 11001000000 01010110010 00001111000 01001111110 01010010100 10100100000 00101111001 00000010000 10011011110 11000100111 00110010000 01111000010 01111110001 10110010100 11110000100 11111100011 01100101001 11100001001 11111000110 11001010000 10000000101 11100100000 01101111011 01011011110 00011110000 11110000111 10000111100 00111100001 11100001111 00001111000

Regrouping to byte-size blocks, this is:

> LAYER 7: SOCIETY + 🫏You know what ELSE everybody likes? + 🔥 / Bobs 🍔🍔🍔 / okxxxxxxxxx

This is the final clue. The clue parts hint at:

> 7 Layer + Parfait + 🔥 / Bob's Burgers

The answer is a fictional dessert from the animated television show Bob's Burgers, the Seven-Layer Parfait Flambé.

The final answer is 'SevenLayerParfaitFlambe'.

</details>

### Level B5, *NEXUS* by pavonia

Theme: Space

Clue(s):

- HUNTS VILEX XNVVU HVTIE HULHI NUESL XEHSS XINUT NTILE UEUEV UITVS NVVUX

Hint(s):

- <span class="hint">https://ircp.link/CPz5hZ</span>
- <span class="hint">https://ircp.link/E5wjwZ</span>
- <span class="hint">Jupiter-C</span>

<details><summary>Answer</summary>
    The password to #ircpuzzles-2024-afpc-B6 was "heinrichschwabe"
</details>

<details markdown="1"><summary>Walkthrough</summary>

The first two blocks of letters hint to the Jupiter-C rocket numbering cipher, where the letters **HUNTSVILEX** map to the digits **1234567890**.

Replacing all letters by their corresponding digit gives 10 integer values:

> <span style="text-decoration:line-through">12345 67890</span> 03662 16479 12817 32958 09155 07324 34789 29296 27465 36620

 The player is supposed to find that all of them have a common prime factor of 1831.

Dividing all numbers by 1831 yields a series of numbers representing a letter of the alphabet each (1 = A, 2 = N etc.), giving the string “bigredspot”.

Combining those three hints (Jupiter + 1831 + big red spot) points to Heinrich Schwabe who made the first detailed drawings of Jupiter’s Great Red Spot.

The answer is 'HeinrichSchwabe'.

</details>

### Level B6, *Static B* by za3k

Theme: Video Games

Clue(s):

- [video](https://ircp.link/dr0U6D) Warning: video contains flickering/flashing lights
- You're looking at a single famous thing

Hint(s):

- <span class="hint">Just look. If you can't look, contact your nearest optician or ircpuzzles staff.</span>
- <span class="hint">Let's turn on the auto stereo!</span>
- <span class="hint" markdown="1">[video #2](https://ircp.link/IDkbp0) decoded image, spoiler</span>

<details><summary>Answer</summary>
    The password to #ircpuzzles-2024-afpc-B7 was "badapple"
</details>

<details markdown="1"><summary>Walkthrough</summary>

The video was an animated autostereogram (magic eye). If you've never viewed one, try facing the screen head on, and slightly crossing your eyes as it plays. A three-dimensional "cutout" may appear as you watch. Some fraction of people cannot view autostereograms. Some solvers instead used computer autostereogram decoders on screenshots.

The (non-autostereogram) video was provided as the final hint: https://ircp.link/IDkbp0

The video is *Bad Apple*, a fan video for the Touhou Project series of bullet hell games.

The key is "badapple".

</details>

### Level B7, *Jörð’s Puzzle* by pavonia

Theme: Mythology

Clue(s):

- And Odin instructed his beloved to add a super secret addendum to the Great Book of Hvatvetna, and Jörð did as she was bidden …

Hint(s):

- <span class="hint">[image](https://ircp.link/eBXZ3b)</span>
- <span class="hint">Cipher</span>
- <span class="hint">🌻🛏️/🌸🍲</span>
- <span class="hint">[image #2](https://ircp.link/sGhVkf)</span>
- <span class="hint">🕛</span>

<details><summary>Answer</summary>
    The password to #ircpuzzles-2024-afpc-B8 was "brattahlid"
</details>

<details markdown="1"><summary>Walkthrough</summary>

Jörð is the personification of earth in Norse mythology, so from context (Jörð is the mother of Thor from Lego puzzle part 1, “secret addendum” and reference to Braille runes puzzle) the player has to conclude that [cipher runes](https://en.wikipedia.org/wiki/Cipher_runes) are hidden in the flower pots and beds grown by Jörð in scene 5 of the earlier Lego puzzle.

![Jord's Garden](https://files.ircpuzzles.org/2024/9p7elPJN76.jpg)

Each flower pot/bed grows flowers with two different blossom colors (light and dark). The number of blossoms for each color encodes the cipher runes (light color = “aett”, dark color = position in aett).

Starting at the top of the scene, going clockwise, the cipher runes are

> 1/2, 3/5, 2/4, 1/1, 1/1, 2/4, 2/1, 1/4, 2/3, 3/3.

Translating to Younger Futhark runes (as used in the first Lego puzzle part) with the usual first/third aett flipped using the translation table

|                                      | 1 | 2 | 3 | 4 | 5 | 6 |
|--------------------------------------|---|---|---|---|---|---|
|aett 3 ( three white/yellow flowers ) | ᚠ | ᚢ | ᚦ | ᚬ | ᚱ | ᚴ |
|aett 2 ( two white/yellow flowers )   | ᚼ | ᚾ | ᛁ | ᛅ | ᛋ |   |
|aett 1 ( one white/yellow flower )    | ᛏ | ᛒ | ᛘ | ᛚ | ᛦ |   |

gives the word “ᛒᚱᛅᛏᛏᛅᚼᛚᛁᚦ” = “Brattahlíð”, a [former settlement](https://en.wikipedia.org/wiki/Brattahl%C3%AD%C3%B0) of Erik the Red on Greenland.

The answer is 'brattahlid'

</details>

### Level 05, *The Maze* by za3k

Levels 05/06 were an optional hidden level. You didn't get anything for completing it. There are (unintentionally) multiple solutions. Both are given under "Answer".

Theme: Video Games

Clue(s):

- The Maze is borderline unsolveable. Please do not attempt it. Especially since it's optional with no rewards past bragging rights. We are not joking.
- Join #ircpuzzles-2024-afpc-A1 and -B1 if you haven't.
- [image](https://ircp.link/09rdSD)
- [image #2](https://ircp.link/cTWkbS)
- Oops, it's broken. Ping a staff member with solutions.

<details><summary>Answer</summary>
    The password to #ircpuzzles-2024-afpc-06 was "67161", but 187203 is also valid.
</details>

<details markdown="1"><summary>Walkthrough</summary>

The clue is a recursive, fractal maze (credit to Mark J.P. Wolf).

The solution is to chart a path through the maze, which starts at (full-size) Link and ends at (full-size) Zelda. The sword starts at 3, and this number gets multiplied by 3 or increased by 1 as you pass different NPCs.

Here is one of the two common solutions:

|step| endpoints  |recursive nesting  | npcs         | math operations| description |
|----|------------|-------------------|--------------|----------------|-------------|
|  1 | Link -> C10| C                 | Mudkip       | x3             | Bottom circle along dirt path to bottom of maze C.
|  2 |  10 -> 13  | -                 | Blue Ghost   | x3             | Bottom along pacman to left
|  3 | C13 -> A9  | A                 | Bat          | +1             | Left of maze C along the lower dirt path to the bottom of maze A
|  4 |   9 -> B3  | AB                | Charmander   | x3             | Bottom right tile path to the top of maze B
|  5 |   3 -> A5  | ABA               | Mew          | +1             | Top tile path to the right of maze A
|  6 |   5 -> B4  | ABAB              | Squirtle     | x3             | From the right along the upper dirt path to the top of maze B
|  7 |   4 -> B1  | ABABB             | Bomb Soldier | +1             | From the top along the right dirt path, to the top of maze B
|  8 |   1 -> 16  | ABAB              | Bow Soldier  | x3             | From the top along the left dirt path, to the top exit on the left
|  9 | B16 -> A8  | ABABA             | Bulbasaur    | +1             | Left of maze B along the upper dirt path to the right of maze A
| 10 |   8 -> A11 | ABABAA            | Koopa Troopa | x3             | From the right along the lower pacman tunnel to the bottom of maze A
| 11 |  11 -> 14  | ABABA             | Bat, Spiny   | +1,+1          | From the bottom along the dirt path to the left
| 12 | A14 -> 14  | ABAB              | Spiny        | +1             | From the left of maze A along the dirt path to the left
| 13 | A14 -> 14  | ABA               | Spiny        | +1             | From the left of maze A along the dirt path to the left
| 14 | B14 -> C15 | ABAC              | Goomba       | x3             | From the left of maze B along the lower dirt path to the left of maze C
| 15 |  15 -> 1   | ABA               | Bow Soldier  | x3             | From the left along the upper dirt path to the top
| 16 |  C1 -> 3   | AB                | Mew          | +1             | From the top of maze C along the tile path to the top
| 17 |  A3 -> 7   | A                 | Blinky (Red) | x3             | From the top of maze A along the pacman tunnel to the right
| 18 |  B7 -> 12  | -                 | Soldier      | +1             | From the right of maze B alongh the tile path to the bottom
| 19 |A12 -> Zelda| -                 | Shadow Shaman| x3             | From the bottom of maze A along the dirt path to the top circle.

</details>

### Level 07
Welcome to Leve-- wait, YOU'RE WINNER !
