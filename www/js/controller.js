angular.module('starter')
.controller('CalculatorController', function($scope, $cordovaVibration) {

   document.addEventListener("deviceready", onDeviceReady, false);
   function onDeviceReady() {
       console.log(navigator.vibrate);
   }


   // Display variable
   $scope.display = "";

   $scope.calculate = function () {
       var res = $scope.display.split("%");
       //Calculate Percent.
       $scope.display = ((res[0]/res[1]) * 100).toFixed(2);
           
       // Vibrate 100ms
       $vibrate(100); 
       //alert("Vibrate!");
       
   };

   $scope.clicked = function (label) {
       // Function to control values in the display
       if (($scope.display).includes('.')) {
         $scope.display = label;
       }
       else {
         $scope.display = $scope.display + label;
       }

   };

});



