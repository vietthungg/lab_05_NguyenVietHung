import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { thamSoManHinh } from './Type';

type Props = NativeStackScreenProps<thamSoManHinh, 'Welcome'>;

const WelcomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>
        Hung Hung Hung
      </Text>
      
      <View style={styles.imageContainer}>
        <Image 
          source={require('../img/img1.png')} 

          style={styles.image} 
        />
      </View>

      <Text style={styles.title}>Viet Hung{'\n'}SHOP</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 20,
    alignItems: 'center', 
    backgroundColor: '#F8F8F8' 
},
  subtitle: { 
    textAlign: 'center', 
    fontSize: 16, 
    paddingHorizontal: 20 
},
  imageContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginVertical: 30, 
},
  image: { 
    width: 280, 
    height: 280, 
    resizeMode: 'contain' 
},
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 40, 
    color: '#000' 
},
  button: { 
    backgroundColor: '#E33434', 
    width: '100%', 
    paddingVertical: 18, 
    borderRadius: 30, 
    alignItems: 'center', 
    marginBottom: 20 
},
  buttonText: { 
    color: 'white', 
    fontSize: 18, 
    fontWeight: 'bold' 
}
});

export default WelcomeScreen;