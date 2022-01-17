import React, { Component } from 'react';
import propTypes from 'prop-types';
import { addSong, removeSong } from '../../services/favoriteSongsAPI';
import Loading from '../Loading';

class MusicCard extends Component {
  constructor() {
    super();

    this.state = {
      isFavorite: false,
      isLoadingVisible: false,
    };
  }

  componentDidMount() {
    this.checkIsFavorite();
  }

  handleChange = ({ target: { checked } }, data) => {
    this.setState({ isFavorite: checked });
    this.setState({ isLoadingVisible: true });
    const { onRemove } = this.props;

    if (checked) {
      addSong(data).then(() => this.setState({ isLoadingVisible: false }));
    } else {
      removeSong(data).then(() => {
        this.setState({ isLoadingVisible: false }, () => {
          if (onRemove) onRemove(data.trackId);
        });
      });
    }
  }

  checkIsFavorite = () => {
    const { favorite: isFavorite } = this.props;
    this.setState({ isFavorite });
  }

  render() {
    const { isFavorite, isLoadingVisible } = this.state;
    const { data } = this.props;
    const {
      trackId,
      trackName,
      previewUrl,
    } = data;

    return (
      <section className="music-card">
        <h4 className="track-name">{trackName}</h4>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento audio.
        </audio>
        {
          isLoadingVisible ? <Loading /> : (
            <label htmlFor={ trackId }>
              <input
                type="checkbox"
                data-testid={ `checkbox-music-${trackId}` }
                id={ trackId }
                checked={ isFavorite }
                onChange={ (event) => this.handleChange(event, data) }
              />
              Favorita
            </label>
          )
        }
      </section>
    );
  }
}

export default MusicCard;

MusicCard.propTypes = {
  trackName: propTypes.string,
  previewUrl: propTypes.string,
}.isRequired;
