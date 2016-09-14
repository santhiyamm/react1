var React=require('react');

var GrandChild=React.createClass({
  render: function() {
    return (<div>
     <h2> Grand child component</h2>
     <h3> {this.props.data2} </h3>
     <h3> {this.props.data3} </h3>

     </div>)

  }
})
module.exports=GrandChild;
