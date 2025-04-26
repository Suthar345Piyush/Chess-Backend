const socket  = io();
const chess = new Chess();
const boardElement = document.getElementById("#chessboard");


let draggedPiece = null;
let sourceSquare = null;
let playerRole = null;

const renderBoard = () => {
   const board = chess.board();
   boardElement.innerHTML = " ";
   console.log(board);
};
const handleMove  = () => {};
const getPieceUnicode = () => {};



renderBoard();



 


 