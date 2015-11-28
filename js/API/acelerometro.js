var ac = {
    watchID: null,
    init: function(){
        var options = { frequency: 500 };  // Update every 3 seconds
        if(!ac.watchID)
            watchID = navigator.accelerometer.watchAcceleration(ac.listo, ac.onError, options);
    },
    stop: function(){
        if(ac.watchID != null){
            navigator.accelerometer.clearWatch(watchID);
            ac.watchID = null;
            $("#mostrarBru").text("Acelerometro detenido ");
        }
    },
    listo: function(pos){
            var x = pos.x;
            var y = pos.y;
            var z = pos.z;
            $("#mostrarBru").text("X: "+ x +" Y:"+y);
    },
    onError: function(err){
        alert(err.code);
    }
}