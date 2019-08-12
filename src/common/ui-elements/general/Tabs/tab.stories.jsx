import React from 'react';
import { storiesOf } from '@storybook/react';
import { withState } from '@dump247/storybook-state';
import randomHash from 'random-hash';

import 'common/dependencies';
import 'common/scss/dependencies.scss';
import 'common/scss/custom.scss';
import { Tab, Tabs } from '.';

storiesOf('ui-elements/general/Tabs [Tabs, UIE032] e [Tab, UIE031]', module)
  .add('children em Tabs; title e children em Tab', () => (
    <Tabs>
      <Tab title="Uma Tab">
        <div style={{ width: '300px' }}>Corpo da Tab</div>
      </Tab>
    </Tabs>
  ), {
    notes: `O Tabs deve receber todas as Tab em seu children.
            A Tab obrigatoriamente tem que estar dentro de Tabs.
            O "title" da Tab recebe o título da Tab.
            O "children" da Tab recebe o conteúdo da Tab, que pode ser qualquer coisa que renderize.`,
  })

  .add('defaultActiveKey em Tabs; eventKey em Tab', () => (
    <Tabs defaultActiveKey="tab2">
      <Tab eventKey="tab1" title="Tab 1">
        <div>Corpo da Tab 1</div>
      </Tab>
      <Tab eventKey="tab2" title="Tab 2">
        <div>Corpo da Tab 2</div>
      </Tab>
    </Tabs>
  ), {
    notes: 'O "defaultActiveKey" recebe o "eventKey" da primeira Tab a ser exibida em Tabs não controladas.',
  })

  .add('activeKey em Tabs; eventKey em Tab', () => (
    <Tabs activeKey="tab2" onSelect={() => {}}>
      <Tab eventKey="tab1" title="Tab 1">
        <div>Corpo da Tab 1</div>
      </Tab>
      <Tab eventKey="tab2" title="Tab 2">
        <div>Corpo da Tab 2</div>
      </Tab>
    </Tabs>
  ), {
    notes: `O "activeKey" recebe o "eventKey" da Tab a ser exibida em Tabs controladas.
            É necessário o onSelect quando for utilizar Tabs controladas pelo activeKey.`,
  })

  .add('onSelect em Tabs', () => (
    <Tabs onSelect={key => console.log(key)}>
      <Tab eventKey="tab1" title="Tab 1">
        <div>Corpo da Tab 1</div>
      </Tab>
      <Tab eventKey="tab2" title="Tab 2">
        <div>Corpo da Tab 2</div>
      </Tab>
    </Tabs>
  ), {
    notes: `Função a ser executada quando houver ação de click nas Tab.
            Essa função retorna o "eventKey" da Tab selecionada(que recebeu o click).`,
  })

  .add('onClose em Tab', withState({ tabs: [{ id: '1' }, { id: '2' }] })(({ store }) => (
    <Tabs>
      {store.state.tabs.map(({ id }) => (
        <Tab
          eventKey={`tab${id}`}
          title={`Tab ${id}`}
          onClose={() => store.set({
            tabs: store.state.tabs.reduce((acc, cur) => {
              if (cur.id !== id) {
                acc.push(cur);
              }

              return acc;
            }, []),
          })}
        >
          <div>{`Corpo da Tab ${id}`}</div>
        </Tab>
      ))}
    </Tabs>
  )), {
    notes: 'Função a ser executada quando houver ação de click no botão de fechar.',
  })

  .add('onFix e fixed em Tab', withState({ fixTab1: false, fixTab2: false })(({ store }) => (
    <Tabs>
      <Tab
        eventKey="tab1"
        title="Tab 1"
        fixed={store.state.fixTab1}
        onFix={() => store.set({ fixTab1: !store.state.fixTab1 })}
      >
        <div>Corpo da Tab 1</div>
      </Tab>
      <Tab
        eventKey="tab2"
        title="Tab 2"
        fixed={store.state.fixTab2}
        onFix={() => store.set({ fixTab2: !store.state.fixTab2 })}
      >
        <div>Corpo da Tab 2</div>
      </Tab>
    </Tabs>
  )), {
    notes: `A função "onFix" é executada quando houver ação de click no botão de fixar e desfixar.
            O "fixed" só funciona quando tem a função "onFix" para desfixar.
            Quando "fixed = true" o ícone do botão de fixar fica com cadeado fechado laranja.
            Quando "fixed = false" o ícone do botão de fixar fica com cadeado aberto verde.`,
  })

  .add('Funcionamento completo', withState({ tabs: [], activeKey: '' })(({ store }) => (
    <>
      <button
        type="button"
        onClick={() => {
          const tabs = [...store.state.tabs];

          if (tabs.length === 0 || tabs[tabs.length - 1].fixed) {
            tabs.push({ id: randomHash(), fixed: false });
          } else {
            tabs[tabs.length - 1] = { id: randomHash(), fixed: false };
          }

          store.set({ tabs });
        }}
      >
        Adicionar uma aba
      </button>
      <Tabs activeKey={store.state.activeKey} onSelect={key => store.set({ activeKey: key })}>
        {store.state.tabs.map(({ id, fixed }) => (
          <Tab
            key={id}
            eventKey={`tab${id}`}
            title={`Tab ${id}`}
            fixed={fixed}
            onFix={() => store.set({
              tabs: store.state.tabs.reduce((acc, cur) => {
                if (cur.id === id) {
                  acc.push({ ...cur, fixed: !cur.fixed });
                } else {
                  acc.push(cur);
                }

                return acc;
              }, []),
            })}
            onClose={() => store.set({
              tabs: store.state.tabs.reduce((acc, cur) => {
                if (cur.id !== id) {
                  acc.push(cur);
                }

                return acc;
              }, []),
            })}
          >
            <div>{`Corpo da Tab ${id}`}</div>
          </Tab>
        ))}
      </Tabs>
    </>
  )), {
    notes: 'Demonstração do funcionamento do Tabs com todas propriedades necessárias.',
  })

  .add('outras props', () => (
    <>
      <p>Tabs com className text-right</p>
      <p>Tab com className text-danger</p>
      <Tabs className="text-right">
        <Tab title="Tab" className="text-danger">
          <div>Corpo da Tab</div>
        </Tab>
      </Tabs>
    </>
  ), {
    notes: 'É possível passar outras props como o "className".',
  });
