var app = angular.module("app", ["ngAnimate"]);

app.controller("AppCtrl", function() {
    this.toggle = true;

    this.isHidden = false;
    this.fadeIt = function() {
        this.isHidden = !this.isHidden;
    }
});

app.directive("hideMe", function($animate) {
    return function (scope, element, attrs) {
        scope.$watch(attrs.hideMe, function (newVal) {
            if(newVal) {
                $animate.addClass(element, "fade")
            }
            else {
                $animate.removeClass(element, "fade")
            }
        })
    }
});

app.animation(".fade", function() {
    return {
        addClass: function (element, className, done) {
            TweenMax.to(element, 1, {opacity:0, onComplete:done});
//            TweenMax.fromTo(element, 1, {opacity: 1}, {opacity: 0, onComplete:done});
        },
        removeClass: function (element, className, done) {
            TweenMax.to(element, 1, {opacity:1, onComplete:done});
//            TweenMax.fromTo(element, 1, {opacity: 0}, {opacity: 1, onComplete:done});
        }

    }
});

app.animation(".toggle", function() {
    return {
        leave: function( element, done ) {
            TweenMax.fromTo(element, 1, {opacity: 1}, {opacity: 0, onComplete:done});
        },
        enter: function( element, done ) {
            TweenMax.fromTo(element, 1, {opacity: 0}, {opacity: 1, onComplete:done});
        }
    }
});