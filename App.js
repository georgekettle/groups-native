import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import { WebView } from 'react-native-webview';

const INJECTED_JAVASCRIPT = `
      window.isNativeApp = true;
      window.statusBarHeight = ${Constants.statusBarHeight};
      true; // note: this is required, or you'll sometimes get silent failures
    `;

export default function App() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'http://localhost:3000' }}
        style={{ width: "100%" }}
        injectedJavaScriptBeforeContentLoaded={INJECTED_JAVASCRIPT}
        onMessage={(event) => {
          event.nativeEvent.data
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
