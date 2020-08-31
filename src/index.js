import { Info } from './components/Info';
import { Ships, selectBox } from './components/Ships';

const app = document.querySelector('#app');

app.append(Info(), selectBox, Ships())