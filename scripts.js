$(function(){
  var lineCount = 0;
  var $targetDiv = $('#TargetDiv');
  // create div
  $('#GenButton').on('click', function(){
    lineCount++
    $(this).blur();
    $div = $('<div>');
    $p = $('<p>');
    $but1 = $('<button>');
    $but2 = $('<button>');
    $but1.text('Change Color');
    $but1.attr({class: 'js-changeColor divBut'});
    $but2.text('Remove');
    $but2.attr({class: 'js-delete divBut'});
    $p.text('Line #: ' + lineCount);
    $div.append($p);
    $div.append($but1);
    $div.append($but2);
    $targetDiv.append($div);
  })
  //change color by toggling class
  $targetDiv.on('click', '.js-changeColor', function(){
      $(this).parent().toggleClass('different');
      $(this).blur();
  })
  //delete div
  $targetDiv.on('click', '.js-delete', function(){
    $(this).parent().remove();
  })
})
