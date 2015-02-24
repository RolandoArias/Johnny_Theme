<div id="map" class="row" style="height: 400px;"></div>
 <script type="text/javascript">
    var map;
    $(document).ready(function(){
      map = new GMaps({
        zoom: 15,
        div: '#map',
        scrollwheel: false,
        lat: -12.043333,
        lng: -77.028333
      });
    });
  </script>