<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <title>GeoFence Demo 4</title>
    <link rel="stylesheet" href="style_4.css">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="geo_4.js"></script>
    <!-- <script type="text/javascript" src="city.json"></script>
    <script type="text/javascript" src="state.json"></script>
    <script type="text/javascript" src="country.json"></script> -->
  </head>
  <body>
    <!-- <form> -->
      <h1 style="text-align:center">GeoFence Demo 4</h1>
      <input id="pac-input" class="controls" type="text" placeholder="Search Box">
      <input id="radius" class="controls" type="text" placeholder="Enter radius in Kms." value="">
      <button type="button" value="Submit" id="submit" name="Submit" onClick="onSubmit();">Submit</button>
      <input type="hidden" name="fences" id = "fences">
      <div id="map"></div>
      
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBDqCd1-ydxIB_MVg2lWB2lMMSzKrQMnqg&libraries=places&callback=initAutocomplete" async defer></script>
    <!-- </form> -->
  </body>
</html>
