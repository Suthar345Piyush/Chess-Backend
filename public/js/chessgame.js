const socket  = io();
const chess = new Chess();
const boardElement = document.getElementById("chessboard");


let draggedPiece = null;
let sourceSquare = null;
let playerRole = null;



const renderBoard = () => {
   const board = chess.board();
   boardElement.innerHTML = " ";
   board.forEach((row , rowindex) => {
      row.forEach((square , squareindex) => {
          const squareElement = document.createElement("div");
          squareElement.classList.add("square" , (rowindex + squareindex)%2 === 0 ? "light" : "dark");



          squareElement.dataset.row = rowindex;
          squareElement.dataset.col = squareindex;


          if(square){
            const peiceElement = document.createElement("div");
            peiceElement.classList.add("piece" , square.color === "w" ? "white" : "black");

            peiceElement.innerText = "";
            peiceElement.draggable =  playerRole === square.color;
            
            
            peiceElement.addEventListener("dragstart" , (e) => {
               if(peiceElement.draggable){
                  draggedPiece = peiceElement;
                  sourceSquare  = {row : rowindex , col : squareindex};
                  e.dataTransfer.setData("text/plain" , "");
               }
            });


            peiceElement.addEventListener("dragend" , () => {
               draggedPiece = null;
               sourceSquare = null;
            });
            squareElement.appendChild(peiceElement);
          };
        squareElement.addEventListener("dragover" , (e) => {
           e.preventDefault();
        });

        squareElement.addEventListener("drop" , (e) => {
          e.preventDefault();
          if(draggedPiece){
             const targetSource = {
                row :  parseInt(squareElement.dataset.row),
                col : parseInt(squareElement.dataset.col),
             };

             handleMove(sourceSquare , targetSource);
          }
        });
        
        boardElement.appendChild(squareElement);
      });
   });


};



const handleMove  = () => {};
const getPieceUnicode = () => {};


   

renderBoard();





 


 