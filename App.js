import { DevSettings } from 'react-native';
import React, { Component, useEffect, useState, useRef } from 'react';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/Navigation/AppNavigation';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Input,
  TouchableOpacity,
  useColorScheme,
  View,
  Button,
  Linking,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// INICIAMOS IMPORTANDO
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';


const App: () => Node = () => {

  const qrcodeRef = useRef(null);
  const [link, setLink] = useState("");

  const handleLink = () => {
    Linking.openURL(link).catch(() => {
      console.log("Hubo un error")
    })

    qrcodeRef.current.reactivate()
  };

  return (
    <SafeAreaView>
      <QRCodeScanner
        ref={qrcodeRef}
        onRead={({ data }) => setLink(data)}
        flasMode={RNCamera.Constants.FlashMode.off}
        topContent={
          <View>
            <Text>{link}</Text>
          </View>
        }
        bottomContent={
          <View>
            <TouchableOpacity
              onPress={() => handleLink()}
              style={{ padding: 12, backgroundColor: "#0277BD", marginTop: 20 }}>
              <Text style={{ color: "#FFFFFF" }}>Ir para link</Text>
            </TouchableOpacity>
          </View>
        }
      />
      <View>
        <AppNavigation />
      </View>
    </SafeAreaView>



  )

}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 52, //Alto
    paddingHorizontal: 54, //Ancho
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 16
  },
});

export default App;