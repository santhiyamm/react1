var React=require('react');
var GrandChild=require('./GrandChild.js');


var Child2=React.createClass({
  render: function() {
    return (<div>
     <h2> ---Child2 Component--- </h2>
     <h3> {this.props.sdata} </h3>
     <GrandChild data2={this.props.data11} data3='Data from child2 to grandchild' />
     </div>)

  }
})
module.exports=Child2;
