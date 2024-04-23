import React, { useState } from "react";
import useTicTacToe from "./hooks/use-Tic-Tac-Toe";

function TicTacToe (){

  const{board, handleClick, getStatusMessage, resetGame} =  useTicTacToe();

    return(

        <div className="game">

            <div className="status">
            {getStatusMessage()}
            <button className="reset" onClick={resetGame} >Reset Game</button>
            </div>
            
            <div className="board">
            {console.log('board',board)}
            {board.map((b,index)=>{
                return <button className="cell" 
                key={index} 
                onClick={()=>handleClick(index)} 
                disabled={b!==null}>
                {board[index]}
                </button>
            })}
            </div>

        </div>
    )
}

export default TicTacToe;