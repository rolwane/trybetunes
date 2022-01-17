import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../services/userAPI';

// imported components
import Header from '../../components/Header';
import Loading from '../../components/Loading';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      userData: {},
      isLoadingVisible: true,
    };
  }

  componentDidMount() {
    getUser().then((userData) => {
      this.setState({ userData, isLoadingVisible: false });
    });
  }

  render() {
    const { userData, isLoadingVisible } = this.state;
    const { name, email, description, image } = userData;

    return (
      <div data-testid="page-profile">
        <Header active="profile" />
        {
          isLoadingVisible ? <Loading /> : (
            <section className="profile-infos">
              <img src={ image } alt="profile" data-testid="profile-image" />
              <Link to="/profile/edit">Editar perfil</Link>
              <p>{name}</p>
              <p>{email}</p>
              <p>{description}</p>
            </section>
          )
        }
      </div>
    );
  }
}

export default Profile;
