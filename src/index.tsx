/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import { HopeProvider, HopeThemeConfig } from '@hope-ui/solid';
const config: HopeThemeConfig = {
  initialColorMode: "dark", // 2. Add your color mode
  // rest of the config...
}
const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

render(() => <HopeProvider config={config}><App /></HopeProvider>, root!);
