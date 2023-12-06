var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
	mapOption = {
		center: new kakao.maps.LatLng(37.47601668950402, 127.15099417223486), // 지도의 중심좌표
		level: 6 // 지도의 확대 레벨
	};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 다각형을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 다각형을 표시합니다 -----------------------------------------------------------
var polygonPath1 = [
	new kakao.maps.LatLng(37.46775229090834, 127.13006497533547),
	new kakao.maps.LatLng(37.459803365859024, 127.14714118719172),
	new kakao.maps.LatLng(37.463474229807304, 127.1513080495433),
	new kakao.maps.LatLng(37.46448056048208, 127.15348036860809),
	new kakao.maps.LatLng(37.46418688264107, 127.15754904804113),
	new kakao.maps.LatLng(37.467498820747686, 127.1603594032796),
	new kakao.maps.LatLng(37.46890451506012, 127.16027197184559),
	new kakao.maps.LatLng(37.46911828980754, 127.16208111569703),
	new kakao.maps.LatLng(37.469443148025086, 127.1617200780425),
	new kakao.maps.LatLng(37.47061343378878, 127.16246869767082),
	new kakao.maps.LatLng(37.47196404076041, 127.16312729499907),
	new kakao.maps.LatLng(37.472696601835125, 127.15437894414683),
	new kakao.maps.LatLng(37.473741474265, 127.15460719310558),
	new kakao.maps.LatLng(37.47411601856377, 127.1433933540901),
	new kakao.maps.LatLng(37.47477706052478, 127.13285821542948),
	new kakao.maps.LatLng(37.46984080256906, 127.13171903763244),
	new kakao.maps.LatLng(37.46857868342592, 127.13234985938026)
];

var polygonPath2 = [
	new kakao.maps.LatLng(37.473741474265, 127.15460719310558),
	new kakao.maps.LatLng(37.47411601856377, 127.1433933540901),
	new kakao.maps.LatLng(37.47525115034332, 127.14350857502119),
	new kakao.maps.LatLng(37.47651178947466, 127.14414408865362),
	new kakao.maps.LatLng(37.47737661801935, 127.14425880514648),
	new kakao.maps.LatLng(37.47730119362588, 127.14697198764827),
	new kakao.maps.LatLng(37.48175179861711, 127.14727466583885),
	new kakao.maps.LatLng(37.48387647316225, 127.14863561881623),
	new kakao.maps.LatLng(37.48499212002052, 127.14990417822644),
	new kakao.maps.LatLng(37.489792633219544, 127.15823602637848),
	new kakao.maps.LatLng(37.496043559788184, 127.1597645337708),
	new kakao.maps.LatLng(37.48913096767207, 127.1676196991277),
	new kakao.maps.LatLng(37.48888256867146, 127.16486016936373),
	new kakao.maps.LatLng(37.48766108253919, 127.16205332676434),
	new kakao.maps.LatLng(37.48596261949258, 127.16535125343516),
	new kakao.maps.LatLng(37.48454176762716, 127.17593111700062),
	new kakao.maps.LatLng(37.4808290223063, 127.1763294299663),
	new kakao.maps.LatLng(37.47708185152126, 127.17564229579592),
	new kakao.maps.LatLng(37.47329294875946, 127.17875358779801),
	new kakao.maps.LatLng(37.4706006533719, 127.1715122851495),
	new kakao.maps.LatLng(37.46840623255788, 127.16870383292859),
	new kakao.maps.LatLng(37.47061343378878, 127.16246869767082),
	new kakao.maps.LatLng(37.47196404076041, 127.16312729499907),
	new kakao.maps.LatLng(37.472696601835125, 127.15437894414683)
];

