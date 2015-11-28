var ac = {
    var watchID,
    init: function(){
        var options = { frequency: 500 };  // Update every 3 seconds
        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    },
    stop: function(){
        alert("detener");
        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
        navigator.accelerometer.clearWatch(watchID);
    },
    onSuccess: function(pos){
        var x = pos.x;
        var y = pos.y;
        var z = pos.z;
        $("#mostrarBru").text("X: "+ x +" Y:"+y);
    },
    onError: function(){
        alert("Error");
    }
}