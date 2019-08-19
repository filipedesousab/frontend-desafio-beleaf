import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  FadeSpinner,
  Label,
  Input,
} from 'common/ui-elements';

class NavMenuComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: '',
      name: '',
      username: '',
      password: '',
      errorName: false,
      errorUsername: false,
      errorPassword: false,
      loading: false,
    };
  }

  componentDidMount() {
    const body = document.querySelector('body');
    const toggle = document.querySelector('.navbar-custom-menu a.dropdown-toggle');

    body.addEventListener('click', () => {
      if (this.state.open === 'open') this.setState({ open: '' });
    }, false);

    toggle.addEventListener('click', e => e.preventDefault(), false);
  }

  renderBody() {
    const { user } = this.props;
    const {
      name,
      username,
      password,
      errorName,
      errorUsername,
      errorPassword,
    } = this.state;

    if (!user.id) {
      return (
        <li className="user-body">
          <Input
            label={<Label>Usuário</Label>}
            value={username}
            onChange={e => this.setState({ username: e.target.value })}
            state={errorUsername ? 'error' : null}
          />
          <Input
            label={<Label>Senha</Label>}
            type="password"
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            state={errorPassword ? 'error' : null}
          />
          <p>E o nome completo se for se registrar</p>
          <Input
            label={<Label>Nome completo</Label>}
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
            state={errorName ? 'error' : null}
          />
        </li>
      );
    }

    return null;
  }

  renderFooter() {
    const { user, login, logout, register } = this.props;
    const { name, username, password } = this.state;

    return (
      <li className="user-footer">
        {!user.id && (
          <div className="pull-left">
            <Button
              color="primary"
              onClick={() => {
                this.setState({ loading: true });

                if (name === '' || username === '' || password === '') {
                  this.setState({
                    errorName: name === '',
                    errorUsername: username === '',
                    errorPassword: password === '',
                  });
                  this.setState({ loading: false });
                } else {
                  register(
                    { name, username, password },
                    () => this.setState({ loading: false }),
                  );
                }
              }}
            >
              <Label>Registrar</Label>
            </Button>
          </div>
        )}
        <div className="pull-right">
          {user.id ? (
            <Button
              color="danger"
              onClick={() => {
                this.setState({ loading: true });

                logout(() => this.setState({ loading: false }));
              }}
            >
              <Label>Sair</Label>
            </Button>
          ) : (
            <Button
              color="success"
              onClick={() => {
                this.setState({ loading: true });

                if (username === '' || password === '') {
                  this.setState({
                    errorName: false,
                    errorUsername: username === '',
                    errorPassword: password === '',
                  });
                  this.setState({ loading: false });
                } else {
                  login(
                    { username, password },
                    () => this.setState({ loading: false }),
                  );
                }
              }}
            >
              <Label>Entrar</Label>
            </Button>
          )}
        </div>
      </li>
    );
  }

  render() {
    const { user } = this.props;
    const { loading, open } = this.state;

    return (
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          <li
            className={`dropdown user user-menu ${open}`}
            onClick={() => this.setState({ open: 'open' })}
          >
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
              <span>
                <font style={{ verticalAlign: 'inherit' }}>
                  <font style={{ verticalAlign: 'inherit' }}>
                    {user.id ? user.name : 'Login'}
                  </font>
                </font>
              </span>
            </a>
            <ul className="user-dropdown-menu dropdown-menu">
              <li className="user-header" style={{ height: 'unset' }}>
                <p>
                  <font style={{ verticalAlign: 'inherit' }}>
                    <font style={{ verticalAlign: 'inherit' }}>
                      {user.id ? `Bem-vindo ${user.name}` : 'Efetuar login'}
                    </font>
                  </font>
                </p>
              </li>
              {this.renderBody()}
              {this.renderFooter()}
            </ul>
          </li>
        </ul>
        {loading && <FadeSpinner />}
      </div>
    );
  }
}

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
NavMenuComponent.propTypes = {
  user: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

export default NavMenuComponent;
