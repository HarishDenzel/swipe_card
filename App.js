


import 'react-native-gesture-handler';
import * as React from 'react';
import RootNavigator from './src/RootNavigation';
import {SafeAreaView, View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from './src/Utils/store';
 import SnackBar from './src/Components/SnackBar';
 import Home from "./src/Utils/Home"
// import CustomNotification from "./src/Utils/CustomNotification";

// Icon.loadFont();
export default function App(props) {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:'#ffff'}}>
      <View style={{flex: 1}}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Home />
           
             <SnackBar />
          </PersistGate>
        </Provider>
      </View>
    </SafeAreaView>
  );
}