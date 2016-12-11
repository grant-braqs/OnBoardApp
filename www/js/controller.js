angular.module('starter')
.controller('CalculatorController', function($scope, $cordovaVibration, $http) {

   document.addEventListener("deviceready", onDeviceReady, false);
   function onDeviceReady() {
       console.log(navigator.vibrate);
   }


   // Display variable
   $scope.display = "";
   $scope.num = "";

   $scope.calculate = function () {
       var res = $scope.display.split("%");
       //Calculate Percent.
       $scope.display = ((res[0]/res[1]) * 100).toFixed(2);

       //Calculate the time of calculation
       $scope.result = "";
       $http.get('http://date.jsontest.com/')
           .success(function(data, status, headers,config){
             console.log('data success');
             console.log(data); // for browser console
             $scope.result = data; // for UI
           })
           .error(function(data, status, headers,config){
             console.log('data error');
           })
           .then(function(result){
             things = result.data;    
           })

       // Vibrate 100ms
       //$vibrate(100); 
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



