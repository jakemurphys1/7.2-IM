var React = require("react");
var ReactDOM = require("react");
var Backbone = require("backbone");
var $ = require("jquery")

var TheInput = require("./component/input.jsx")

var Model=require("./model/model.js");

var myCollection = new Model.ModelCollection();
var myModel = new Model.Model();


myCollection.fetch();

ReactDOM.render(
  <TheInput collection={myCollection} model={myModel}/>,
  document.getElementById("container")
)
