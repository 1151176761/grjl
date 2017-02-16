import React from 'react'
class Xiangmu extends React.Component{
  render(){
    return (
      <div className="xiangmu">
        <div className="xiangmua">
        <h2>{this.props.bbb.title}</h2>
        {this.props.bbb.detail.map((e,i)=>{
        return (
          <div className="xiangmub">
             <p key={i.a}>{e.a}</p>
             <p key={i.b}>{e.b}</p>
             <p key={i.c}>{e.c}</p>
          </div>
        )
       })}
      </div>
    </div>
  )
  }
}
export default Xiangmu
