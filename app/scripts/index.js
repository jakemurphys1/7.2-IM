var React = require("react");
var ReactDOM = require("react");
var Backbone = require("backbone");
var $ = require("jquery")
require("backbone-react-component");

var TheInput = require("./component/input.jsx")
var Model=require("./model/model.js");

var UserForm = require("./component/username.jsx");

var myCollection = new Model.ModelCollection();
var myModel = new Model.Model();
var UserModel= new Model.UserModel();
var UserModelCollection= new Model.UserModelCollection();

  myCollection.fetch();
setInterval(function(){
  myCollection.fetch();
},30000)


//ReactDOM.render(<TheInput collection={myCollection} model={myModel}/>,document.getElementById("container"))
ReactDOM.render(<UserForm collection={UserModelCollection} model={UserModel}/>,document.getElementById("container"))
