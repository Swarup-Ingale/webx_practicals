// create simple html hello world using angular js framework.

<!DOCTYPE html>
<html>
<head>
    <title>AngularJS Hello World</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
</head>
<body ng-app="">

    <h2>AngularJS Practical</h2>
    
    <p>Enter your name: 
        <input type="text" ng-model="userName" ng-init="userName='Swarup'">
    </p>

    <h3>Hello, {{ userName }}! Welcome to the Web-X exam.</h3>

</body>
</html>
