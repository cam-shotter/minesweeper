document.addEventListener('DOMContentLoaded', startGame)

function startGame () {
  var boardChildren = document.getElementsByClassName('board')[0].children
  for (var i = 0; i < boardChildren.length; i++) {
    addListeners(boardChildren[i])
    addCellToBoard(boardChildren[i])
  };
}

function addListeners (element) {
  element.addEventListener('click', showCell)
  element.addEventListener('contextmenu', markCell)
}

function showCell (evt) {
  evt.target.classList.toggle('hidden')
}

function markCell (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('marked')
}

var board = {
  cells: []
}

function getRow (element) {
  var className = element.classList
  for (var i = 0; i < className.length; i++) {
    if (className[i].includes('row-')) {
      return parseInt(className[i].split('row-'), 10)
    }
  };
}

function getCol (element) {
  var className = element.classList
  for (var i = 0; i < className.length; i++) {
    if (className[i].includes('col-')) {
      return parseInt(className[i].split('col-'), 10)
    }
  };
}

function addCellToBoard (element) {
  var newCell = {}
  newCell.row = getRow(element)
  newCell.col = getCol(element)
  newCell.isMine = element.classList.contains('mine')
  board.cells.push(newCell)
}
