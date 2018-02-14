$(document).ready(function() {
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var apiLinkDS = 'https://api.darksky.net/forecast/a14cca2f70339f801e6453d6bd33c56a/-12.145598,%20-77.022311?lang=es';

  $.ajax({
    url: proxy + apiLinkDS,
    success: function(data) {
      console.log(data);
    }
  });
});