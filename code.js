window.addEventListener('load', function () {
	let page = document.getElementById("change_page");
	let style = document.getElementById("change_style");
	page.addEventListener('click', function (){
		window.location.href = "https://en.wikipedia.org/wiki/The_Holocaust";
		});
	style.addEventListener('click', function (){
		document.body.style.backgroundColor = 'yellow';
	});
});
