var br = {
    watchId:null,
    options:{frequency:500},
    init: function(){
        if(!br.watchId)
            br.watchId = navigator.compass.watchHeading(br.success, br.error, br.options);
    },
    stop: function(){
        if(br.watchId != null){
            navigator.compass.clearWatch(br.watchId);
            br.watchId = null;
            $("brujula .scroll h2").html("Detenido");
        }
    },
    success: function(h){
        $("#brujula .scroll h2").html("grados: " +h.magneticHeading);
        
    },
    error: function(err){
        alert(err.code);
    }
}