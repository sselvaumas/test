var app = angular.module('starter', ['ionic','ngCordova'])
var recognition = null; 
app.controller('AppCtrl', function($http,$scope,$ionicPlatform ,$cordovaMedia) {
 $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.cordova && window.cordova.InAppBrowser) {
      window.open = window.cordova.InAppBrowser.open;
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
        recognition.onresult = function(event) {
      if (event.results.length > 0) {

            var newQuery  = event.results[0][0].transcript;
            recognizing = false;
            recognition.stop();
            var speechText = "";
            if(newQuery.indexOf("welcome")!=-1){
              //speechText="CCL is intro";
              var welcome = $cordovaMedia.newMedia('/android_asset/www/mp3/welcome.mp3'); 
              welcome.play();
            }else if(newQuery.indexOf("how about you")!=-1 || newQuery.indexOf("How about you")!=-1){
              //speechText="CCL is intro";
              var Greeting = $cordovaMedia.newMedia('/android_asset/www/mp3/Greeting.mp3'); 
              Greeting.play();
            }else if(newQuery.indexOf("excited")!=-1){
              //speechText="CCL is intro";
              var AskExcitement = $cordovaMedia.newMedia('/android_asset/www/mp3/AskExcitement.mp3'); 
              AskExcitement.play();
            }else if(newQuery.indexOf("summarize")!=-1){
              //speechText="CCL is intro";
              var ShowCCLInfo = $cordovaMedia.newMedia('/android_asset/www/mp3/ShowCCLInfo.mp3'); 
              ShowCCLInfo.play();
            }else if(newQuery.indexOf("stats")!=-1 || newQuery.indexOf("statistics")!=-1){
             // speechText="CCL is stats";
              var ShowCCLStatistics = $cordovaMedia.newMedia('/android_asset/www/mp3/ShowCCLStatistics.mp3');
             ShowCCLStatistics.play();
            }else if(newQuery.indexOf("team 4")!=-1 || newQuery.indexOf("team four")!=-1){
             // speechText="CCL is stats";
              var ShowTeamFour = $cordovaMedia.newMedia('/android_asset/www/mp3/ShowTeamFour.mp3');
             ShowTeamFour.play();
            }else if(newQuery.indexOf("team 5")!=-1 || newQuery.indexOf("team five")!=-1){
             // speechText="CCL is stats";
              var ShowTeamFive = $cordovaMedia.newMedia('/android_asset/www/mp3/ShowTeamFive.mp3');
             ShowTeamFive.play();
            }else if(newQuery.indexOf("team 6")!=-1 || newQuery.indexOf("team six")!=-1){
             // speechText="CCL is stats";
              var ShowTeamSix = $cordovaMedia.newMedia('/android_asset/www/mp3/ShowTeamSix.mp3');
             ShowTeamSix.play();
            }else if(newQuery.indexOf("team 7")!=-1 || newQuery.indexOf("team seven")!=-1){
             // speechText="CCL is stats";
              var ShowTeamSeven = $cordovaMedia.newMedia('/android_asset/www/mp3/ShowTeamSeven.mp3');
             ShowTeamSeven.play();
            }else if(newQuery.indexOf("best batsman")!=-1 || newQuery.indexOf("best batsmen")!=-1){
               //speechText="CCL is best batsman";
               var GetBestBatsman = $cordovaMedia.newMedia('/android_asset/www/mp3/GetBestBatsman.mp3');
               GetBestBatsman.play();
            }else if(newQuery.indexOf("best bowler")!=-1 || newQuery.indexOf("bowler")!=-1){
              // speechText="CCL is best bowler";
              var GetBestBowler = $cordovaMedia.newMedia('/android_asset/www/mp3/GetBestBowler.mp3');
              GetBestBowler.play();
            }else if(newQuery.indexOf("man of the series")!=-1 || newQuery.indexOf("man of series")!=-1){
              // speechText="CCL is best bowler";
              var GetManOfSeries = $cordovaMedia.newMedia('/android_asset/www/mp3/GetManOfSeries.mp3');
              GetManOfSeries.play();
            }else if(newQuery.indexOf("committee")!=-1){
              // speechText="CCL is best bowler";
              var GetCommittee = $cordovaMedia.newMedia('/android_asset/www/mp3/GetCommittee.mp3');
              GetCommittee.play();
            }else if(newQuery.indexOf("runner-up")!=-1 || newQuery.indexOf("runnerup")!=-1 || newQuery.indexOf("second")!=-1 || newQuery.indexOf("2nd")!=-1){
              // speechText="CCL is best bowler";
              var GetSecondRunnerUp = $cordovaMedia.newMedia('/android_asset/www/mp3/GetSecondRunnerUp.mp3');
              GetSecondRunnerUp.play();
            }else if(newQuery.indexOf("going to lift")!=-1 ){
              // speechText="CCL is best bowler";
              var GetFinals1 = $cordovaMedia.newMedia('/android_asset/www/mp3/GetFinals1.mp3');
              GetFinals1.play();
            }else if(newQuery.indexOf("title")!=-1 ){
              // speechText="CCL is best bowler";
              var GetFinals2 = $cordovaMedia.newMedia('/android_asset/www/mp3/GetFinals2.mp3');
              GetFinals2.play();
            }else if(newQuery.indexOf("movies")!=-1 ){
              // speechText="CCL is best bowler";
              var AskMovieMessage = $cordovaMedia.newMedia('/android_asset/www/mp3/AskMovieMessage.mp3');
              AskMovieMessage.play();
            }else if(newQuery.indexOf("signoff")!=-1 || newQuery.indexOf("sign off")!=-1 ){
              // speechText="CCL is best bowler";
              var SignOffMessage = $cordovaMedia.newMedia('/android_asset/www/mp3/SignOffMessage.mp3');
              SignOffMessage.play();
            }
             
          }
      
    };
   }); 
  $scope.recognizedText = '';
 
 
  $scope.record = function() {
    

    recognition.start();
  };
});