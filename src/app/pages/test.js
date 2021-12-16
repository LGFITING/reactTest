// 练习专用
import React from 'react';
import ReactDOM from 'react-dom';
import '../../static/css/test.css'

//给组件传样式
function CssPost(props) {
  return(
    <div style={{'color': props.color}}>给组件传递字体颜色变量</div>
  )
}

// 列表渲染+点击事件
function List() {
  const arr = ['list-1','list-2','list-3']
  function getListContent(item){
    console.log(item)
  }
  return (
     <ul>{arr.map(item=><li onClick={getListContent.bind(this,item)} className='li-style' key={item}>{item}</li>)}</ul>
  )
}

// 类名组件
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    let html = <div>类名式组件: {this.state.date.toLocaleTimeString()}</div>
    return html
  }
}
function Test() {
  const textColor = '#315efb'
  return (
    <>
      <div className='title'>测试专用组件</div>
      <CssPost color={textColor} />
      <List />
      <ClassComponent />
    </>
  )
}
export default Test;