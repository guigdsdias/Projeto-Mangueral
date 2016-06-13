
var app = angular.module('myApp', ['ngGrid']);

app.controller('Ctrl', function($scope) {
    
    $scope.add = function() {
      console.log("add todo was clicked...");
      $scope.todos.push({
        "name" : $scope.name,
        "estimate" : 100,
        "done" : false,
        "created_at" : new Date(),
        "update-at" : ""
      });
    };
    
    $scope.todos = [
        {
        "name": "inicio",
        "estimate": 1,
        "done": false,
        "created_at": "2012-01-03",
        "update_at": ""},
    {
        "name": "asdfasfd",
        "estimate": 2,
        "done": false,
        "created_at": "2012-01-03",
        "update_at": ""},
    {
        "name": "hjjhjh",
        "estimate": 3,
        "done": false,
        "created_at": "2012-01-03",
        "update_at": ""},
    {
        "name": "ytrt rtyuty rtuy",
        "estimate": 4,
        "done": false,
        "created_at": "2012-10-03",
        "update_at": ""},
    {
        "name": "vbbv ghjghj",
        "estimate": 5,
        "done": false,
        "created_at": "2012-01-03",
        "update_at": ""},
    {
        "name": "ghfg",
        "estimate": 6,
        "done": false,
        "created_at": "2012-01-03",
        "update_at": ""},
    {
        "name": "iouioiuo",
        "estimate": 7,
        "done": true,
        "created_at": "2012-01-03",
        "update_at": ""},
    {
        "name": "tyutyu",
        "estimate": 8,
        "done": false,
        "created_at": "2012-01-03",
        "update_at": ""},
    {
        "name": "dfdf",
        "estimate": 9,
        "done": true,
        "created_at": "2012-01-03",
        "update_at": ""},
    {
        "name": "vbnvb",
        "estimate": 10,
        "done": false,
        "created_at": "2012-01-03",
        "update_at": ""},
    {
        "name": "fgfg",
        "estimate": 11,
        "done": false,
        "created_at": "2012-01-03",
        "update_at": ""},
    {
        "name": "asdfasfd",
        "estimate": 12,
        "done": false,
        "created_at": "2012-01-03",
        "update_at": ""},
    {
        "name": "hjjhjh",
        "estimate": 13,
        "done": false,
        "created_at": "2012-01-03",
        "update_at": ""},
    {
        "name": "ytrt rtyuty rtuy",
        "estimate": 14,
        "done": false,
        "created_at": "2012-01-03"},
    {
        "name": "vbbv ghjghj",
        "estimate": 15,
        "done": false,
        "created_at": "2012-03-03"},
    {
        "name": "ghfg",
        "estimate": 16,
        "done": false,
        "created_at": "2012-01-03"},
    {
        "name": "iouioiuo",
        "estimate": 17,
        "done": true,
        "created_at": "2012-01-03"},
    {
        "name": "tyutyu",
        "estimate": 18,
        "done": false,
        "created_at": "2012-01-03"},
    {
        "name": "dfdf",
        "estimate": 19,
        "done": true,
        "created_at": "2012-01-03"},
    {
        "name": "vbnvb",
        "estimate": 20,
        "done": false,
        "created_at": "2012-01-03"},
    {
        "name": "fgfg",
        "estimate": 201,
        "done": false,
        "created_at": "2012-05-03"},
    {
        "name": "asdfasfd",
        "estimate": 21,
        "done": false,
        "created_at": "2012-01-03"},
    {
        "name": "hjjhjh",
        "estimate": 22,
        "done": false,
        "created_at": "2012-01-03"},
    {
        "name": "ytrt rtyuty rtuy",
        "estimate": 23,
        "done": false,
        "created_at": "2012-01-03"},
    {
        "name": "vbbv ghjghj",
        "estimate": 24,
        "done": false,
        "created_at": "2012-01-03"},
    {
        "name": "ghfg",
        "estimate": 25,
        "done": false,
        "created_at": "2012-01-03"},
    {
        "name": "iouioiuo",
        "estimate": 26,
        "done": true,
        "created_at": "2012-01-03"},
    {
        "name": "tyutyu",
        "estimate": 27,
        "done": false,
        "created_at": "2012-01-03"},
    {
        "name": "dfdf",
        "estimate": 28,
        "done": true,
        "created_at": "2012-01-03"},
    {
        "name": "vbnvb",
        "estimate": 29,
        "done": false,
        "created_at": "2012-01-03"},
    {
        "name": "fgfg",
        "estimate": 299,
        "done": false,
        "created_at": "2012-01-03"},
    {
        "name": "asdfasfd",
        "estimate": 30,
        "done": false,
        "created_at": "2012-01-03"},
    {
        "name": "hjjhjh",
        "estimate": 31,
        "done": false,
        "created_at": "2012-01-03"},
    {
        "name": "ytrt ry rtuy",
        "estimate": 32,
        "done": false,
        "created_at": "2012-01-03"},
    {
        "name": "vbbv ghjghj",
        "estimate": 33,
        "done": false,
        "created_at": "2012-01-03"},
    {
        "name": "ghfg",
        "estimate": 34,
        "done": false,
        "created_at": "2012-01-03"},
    {
        "name": "iouioiuo",
        "estimate": 35,
        "done": true,
        "created_at": "2012-01-03"},
    {
        "name": "tyutyu",
        "estimate": 36,
        "done": false,
        "created_at": "2012-01-03"},
    {
        "name": "dfdf",
        "estimate": 37,
        "done": true,
        "created_at": "2012-01-03"},
    {
        "name": "kjhkh",
        "estimate": 38,
        "done": false,
        "created_at": "2012-01-03"},
    {
        "name": "kjhkhj",
        "estimate": 39,
        "done": false,
        "created_at": "2012-01-03"},
    {
        "name": "jkhkhk",
        "estimate": 40,
        "done": false,
        "created_at": "2012-01-03"},
    {
        "name": "final",
        "estimate": 41,
        "done": false,
        "created_at": "2012-01-03"}
    ];
});