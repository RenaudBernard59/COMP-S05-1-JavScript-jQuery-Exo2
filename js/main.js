/*
CONSIGNE : Avec l'aide de jQuery, gérer l'affichage des onglets et du contenu associé

MENU 1 --> affiche le contenu 1 et ajoute la bordure sur Menu 1
MENU 2 --> affiche le contenu 2 et ajoute la bordure sur Menu 2
MENU 3 --> affiche le contenu 3 et ajoute la bordure sur Menu 3

*/
/*
$('#tab1').on('click', function() {
	$('ul li.active').css("border", "solide 2px black");
	$('ul li:nth-of-type(2)').css("border", "none");
	$('ul li:nth-of-type(3)').css("border", "none");
	$('#tab1').show();
	$('#tab2').hide();
	$('#tab3').hide();

	this.addClass('active');
	this.removeClass('active');
}
*/

var nav1 = $('ul li:nth-child(1)')
var nav2 = $('ul li:nth-child(2)')
var nav3 = $('ul li:nth-child(3)')
var ct1 = $('#tab1')
var ct2 = $('#tab2')
var ct3 = $('#tab3')

nav1.on('click', function() {
	nav1.addClass('active');
	nav2.removeClass('active');
	nav3.removeClass('active');
	ct1.show();
	ct2.hide();
	ct3.hide();
});

nav2.on('click', function() {
	nav1.removeClass('active');
	nav2.addClass('active');
	nav3.removeClass('active');
	ct1.hide();
	ct2.show();
	ct3.hide();
});

nav3.on('click', function() {
	nav1.removeClass('active');
	nav2.removeClass('active');
	nav3.addClass('active');
	ct1.hide();
	ct2.hide();
	ct3.show();
});