export default function GameOver({winner, restart}){
    return(
        <div id="game-over">
            <h2>Game Over!</h2>
            <p>{winner ? `${winner} won!` : 'Draw!'}</p>
            <p>
                <button onClick={restart}>Rematch!</button>
            </p>
        </div>
    )    
}