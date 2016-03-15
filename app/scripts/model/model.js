var React = require("react");
var ReactDOM = require("react");
var Backbone = require("backbone");
var $ = require("jquery")

var Model = Backbone.Model.extend({
urlRoot:"http://tiny-lasagna-server.herokuapp.com/collections/messages-Jake",
});

var ModelCollection = Backbone.Collection.extend({
  model:Model,
  url:"http://tiny-lasagna-server.herokuapp.com/collections/messages-Jake",
});

module.exports={
  "Model":Model,
  "ModelCollection":ModelCollection
};
