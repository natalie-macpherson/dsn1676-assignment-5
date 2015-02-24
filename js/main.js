var $form = $('.form');
var $toDoList = $('.to-do-list');
var $list = $('#list');
var $delete = $('#delete');



$form.on('submit', function (e) {
	e.preventDefault ();
	var $toDoListLi = $('<li>').html($list.val());
	$('ul').append($toDoListLi);
});


$( "#delete" ).click(function() {
  $( "li" ).remove();
});

 //$form.on('click', function(e){
 	//$toDoList.css ('color', 'gray');
 //});

