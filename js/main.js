// var $form = $('.form');
// var $toDoList = $('.to-do-list');
// var $list = $('#list');
// var $delete = $('#delete');
// var template = $('#template').html();
// Mustache.parse(template);


// $form.on('submit', function (e) {
// 	e.preventDefault ();
// 	var $toDoListLi = $('<li>').html($list.val());
// 	$('ul').append($toDoListLi);
// });


// $( "#delete" ).click(function() {
//   $( "li" ).remove();
// });

//  //$form.on('click', function(e){
//  	//$toDoList.css ('color', 'gray');
//  //});


var $form = $('.form');
var $name = $('.name');
var $toDoList = $('.to-do-list');

var template = $('#template').html();
Mustache.parse(template);

$form.on('submit', function (e) {
  e.preventDefault();
  var $toDoListLi = $('<li>').html($list.val());
	$('ul').append($toDoListLi);

  //var toDoListItem = {
  	//$toDoListItem = $('<li>').html($list.val());
    //name: $name.val(),
		//$('ul').append($toDoListLi);
  //};

  $toDoList.append(Mustache.render(template, toDoList));
});
