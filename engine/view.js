// TODO: tiles on move not in first spot pls
//handle win and lose on view
//export default class View{

//     constructor(model){
//         this.model=model

//         this.div=$('<div class = "container"></div>');
//         let score = $(`<h3 class = "score">your score: ${model.getGameState().score}</h3>`)
//         this.div.append(score)
//         let board = $('<div class = "board"></div>');

//         for (let r=0; r<model.getGameState().board.length; r++) {
//             let block = $(`<div class = "block">${model.getGameState().board[r]}</div>`)
//             board.append(block)
//         }
//         this.div.append(board)  
//         let restart = (e) => {
//             this.model = model.setupNewGame()
//             this.createBoard(model.getGameState())
//         };
//         let restartbutton = $('<button class = "restart">restart</button>');
//         restartbutton.on('click', restart)
//         this.div.append(restartbutton)
//     }

//     createBoard = function(state){
//         this.div.empty();
//         let score = $(`<h3 class = "score">your score: ${state.score}</h3>`)
//         this.div.append(score)
//         let board = $('<div class = "board"></div>');

//         for (let r=0; r<state.board.length; r++) {
//             let block = $(`<div class = "block">${state.board[r]}</div>`)
//             board.append(block)
//         }
//         this.div.append(board)  

        
//         let restart = (e) => {
//             this.model = this.model.setUpNewGame()
//             this.createBoard(this.model.getGameState())
//         };

//         let restartbutton = $('<button class = "restart">restart</button>');
//         restartbutton.on('click', restart)
//         this.div.append(restartbutton)
//     }

    
// }


export default class View{
    constructor(model){
        this.model=model
        this.haswon=false;
        this.div=$('<div class = "container"></div>');
        let score = $(`<h3 class = "score">your score: ${model.getGameState().score}</h3>`)
        this.div.append(score)
        let board = $('<div class = "board"></div>');

        for (let r=0; r<model.getGameState().board.length; r++) {
            let block = $(`<div class = "block b${model.getGameState().board[r]}">${model.getGameState().board[r]}</div>`)
            board.append(block)
        }
        this.div.append(board) ; 

        let Continue = (e) => {
            $('.winner').css('visibility','hidden')
            this.model.removeListener(this.Win)
        };

        let winheader = $('<div class = "winner"></div>');
        winheader.append($('<h1 class = "wintext">You Win :-)</h1>'))
        let continuebutton = $('<button class = "continue">continue</button>');
        continuebutton.on('click', Continue)
        winheader.append(continuebutton)
        this.div.append(winheader)


        let restart = (e) => {
            this.model.setupNewGame()
            this.updateBoard(this.model.getGameState())
        };

        let restartbutton = $('<button class = "restart">restart</button>');
        restartbutton.on('click', restart)
        this.div.append(restartbutton)

        this.model.onMove(this.updateBoard)
        this.model.onLose(this.Lose)
        this.model.onWin(this.Win)
    }
    
    updateBoard = function(state)
    {
        let newboard = $('<div class = "board"></div>');
        for (let r=0; r<state.board.length; r++) {
            let block = $(`<div class = "block b${state.board[r]}">${state.board[r]}</div>`)
            newboard.append(block)
        }
        $( ".loser").replaceWith( newboard )
        $( ".board").replaceWith( newboard )
        let newscore = $(`<h3 class = "score">your score: ${state.score}</h3>`)
        $( ".score").replaceWith(newscore)
    }


    Win = function(state){
        
        
        $('.winner').css('visibility','visible');
        
        
        //remove win from games win listeners
    }

    Lose = function(state){
        let loseboard = $('<div class = "loser"></div>');
        loseboard.append($('<h2>YOU LOSE</h2>'));
        loseboard.append($('<h4>press restart to try again</h4>'))
        $( ".board").replaceWith( loseboard)
    }


}
