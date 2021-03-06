import React, { Component } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import PropTypes from 'prop-types';
import './FavoriteCharactersContainer.scss';
import { Link } from 'react-router-dom';
import backImage from '../../images/back.png';
import './FavoriteCharactersContainer.scss'

class FavoriteCharactersContainer extends Component {

  displayFavoriteCharacters = () => {
    return this.props.characters.map( (character, i) => 
      <CharacterCard 
        character={character} 
        updateFavorite={this.props.updateFavorite} 
        key={i} 
      />)
  };

  render() {
    const favoriteCharacters = this.displayFavoriteCharacters();
    const hasFavChars = favoriteCharacters.length > 0;
    const display = hasFavChars ? favoriteCharacters : <h1>No Favorite Characters</h1>;
    
    return (
      <section id="favorite-characters">
         <h1 className="fav_character-title">Favorite Characters</h1>
         <Link to='/movies'>
          <img className="button__back" src={backImage} alt="back button"/>
        </Link>
        {display}
      </section>
    );
  };
};

FavoriteCharactersContainer.propTypes = {
  characters: PropTypes.array,
  updateFavorite: PropTypes.func
};

export default FavoriteCharactersContainer;