import React from 'react'
class Info extends React.Component{
  render(){
    return (
      <div className="gerena">
        <div className="gerenb">
       <h2>{this.props.aaa.title}</h2>
       <ul className="geren">{this.props.aaa.detail.map(e=><li key={e}>{e}</li>
       )}</ul>
       </div>
      </div>
      )
    }
  }
export default Info
