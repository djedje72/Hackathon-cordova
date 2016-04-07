document.addEventListener('deviceready', bluetoothInit, false);

function bluetoothInit() {
	//document.getElementById("findBluetooth").addEventListener("click", bluetoothList);
	//bluetoothList();
}

var bluetoothObjects;
function bluetoothList() {
	bluetoothSerial.list(function(devices) {
		bluetoothObjects = [];
		console.log(devices);
	    devices.forEach(function(device) {
	        bluetoothObjects.push({id:device.id, name:bluetoothEnDur[device.id]});
	    });
		var bluetoothHTML = "";
		bluetoothObjects.forEach(function(elt) {
			bluetoothHTML += "<div>"+elt.name+"</div>";
		});
		document.getElementById("listBluetooth").innerHTML = bluetoothHTML;
	});
}

var bluetoothEnDur = {
	"60:7E:DD:F7:D4:3D" : "Tondeuse de Jacques",
	"D8:3C:69:FD:E5:DB" : "PC de Rémi"
}