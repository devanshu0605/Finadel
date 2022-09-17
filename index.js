var a = angular.module("myapp", ['ui.router']);
window.baseUrl = "http://192.168.81.246:8000"
a.config(['$stateProvider', function ($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login.html',
      templateUrl: 'login.html',
      controller: 'login'
    })
    .state('register', {
      url: '/register.html',
      templateUrl: 'register.html',
      controller: 'register'
    })
    .state('home', {
      url: '/index.html',
      templateUrl: 'index.html',
      controller: ''
    })
    .state('user', {
      url: '/user.html',
      templateUrl: 'user.html',
      controller: ''
    })
    .state('shop', {
      url: '/shop.html',
      templateUrl: 'shop.html',
      controller: ''
    })
    .state('shopk', {
      url: '/shopkeeper_register.html',
      templateUrl: 'shopkeeper_register.html',
      controller: ''
    })
    .state('adminlogin', {
      url: '/adminlogin.html',
      templateUrl: 'adminlogin.html',
      controller: ''
    })
    .state('vendord', {
      url: '/vendordashboard.html',
      templateUrl: 'vendordashboard.html',
      controller: ''
    })
    .state('admin', {
      url: '/admin.html',
      templateUrl: 'admin.html',
      controller: ''
    })


}]);
a.controller("register", function ($scope, $http, $location) {
  $scope.pass = ""
  $scope.cpass = ""
  $scope.email = ""
  $scope.user = ""
  $scope.func = function () {

    var pass = $scope.pass;

    var cpass = $scope.cpass;

    var email = $scope.email;

    var user = $scope.user;

    var obj = { password: pass, username: user, email: email, c_password: cpass }

    if (pass == "" || user == "" || email == "" || cpass == "") {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Data Missing "
      })
      return;
    }
    console.log(obj);
    $http({
      method: "POST",
      url: window.baseUrl + "/Finadel/registration",
      data: JSON.stringify(obj),
      withCredentials: true,

    })

      .then(function (response) {
        console.log(response.status);
        {

          Swal.fire(
            'Good job!',
            'You are now logged in ',
            'success'
          )

          $location.path("/user.html");

        }


      })
      .catch((response) => {

        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: response.data.error
        })

        console.log(err)
      })
  }
})
a.controller("login", function ($scope, $http, $location) {
  $scope.pass = ""
  $scope.user = ""
  // $scope.func = function () {

  //   var pass = $scope.pass;

  //   var user = $scope.user;

  //   var obj = { pass: pass, user: user }

  //   if (pass == "" || user == "") {
  //     swal.fire({
  //       icon: 'error',
  //       title: 'Oops...',
  //       text: "Data Missing "
  //     })
  //     return;
  //   }
  //   console.log(obj);
  //   $http({
  //     method: "POST",
  //     url: window.baseUrl + "/user/login/",
  //     data: JSON.stringify(obj),
  //     withCredentials: true,

  //   })

  //     .then(function (response) {
  //       console.log(response.status);
  //       {

  //         Swal.fire(
  //           'Good job!',
  //           'You are now logged in ',
  //           'success'
  //         )

  //         $location.path("/user.html");

  //       }


  //     })
  //     .catch((response) => {

  //       swal.fire({
  //         icon: 'error',
  //         title: 'Oops...',
  //         text: response.data.error
  //       })

  //       console.log(err)
  //     })
  // }
  $scope.func = function () {

    var pass = $scope.pass;

    var user = $scope.user;



    if (pass == "" || user == "") {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Data Missing "
      })

    }
    $scope.p = "devanshu";
    $scope.e = "user1";
    if ($scope.pass == $scope.p && $scope.user == $scope.e) {
      Swal.fire(
        'Good job!',
        'You are now logged in ',
        'success'
      )
      $location.url("/user.html");
      return;
    }
    else {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You entered wrong email or password',
        footer: '<a href="">Forgot Password?</a>'
      })
    }



    $scope.p1 = "devanshu";
    $scope.e1 = "shop1";
    if ($scope.pass == $scope.p1 && $scope.user == $scope.e1) {
      Swal.fire(
        'Good job!',
        'You are now logged in ',
        'success'
      )
      $location.url("/vendordashboard.html");
      return;
    }
    else {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You entered wrong email or password',
        footer: '<a href="">Forgot Password?</a>'
      })
    }




  }

  
})
a.controller("user", function ($scope, $http, $location) {

})
a.controller("shop", function ($scope, $http, $location) {

})
a.controller("vendordashboard", function ($scope, $http, $location) {

})
a.controller("admin", function ($scope, $http, $location) {

})
a.controller("adminlogin", function ($scope, $location) {
  $scope.pass = ""
  $scope.user = ""
  $scope.func = function () {

    var pass = $scope.pass;

    var user = $scope.user;



    if (pass == "" || user == "") {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Data Missing "
      })

    }
    $scope.p = "admin123";
    $scope.e = "admin";
    if ($scope.pass == $scope.p && $scope.user == $scope.e) {
      Swal.fire(
        'Good job!',
        'You are now logged in ',
        'success'
      )
      $location.url("/admin.html");
      return;
    }
    else {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You entered wrong email or password',
        footer: '<a href="">Forgot Password?</a>'
      })
    }



  }

})

