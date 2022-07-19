$(document).ready(function(){
  $('#browniesSelector').on('change', function() {

//If vanilla is selected, show vanilla, hide others.
if ( this.value == 'classic')
{
  $("#classic").show();
  $("#crunchie").hide();
  $("#twix").hide();
  $("#cookiesAndCream").hide();
  $("#tripleChocolate").hide();
  $("#snickers").hide();
}

//If vanilla is selected, show vanilla, hide others.
if ( this.value == 'crunchie')
{
  $("#classic").hide();
  $("#crunchie").show();
  $("#twix").hide();
  $("#cookiesAndCream").hide();
  $("#tripleChocolate").hide();
  $("#snickers").hide();
}

//If vanilla is selected, show vanilla, hide others.
if ( this.value == 'twix')
{
  $("#classic").hide();
  $("#crunchie").hide();
  $("#twix").show();
  $("#cookiesAndCream").hide();
  $("#tripleChocolate").hide();
  $("#snickers").hide();
}

//If vanilla is selected, show vanilla, hide others.
if ( this.value == 'cookiesAndCream')
{
  $("#classic").hide();
  $("#crunchie").hide();
  $("#twix").hide();
  $("#cookiesAndCream").show();
  $("#tripleChocolate").hide();
  $("#snickers").hide();
}

if ( this.value == 'tripleChocolate')
{
  $("#classic").hide();
  $("#crunchie").hide();
  $("#twix").hide();
  $("#cookiesAndCream").hide();
  $("#tripleChocolate").show();
  $("#snickers").hide();
}

if ( this.value == 'snickers')
{
  $("#classic").hide();
  $("#crunchie").hide();
  $("#twix").hide();
  $("#cookiesAndCream").hide();
  $("#tripleChocolate").hide();
  $("#snickers").show();
}

  });
});