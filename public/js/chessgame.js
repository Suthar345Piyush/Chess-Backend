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
          };
      });
   });
};
const handleMove  = () => {};
const getPieceUnicode = () => {};


   

renderBoard();





 


 