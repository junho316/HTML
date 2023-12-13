var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
	mapOption = {
		center: new kakao.maps.LatLng(37.47601668950402, 127.15099417223486), // 지도의 중심좌표
		level: 6, // 지도의 확대 레벨
		disableDoubleClickZoom: true,
		scrollwheel: false,
		draggable: false
	};

var map = new kakao.maps.Map(mapContainer, mapOption);

// 오버레이-------------------------------------------------------------------------------------
var content1 = '<ul id="mapLocalInfo"><li data-bs-toggle="modal" data-bs-target="#areaPopUP" onclick="ClickPopUpBtn(this)">송파구 위례동</li><li class="tempNum"></li></ul>';
var content2 = '<ul id="mapLocalInfo"><li data-bs-toggle="modal" data-bs-target="#areaPopUP" onclick="ClickPopUpBtn(this)">하남시 위례동</li><li class="tempNum"></li></ul>';
var content3 = '<ul id="mapLocalInfo"><li data-bs-toggle="modal" data-bs-target="#areaPopUP" onclick="ClickPopUpBtn(this)">성남시 위례동</li><li class="tempNum"></li></ul>';

var position1 = new kakao.maps.LatLng(37.47860551575809, 127.16237294151435);
var position2 = new kakao.maps.LatLng(37.48274629824583, 127.13696522477319);
var position3 = new kakao.maps.LatLng(37.468393767232406, 127.14408328318119);

var customOverlay1 = new kakao.maps.CustomOverlay({
	position: position1,
	content: content1
});

var customOverlay2 = new kakao.maps.CustomOverlay({
	position: position2,
	content: content2
});

var customOverlay3 = new kakao.maps.CustomOverlay({
	position: position3,
	content: content3
});

// -----------------------------------------------------------------------

var markerPosition1 = new kakao.maps.LatLng(37.47860551575809, 127.16237294151435);
var markerPosition2 = new kakao.maps.LatLng(37.48274629824583, 127.13696522477319);
var markerPosition3 = new kakao.maps.LatLng(37.468393767232406, 127.14408328318119);

var marker1 = new kakao.maps.Marker({
	position: markerPosition1
});
var marker2 = new kakao.maps.Marker({
	position: markerPosition2
});
var marker3 = new kakao.maps.Marker({
	position: markerPosition3
});


// 지도에 표시 -------------------------------------------------------------
var moveLatLon;
function addArea() {
	deleteArea();
	displayArea(songpaPoly);
	displayArea(hanamPoly);
	displayArea(sungnamPoly);
	customOverlay1.setMap(map);
	customOverlay2.setMap(map);
	customOverlay3.setMap(map);
	deleteMarker();
	map.setLevel(6);
	moveLatLon = new kakao.maps.LatLng(37.47601668950402, 127.15099417223486);
	map.panTo(moveLatLon);
	overlayDel.setMap(null);
}

function hosLoc() {
	deleteArea();
	customOverlay1.setMap(null);
	customOverlay2.setMap(null);
	customOverlay3.setMap(null);
	overlayDel.setMap(null);
}

function songpaHosLoc() {
	map.setLevel(5);
	deleteArea();
	displayArea(songpaPoly);
	moveLatLon = new kakao.maps.LatLng(37.48274629824583, 127.13696522477319);
	map.panTo(moveLatLon);
	deleteMarker();

	overlayDel.setMap(null);
}

function sungnamHosLoc() {
	map.setLevel(5);
	deleteArea();
	displayArea(sungnamPoly);
	moveLatLon = new kakao.maps.LatLng(37.468393767232406, 127.14408328318119);
	map.panTo(moveLatLon);
	deleteMarker();
	sungnamHos();
	overlayDel.setMap(null);
}

function hanamHosLoc() {
	map.setLevel(5);
	deleteArea();
	displayArea(hanamPoly);
	moveLatLon = new kakao.maps.LatLng(37.47860551575809, 127.16237294151435);
	map.panTo(moveLatLon);
	deleteMarker();
	hanamHos();
	overlayDel.setMap(null);
}

function everyHos() {
	map.setLevel(6);
	deleteArea();
	moveLatLon = new kakao.maps.LatLng(37.47601668950402, 127.15099417223486);
	map.panTo(moveLatLon);
	deleteMarker();
	hanamHos();
	sungnamHos();
	overlayDel.setMap(null);
}


// json으로 가져오기----------------------------------------------------------------
const hanamHosArr = [];

function loadHanam() {
	return fetch("./json/hanam.json")
		.then((response) => response.json())
		.then((json) => json.DATA);
}

loadHanam().then((DATA) => {

	for (let i = 0; i < DATA.length; i++) {
		if (DATA[i].BSN_STATE_NM === "영업/정상" && DATA[i].REFINE_ROADNM_ADDR.includes('위례')) {
			hanamHosArr.push(DATA[i]);
		}
	}
});

