var React = require("react");
var ReactDOM = require("react");
var Backbone = require("backbone");
var $ = require("jquery")
var Input = require("react-bootstrap/lib/Input")

var InputList = React.createClass({
  mixins:[Backbone.React.Component.mixin],
  handleChange:function(){

  },
  handleSubmit:function(e){
    e.preventDefault();
      var addNew = {"Message":$("#InputHere").val(),"Time":Date.now(),"Username":this.props.CurrentUser}
      this.props.collection.create(addNew)
  },
  render:function(){


      var allMessages= this.props.collection.map(function(model){
        return (<li>{model.get("Message")}</li>)
      });
      allMessages=allMessages.reverse();
      return(
            <div className="all">
                  <h1>JakeChat</h1>
                  <h2>{this.props.CurrentUser}</h2>
                <div id="textContainer">
                  <ul>
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
return(<li>hi{this.props.model.get("Message")}</li>)
}
})

module.exports=InputList;
