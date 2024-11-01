Title: 2016 April Fool's Day Summary & Solutions
Date: 2017-03-31 15:48 UTC
Slug: 2016-afpc-summary
Author: vehk

## Level 0
 - Clue: IyMjIyMjQUZEMjAxNlN0YXJ0
 - The answer: **######AFD2016Start**, decoding the clue with base64

## Level 1
 - Clue: IyMjIyMjWm54ckN5aGdiTkN5bmFyZ050bnZh
 - Like in the previous puzzle, the clue is encoded with base64, but additionally obscured by rot13
 - The answer: **######MakePlutoAPlanetAgain**

## Level 2
 - Clue: Vmxad1ZsWndIM091TEpTdUxKU3VMSlN1TEpTdUxKU3VMMkF3TDJJeU1KSXkK
 - Another combination of base64 and rot13
 - The answer: **######Spaaaaaaaaaaaaaaaacccceeeee**

## Level 3
 - Clues: Planets | [https://i.imgur.com/SuQkEZ3.png](https://i.imgur.com/SuQkEZ3.png)
 - Words to fill in:
    * Mercury
    * Venus
    * Earth
    * Mars
    * Jupiter
    * Saturn
    * Uranus
    * Neptune
 - The answer: **######YURNSUEATA**

## Level 4
 - Clues: Заря́ | Red Sky Glow
 - Заря́ literally means "Red Sky Glow" or "Aurora"
 - Zarya, the English name for Заря́, was the first module of the ISS to be launched
 - The answer: **######Zarya**

## Level 5
 - Clues: oh my gods | [https://i.imgur.com/Zj30Cxx.png](https://i.imgur.com/Zj30Cxx.png)
 - Words: 
    * Gaia
    * Cytherea
    * Cronus
    * Uranus
    * Cronos
    * Poseidon
    * Ares
    * Zeus
 - The answer: **######NIANEHAYUI**

## Level 6

 - Clues: 011-012-013-014-015-040 | do as I do (mimic) | encode | 124-110-111-123 | 8 | white
 - The numbers from the first clue are all whitespace characters in ASCII
 - The second and third hint explain what to do with this information. Encoding the word "whitespace" like this yields "127-110-111-124-105-123-120-101-103-105"
 - The rest of the hints were added later, with 124-110-111-123 decoding to "THIS", 8 hinting at 8-bit codes, and white hinting at "white" space
 - The answer: **######127-110-111-124-105-123-120-101-103-105**

## Level 7

 - Clues: beetle juice | radiation | space people | 224 | the bright dots | the bright moving dots | a very very bright dot | nothingness | america's success | soviets's success | [https://i.imgur.com/Aw7Y43r.png](https://i.imgur.com/Aw7Y43r.png)
 - Words:
    * beetle juice -> _Betelgeuse_
    * radiation -> _radiation_
    * space people -> _astronaut_
    * 224 -> _andromeda_
    * the bright dots -> _stars_
    * the bright moving dots -> _planets_
    * a very very bright dot -> _sun_
    * nothingness -> _vacuum_
    * america's success -> _apollo_
    * soviet's success -> _sputnik_
 - The answer: **######oerbnanrao**

## Level 8:

 - Clues: Carl Sagan | [https://is.gd/Xkp0t4](https://is.gd/Xkp0t4) | [https://is.gd/swo2JH](https://is.gd/swo2JH)
 - The pictures are from the images on the Voyager Golden Record
 - The answer: **######voyagergoldenrecord**

## Level 9:

 - Clues: large galaxy, not small (3 words) | pretty lights | same length | definitely not the same length | kaboom | a few stars in orion | a radius | claudius | harry potter character | not space | [https://i.imgur.com/xEn26m0.png](https://i.imgur.com/xEn26m0.png) <- VERSION #3 | number of words
 - The topic changed numerous times, with hints also added to the crossword image itself
 - Words:
    * large galaxy, not small -> _Large Magellanic Cloud (three words)_
    * pretty lights -> _aurora_
    * same length -> _equinox_
    * definitely not the same length -> _solstice_
    * kaboom -> _supernova_
    * a few stars in orion -> _rigel_
    * a radius -> _schwarzschild_
    * claudius -> _ptolemy_
    * harry potter character -> _bellatrix_
    * not space -> _terrestrial_
 - The answer: **######qpiusarorc**

## Level 10:

 - Clues: USENA KLFEU SENAK NAKUS ENAKN AKUSE NAKLF EUSED LEDLE USENA KNAKU SENAK LFEUS EENQS UBSOU DC1SO UESCE OTESC | 3 | bpp | ignore padding | not thematic | the answer is not just garbage, but might be a bit hard to read | 8 | rotated | 3
 - As with the previous puzzle, the topic here changed numerous times
 - Editing the first clue a bit yields: USE NAK LFE USE NAK NAK USE NAK NAK USE NAK LFE USE DLE DLE USE NAK NAK USE NAK LFE USE ENQ SUB SOU DC1 SOU ESC EOT ESC
 - These are all ASCII control characters (with additional padding: US[E], SO[U])
 - People were expected to put the actual characters into a file and look at the binary representation. With one column per byte and groups of three, it becomes (0 removed):

```
   11111
   1 1 1
    1 1 

   11111
   1 1 1
   1 1 1

   11111
   1 1 1
   1 1 1

   11111
   1 1 1
    1 1 

   11111
   1    
   1    

   11111
   1 1 1
   1 1 1

   11111
   1 1 1
    1 1 

   11111
     1 1
   11 1 

   11111
   1   1
   11111

   11 11
     1  
   11 11

```

 - The answer: **######Beeblebrox**

## Level 11

 - Clues: a pioneer(strong) | sun farts | where we are(big picture) | accelerating weight loss(17 across) | a huge structure(largest) | 244 225(8859-7) | sounds similar(star wars) | 07 39 18 11950(05 13 29 9552) | cheese | the big one(sp, 2 words) | the bright one | [i.imgur.com/KDiMQ2p.png](https://i.imgur.com/KDiMQ2p.png) ← NEW | spaces allowed
 - Words:
    * a pioneer (strong) -> _Neil Armstrong_
    * sun farts -> _solar winds_
    * where we are (big picture) -> _local group_
    * accelerating weight loss -> _Hawking Radiation_
    * a huge structure (largest) -> _filament_
    * 244 225(8859-7) -> _Aldebaran_
    * sounds similar (star wars) -> _Alderaan_
    * 07 39 18 11950(05 13 29 9552) -> _Procyon_
    * cheese -> _moon_
    * the big one (sp, 2 words) -> _El Gordo_
    * the bright one -> _Sirius_

 - The answer: **######iaroamegac**

## Level 12

 - Clues: [https://is.gd/nMYVhB](https://is.gd/nMYVhB) | [https://is.gd/N5ogMy](https://is.gd/N5ogMy) | blue
 - The puzzle in the picture is a Nonogram, solving it gets you a QR-code
 - Scanning the QR-code reveals the message "Спутник-1"
 - Find Baikonur Cosmodrome on the Wikipedia page for Спутник-1 (Sputnik 1)
 - The answer: **######BaikonurCosmodrome**
