var React = require("react");
var ReactDOM = require("react");
var Backbone = require("backbone");
var $ = require("jquery");
var Input = require("react-bootstrap/lib/Input");

//local
var TheInput = require("./input.jsx")
var Model=require("../model/model.js");
var myCollection = new Model.ModelCollection();
var myModel = new Model.Model();



var UserForm = React.createClass({
  handleLogin:function(){
    ReactDOM.render(<LogForm collection={this.props.collection} />,document.getElementById("container"))
  },
  handleSubmit:function(e){
    e.preventDefault();
    if($("#NameHere").val()==""){
      console.log("Nothing")
      return;
    }
    var thisname = {name:$("#NameHere").val(),username:$("#UsernameHere").val(),password:$("#PasswordHere").val()}
    this.props.collection.create(thisname);
  },
  render: function(){
    return(
      <div className="Signin">
      <form>
        <label>Create a new Username</label>
          <input type = "text" id="NameHere" placeholder="Name"/>
          <input type = "text" id="UsernameHere" placeholder="UserName"/>
          <input type = "text" id="PasswordHere" placeholder="Password"/>
      </form>
      <div><button onClick={this.handleSubmit} className = "btn btn-primary">Submit</button>
      <button onClick={this.handleLogin} className = "btn btn-secondary">Sign In</button></div>
      </div>
    )
  }
});

var LogForm = React.createClass({
  handleSubmit:function(e){
    e.preventDefault();
    var CurUsername = $("#UsernameHere").val();
    var CurPassword = $("#PasswordHere").val();
    var passwordPasses = false;
    var thisCollection = this.props.collection;
      this.props.collection.fetch().done(function(){
        thisCollection.each(function(item){
          if(CurUsername == item.get("username") && CurPassword == item.get("password")){
            if(item.get("username")!=""){
              passwordPasses=true;
            }
          }
        })
            if(passwordPasses==false){
              alert("You used the wrong password!")
            } else{
              myCollection.fetch();
              ReactDOM.render(<TheInput CurrentUser={CurUsername} collection={myCollection} model={myModel}/>,document.getElementById("container"))
            }
      })
  },
    render:function(){
        return(
          <div className="Login">
          <label>Sign In</label>
          <form onSubmit={this.handleSubmit}>
              <input type = "text" id="UsernameHere" placeholder="UserName"/>
              <input type = "text" id="PasswordHere" placeholder="Password"/>
              <button className = "btn btn-primary">Log In</button>
          </form>
          </div>
        )
    },
})

module.exports=UserForm;
