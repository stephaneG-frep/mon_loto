import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
'react-native';
import Button from'./components/Button';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import Button3 from './components/Button3';
import Button4 from './components/Button4';
import Button5 from './components/Button5';
import Button6 from './components/Button6';
import Button7 from './components/Button7';
import Button8 from './components/Button8';
import Button9 from './components/Button9';
import Button10 from './components/Button10';



  class App extends React.Component { 
   
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <Text style={styles.heading}>Bienvenue sur le générateur de
        chiffre aléatoire pour le loto
        </Text>

        <Button />
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
        <Text style={styles.innerText}>Les chiffres étoile de
        l'euromillion</Text>
        <Button7 />
        <Button8 />
        <Text style={styles.innerText}>Les chiffres
        étoile du loto</Text>
        <Button9 />
        <Text style={styles.innerText}>Les chiffres étoile
        d' euro dreams</Text>
        <Button10 />

        <StatusBar style="auto" />
        </ScrollView>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#A6CF98',
  },
  heading: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 10,
    color: '#066163',
    fontWeight: 'bold',
  },
  innerText: {
    fontSize: 22,
    textAlign: 'center',
    color: '#066163',
},
});
export default App;