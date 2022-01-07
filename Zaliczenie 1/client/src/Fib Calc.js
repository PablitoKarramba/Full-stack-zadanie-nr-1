import React, { Component } from 'react';
import './Fib.css';
import axios from 'axios';

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: '',
    answear: ''
  };

  componentDidMount() {
    this.fetchValues();
   
  }

  async fetchValues() {
    const values = await axios.get('/api/values/current');
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get('/api/values/all');
    this.setState({
      seenIndexes: seenIndexes.data,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    
    //walidacja wartosci k (k>20)=false
    if(parseInt(this.state.index)<0 || parseInt(this.state.index)>20){
      this.setState({answear:"Dopuszczalny zakres wartosci k: <0;20>"})
    }
    else if(isNaN(this.state.index)){
      this.setState({answear:"Podano niepoprawny znak!"})
    }
    else{
      await axios.post('/api/values', {
        index: this.state.index,
      });
      this.setState({answear:'Poprawnie obliczono wartosc'})
      this.setState({ index: '' });
      await this.fetchValues();
    }
  };

  handleHistory = async (event)=> {
    event.preventDefault();
    await this.fetchIndexes();
  };

  renderSeenIndexes() {
    return this.state.seenIndexes.map(({ number }) => number).join(', ');
  }

  renderValues() {
    const entries = [];

    for (let key in this.state.values) {
      entries.push(
        <table>
          <tr>
            <div key={key}>
              Wyliczona wartosc <b>{key}</b>-tego elementu ciagu Fibonacciego to: <b>{this.state.values[key]}</b>
            </div>
          </tr>
        </table>
      );
    }

    return entries;
  }

  renderAnswear(){
    return this.state.answear;
  }

  render() {
    return (
      <div>
        <fieldset name="f1">
          <form onSubmit={this.handleSubmit}>
            <label><h3>Podaj k-ty element, ktory chcesz otrzymac:</h3></label>
            <br/>
            <input
              value={this.state.index}
              onChange={(event) => this.setState({ index: event.target.value })}>
            </input>
            <button type="submit">Oblicz</button>
          </form>
          <br/>
          {this.renderAnswear()}
        </fieldset>
        
        <fieldset name="f2">
          <br/>
          <form onSubmit={this.handleHistory}> 
          <h3>Wyswietl 10 ostatnich wartosci k</h3>
            <button type="submit">Historia</button>
          </form>
          <br/>
          {this.renderSeenIndexes()}
        </fieldset>

        <fieldset name="f3">
        <h3>Obliczone elementy ciagu Fibonacciego:</h3>
        {this.renderValues()}
        </fieldset>
      </div>
      
    );
  }
}

export default Fib;
