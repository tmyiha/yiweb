'use strict';
var mood="biubiubiu";
function show () {
	alert(mood);// body...
}

function showPic (whichpic) {
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);// body...
}

function ImagesCtrl($scope) {
$scope.yimages = [
      "images/树叶.jpg",
      "images/wust.jpg",
      "images/geyou.jpg"
  ];
$scope.mainImageUrl = "images/占位2.gif" ;
 $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}