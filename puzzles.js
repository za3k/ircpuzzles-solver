var data;

// TODO
// [x] Add tabs for different puzzles
// [x] Add tabs for different clues
// [x] Show clues
// [ ] "Reveal Hint" button
// [x] "Skip Puzzle" button
// [x] "Guess" button
// [x] Solving puzzle unlocks later puzzles
// [ ] Show all link clues as iframes
//    [ ] Support a little additional text outside the iframe
// Low priority
// [ ] Show puzzle title and author
// [ ] track progress across page loads
// [ ] add and display a timer
// [ ] Walkthrough link on solve/skip
// [ ] Scratchpad so you can take notes in-app (add as extra clue)


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
    for (c of p.hints) {
        if (!c.revealed.includes(c)) {
            addClue(puzzle, c)
            return
        }
    }
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

    addClue(puzzle, c)
    if (p.hints.length + p.clues.length <= p.revealed.length) {
        p.ui.find(".show-hint").addClass("disabled")
    }
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
    const title = defaultTitle

    if (Array.isArray(c)) {
        title = c[0]
        c = c[1]
    }

    var ui
    if (c.startsWith("http")) {
        ui = $(`<div class="clue"><iframe src="${c}"></iframe></div>`)

    } else {
        ui = $(`<div class="clue">${c}</div>`)
    }

    const tab = $(`<div class="tab">${title}</div>`)
    return [tab, ui]
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
