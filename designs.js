// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
// document ready
$(document).ready(function(){
  // variable declaration

  let gridArea = $('#pixelCanvas');

  let gridWidth = $('#inputWeight');

  let gridHeight = $('#inputHeight');

  let colorSelect = $('#colorPicker');

  // function used to create grid

  function makeGrid(n, m) {
    for (let i = 0; i < n; i++){
      gridArea.append('<tr></tr>');
      for (let x = 0; x < m; x++){
        $('tr').last().append('<th></th>');
      }
    }
  }

  // initial grid, for asthetics

  makeGrid(gridHeight.val(), gridWidth.val());

  // submit button

  $('input[type="submit"]').on('click', function() {
    event.preventDefault();
    gridArea.empty();
    makeGrid(gridHeight.val(), gridWidth.val());
  })

  // grid coloring

  let down = false;

  gridArea.on('mousedown', 'th', function(){
    down = true;
  })

  gridArea.on('mouseup', 'th', function(){
    down = false;
  })

  gridArea.on('mouseover mouseleave', 'th', function(){
    event.preventDefault();
    if (down == true){
      $(this).css('background-color', colorSelect.val());
    }
  })
})
