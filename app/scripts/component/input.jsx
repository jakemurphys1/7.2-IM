var React = require("react");
var ReactDOM = require("react");
var Backbone = require("backbone");
var $ = require("jquery")

var InputList = React.createClass({
  handleChange:function(){

  },
  handleSubmit:function(e){
    e.preventDefault();
      var addNew = {"Message":$("#InputHere").val(),"Time":Date.now()}
      //this.props.collection.create(addNew)

  },
  render:function(){
      var allMessages= this.props.collection.map(function(model){
        return <MessageItem model = {model} key={model.get("Time")}/>
      });
      console.log(allMessages)
      return(
    <div className="all">
        <h1>JakeChat</h1>
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
  console.log("got here")
return(<li>hi{this.props.model.get("Message")}</li>)
}
})

module.exports=InputList;
