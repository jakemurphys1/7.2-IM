var React = require("react");
var ReactDOM = require("react");
var Backbone = require("backbone");
var $ = require("jquery")
var Input = require("react-bootstrap/lib/Input")

var InputList = React.createClass({
  mixins:[Backbone.React.Component.mixin],

  IsValidImageUrl:function(url) {
    var result =true;
    $("<img>", {
        src: url,
        error: function() {console.log("hi"); result = false},
        load: function() {console.log("hi");  result = true}
    });
    return result;
},
componentDidMount:function(){
  var thiscollection = this.props.collection;
  setInterval(function(){
  this.props.collection.fetch();
  }.bind(this),3000)
},
  handleSubmit:function(e){
    e.preventDefault();
// var message = $("#InputHere").val();
// var isImage=false;
// var firstLetters = message.substring(0,6)

  //if(firstLetters=="https:"){
      // var isImage = this.IsValidImageUrl(message)
      // console.log(isImage)
  //}
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  if(dd<10){
      dd='0'+dd
  }
  if(mm<10){
      mm='0'+mm
  }
  today = mm+'/'+dd+'/'+yyyy;

      var addNew = {"content":$("#InputHere").val(),"time":today,"username":this.props.CurrentUser}
      this.props.collection.create(addNew)
      $("#InputHere").val("");
  },
  render:function(){


      var allMessages= this.props.collection.map(function(model){
        if(model.get("content")==undefined){

        }else{
          return (<li className = "allMessages">{model.get("content")} - written by {model.get("username")} on {model.get("time")}</li>)
        }


      });
      allMessages=allMessages.reverse();

      var curUser = localStorage.getItem("UserName");
      return(
            <div className="all">
                  <h1>JakeChat</h1>
                  <h2>User: {curUser}</h2>
                <div id="textContainer">
                  <ul className = "allMessages">
                    {allMessages}
                  </ul>
                </div>
                  <div id="formContainer">
                    <form onSubmit={this.handleSubmit}>
                        <input type = "text" id="InputHere" onChange ={this.handleChange} placeholder="Enter Message"/>
                        <button className = "btn btn-primary">Send</button>
                    </form>
                  </div>
            </div>
            )

  },
})



var MessageItem = React.createClass({
render:function(){
return(<li>hi{this.props.model.get("content")}</li>)
}
})

module.exports=InputList;
