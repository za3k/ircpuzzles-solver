var data;

// TODO
// [ ] Show all link clues as iframes
//     2023: A5 B2 B5 C3
// Low priority
// [ ] Show puzzle [x] title and author [ ]
// [ ] Fix in-browser .wav playback rather than offering a link
// [ ] track progress across page loads
// [ ] add and display a timer
// [ ] Scratchpad so you can take notes in-app (add as extra clue)
// [ ] Closing a puzzle should focus a new one


// ----- Timer -----
function startTimer() {

}
function stopTimer() {

}

// ----- Progress tracker -----
function solvePuzzle() {

}
function setPuzzleCount(count) {
}

// ----- Puzzle Progression -----
async function loadYear(year) {
    const req = await fetch(`data/${year}.json`)
    data = await req.json();

    // Set 
    startTimer()
    $(".hunt-title").text(data.title)
    $(".hunt-year").text(year)
    $(".hunt-theme").text(data.theme)
    unlockPuzzle(data.start)
    for (var puzzle of Object.keys(data.puzzles)) unlockPuzzle(puzzle)
    focusPuzzle(data.start)
}

function skipPuzzle(puzzle) { finishPuzzle(puzzle); }
function guess(puzzle, g) { 
    g = g.toLowerCase()
    if (g === "") {
        return
    } else if (data.puzzles[puzzle].answer == g) {
        finishPuzzle(puzzle)
    } else {
        wrongAnswer()
    }
}

function revealHint(puzzle) {
    const p = data.puzzles[puzzle]
    const c = p.hints[p.revealed.length - p.clues.length]
    if (c === undefined) return
    p.revealed.push(c)
    unlockClue(puzzle, c)
}

function finishPuzzle(puzzle) {
    const p = data.puzzles[puzzle]
    // Remove guess, skip buttons
    // Add walkthrough link
    // Add close link
    p.solved = true
    p.ui.addClass("solved")
    // Unlock new puzzle(s)
    for (x of p.unlocks) unlockPuzzle(x)
    // Focus earliest new puzzle
    focusPuzzle(p.unlocks[0])
}

function unlockPuzzle(puzzle) {
    const p = data.puzzles[puzzle]
    if (p.unlocked) return;
    p.unlocked = true
    if (!p.unlocks) {
        p.unlocks = []
        p.solved = true
    }
    if (!Array.isArray(p.unlocks)) p.unlocks = [p.unlocks]
    if (!p.hints) p.hints = []

    p.revealed = []
    for (var c of p.clues) p.revealed.push(c)

    const tab = $(`<div class="tab" data-puzzle="${puzzle}"><span class="puzzle-id">${puzzle}</span>: <span class="puzzle-title">${p.title}</span></div>`)
    const ui = $(`<div class="puzzle">
             <div class="clue-section">
                <div class="clue-tabs vtabs"></div>
                <div class="clues"></div>
             </div>
             <div class="action-section">
                <div class="action show-hint">Reveal Hint</div>
                <div class="answer">
                  <input type="text" placeholder="type answer here"></input>
                  <div class="action guess">Submit Answer</div>
                </div>
                <div class="action skip">Skip Puzzle</div>
                <div class="action close">Close</div>
                <a class="walkthrough" href="${p.walkthrough}">Read Walkthrough</a>
              </div>
          </div>`)
    if (p.hints.length == 0) ui.find(".show-hint").remove()
    if (!p.walkthrough) ui.find("a").remove()
    if (!p.answer) ui.find(".answer").remove()
    if (p.solved) ui.addClass("solved")

    addPuzzle(puzzle, tab, ui)
    for (var c of p.revealed) unlockClue(puzzle, c)
    focusClue(puzzle, p.revealed[0])

    if (puzzle == data.final) stopTimer()
}

function unlockClue(puzzle, c) {
    const p = data.puzzles[puzzle]

    if (p.hints.length + p.clues.length <= p.revealed.length) {
        p.ui.find(".show-hint").addClass("disabled")
    }

    addClue(puzzle, c)
}

