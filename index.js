/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Functions from './src/Utils/global/functions';
 import * as Configuration from './src/Utils/global/constants';
 import * as Events from './src/Utils/global/events';
 import * as userActions from "./src/Redux/Actions"
 if (global.functions == null) global.functions = Functions.getInstance();
 if (global.const == null) global.const = Configuration;
if (global.event == null) global.event = Events;
 if (global.actions == null) global.actions = userActions;
AppRegistry.registerComponent(appName, () => App);
