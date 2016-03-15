var React = require("react");
var ReactDOM = require("react");
var Backbone = require("backbone");
var $ = require("jquery")

var Model = Backbone.Model.extend({
urlRoot:"http://tiny-lasagna-server.herokuapp.com/collections/messages-Jake",
   idAttribute: "_id",
});

var ModelCollection = Backbone.Collection.extend({
  model:Model,
  url:"http://tiny-lasagna-server.herokuapp.com/collections/messages-Jake",
});

var UserModel = Backbone.Model.extend({
  urlRoot:"http://tiny-lasagna-server.herokuapp.com/collections/messages-Jake-Username",
     idAttribute: "_id",
});

var UserModelCollection = Backbone.Collection.extend({
  model:UserModel,
  url:"http://tiny-lasagna-server.herokuapp.com/collections/messages-Jake-Username",
})

module.exports={
  "Model":Model,
  "ModelCollection":ModelCollection,
  "UserModel":UserModel,
  "UserModelCollection":UserModelCollection,
};
