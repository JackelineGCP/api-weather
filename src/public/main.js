$(function () {
  var $h1 = $("h1");
  var $latitude = $('input[name="latitude"]');
  var $longitude = $('input[name="longitude"]');
  var btnLocation = $('input[name="btnLocation"]');

  btnLocation.on('click', obtainPosition);

  // función que me permite obtener la posicion de html5
  function obtainPosition() {
    const geoconfig = {
      enableHighAccuracy: true, // con esto obtenemos la mejor posición posible
      timeout: '10000',
      maximunAge: 60000
    };

    navigator.geolocation.getCurrentPosition(
      mostrar, errores, geoconfig
    )
  }

  function mostrar(position) {
    $latitude.val(position.coords.latitude);
    $longitude.val(position.coords.longitude);
  }

  function errores(error) {
    alert(`Error: ${error.code} ${error.message}`);
  }

  // procesando formulario
  $('form').on('submit', function (event) {
    event.preventDefauld();

    // limpiamos los datos a través del método: 'trim'
    var latitude = $.trim($latitude.val());
    var longitude = $.trim($longitude.val());

    $('h1').text('loading...');

    var req = $.ajax({
      url: `/latitude/${latitude}/longitude/${longitude}`,
      dataType: 'json'
    });

    req.done(function (data) {
      var temperature = data.temperature;
      $h1.html(`The temperature in ${data.timezone} is: ${temperature}&#176 Fahrenheit;
      in latitude ${latitude} and longitude ${longitude}`);
    });

    req.fail(function (){
      $h1.text('Error!');
    })
  });



});