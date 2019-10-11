import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import $ from 'jquery';
import './Form.scss'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quote: '',
      rank: ''
    };
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    const isNameGood = $('#form__first-name').val() !== '';
    const isQuoteGood = $('#form__fav-quote').val() !== '';
    const isRankGood = $('select').val() !== 'Rank';

    if(isNameGood && isQuoteGood && isRankGood) {
      $('button').prop('disabled', false);
    } else {
      $('button').prop('disabled', true);
    }
  }

  submitUserInfo = () => {
    const name = $('#form__first-name').val();
    const quote = $('#form__fav-quote').val();
    const rank = $('select').val();
    this.props.updateState({name, quote, rank});
  }

  render() {
    return(
      <div id="form__div--container">
      <form>
        <input
          id="form__first-name" 
          className="form__element form__input"
          type="text" 
          placeholder="Enter Name"
          value={ this.state.name }
          name="name"
          onChange={this.handleChange}
          />
        <input 
          id="form__fav-quote"
          className="form__element from__input"
          type="text" 
          placeholder="Enter Favorite Star Wars Quote"
          value={ this.state.quote }
          name="quote"
          onChange={this.handleChange}
          />
        <select className="form__element" name="rank" value={this.state.rank} onChange={this.handleChange}>
          <option defaultValue="rank">Rank</option>
          <option name="rank" value="beginner">Beginner</option>
          <option name="rank" value="intermediate">Intermediate</option>
          <option name="rank" value="expert">Expert</option>
        </select>
        <NavLink className="form__button--link" to='/movies'>
        <button 
          className="form__button" 
          onClick={this.submitUserInfo}  
        >
        Submit</button>
        </NavLink>
      </form>
      </div>
    )
  };
};