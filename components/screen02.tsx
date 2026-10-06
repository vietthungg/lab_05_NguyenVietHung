import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { thamSoManHinh } from './Type';
import { bikesData } from '../data/Mock';

type Props = NativeStackScreenProps<thamSoManHinh, 'Home'>;

const HomeScreen = ({ navigation }: Props) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Roadbike' | 'Mountain'>('All');

  const filteredBikes = bikesData.filter(bike => 
    activeTab === 'All' ? true : bike.type === activeTab
  );

  return (
    <View>
      <Text>các xe đươc yêu thích nhất</Text>
      
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => setActiveTab('All')}>
          <Text> [All] </Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => setActiveTab('Roadbike')}>
          <Text> [Roadbike] </Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => setActiveTab('Mountain')}>
          <Text> [Mountain] </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={filteredBikes}
        keyExtractor={item => item.id}
        numColumns={2} 
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detail', { bike: item })}>
             
            <Image 
              source={item.image} 
              style={{ width: 100, height: 100 }} 
            />
            <Text>{item.name}</Text>
            <Text>$ {item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;