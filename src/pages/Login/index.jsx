import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../../services/userAPI';
import { MIN_LENGTH } from '../../lib/constants';

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
    const {
      input, isButtonDisabled, isLoadingVisible, isLogged } = this.state;

    return (
      <div data-testid="page-login">
        <form onSubmit={ this.handleSubmit }>

          <input
            type="text"
            data-testid="login-name-input"
            value={ input }
            onChange={ this.handleChange }
          />

          <button
            type="submit"
            data-testid="login-submit-button"
            disabled={ isButtonDisabled }
          >
            Entrar
          </button>

        </form>
        {isLoadingVisible && <Loading />}
        {isLogged && <Redirect to="/search" />}
      </div>
    );
  }
}

export default Login;
