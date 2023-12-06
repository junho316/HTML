function mapMenuClick(e) {
	document.querySelector('#mapMenu').innerHTML = e.innerHTML;

	var selall = document.querySelectorAll('.tempNum');
	for (let i = 0; i < selall.length; i++) {
		selall[i].innerHTML = e.innerHTML;
	}
}

function ClickPopUpBtn(e) {
	document.querySelector('#PopUpArea').innerHTML = e.innerHTML;
}