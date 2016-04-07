
document.addEventListener('deviceready', nfcReadyFunc, false);

var maPlaceDeGarage = [4, -91, -105, 106, 74, 61, -128];

function nfcReadyFunc() {
	//nfc.addNdefListener(nfcSuccess);
	//nfc.addTagDiscoveredListener(nfcSuccess);

	nfc.addNdefListener (
	    nfcHandler,
	    function () {
	        console.log("Success, listener added. You can now scan a tag.");
	    },
	    function (error) {
	        alert("Adding the listener failed.");
	    }
	);
}

function nfcHandler (nfcEvent) {
    var tag = nfcEvent.tag;
    var ndefMessage = tag.ndefMessage;
    var payload = nfc.bytesToString(ndefMessage[0].payload);
    console.log(payload);
};



function nfcSuccess(nfcDevice) {
	console.log(nfcDevice);
	if(arraysEqual(nfcDevice.tag.id, maPlaceDeGarage)) {
		document.getElementById("listNFC").innerHTML = "Place de garage de Guillaume détectée";
	} else {
		document.getElementById("listNFC").innerHTML = "Cet objet est inconnu ! Mais vous pouvez l'ajouter ;)";
	}
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}