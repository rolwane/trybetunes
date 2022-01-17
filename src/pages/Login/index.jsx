import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../../services/userAPI';
import { MIN_LENGTH } from '../../lib/constants';

import logo from '../../images/logo-w.png';
import './styles.css';

// imported components
import Loading from '../../components/Loading';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      isButtonDisabled: true,
      isLoadingVisible: false,
      isLogged: false,
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      input: value,
      isButtonDisabled: value.length < MIN_LENGTH,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { input: name } = this.state;

    this.setState({ isLoadingVisible: true });

    createUser({ name }).then(() => {
      this.setState({ isLoadingVisible: false, isLogged: true });
    });
  }

  render() {
    const { input, isButtonDisabled, isLoadingVisible, isLogged } = this.state;

    return (
      <section data-testid="page-login" className="section-login">
        <img src={ logo } alt="trybetunes-logo" />

        <form onSubmit={ this.handleSubmit } className="form-login">

          <input
            type="text"
            data-testid="login-name-input"
            placeholder="Your name"
            value={ input }
            onChange={ this.handleChange }
          />

          <button
            type="submit"
            data-testid="login-submit-button"
            disabled={ isButtonDisabled }
          >
            {(isLoadingVisible && <Loading />) || 'Entrar'}
          </button>

        </form>

        {isLogged && <Redirect to="/search" />}
      </section>
    );
  }
}

export default Login;
