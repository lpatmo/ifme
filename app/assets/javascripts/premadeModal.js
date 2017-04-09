var onReadyStrategiesModal = function() {

	var modal = document.getElementById('myModal');
	var btn = document.getElementById("myBtn");
	var span = document.getElementsByClassName("close")[0];
	
	if(modal || btn || span){
		btn.onclick = function() {
		    modal.style.display = "block";
		}
		span.onclick = function() {
		    modal.style.display = "none";
		}
		window.onclick = function(event) {
		    if (event.target === modal) {
		        modal.style.display = "none";
		    }
		}
	}
}

$(document).on("page:load ready", onReadyStrategiesModal);
