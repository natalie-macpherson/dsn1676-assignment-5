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
var $list = $('.list');
var $add = $('.add');
var $button = $('. addbtn');

$form.on('submit', function(e){
  e.preventDefault();
  console.log ('submitted');
})
