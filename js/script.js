(function(){
     var video = document.getElementById('online-video'),
         client_video = document.getElementById('online-video-client-side'),
        vendorUrl = window.URL || window.webKitURL;
    
    
    
    
    navigator.getMedia = navigator.getUserMedia ||
                         navigator.webKitGetUserMedia ||
                        navigator.mozGetUserMedia ||
                        navigator.msGetUserMedia;
    
    navigator.getMedia({
        video: true,
        audio:false
    }, function(streem){
        video.src = vendorUrl.createObjectURL(streem);
//        client_video.src = vendorUrl.createObjectURL(streem);
        video.play();
//        client_video.play();
    }, function(error){
        //your error code here
        console.log('Something went wrong');
    });
    
    
})();

$(function(){
    var vid = $('#online-video');
    $('#grayscale').click(function(){
        vid.toggleClass('grayscale');
    });
    $('#sepia').click(function(){
        vid.toggleClass('sepia');
    });
    $('#saturation').click(function(){
        vid.toggleClass('saturate');
    });
    $('#hue-rotate').click(function(){
        vid.toggleClass('hue-rotate');
    });
    $('#invert').click(function(){
        vid.toggleClass('invert');
    });
    $('#contrast').click(function(){
        vid.toggleClass('contrast');
    });
    $('#brightness').click(function(){
        vid.toggleClass('brightness');
    });
    $('#blur').click(function(){
        vid.toggleClass('blur');
    });
    $('#tint').click(function(){
        vid.toggleClass('tint');
    });
});