function mapMenuClick(e) {
	document.querySelector('#mapMenu').innerHTML = e.innerHTML;
	document.querySelector('#areaMenu').style.display = 'none';
	var selall = document.querySelectorAll('.tempNum');
	for (let i = 0; i < selall.length; i++) {
		selall[i].innerHTML = e.innerHTML;
	}
}

function ClickPopUpBtn(e) {
	document.querySelector('#PopUpArea').innerHTML = e.innerHTML;
}

function ClickHosCnt() {
	document.querySelector('#areaMenu').style.display = 'block';
}

function hosLocClick(e) {
	document.querySelector('#areaMenu').innerHTML = e.innerHTML;
}

var t = document.querySelector('#hosLocT');
