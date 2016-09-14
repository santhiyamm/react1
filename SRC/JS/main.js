var React=require('react');
var ReactDOM= require('react-dom');

var Child=require('./COMPONENT/Child.js');
var Child2=require('./COMPONENT/Child2.js');

var MainComponent=React.createClass({

  getInitialState: function()
  {
    return ({
      stateData:'State data'
    })
  },

  handleClick : function(inStateData)
  {
    this.setState({stateData:inStateData});
  },

  render: function() {
    return (<div>
     <h2> Hello from React</h2>

     <Child data1={this.handleClick} />
     <Child2 data11={this.state.stateData}/>


     </div>)
  }



})
ReactDOM.render(<MainComponent />, document.getElementById('app'));
