var ac = {
    
    init: function(){
        alert("iniciar");
        var options = { frequency: 500 };  // Update every 3 seconds
        var watchID = navigator.accelerometer.watchAcceleration(ac.listo, ac.onError, options);
    },
    stop: function(){
        alert("detener");
        var watchID = navigator.accelerometer.watchAcceleration(listo, onError, options);
        navigator.accelerometer.clearWatch(watchID);
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