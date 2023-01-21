
let board = new Array(9);
function newgame() {
    for (loop = 0; loop < 9; loop++) {
        document.form1.elements[loop].value = "";
        board[loop] = 0;
    }

}

function fill(square) {
    if (board[square] == 0) {
        board[square] = 1;
        document.form1.elements[square].value = "0";
        return true
    }
    return false
}

function mymove() {
    let bestmove = new Array(4, 0, 2, 6, 8, 1, 3, 5, 7);
    for (square = 0; square < 9; square++) {
        if (document.form1.elements[square].value == "X") {
            board[square] = 4;
        }
    }

    // check rows
    for (row = 0; row < 7; row += 3) {
        total = board[row] + board[row + 1] + board[row + 2]
        if (total == 12) {
            return ("You Win")
        }

        if (total == 3) {
            return ("I Win")
        }
    }

    for (row = 0; row < 7; row += 3) {
        total = board[row] + board[row + 1] + board[row + 2]

        if (total == 8 || total == 2) {

            for (col = 0; col < 3; col++) {

                if (fill(row + col)) {
                    return ("Go Again")

                }
            }
        }
    }

    // check columns
    for (col = 0; col < 3; col++) {
        total = board[col] + board[col + 3] + board[col + 6]
        if (total == 12) {
            return ("You Win")
        }

        if (total == 3) {
            return ("I Win")
        }
    }

    for (col = 0; col < 3; col++) {
        total = board[col] + board[col + 3] + board[col + 6]
        if (total == 8 || total == 2) {
            for (row = 0; row < 7; row += 3) {
                if (fill(row + col)) {
                    return ("Go Again")
                }
            }
        }
    }

    // check diagonals
    total = board[0] + board[4] + board[8]
    if (total == 12) {
        return ("You Win")
    }
    if (total == 3) {
        return ("I Win")
    }
    if (total == 8 || total == 2) {
        for (square = 0; square < 9; square += 4) {
            if (fill(square)) {
                return ("Go Again")
            }
        }
    }


    total = board[2] + board[4] + board[6]
    if (total == 12) {
        return ("You Win")
    }
    if (total == 3) {
        return ("I Win")
    }

    if (total == 8 || total == 2) {
        for (square = 0; square < 7; square += 2) {
            if (fill(square)) {
                return ("Go Again")
            }
        }
    }

    for (square = 0; square < 9; square++) {
        if (fill(bestmove[square])) {
            return ("Go Again")

        }
    }

    return ("No Move - Draw!")
}
