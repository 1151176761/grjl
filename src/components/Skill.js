import React from 'react'
class Skill extends React.Component{
  render(){
    return (
    <div className="skill">
      <div className="jineng">
      <h2 className="biaoti">{this.props.qiuy.title}</h2>
      {this.props.qiuy.detail.map(e=><p className="jinenga" key={e}>{e}</p>
    )}
     </div>
   </div>
    )
  }
}
export default Skill
