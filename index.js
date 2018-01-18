var box = document.getElementById('box')
var buttons = document.getElementsByClassName('buttons')


setTimeout(function(){
	box.style.display = "block";}, 
	3000);

addEventListener('click', function(){
		closeModal()
})

function closeModal(){
	box.style.display = "none";
}