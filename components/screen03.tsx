
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { thamSoManHinh } from './Type';

type Props = NativeStackScreenProps<thamSoManHinh, 'Detail'>;

const DetailScreen = ({ route }: Props) => {
  const { bike } = route.params;

  return (
    <View>
      <Image 
        source={bike.image} 
        style={{ width: 250, height: 250 }} 
      />
      
      <Text>{bike.name}</Text>
      
      <View style={{ flexDirection: 'row' }}>
        {bike.discount && <Text>{bike.discount} </Text>}
        <Text>${bike.price} </Text>
        {bike.originalPrice && <Text style={{ textDecorationLine: 'line-through' }}>${bike.originalPrice}</Text>}
      </View>

      <Text>Description</Text>
      <Text>{bike.description}</Text>

      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <TouchableOpacity>
          <Text>[ ♡ ]</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text>[ Add to card ]</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailScreen;