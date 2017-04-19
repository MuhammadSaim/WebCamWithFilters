<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML5 Vide Streaming</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
   
   
   <div class="main-container">
       <div class="wrapper">
           <video controls autoplay id="online-video">
<!--           <source src="https://youtu.be/DKOLynNhWxo">-->
       </video>
       <div class="btn-group">
           <button id="grayscale" class="btn btn-default">Grayscale</button>
           <button id="sepia" class="btn btn-default">Sepia</button>
           <button id="saturation" class="btn btn-default">Saturation</button>
           <button id="hue-rotate" class="btn btn-default">Hue-Rotate</button>
           <button id="invert" class="btn btn-default">Invert</button>
           <button id="brightness" class="btn btn-default">Brightness</button>
           <button id="contrast" class="btn btn-default">Contrast</button>
           <button id="blur" class="btn btn-default">Blur</button>
           <button id="tint" class="btn btn-default">Tint</button>
       </div>
       </div>
   </div>
   
   
    <script src="js/jquery.js"></script>
    <script src="js/script.js"></script>
</body>
</html>