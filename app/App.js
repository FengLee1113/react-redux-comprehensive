import React, {Component} from 'react'
import actions from '../lib/redux/action'
import {connect} from 'react-redux'
class App extends Component{
  componentDidMount(){
    this.props.init()
  }
  render(){
    let {count, onIncrease} = this.props
    return(
      <div>
        {count}
        <button onClick={()=>{onIncrease(count)}}>增加</button>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return{
    count: state.counter.count
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    init: ()=>{
      dispatch(actions.setCounter('count', 1))
    },
    onIncrease: (count) => {
      count++
      dispatch(actions.setCounter('count', count))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
