var data;

function wrongAnswer() {
}

function setTitle() {

}
function setTheme(theme) {

}


function focusPuzzle(puzzle) {

}

function skipPuzzle(puzzle) { finishPuzzle(puzzle); }
function guess(puzzle, g) { 
    g = g.toLowerCase()
    if (data.puzzles[puzzle].answer == g) {
        finishPuzzle(puzzle)
    } else {
        wrongAnswer()
    }
}

function finishPuzzle(puzzle) {
    const p = data.puzzles[puzzle]
    // Remove guess, skip buttons
    // Add walkthrough link
    // Add close link
    // Unlock new puzzle(s)
    // Focus earliest new puzzle

}

function unlockPuzzle(puzzle) {
    // TODO: Unlock and show the puzzle
    if (puzzle == data.final) {
        stopTimer(); win();
    }
}

async function loadYear(year) {
    console.log(year);
    const str = await fetch(`data/${year}.json`);
    data = JSON.parse(str);

    // Set 
    startTimer()
    setTitle(data.title)
    setTheme(data.theme)
    unlockPuzzle(data.start)
    focusPuzzle(data.start)
}

$(document).ready(function() {
    $('.year').on('click', function(e) {
        const t = $(e.target)
        console.log(t);
        if (t.hasClass("disabled")) return;
        const year = t.data("year");
        loadYear(year);
        $(".year-select").hide();
        $(".footnote").hide();
        $(".solver").show();
    })
})
