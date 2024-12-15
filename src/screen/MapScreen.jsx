import { StyleSheet, View } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';

const MapScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <WebView 
        source={require('../screen/map.html')} // Pastikan path sesuai dengan struktur folder Anda
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  // Gaya tambahan jika diperlukan
});
