import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Form.scss';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quote: '',
      rank: '',
      isComplete: false,
    };
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    const isNameGood = this.state.name !== '';
    const isQuoteGood = this.state.quote !== '';
    const isRankGood = this.state.rank !== 'Rank';


    if(isNameGood && isQuoteGood && isRankGood) {
      this.setState({ isComplete: true })
    } else {
      this.setState({ isComplete: false })
    };
  };

  submitUserInfo = () => {
    const name = `Name: ${this.state.name}`;
    const quote = `Quote: ${this.state.quote}`;
    const rank = `Rank: ${this.state.rank}`;
    this.props.updateState({name, quote, rank});
  };

  render() {
    return(
      <div id="form__div--container">
      <h1 className="form-title">Star Wars: Trivia</h1>
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
          <option name="rank" value="Beginner">Beginner</option>
          <option name="rank" value="Intermediate">Intermediate</option>
          <option name="rank" value="Expert">Expert</option>
        </select>
        <Link className="form__button--link" to='/movies'>
          {!this.state.isComplete && <button 
            className="form__button" 
            disabled  
          >Submit</button>}
          {this.state.isComplete && <button
            className="form__button"
            onClick={this.submitUserInfo}
          >Submit</button>}
        </Link>
      </form>
      </div>
    )
  };
};

Form.propTypes = {
  movies: PropTypes.array,
  handleChange: PropTypes.func,
  submitUserInfo: PropTypes.func
};

export default Form;