$(document).ready(function(){
  $('#creamSelector').on('change', function() {

    //If red is selected, show red, hide yellow and blue.
    if ( this.value == 'creamVanilla')
    {
      $(".c-vanilla").show();
      $(".c-whiteChocolate").hide();
      $(".c-milkChocolate").hide();
      $(".c-saltedCaramel").hide();
      $(".c-oreo").hide();
      $(".c-lemon").hide();
    }

    //If red is selected, show red, hide yellow and blue.
    if ( this.value == 'creamWhiteChocolate')
    {
      $(".c-vanilla").hide();
      $(".c-whiteChocolate").show();
      $(".c-milkChocolate").hide();
      $(".c-saltedCaramel").hide();
      $(".c-oreo").hide();
      $(".c-lemon").hide();
    }

    //If red is selected, show red, hide yellow and blue.
    if ( this.value == 'creamMilkChocolate')
    {
      $(".c-vanilla").hide();
      $(".c-whiteChocolate").hide();
      $(".c-milkChocolate").show();
      $(".c-saltedCaramel").hide();
      $(".c-oreo").hide();
      $(".c-lemon").hide();
    }

    //If red is selected, show red, hide yellow and blue.
    if ( this.value == 'creamSaltedCaramel')
    {
      $(".c-vanilla").hide();
      $(".c-whiteChocolate").hide();
      $(".c-milkChocolate").hide();
      $(".c-saltedCaramel").show();
      $(".c-oreo").hide();
      $(".c-lemon").hide();
    }

    if ( this.value == 'creamOreo')
    {
      $(".c-vanilla").hide();
      $(".c-whiteChocolate").hide();
      $(".c-milkChocolate").hide();
      $(".c-saltedCaramel").hide();
      $(".c-oreo").show();
      $(".c-lemon").hide();
    }

    if ( this.value == 'creamLemon')
    {
      $(".c-vanilla").hide();
      $(".c-whiteChocolate").hide();
      $(".c-milkChocolate").hide();
      $(".c-saltedCaramel").hide();
      $(".c-oreo").hide();
      $(".c-lemon").show();
    }

  });
});