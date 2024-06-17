import {GameView, clickToTail, canvas} from "./gameview.js"
import {move} from "./game.js"


const initialState = [
    [4, 1, 3],
    [7, 2, 5],
    [8, 0, 6]]

let s1 = initialState
new GameView(s1)

canvas.addEventListener('click', moveView)


function moveView(event)
{
    const [i, j] = clickToTail(event.offsetX, event.offsetY)
    s1 = move(s1, i, j)
    new GameView(s1)

    if (isSolved(s1)) {
        alert('You Win!');
    }
}

function isSolved(s) {
    return s[0][0] === 1 && s[0][1] === 2 && s[0][2] === 3 &&
           s[1][0] === 4 && s[1][1] === 5 && s[1][2] === 6 &&
           s[2][0] === 7 && s[2][1] === 8 && s[2][2] === 0;
  }