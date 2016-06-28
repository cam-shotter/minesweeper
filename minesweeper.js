document.addEventListener('DOMContentLoaded', startGame)

function startGame () {
  addListeners(document.getElementsByClassName('board')[0].children)
}

function addListeners (element) {
  for (var i = 0; i < element.length; i++) {
    element[i].addEventListener('click', showCell)
    element[i].addEventListener('contextmenu', markCell)
  }
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
  }
}

function getCol (element) {
  var className = element.classList
  for (var i = 0; i < className.length; i++) {
    if (className[i].includes('col-')) {
      return parseInt(className[i].split('col-'), 10)
    }
  }
}
