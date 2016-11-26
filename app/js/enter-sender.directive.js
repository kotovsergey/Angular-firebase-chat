function enterClicker(){
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function ( event ) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.enterClicker);
                });
 
                event.preventDefault();
            }
        });
    };
}

angular.module('chatApp')
.directive('enterClicker', [enterClicker])