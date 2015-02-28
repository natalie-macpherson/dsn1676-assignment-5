//var $form = $('.form');
//var $todo = $('.todo');
//var $added = $('.added');
//var $button = $('.addbutton');

//$form.on('submit', function (e) {

  //////e.preventDefault();

  ////var $li = $('<li>');
  ////var $button = $('<button>');

  ////$button.html('X');
  ////$button.addClass('check');

  ////$button.on('click', function() {
  ////$li.remove();
////});

  //var $todoH2 = $('<h2>').html($todo.val());
  //$todoH2.append($button);

  //$todoH2.on('click', function (){
  	//$todoH2.addClass('strike-though') ();
  //});

//$added.append($li);

//});

var $form = $('.form');
var $item = $('.item');
var $add = $('.add');
var $button = $('.addbtn');
//var $listLi = $('.add li');
//console.log($listLi);

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

  //$addH2.on('click', function(){
    //$addH2.addClass('strike') ();
  //});

  $li.append($addH2);
  $add.append($li);
  $addH2.append($button);

});

$add.on('click', 'li', function(){
  $(this).addClass('strike');
})
