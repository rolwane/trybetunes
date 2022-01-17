import React, { Component } from 'react';
import { getFavoriteSongs } from '../../services/favoriteSongsAPI';

// imported components
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import MusicCard from '../../components/MusicCard';

class Favorites extends Component {
  constructor() {
    super();

    this.state = {
      songs: [],
      isLoadingVisible: true,
    };
  }

  componentDidMount() {
    this.loadFavoriteSongs();
  }

  loadFavoriteSongs = () => {
    getFavoriteSongs().then((response) => {
      this.setState({ songs: response, isLoadingVisible: false });
    });
  }

  refrash = (id) => {
    const { songs } = this.state;
    const attSongs = songs.filter((song) => song.trackId !== id);
    this.setState({ songs: attSongs });
  }

  render() {
    const { songs, isLoadingVisible } = this.state;

    return (
      <div data-testid="page-favorites">
        <Header active="favorites" />

        {isLoadingVisible ? <Loading /> : (
          songs.map((song) => (
            <MusicCard
              data={ song }
              key={ song.trackId }
              onRemove={ this.refrash }
              favorite
            />
          ))
        )}
      </div>
    );
  }
}

export default Favorites;
