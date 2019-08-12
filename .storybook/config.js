import { configure, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { withNotes } from '@storybook/addon-notes';
import { withConsole } from '@storybook/addon-console';

addDecorator(centered); // Manter os componentes centralizados
addDecorator(withNotes); // Permitir escrever notas nas histórias
addDecorator((storyFn, context) => withConsole()(storyFn)(context)); // Emite log de falhas ou warning nas hispórias

// Importar automaticamente todos os arquivos terminados em *.stories.jsx
// dentro da pasta src
const req = require.context('../src', true, /.stories.jsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
