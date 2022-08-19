import welcome from './components/welcome.js';
import {
  sites,
  fetchSite
} from './components/sites.js';

const main = async () => {
  welcome();
  for (let key in sites) {
    let url = sites[key];
    let r = fetchSite(url);
  }
};
main();
