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
      username: '',
      password: '',
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

    if (!user.id) {
      return (
        <li className="user-body">
          <Input
            label={<Label>Usuário</Label>}
            onChange={e => this.setState({ username: e.target.value })}
          />
          <Input
            label={<Label>Senha</Label>}
            type="password"
            onChange={e => this.setState({ password: e.target.value })}
          />
        </li>
      )
    }
  }

  renderFooter() {
    const { user, login, logout } = this.props;
    const { username, password } = this.state;

    return (
      <li className="user-footer">
        <div className="pull-right">
          {user.id ? (
            <Button
              onClick={() => {
                this.setState({ loading: true });

                logout(() => this.setState({ loading: false }));
              }}
            >
              <Label>Sair</Label>
            </Button>
          ) : (
            <Button
              onClick={() => {
                this.setState({ loading: true });

                login(
                  { username, password },
                  () => this.setState({ loading: false }),
                );
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
              <span className="hidden-xs">
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
};

export default NavMenuComponent;
