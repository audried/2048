// const { default: Game } = require("./engine/game");
// const { default: View } = require("./engine/view");
import Game from "./engine/game.js"
import View from "./engine/view.js"
let model = null;
let view = null;

$(document).ready(() => {
    model = new Game(4);
    view = new View(model)

    $('body').append(view.div);

    $('body').on('keydown', () => {
        
        switch (event.which.toString())
        {
            case '38':
                model.move('up');
                break;
            case '40':
                model.move('down');
                break;
            case '37':
                model.move('left');
                break;
            case '39':
                model.move('right');
                break;
        }

    });
});
