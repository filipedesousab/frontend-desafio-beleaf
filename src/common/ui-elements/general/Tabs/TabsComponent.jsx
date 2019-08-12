import React from 'react';
import PropTypes from 'prop-types';
import genHash from 'random-hash';
import { Tabs } from 'react-bootstrap';

import { Icon, Button, Popover } from 'common/ui-elements';

/**
 * [Tabs, UIE032] Grupo de Abas
 * @param {?string} props.defaultActiveKey Tab a ser aberta por default em Tabs não controladas
 * @param {?string} props.activeKey        Identificação da Tab atual aberta, para Tabs controladas
 * @param {?string} props.onSelect         Troca de Tab em comp controlado, retorna eventKey da Tab
 * @param {?object} props.children         Tabs a serem exibidas
 */
class TabsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeKey: props.activeKey };
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps) {
    let { children } = this.props;
    let { children: nextChildren } = nextProps;

    if (!Array.isArray(children)) {
      children = [children];
    }

    if (!Array.isArray(nextChildren)) {
      nextChildren = [nextChildren];
    }

    if (nextChildren.length === children.length) {
      // Se a quantidade de abas for igual após atualização nas props do componente

      // eventKey da última aba no children atual
      const lastChildrenEventKey = children[children.length - 1].props.eventKey;
      // eventKey da última aba no próximo children
      const lastNexChildrenEventKey = nextChildren[nextChildren.length - 1].props.eventKey;

      if (lastChildrenEventKey !== lastNexChildrenEventKey) {
        // Se o eventKey da última aba for diferente da próxima última aba,
        // provavelmente é uma atualização na última aba,
        // então atualiza o activeKey para o novo eventKey da aba atualizada
        this.setState({ activeKey: lastNexChildrenEventKey });
      } else {
        // Se o eventKey da última aba for igual da próxima última aba
        // Provavelmente é apenas uma mudança de aba, então troca de aba
        this.setState({ activeKey: nextProps.activeKey });
      }
    } else if (nextChildren.length > children.length) {
      // Se a quantidade de abas recebidas forem maior que a existente,
      // provavelmente foram abertas novas abas

      // Pega o eventKey da ultima aba inserida
      const newActiveKey = nextChildren[nextChildren.length - 1].props.eventKey;

      // Troca a aba para a ultima inserida
      this.setState({ activeKey: newActiveKey });
    } else if (nextChildren.length < children.length) {
      // Se a quantidade de abas recebidas forem menor que a existente,
      // Provavelmente abas foram fechadas

      const { activeKey: stateActiveKey } = this.state;

      // Verifica se a aba fechada estava selecionada
      const closedSelectedTab = nextChildren.every((value) => {
        if (value.props.eventKey === stateActiveKey) {
          // nextChildren contem o novo array de abas sem a aba fechada
          // Se a aba ativa estiver em nextChildren é porque a aba fechada não estava ativa
          return false;
        }
        return true;
      });

      // Se a aba fechada estava selecionada, selecione uma ao lado
      if (closedSelectedTab) {
        children.every((value, index) => {
          // Localiza no array a aba que foi fechada
          if (value.props.eventKey === stateActiveKey) {
            let nextSelectedTab = '';

            if (children[index + 1]) {
              // Se houver aba após a fechada, seleciona a próxima aba
              nextSelectedTab = children[index + 1].props.eventKey;
            } else if (children[index - 1]) {
              // Se houver não houver aba após a fechada mas houver uma anterior,
              // seleciona a aba anterior
              nextSelectedTab = children[index - 1].props.eventKey;
            }

            // Troca a aba para a selecionada acima
            this.setState({ activeKey: nextSelectedTab });

            return false;
          }

          return true;
        });
      }
    }
  }

  renderFixButton({ title, fixed, onFix }) {
    if (fixed) {
      // Botão quando a aba estiver fixada
      return (
        <Popover description={`Desfixar ${title}`} delay>
          <Button onClick={onFix} size="small">
            <Icon name="fa fa-lock" color="orange" />
          </Button>
        </Popover>
      );
    }

    // Botão quando a aba não estiver fixada
    return (
      <Popover description={`Fixar ${title}`} delay>
        <Button onClick={onFix} size="small">
          <Icon name="fa fa-unlock-alt" color="green" />
        </Button>
      </Popover>
    );
  }

  renderCloseButton({ title, onClose }) {
    // Botão para fechar aba
    return (
      <Popover description={`Fechar ${title}`} delay>
        <Button onClick={onClose} size="small">
          <Icon name="fa fa-times" />
        </Button>
      </Popover>
    );
  }

  render() {
    const {
      defaultActiveKey,
      onSelect,
      children,
      ...props
    } = this.props;
    const { activeKey } = this.state;

    // Necessário atualizar os títulos se necessário com botões de fixar e fechar das abas
    // antes de passar o children para o Tabs do bootstrap
    const newChildren = React.Children.map(children, (tab, index) => {
      const {
        title,
        animed,
        fixed,
        onClose,
        onFix,
      } = tab.props;

      const newTitle = (
        <React.Fragment>
          <Popover description={title} delay>
            <div className={`title${onClose || onFix ? ' has-button' : ''}${animed ? ' marquee' : ''}`}>
              <span>{title}</span>
            </div>
          </Popover>
          {onFix && this.renderFixButton({ title, fixed, onFix })}
          {onClose && this.renderCloseButton({ title, onClose })}
        </React.Fragment>
      );

      return React.cloneElement(tab, { ...tab.props, title: newTitle, key: index.toString() });
    });

    return (
      <Tabs
        defaultActiveKey={defaultActiveKey}
        id={genHash()}
        onSelect={onSelect}
        {...props}
        activeKey={activeKey}
      >
        {newChildren}
      </Tabs>
    );
  }
}

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
TabsComponent.defaultProps = {
  defaultActiveKey: undefined,
  activeKey: undefined,
  onSelect: null,
  children: null,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
TabsComponent.propTypes = {
  defaultActiveKey: PropTypes.string,
  activeKey: PropTypes.string,
  onSelect: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

export default TabsComponent;
