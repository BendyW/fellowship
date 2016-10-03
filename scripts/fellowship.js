console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;
var section = '<section></section>';

function makeMiddleEarth() {
  // your answers here
  $('body').append(section);
  $('section').prop('id', 'middle-earth');
  for(var prop in lands) {
    var i = parseInt(prop);
    $('section').append('<article></article>');
    var articleName = $('article')[i];
    $(articleName).prop('id',lands[i]);
    $(articleName).html('<h1>' + lands[i] + '</h1>');
  }
}

makeMiddleEarth();

function makeHobbits(){
  // your answers here
  $('article:nth-child(1)').append('<ul></ul>');
  for(i=0; i<hobbits.length; i++){
    $('ul').append('<li></li>');
    var hobbitName = $('li')[i];
    $(hobbitName).html(hobbits[i]);
    $('li').prop('class','hobbit');
  }
}

makeHobbits();

function keepItSecretKeepItSafe(){
  // your answers here
  $('.hobbit:nth-child(1)').append('<div></div>');
  $('.hobbit div').prop('class','magic-imbued-jewelry');
}

keepItSecretKeepItSafe();

function makeBuddies(){
  // your answers here
  $('#Rivendell').append('<aside></aside>');
  $('aside').append('<ul></ul>');
  for(i=0;i<buddies.length; i++){
    $('aside ul').append('<li>'+buddies[i]+'</li>');
  }
}

makeBuddies();

function beautifulStranger(){
  // your answers here
  $('aside li:nth-child(4)').html("Aragorn");
}

beautifulStranger();

function leaveTheShire(){
  // your answers here
  $('.hobbit').detach().appendTo('ul:nth-child(1)');
}

leaveTheShire();

function forgeTheFellowship() {
  // your answers here
  $('#Rivendell').append('<div></div>');
  $('#Rivendell > div').prop('class','the-fellowship');
}
forgeTheFellowship();

function theBalrog(){
  // your answers here
  $('#Rivendell > aside > ul > li:nth-child(1)').html('Gandalf the White').css({"background-color":"white", 'border': '2px solid gray'});


}

theBalrog();

function hornOfGondor() {
  // your answers here
  console.log("The horn of Gondor has been blown");
  $('#Rivendell > aside > ul > li:nth-child(5)').remove();

}

hornOfGondor();

function itsDangerousToGoAlone() {
  // your answers here
  $('#Mordor > h1').append('<div></div>');
  $('#Mordor > h1 > div').prop('id','mount-doom');
  $('#Rivendell > aside > ul > li:nth-child(5), #Rivendell > aside > ul > li:nth-child(6)').detach().appendTo('#mount-doom');

}

itsDangerousToGoAlone();

function weWantsIt() {
  // your answers here
  $('#mount-doom').append('<div></div>');
  $('#mount-doom > div').prop('id', 'gollum');
  $('.magic-imbued-jewelry').prop('id','the-ring');
  $('#Mordor > h1 > div > .hobbit:nth-child(1) > div').detach().appendTo('#gollum');
}

weWantsIt();

function thereAndBackAgain(){
  // your answers here
  $('#gollum, #gollum > div').remove();
  $('.hobbit').detach().appendTo('article:nth-child(1)');
}

thereAndBackAgain();
