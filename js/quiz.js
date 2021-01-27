// tekst random
var titulli = [];
var text = [];

var list=$('.text').children();


for (var i = 0; i < list.length; i=i+2) {
	titulli.push(list[i].innerHTML);
	text.push(list[i+1].innerHTML);
}
var numberList = [[0,1,2],
				  [0,2,1],
				  [1,0,2],
				  [1,2,0],
				  [2,1,0],
				  [2,0,1]];

var whichquote = Math.floor(Math.random() * numberList.length);

var renditja = numberList[whichquote];

var indexi = 0;

for(var i = 0; i < 3; i++){
	var elementi = renditja[i];

	var titulliTekst = titulli[elementi];
	var teksti = text[elementi];

	list[indexi].innerHTML = titulliTekst;//0,2,4
	list[indexi+1].innerHTML = teksti;//1,3,5
	$(list[indexi]).parent().attr('id', elementi);
	indexi = indexi + 2;
}
// random photo
var foto = [];
var photoList = $('.photo-wrap').children();

for (var i = 0; i < photoList.length; i++){
	foto.push(photoList[i].src);
}

var whichphoto = Math.floor(Math.random() * numberList.length);

var rank = numberList[whichphoto];

var index = 0;

for(var i = 0; i < 3; i++){
	var element = rank[i];
	var photo = foto[element];

	photoList[i].src = photo;
	$(photoList[i]).parent().attr('id', element);
}

//draggable images
$('.photo-wrap').draggable({
	revert: true
});

$('.text').droppable({
	drop: function(event, draggableObject){
		var photo = $(draggableObject.draggable[0]);
		var photoId = photo.attr('id');
		var textId = $(this).attr("id");

		if(photoId == textId){
			$(this).css("background", "#00800061");
			photo.parent().draggable( "option", { disabled: true } );
		} else {
			$(this).css("background", "#ff0000bd");
		}
	}
});
































