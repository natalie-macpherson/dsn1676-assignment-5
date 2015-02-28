var $form = $('.form');
var $item = $('.item');
var $add = $('.add');
var $button = $('.addbtn');


$form.on('submit', function(e){
  e.preventDefault();

  var $addValue = $add.val();
  var $li = $('<li>');
  var $addH2 = $('<h2>').html($item.val());
  var $button = $('<button>');

  $button.html('&#x2717');
  $button.addClass('done');

  $button.on('click', function(){
    $li.remove();
  })

  $li.append($addH2);
  $add.append($li);
  $addH2.append($button);

});

$add.on('click', 'li', function(){
  $(this).toggleClass('strike');
})
