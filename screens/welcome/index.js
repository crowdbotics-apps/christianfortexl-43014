import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';

const App = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to our App</Text>
      </View>
      <View style={styles.content}>
        <Image style={styles.image} source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} />
        <Text style={styles.contentText}>Let's build something amazing together!</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>{"get today"}</Text>
      <View style={styles.tXPUwhvU}></View></View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  content: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200
  },
  contentText: {
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "300"
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerText: {
    fontSize: 16,
    opacity: 1,
    color: "#1e2e57"
  },
  tXPUwhvU: {
    flex: 1
  }
});
export default App;