$(document).ready(function(){
  $('#browniesPackageSelector').on('change', function() {

//If red is selected, show red, hide yellow and blue.
if ( this.value == 'browniesPackage1')
{
  $(".brownies-package1").show();
  $(".brownies-package2").hide();
  $(".brownies-package3").hide();
  $(".brownies-package4").hide();
  $(".brownies-saver").hide();
}

//If red is selected, show red, hide yellow and blue.
if ( this.value == 'browniesPackage2')
{
  $(".brownies-package1").hide();
  $(".brownies-package2").show();
  $(".brownies-package3").hide();
  $(".brownies-package4").hide();
  $(".brownies-saver").hide();
}

//If red is selected, show red, hide yellow and blue.
if ( this.value == 'browniesPackage3')
{
  $(".brownies-package1").hide();
  $(".brownies-package2").hide();
  $(".brownies-package3").show();
  $(".brownies-package4").hide();
  $(".brownies-saver").hide();
}

//If red is selected, show red, hide yellow and blue.
if ( this.value == 'browniesPackage4')
{
  $(".brownies-package1").hide();
  $(".brownies-package2").hide();
  $(".brownies-package3").hide();
  $(".brownies-package4").show();
  $(".brownies-saver").hide();
}

//If red is selected, show red, hide yellow and blue.
if ( this.value == 'browniesSaver')
{
  $(".brownies-package1").hide();
  $(".brownies-package2").hide();
  $(".brownies-package3").hide();
  $(".brownies-package4").hide();
  $(".brownies-saver").show();
}

  });
});