var polygonPath3 = [
	new kakao.maps.LatLng(37.47411601856377, 127.1433933540901),
	new kakao.maps.LatLng(37.47525115034332, 127.14350857502119),
	new kakao.maps.LatLng(37.47651178947466, 127.14414408865362),
	new kakao.maps.LatLng(37.47737661801935, 127.14425880514648),
	new kakao.maps.LatLng(37.47730119362588, 127.14697198764827),
	new kakao.maps.LatLng(37.48175179861711, 127.14727466583885),
	new kakao.maps.LatLng(37.48387647316225, 127.14863561881623),
	new kakao.maps.LatLng(37.48499212002052, 127.14990417822644),
	new kakao.maps.LatLng(37.489792633219544, 127.15823602637848),
	new kakao.maps.LatLng(37.49282764887488, 127.15243018395832),
	new kakao.maps.LatLng(37.492001218492284, 127.15048357221227),
	new kakao.maps.LatLng(37.49138824730564, 127.15070849552978),
	new kakao.maps.LatLng(37.489895727010094, 127.14821786258487),
	new kakao.maps.LatLng(37.48744668821027, 127.14685617669343),
	new kakao.maps.LatLng(37.48723340223892, 127.14445866928318),
	new kakao.maps.LatLng(37.487954372188256, 127.14432437195849),
	new kakao.maps.LatLng(37.48925407019926, 127.14247246990263),
	new kakao.maps.LatLng(37.492174521474254, 127.14148293294008),
	new kakao.maps.LatLng(37.490341065936136, 127.1375896957565),
	new kakao.maps.LatLng(37.48151356242765, 127.13553839755656),
	new kakao.maps.LatLng(37.48187002531411, 127.13893090762659),
	new kakao.maps.LatLng(37.479853568906265, 127.13738956959038),
	new kakao.maps.LatLng(37.47855986038013, 127.13413115310487),
	new kakao.maps.LatLng(37.476401144556746, 127.13082611890843),
	new kakao.maps.LatLng(37.47348592702927, 127.12711301111064),
	new kakao.maps.LatLng(37.46869309671254, 127.12660750884773),
	new kakao.maps.LatLng(37.46775229090834, 127.13006497533547),
	new kakao.maps.LatLng(37.46857868342592, 127.13234985938026),
	new kakao.maps.LatLng(37.46984080256906, 127.13171903763244),
	new kakao.maps.LatLng(37.47477706052478, 127.13285821542948)
];

// 지도에 표시할 다각형을 생성합니다
var polygon = new kakao.maps.Polygon({
	path: polygonPath1, // 그려질 다각형의 좌표 배열입니다
	strokeWeight: 3, // 선의 두께입니다
	strokeColor: '#39DE2A', // 선의 색깔입니다
	strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
	strokeStyle: 'solid', // 선의 스타일입니다
	fillColor: '#A2FF99', // 채우기 색깔입니다
	fillOpacity: 0.7 // 채우기 불투명도 입니다
});

var polygon1 = new kakao.maps.Polygon({
	path: polygonPath2, // 그려질 다각형의 좌표 배열입니다
	strokeWeight: 3, // 선의 두께입니다
	strokeColor: '#39DE2A', // 선의 색깔입니다
	strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
	strokeStyle: 'solid', // 선의 스타일입니다
	fillColor: '#A2FF99', // 채우기 색깔입니다
	fillOpacity: 0.7 // 채우기 불투명도 입니다
});

var polygon2 = new kakao.maps.Polygon({
	path: polygonPath3, // 그려질 다각형의 좌표 배열입니다
	strokeWeight: 3, // 선의 두께입니다
	strokeColor: '#39DE2A', // 선의 색깔입니다
	strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
	strokeStyle: 'solid', // 선의 스타일입니다
	fillColor: '#A2FF99', // 채우기 색깔입니다
	fillOpacity: 0.7 // 채우기 불투명도 입니다
});

// 오버레이-------------------------------------------------------------------------------------
var content1 = '<ul id="mapOverlay"><li data-bs-toggle="modal" data-bs-target="#areaPopUP" onclick="ClickPopUpBtn(this)">송파구 위례동</li><li class="tempNum"></li></ul>';
var content2 = '<ul id="mapOverlay"><li data-bs-toggle="modal" data-bs-target="#areaPopUP" onclick="ClickPopUpBtn(this)">하남시 위례동</li><li class="tempNum"></li></ul>';
var content3 = '<ul id="mapOverlay"><li data-bs-toggle="modal" data-bs-target="#areaPopUP" onclick="ClickPopUpBtn(this)">성남시 위례동</li><li class="tempNum"></li></ul>';

// 커스텀 오버레이가 표시될 위치입니다 
var position1 = new kakao.maps.LatLng(37.47860551575809, 127.16237294151435);
var position2 = new kakao.maps.LatLng(37.48274629824583, 127.13696522477319);
var position3 = new kakao.maps.LatLng(37.468393767232406, 127.14408328318119);
// 커스텀 오버레이를 생성합니다
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

// 마커를 생성합니다
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
function addArea() {
	polygon.setMap(map);
	polygon1.setMap(map);
	polygon2.setMap(map);
	customOverlay1.setMap(map);
	customOverlay2.setMap(map);
	customOverlay3.setMap(map);
	marker1.setMap(null);
	marker2.setMap(null);
	marker3.setMap(null);
}

function delArea() {
	polygon.setMap(null);
	polygon1.setMap(null);
	polygon2.setMap(null);
	customOverlay1.setMap(null);
	customOverlay2.setMap(null);
	customOverlay3.setMap(null);
	marker1.setMap(map);
	marker2.setMap(map);
	marker3.setMap(map);
}