function hanamHos() {
	for (let i = 0; i < hanamHosArr.length; i++) {
		if (hanamHosArr[i].REFINE_WGS84_LAT != 0 && hanamHosArr[i].REFINE_WGS84_LOGT != 0) {
			var data = hanamHosArr[i];
		}
		displayMarker(data);
	}
}

// ----------------------------
const sungnamHosArr = [];

function loadSungnam() {
	return fetch("./json/sungnam.json")
		.then((response) => response.json())
		.then((json) => json.DATA);
}

loadSungnam().then((DATA) => {
	for (let i = 0; i < DATA.length; i++) {
		if (DATA[i].BSN_STATE_NM === "영업/정상" && DATA[i].REFINE_ROADNM_ADDR.includes('위례')) {
			sungnamHosArr.push(DATA[i]);
		}
	}
});

function sungnamHos() {
	for (let i = 0; i < sungnamHosArr.length; i++) {
		if (sungnamHosArr[i].REFINE_WGS84_LAT != 0 && sungnamHosArr[i].REFINE_WGS84_LOGT != 0) {
			var data = sungnamHosArr[i];
		}
		displayMarker(data);
	}
}

// ----------------------------

const hos2 = [];
const positionTemp2 = [];
const markerTemp2 = [];
function loadSongpa() {
	return fetch("./json/seoulHos.json")
		.then((response) => response.json())
		.then((json) => json.DATA);
}

loadSongpa().then((DATA) => {
	for (let i = 0; i < DATA.length; i++) {
		if (DATA[i].dtlstatenm === "영업중" && DATA[i].rdnwhladdr.includes('위례')) {
			hos2.push(DATA[i]);
		}
	}

	for (let i = 0; i < hos2.length; i++) {
		if (hos2[i].x != 0 && hos2[i].y != 0) {
			positionTemp2.push(new kakao.maps.Coords(hos2[i].x, hos2[i].y).toLatLng());
		}
	}

	for (let i = 0; i < positionTemp2.length; i++) {
		markerTemp2.push(new kakao.maps.Marker({
			position: positionTemp2[i]
		}));
	}

	for (let i = 0; i < markerTemp2.length; i++) {
		markerTemp2[i].setMap(map);
	}
});

// 오버레이 ----------------------------------------

const markerArr = [];
var overlayDel = new kakao.maps.CustomOverlay({
	yAnchor: 3,
	position: null
});;
function displayMarker(data) {
	var position = new kakao.maps.LatLng(Number(data.REFINE_WGS84_LAT), Number(data.REFINE_WGS84_LOGT));

	var marker = new kakao.maps.Marker({
		map: map,
		position: position
	});

	markerArr.push(marker);

	var overlay = new kakao.maps.CustomOverlay({
		yAnchor: 3,
		position: marker.getPosition()
	});

	var content = document.createElement('div');
	content.innerHTML = data.BIZPLC_NM;
	content.style.cssText = 'background: white; border: 1px solid black';

	var content1 = document.createElement('div');
	content1.innerHTML = data.REFINE_ROADNM_ADDR;
	content1.style.cssText = 'background: white; border: 1px solid black';

	var closeBtn = document.createElement('button');
	closeBtn.innerHTML = '닫기';
	closeBtn.onclick = function () {
		overlay.setMap(null);
	};
	content.appendChild(closeBtn);
	content.appendChild(content1);
	overlay.setContent(content);

	kakao.maps.event.addListener(marker, 'click', function () {
		overlayDel.setMap(null);
		overlay.setMap(map);
		overlayDel = overlay;
	});
}

function deleteMarker() {
	for (let i = 0; i < markerArr.length; i++) {
		markerArr[i].setMap(null);
	}
}

// 폴리곤 ----------------------------------------
var songpaPoly;
var hanamPoly;
var sungnamPoly;
var polygon = [];

window.onload = function () {
	$.getJSON("./json/emd.geojson", function (geojson) {
		var data = geojson.features;

		data.forEach(val => {
			if (val.properties.temp.includes('송파구 위례동')) {
				songpaPoly = val.geometry.coordinates[0][0];
			}
			if (val.properties.temp.includes('하남시 위례동')) {
				hanamPoly = val.geometry.coordinates[0][0];
			}
			if (val.properties.temp.includes('성남시 위례동')) {
				sungnamPoly = val.geometry.coordinates[0][0];
			}
		});
	});
}

function displayArea(coordinates) {
	var path = [];
	coordinates.forEach(coordinate => {
		var point = {
			x: coordinate[1],
			y: coordinate[0]
		};
		path.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]))
	});

	polygon.push(new kakao.maps.Polygon({
		map: map,
		path: path,
		strokeWeight: 4,
		strokeColor: 'red',
		strokeOpacity: 0.5,
		strokeStyle: 'solid',
		fillColor: 'red',
		fillOpacity: 0.1
	}));
}
function deleteArea() {
	polygon.forEach(coordinate => {
		coordinate.setMap(null)
	}
	)
}

