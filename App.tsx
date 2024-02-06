import React from "react";
import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  ScrollView, 
  StyleSheet,
} from 'react-native';
import coding from './assets/coding.jpg';

const App = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.title}>Basic Component in RN</Text>
      <TextInput placeholder="Masukkan nama lengkap anda :" style={styles.inputNama} />
      <View style={styles.container}>
        <View style={{width: 100, height: 100, backgroundColor: 'grey'}}/>
        <View style={{width: 100, height: 100, backgroundColor: 'yellow'}}/>
        <View style={{width: 100, height: 100, backgroundColor: 'purple'}}/>        
      </View>
      <Image
        source={require('./assets/code.jpg')} 
        style={styles.image}
      />
      <Image source={coding} style={styles.image} />
      <Image
        source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}
        style={styles.image}
      />
    </ScrollView> 
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
  },
  container: {
    flexDirection: 'row',
    marginTop: 10, 
  },
  inputNama: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: 'bold',
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  image: {
    height: 160, 
    width: 200, 
    marginTop: 15, 

  },
});

export default App;
