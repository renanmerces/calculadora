
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Button from './src/components/Button'
import Display from './src/components/Display'

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

export default class App extends Component {

  state = { ...initialState }
  
  addDigito = digito => {
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay 

    if(digito === '.' && !clearDisplay && this.state.displayValue.includes('.'))
      return 

    const currentValue = clearDisplay ? '' : this.state.displayValue 
    const displayValue = currentValue + digito 

    this.setState({displayValue, clearDisplay: false})

    if(digito !== '.'){
      const values = [...this.state.values]
      const newValue = parseFloat(displayValue)
      values[this.state.current] = newValue
      this.setState({values})
    }
  }    
  
  clearDisplay = () =>
    this.setState({ ...initialState })  

  setOperation = operation => {

    if(this.state.current === 0){
      this.setState(({operation, current: 1, clearDisplay: true}))
    } else{
      const equals = operation === '=' 
      const values = [...this.state.values] 

      try{
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`) 
      } 
      catch{
        values[0] = this.state.values[0]
      }

      values[1] = 0
      this.setState({
        displayValue: `${values[0]}`,  
        clearDisplay: !equals, 
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        values
      })

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue}></Display>
        <View style={styles.buttons}>
          <Button label='AC' clear onClick={this.clearDisplay}></Button>
          <Button label='/' operation onClick={() => this.setOperation('/')}></Button>
          <Button label='7' onClick={() => this.addDigito(7)}></Button>
          <Button label='8' onClick={() => this.addDigito(8)}></Button>
          <Button label='9' onClick={() => this.addDigito(9)}></Button>
          <Button label='*' operation onClick={() => this.setOperation('*')}></Button>
          <Button label='4' onClick={() => this.addDigito(4)}></Button>
          <Button label='5' onClick={() => this.addDigito(5)}></Button>
          <Button label='6' onClick={() => this.addDigito(6)}></Button>
          <Button label='+' operation onClick={() => this.setOperation('+')}></Button>
          <Button label='1' onClick={() => this.addDigito(1)}></Button>
          <Button label='2' onClick={() => this.addDigito(2)}></Button>
          <Button label='3' onClick={() => this.addDigito(3)}></Button>
          <Button label='-' operation onClick={() => this.setOperation('-')}></Button>
          <Button label='0' zero onClick={() => this.addDigito(0)}></Button>
          <Button label='.' onClick={() => this.addDigito('.')}></Button>
          <Button label='=' operation onClick={() => this.setOperation('=')}></Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons:{
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