// ----- UI Navigation -----
function addPuzzle(puzzle, tab, ui) {
    const p = data.puzzles[puzzle]

    $(".puzzles").append(ui)
    $(".puzzle-tabs").append(tab)
    ui.hide()
    tab.on("click", () => focusPuzzle(puzzle))
    function checkGuess() { guess(puzzle, ui.find("input").val()) }

    ui.find(".guess").on("click", checkGuess)
    ui.find(".answer input").on("keyup", (ev) => { if (ev.keyCode === 13) checkGuess() })
    ui.find(".show-hint").on("click", () => revealHint(puzzle))
    ui.find(".skip").on("click", () => skipPuzzle(puzzle))
    ui.find(".close").on("click", () => removePuzzle(puzzle))

    p.tab = tab
    p.ui = ui
}

function removePuzzle(puzzle) {
    const p = data.puzzles[puzzle]

    p.ui.remove()
    p.tab.remove()
}

function focusPuzzle(puzzle) {
    const p = data.puzzles[puzzle]

    $(".puzzle-tabs > .tab").removeClass("selected")
    p.tab.addClass("selected")

    $(".puzzle").hide()
    p.ui.show()
}

function addClue(puzzle, c) {
    const p = data.puzzles[puzzle]

    const isClue = p.clues.includes(c)
    const title = `${isClue ? "Clue" : "Hint"} #${p.revealed.indexOf(c) + 1}`

    const [tab, ui] = clueElements(puzzle, c, title)

    p.ui.find(".clue-tabs").append(tab)
    p.ui.find(".clues").append(ui)
    ui.hide()
    tab.on("click", () => focusClue(puzzle, c))

    p.clueTabs ||= {}
    p.clueTabs[c] = [tab, ui]
}

function focusClue(puzzle, c) {
    const p = data.puzzles[puzzle]
    const [tab, clue] = p.clueTabs[c]

    p.ui.find(".tab").removeClass("selected")
    tab.addClass("selected")

    p.ui.find(".clue").hide()
    clue.show()
}

function wrongAnswer() {
    $(".wrong-answer").show()
    $(".wrong-answer").css({opacity: 1})
    $(".wrong-answer").animate({opacity: 0}, 1000, "swing", () => $(".wrong-answer").hide())
}

// ----- Clue display -----

function clueElements(puzzle, c, defaultTitle) {
    var title = defaultTitle

    if (Array.isArray(c)) {
        title = c[0]
        c = c[1]
    }

    var ui, audio_type
    if (!c.startsWith("http")) type = "text"
    else if (c.endsWith(".png") || c.endsWith(".jpg")) type="img"
    else if (c.endsWith(".wav") || c.endsWith(".mp3")) {
        type="audio"
        for ([ext, mt] of [[".wav", "audio/wav"], [".mp3", "audio/mp3"], [".ogg", "audio/ogg"]])
            if (c.endsWith(ext)) audio_type = mt
        type="link" // OK turns out it needs to be at 48KHz to play in browser, and not all our .wav files are
    } else if (c.startsWith("https://files.ircpuzzles.org")) type = "iframe"
    else type = "link"

    if (type == "iframe") type="link" // Temporary workaround

    if (type == "text") ui = $(`<span>${c}</span>`)
    else if (type == "img") ui = $(`<a href="${c}" target="_blank"><img src="${c}"></a>`)
    else if (type == "iframe") ui = $(`<iframe src="${c}"></iframe>`)
    else if (type == "link") ui = $(`<a href="${c}" target="_blank">${c}</a><`)
    else if (type == "audio") ui = $(`<audio controls><source src="${c}" type="${audio_type}"></audio>`)

    const ui2 = $(`<div class="clue"></div>`)
    ui2.append(ui)

    const tab = $(`<div class="tab">${title}</div>`)
    return [tab, ui2]
}

// ----- Event handling -----

$(document).ready(function() {
    $('.year').on('click', function(e) {
        const t = $(e.target)
        if (t.hasClass("disabled")) return;
        const year = t.data("year");
        loadYear(year);
        $(".year-select").hide();
        $(".footnote").hide();
        $(".solver").show();
    })
})
