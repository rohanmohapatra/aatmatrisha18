
// Get the modal
var i=0;
var modal = document.getElementsByClassName('modal_check');
//var x = document.getElementsByClassName('close');
for(i=0;i<modal.length;i++){
	modal[i].style.display='none';
}
// Get the button that opens the modal
var btn = document.getElementsByClassName("event_list");

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];
for(i=0;i<btn.length;i++){
	//console.log(btn[i].id);
		// When the user clicks the button, open the modal 
		btn[i].onclick = function() {
			for(var j=0;j<modal.length;j++){
				//console.log(modal[j].id);
				if(event.target.id==modal[j].id)
				{
					console.log(modal[j].id);
					modal[j].style.display = "block";
					var x=modal[j].children[0].children[0].children[0];
						console.log(x);
						x.onclick = function() {
							console.log('inner');
							event.target.parentNode.parentNode.parentNode.style.display = "none";
					}
				}
				
		    }
		}
}

// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
  //  modal.style.display = "none";
//
