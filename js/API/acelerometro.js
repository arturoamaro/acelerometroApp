var ac = {
    watchID: null,
    init: function(){
        var options = { frequency: 500 };  // Update every 3 seconds
        watchID = navigator.accelerometer.watchAcceleration(ac.listo, ac.onError, options);
    },
    stop: function(){
        
        navigator.accelerometer.clearWatch(watchID);
        alert("detener");
    },
    listo: function(pos){
        var x = pos.x;
        var y = pos.y;
        var z = pos.z;
        $("#mostrarBru").text("X: "+ x +" Y:"+y);
    },
    onError: function(){
        alert("Error");
    }
}