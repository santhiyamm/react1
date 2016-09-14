var React=require('react');
var GrandChild=require('./GrandChild.js');


var Child=React.createClass({

  handleClick: function(){
    {this.props.data1("New state data")}
  },
  render: function() {
    return (<div>
     <h2> ---Child Component--- </h2>
     <h3> {this.props.data1} </h3>
     <GrandChild data2={this.props.data1} data3='Data from child to grandchild' />
     <button onClick={this.handleClick}> Click here </button>


     </div>)

  }
})
module.exports=Child;
