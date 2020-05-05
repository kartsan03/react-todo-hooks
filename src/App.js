import React from 'react'

class App extends React.Component {
  state = {
    todo: 
      {
        text: 'learn react',
        completed: false
      }
  }

  onChangeText = (event) => {
    this.setState({
      todo: {
        ...this.state.todo, text: event.target.value 
      }
    })
  }

  onChangeCheckbox = () => {
    this.setState({
      todo: {
        ...this.state.todo, completed: !this.state.todo.completed
      }
    })
  }
  

  render() {
    return (
      <>
        <input 
        type="text"
        value={this.state.todo.text}
        onChange={this.onChangeText}
        style={{
          textDecoration: this.state.todo.completed ? 'line-through' : 'none'
        }}
        disabled={
          this.state.todo.completed === true
        }
        />
        <input
        type="checkbox"
        value={this.state.todo.completed}
        onChange={this.onChangeCheckbox}
        disabled={
          this.state.todo.text === ''
        }
        /> 
     </>
    );
  }
}




export default App
