var React = require("react");
var ReactDOM = require("react");
var Backbone = require("backbone");
var $ = require("jquery")

var Router = Backbone.Router.extend({
  routes:{
    "":"index",
    "CreateUser":"CreateUser",
    "SignIn(/:username)":"SignIn",
    "Chat":"Chat",
  },
})

Backbone.history.start();
