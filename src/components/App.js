import React from 'react';
import Skill from './Skill';
import Info from './Info';
import Gong from './Gong';
import Item from './Item';
import Xiangmu from './Xiangmu';
import Pingjia from './Pingjia';
require('styles/App.css')
class App extends React.Component{
  constructor(){
    super()
    this.state={
      info: {
        title: "个人信息",
        detail: ["姓名：胡斌",
          "年龄：23",
            "民族：汉族",
            "现居地：北京",
            "电话：18410316929",
            "政治面貌 : 共青团员",
            "邮箱：1151176761@qq.com",
            "工作经验：二年",
            "籍贯：山西省 吕梁市",
            "学历 : 大专"
        ]
      },
      qiuz: {
        title: "求职意向",
        detail: ["期望职位：WEB前端工程师/HTML5工程师",
          "工作地区：北京",
          "期望月薪：10K-15K元/月",
          "目前状况：刚刚离职，可立即入职"
        ]
      },
      jineng:{
        title:"专业技能",
        detail:["1.掌握JavaScript语言,对CSS,HTML,JS的优化有一定的研究和了解，对前端技术保持跟踪和学习研究的态度；",
      "2.熟悉WEB标准化和http协议，能够熟练运用DIV+CSS、CSS3、HTML5、JQuery、Ajax、Json等技术来完成PC端布局及交互效果；",
      "3.熟悉H5，CSS3新特性，掌握rem布局，能够熟练运用HTML5技术搭建移动端页面，并且熟练解决适配等问题。",
      "4.熟悉媒体查询，了解Bootstrap框架，能够制作符合规范的响应式网站；",
      "5.熟悉AngularJS，VueJS等MVC框架，了解SUI具备一定的设计基础，偏好简约风格；",
      "7.熟练使用Photoshop、Atom、HBuilder、Sublime Text等常用网页制作软件；",
      "8.优秀的沟通、协调能力，掌握SVN使用流程，熟悉GIT，GRUNT，能够多人协同开发；",
      "9.对网页交互体验、可用性、用户体验有一定程度的理解，对先进技术有很好的敏感度。"
    ]
      },
      xiangmu:{
        title:"项目经验",
        detail:[{a:"天天超市",
                 b:"项目描述：该项目为移动端电商类的购物网站",
                 c:"项目职责：1.进行移动端页面书写HTML5+CSS3+Js 实现交互效果 终端兼容性 2.网站的页面制作 / 网页动态效果的实现 / 该项目CSS 开发规范与约束的编写/json后台数据的调取。"},
                {a:"蓝铅笔（http://www.lanqb.com/）",
                 b:"项目描述：蓝铅笔是一个从事艺术绘画设计的网站，主要运用Html5，Css3，jQuery，Swiper，Jquery.lazyload.js，媒体查询等技术，支持多终端访问浏览。",
                 c:"项目职责：1.参与该项目前端页面HTML5+CSS3的编写以及一些动态效果的添加。2.和后台协商接口文档，使用AJAX实现页面内容的动态添加。3.对页面交互体验提出建设性建议."},
                 {a:"提分宝（http://www.tifenbao.net/）",
                  b:"项目描述：该项目是一个从事于针对中小学学生和家长的线上线下家教服务的网站，主要运用Html5，Css3，jQuery，jQuery-UI..JS，jQuery.fullPage.JS实现。",
                  c:"项目职责：1.网站首页的页面HTML5+CSS3+JS布局排版。2.页面的静态特效，对CSS3部分特性的学习研究和使用。"}
        ]
      },
      ping:{
        title:"自我评价",
        detail:["1.熟练掌握前端的开发技术，具有团队合作意识，能够吃苦耐劳，能和客户保持良性关系。",
          "2.具备项目经验，了解工作流程，可以做到有效简洁的工作沟通，对工作认真负责,服从管理。",
          "3.学习能力强，喜欢关注前端技术公众号和博客（CSDN,前端大全等），不断学习及研究，渴望进步。",
          "4.喜欢运动，喜欢大脑思维处于灵敏活跃状态."
        ]
      }
    }
  }
  render(){
    return(
      <div>
      <Item />
      <div className="content">
        <div className="content-l">
            <div className="content-ll">
            </div>
        </div>
      <div className="content-y">
      <Info aaa={this.state.info} />
      <Skill qiuy={this.state.qiuz} />
      <Skill qiuy={this.state.jineng} />
      <Gong />
      <Xiangmu bbb={this.state.xiangmu} />
      <Pingjia ccc={this.state.ping} />
       </div>
      </div>
    </div>
  )
 }
}
export default App;
