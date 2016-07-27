;(function(){

    angular.module('gala')
      .component('galaComponent', {
        controller: GalaController,
        templateUrl: 'components/gala.html'
      })




      function GalaController(){
       var gc = this;

        gc.gala = []

      


       gc.addToGala = function( art ){
         var x = Object.assign({}, art)
         gc.gala.push(x)
         gc.showMe = false;
         gc.art.url = 'bah terrible code'
       }

       gc.removeArt = function(i) {
         gc.gala.splice(i, 1)
       }




        
      }

}());