/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// only android needs polyfill
if (Platform.OS === 'android') {
  require('intl'); // import intl object
  require('intl/locale-data/jsonp/es-US'); // load the required locale details
}

AppRegistry.registerComponent(appName, () => App);
