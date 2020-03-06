var app = angular.module("maelstormApp", ["ngRoute"])

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/home.html",
            controller: "homeController"
        })
        .when("/offer", {
            templateUrl: "views/offer.html"
        })
})




app.controller("homeController", function ($scope) {
    $scope.offers = [
        { title: 'Character boost!', desc: 'Buy your way to lvl 60 in classic Wow!', price: '90', imgUrl: 'lvlup.png' },
        { title: 'Epic Mount!', desc: 'Buy your Epic mount now!', price: '60', imgUrl: 'mount.png' },
        { title: 'Classic Gold!', desc: 'Buy any ammount of Gold!', price: '1/g', imgUrl: 'gold.png' },
        { title: 'Character boost!', desc: 'Buy your way to lvl 60 in classic Wow!', price: '60', imgUrl: 'lvlup.png' }
    ]
})



app.directive("apphead", function () {
    return {
        template:
            '<nav class="navBar">' +
            '<button class="my-btn">Login</button>' +
            '<img src="./images/Cart.png">' +
            '</nav>' +
            '<div class="banner">' +
            '<img src="./images/Logo.png" alt="">' +
            '</div>'
    }
})
app.directive("appfooter", function () {
    return {
        template:
            '<footer class="footer">' +
            '<div>' +
            '<img class="footer-logo" src="./images/LogoS.png" alt="">' +
            '<span>Contact us</span>' +
            '<span>About us</span>' +
            '<span>Guarantees</span>' +
            '<span>Policy</span>' +
            '</div>' +
            '<div class="footer-social"></div>' +
            '</footer>'
    }
})
app.directive("appcontact", function () {
    return {
        template:
            '<div class="contact">' +
            '<div class="contact-info-container">' +
            '<p class="contact-info">Want to know more about us? Feel free to ask any question!</p>' +
            '<img src="./images/help.png">' +
            '</div>' +
            '<form class="contact-form" action="">' +
            '<label for="">Name</label>' +
            '<input type="text">' +
            '<label for="">E-mail</label>' +
            '<input type="text">' +
            '<label for="">Whats on your mind?</label>' +
            '<textarea cols="30" rows="5"></textarea>' +
            '<button class="my-btn contact-btn">Send!</button>' +
            '</form>' +
            '</div>'
    }
})
app.directive("options", function () {
    return {
        template:
            '<div class="options">' +
            '<div class="btn-group">' +
            '<button type="button" class="dropdown-toggle my-toggle-btn" data-toggle="dropdown" aria-haspopup="true"aria-expanded="false">' +
            '<span class=""></span>' +
            '</button>' +
            '<div class="dropdown-menu my-dropdown">' +
            '   <a class="dropdown-item" href="#/!">All</a>' +
            '   <a class="dropdown-item" href="#/!">Other Services</a>' +
            '   <a class="dropdown-item" href="#/!">Raids</a>' +
            '   <a class="dropdown-item" href="#/!">Level Boosting</a>' +
            '   <a class="dropdown-item" href="#/!">Dungeons</a>' +
            '</div>' +
            '</div>' +
            '<div class="option-grp">' +
            '<a href="#/!">Items</a>' +
            '<a href="#/!">PVP</a>' +
            '<a href="#/!">Dungeons</a>' +
            '<a href="#/!">Level Boosting</a>' +
            '<a href="#/!">Raids</a>' +
            '<a href="#/!">Other Services</a>' +
            '<a href="#/!">All</a>' +
            '</div>' +
            '</div>' +
            '</div>'
    }
})