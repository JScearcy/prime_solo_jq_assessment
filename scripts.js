$(function(){
  var lineCount = 0;
  var $targetDiv = $('#TargetDiv');

  $('#GenButton').on('click', function(){
    lineCount++
    $(this).blur();
    $div = $('<div>');
    $p = $('<p>');
    $but1 = $('<button>');
    $but2 = $('<button>');
    $but1.text('Change Color')
    $but1.attr('class', 'js-changeColor divBut');
    $but2.text('Remove');
    $but2.attr('class', 'js-delete divBut');
    $p.text('Line #: ' + lineCount);
    // $p.append($but1);
    // $p.append($but2);
    $div.append($p);
    $div.append($but1);
    $div.append($but2);
    $targetDiv.append($div);
    $div.attr('class', 'normal');
    deleteDiv();
    changeDivColor();
  })

  function deleteDiv(){
    $('.js-delete').on('click', function(){
      $(this).parent().remove();
    })
  }
  function changeDivColor(){
    $('.js-changeColor').on('click', function(){
      $(this).parent().addClass('different');
    })
  }
})
