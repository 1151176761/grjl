import React from 'react'
class Pingjia extends React.Component{
  render(){
    return(
      <div className="pingjia">
      <div className="pingjiaa">
        <h2>{this.props.ccc.title}</h2>
         {this.props.ccc.detail.map(e=><p className="pingjiab" key={e}>{e}</p>)}
      </div>
      </div>
    )
   }
}
export default Pingjia
