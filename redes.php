<!DOCTYPE html>
<html>
<head>


</head>
<body>
<div id="example6">
  hola
  <div id="twitter" data-url="http://sharrre.com/" data-text="Make your sharing widget with Sharrre (jQuery Plugin)"></div>
  <div id="facebook" data-url="http://sharrre.com/" data-text="Make your sharing widget with Sharrre (jQuery Plugin)"></div>
  <div id="googleplus" data-url="http://sharrre.com/" data-text="Make your sharing widget with Sharrre (jQuery Plugin)"></div>
</div>
<script>
$('#twitter').sharrre({
  share: {
    twitter: true
  },
  template: '<a class="box" href="#"><div class="count" href="#">{total}</div><div class="share"><span></span>Tweet</div></a>',
  enableHover: false,
  enableTracking: true,
  buttons: { twitter: {via: '_JulienH'}},
  click: function(api, options){
    api.simulateClick();
    api.openPopup('twitter');
  }
});
$('#facebook').sharrre({
  share: {
    facebook: true
  },
  template: '<a class="box" href="#"><div class="count" href="#">{total}</div><div class="share"><span></span>Like</div></a>',
  enableHover: false,
  enableTracking: true,
  click: function(api, options){
    api.simulateClick();
    api.openPopup('facebook');
  }
});
$('#googleplus').sharrre({
  share: {
    googlePlus: true
  },
  template: '<a class="box" href="#"><div class="count" href="#">{total}</div><div class="share"><span></span>Google+</div></a>',
  enableHover: false,
  enableTracking: true,
  click: function(api, options){
    api.simulateClick();
    api.openPopup('googlePlus');
  }
});
</script>
<style type="text/css">
  #example6{
    float:left;
    margin:5px 27% 0 27%;
  }
  .sharrre{
    margin:55px 0 0 50px;
    float:left;
  }
  
  .sharrre .box{
    float:left;
    width:80px;
    height:75px;
    -webkit-border-radius:7px;
    -moz-border-radius:7px;
    border-radius:7px;
    -webkit-box-shadow:0 1px 0 #C3C3C3, 0 6px 0 #54a2bc, 0px 2px 3px 0px rgba(47, 58, 61, 0.25), inset 0px 1px 0px 0px rgba(255, 255, 255, 1);
    -moz-box-shadow:0 1px 0 #C3C3C3, 0 6px 0 #54a2bc, 0px 2px 3px 0px rgba(47, 58, 61, 0.25), inset 0px 1px 0px 0px rgba(255, 255, 255, 1);
    box-shadow:0 1px 0 #C3C3C3, 0 6px 0 #54a2bc, 0px 2px 3px 0px rgba(47, 58, 61, 0.25), inset 0px 2px 0px 0px rgba(255, 255, 255, 1);
    background: #dee7ea; /* Old browsers */
    background: -moz-linear-gradient(top, #dee7ea 0%, #e5eef2 20%, #e5eef2 100%); /* FF3.6+ */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#dee7ea), color-stop(20%,#e5eef2), color-stop(100%,#e5eef2)); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(top, #dee7ea 0%,#e5eef2 20%,#e5eef2 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(top, #dee7ea 0%,#e5eef2 20%,#e5eef2 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(top, #dee7ea 0%,#e5eef2 20%,#e5eef2 100%); /* IE10+ */
    background: linear-gradient(top, #dee7ea 0%,#e5eef2 20%,#e5eef2 100%); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#dee7ea', endColorstr='#e5eef2',GradientType=0 ); /* IE6-9 */
  }
  
  #facebook .box{
    -webkit-box-shadow:0 1px 0 #C3C3C3, 0 6px 0 #28437a, 0px 2px 3px 0px rgba(47, 58, 61, 0.25), inset 0px 1px 0px 0px rgba(255, 255, 255, 1);
    -moz-box-shadow:0 1px 0 #C3C3C3, 0 6px 0 #28437a, 0px 2px 3px 0px rgba(47, 58, 61, 0.25), inset 0px 1px 0px 0px rgba(255, 255, 255, 1);
    box-shadow:0 1px 0 #C3C3C3, 0 6px 0 #28437a, 0px 2px 3px 0px rgba(47, 58, 61, 0.25), inset 0px 2px 0px 0px rgba(255, 255, 255, 1);
  }
  
  #googleplus .box{
    -webkit-box-shadow:0 1px 0 #C3C3C3, 0 6px 0 #404040, 0px 2px 3px 0px rgba(47, 58, 61, 0.25), inset 0px 1px 0px 0px rgba(255, 255, 255, 1);
    -moz-box-shadow:0 1px 0 #C3C3C3, 0 6px 0 #404040, 0px 2px 3px 0px rgba(47, 58, 61, 0.25), inset 0px 1px 0px 0px rgba(255, 255, 255, 1);
    box-shadow:0 1px 0 #C3C3C3, 0 6px 0 #404040, 0px 2px 3px 0px rgba(47, 58, 61, 0.25), inset 0px 2px 0px 0px rgba(255, 255, 255, 1);
  }
  
  .sharrre .box:active, #facebook .box:active, #googleplus .box:active{
    box-shadow:0 0 3px #333333;
    margin-top:4px;
  }
  
  .sharrre .count, .sharrre .share{
    display:inline-block;
    width:78px;
    text-align:center;
    font-weight:bold;
  }
  
  .sharrre .count{
    font-size:20px;
    color:#444444;
    text-shadow: 0px 1px 0px #ffffff;
    filter: dropshadow(color=#ffffff, offx=0, offy=1);
    height:40px;
    line-height:40px;
    border:1px solid #b9b9b9;
    border-width:1px 1px 0 1px;
    -moz-border-radius-topleft:7px;
    -moz-border-radius-topright:7px;
    -moz-border-radius-bottomright:0;
    -moz-border-radius-bottomleft:0;
    -webkit-border-radius:7px 7px 0 0;
    border-radius:7px 7px 0 0;
    position:relative;
  }
  
  .sharrre .count:before, .sharrre .count:after {
  	content:'';
  	display:block;
  	position:absolute;
  	left:49%;
  	width:0;
  	height:0;
  }
  
  .sharrre .count:before {
  	border:solid 7px transparent;
  	border-top-color:#b2c6cc;
  	margin-left:-7px;
  	bottom: -14px;
  }
  
  .sharrre .count:after {
  	border:solid 6px transparent;
  	margin-left:-6px;
  	bottom:-12px;
  	border-top-color:#e5eef2;
  }
  
  .sharrre .share{
    height:34px;
    line-height:34px;
    color:#ffffff;
    font-size:13px;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.35);
    filter: dropshadow(color=#d1d1d1, offx=0, offy=1);
    border:1px solid #6fa4b5;
    border-width:0 1px 1px 1px;
    -moz-border-radius-topleft:0;
    -moz-border-radius-topright:0;
    -moz-border-radius-bottomright:7px;
    -moz-border-radius-bottomleft:7px;
    -webkit-border-radius:0 0 7px 7px;
    border-radius:0 0 7px 7px;
    background-color:#7ac5df;
    -webkit-box-shadow:inset 0px 1px 0px 0px rgba(105, 164, 185, 1), inset 0px -1px 2px 0px rgba(255, 255, 255, 0.6), inset 0px 2px 1px 0px rgba(255, 0, 0, 0.15);
    -moz-box-shadow:inset 0px 1px 0px 0px rgba(105, 164, 185, 1), inset 0px -1px 2px 0px rgba(255, 255, 255, 0.6), inset 0px 2px 1px 0px rgba(255, 0, 0, 0.15);
    box-shadow:inset 0px 1px 0px 0px rgba(105, 164, 185, 1), inset 0px -1px 2px 0px rgba(255, 255, 255, 0.6), inset 0px 2px 1px 0px rgba(255, 0, 0, 0.15); 
  }
  
  .sharrre .share span{
    background:url("/img/example6.png") no-repeat scroll 0 0 transparent;
    width:18px;
    height:10px;
    display: inline-block;
  }
  
  #facebook .share span{
    background-position:0 -35px;
    height:12px;
  }
  
  #facebook .share{
    border-color:#35538f;
    background: #637fbb; /* Old browsers */
    background: -moz-linear-gradient(top, #637fbb 0%, #49649e 100%); /* FF3.6+ */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#637fbb), color-stop(100%,#49649e)); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(top, #637fbb 0%,#49649e 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(top, #637fbb 0%,#49649e 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(top, #637fbb 0%,#49649e 100%); /* IE10+ */
    background: linear-gradient(top, #637fbb 0%,#49649e 100%); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#637fbb', endColorstr='#49649e',GradientType=0 ); /* IE6-9 */
    -webkit-box-shadow:inset 0px 1px 0px 0px rgba(74, 95, 138, 1), inset 0px -1px 2px 0px rgba(255, 255, 255, 0.4), inset 0px 2px 1px 0px rgba(255, 0, 0, 0.15);
    -moz-box-shadow:inset 0px 1px 0px 0px rgba(74, 95, 138, 1), inset 0px -1px 2px 0px rgba(255, 255, 255, 0.4), inset 0px 2px 1px 0px rgba(255, 0, 0, 0.15);
    box-shadow:inset 0px 1px 0px 0px rgba(74, 95, 138, 1), inset 0px -1px 2px 0px rgba(255, 255, 255, 0.4), inset 0px 2px 1px 0px rgba(255, 0, 0, 0.15); 
  }
  
  #googleplus .share{
    border-color:#303030;
    background: #626263; /* Old browsers */
    background: -moz-linear-gradient(top, #626263 0%, #424244 100%); /* FF3.6+ */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#626263), color-stop(100%,#424244)); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(top, #626263 0%,#424244 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(top, #626263 0%,#424244 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(top, #626263 0%,#424244 100%); /* IE10+ */
    background: linear-gradient(top, #626263 0%,#424244 100%); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#626263', endColorstr='#424244',GradientType=0 ); /* IE6-9 */
    -webkit-box-shadow:inset 0px 1px 0px 0px rgba(74, 95, 138, 1), inset 0px -1px 2px 0px rgba(255, 255, 255, 0.4), inset 0px 2px 1px 0px rgba(255, 0, 0, 0.15);
    -moz-box-shadow:inset 0px 1px 0px 0px rgba(74, 95, 138, 1), inset 0px -1px 2px 0px rgba(255, 255, 255, 0.4), inset 0px 2px 1px 0px rgba(255, 0, 0, 0.15);
    box-shadow:inset 0px 1px 0px 0px rgba(74, 95, 138, 1), inset 0px -1px 2px 0px rgba(255, 255, 255, 0.4), inset 0px 2px 1px 0px rgba(255, 0, 0, 0.15); 
  }
</style>
</body>
</html>