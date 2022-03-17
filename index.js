const tic_tac_toe = {
    board: ['', '', '', '', '', '', '', '', ''],
    simbols: {
        options: ['X', 'O'],
        turn_index: 0,
        change: function() {
            this.turn_index = (this.turn_index === 0 ? 1 : 0)
        }
    },
    container_element: null,
    gameover: false,
    sequency_winner: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ],
    init: function(container) {
        this.container_element = container
    },

    make_play: function(position) {
        let simbol = this.simbols.options[this.simbols.turn_index]
        if (this.gameover) return false

        if (this.board[position] === '') {
            this.board[position] = simbol
            this.draw()
            let winner_sequencies_index = this.check_winner_sequencies(simbol)
            if (winner_sequencies_index >= 0) {
                this.game_is_over(simbol)
            } else {
                this.simbols.change()
            }
            return true
        } else {
            return false
        }
    },
    start: function() {
        this.board.fill('')
        this.draw()
        this.gameover = false
    },
    game_is_over: function(simbol) {
        this.gameover = true
        alert(`O jogador do simbolo ${simbol} é o vencendo!`)
    },
    check_winner_sequencies: function(simbol) {
        for (i in this.sequency_winner) {
            if (
                this.board[this.sequency_winner[i][0]] === simbol &&
                this.board[this.sequency_winner[i][1]] === simbol &&
                this.board[this.sequency_winner[i][2]] === simbol
            ) {
                console.log("Sequencia vencendora ", i)
                return i
            }
        }
        return -1
    },

    draw: function() {
        let content = ''
        for (i in this.board) {
            content += `
                <div onclick="tic_tac_toe.make_play(${i})">${this.board[i]}</div>
            `
        }
        this.container_element.innerHTML = content
    }
}