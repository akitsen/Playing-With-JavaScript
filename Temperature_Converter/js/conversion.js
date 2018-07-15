// function handles F -> C conversion
function fahrenheitToCelsius(value) 
{
  return (value - 32) * 5/9;
};

// function handles C -> F conversion
function celsiusToFahrenheit(value) 
{
  return (value * (9/5)) + 32;
}

// jQuery function
$ ( document ).ready(function() {
  $input            = $('input');
  $inputFahrenheit  = $('.js-input-fahrenheit');
  $inputCelsius     = $('.js-input-celsius');
  $errorsDiv        = $('.js-errors');

  $input.on('blur', function() {
    var value   = $(this).val();
    var type    = $(this).attr('data-unit');

    // if no value inserted, assume 0.
    if ( value == '' ) 
    {
      value = 0;
    };

    // ensure input value is a number.
    if ( $.isNumeric(value) ) {

      if ( type == 'fahrenheit' ) {
        var output = fahrenheitToCelsius(value);
        $('.js-input-celsius').val(output.toFixed(1));
      }
      else {
        var output = celsiusToFahrenheit(value);       
        $('.js-input-fahrenheit').val(output.toFixed(1));
      };

      $errorsDiv.addClass('is-hidden');
      $errorsDiv.html("");

    } else {
      
      $errorsDiv.removeClass('is-hidden');
      $errorsDiv.html("Inserted value was not a number, please try again with a valid input.");
    };
  });
});
