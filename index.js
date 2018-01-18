var box = document.getElementById('box')
var close = document.getElementsByClassName('close')[0]
console.log(close)


setTimeout(function(){
	box.style.display = "block";}, 
	3000);

close.addEventListener('click', function(){
		closeModal()
})

function closeModal(){
	box.style.display = "none";
}