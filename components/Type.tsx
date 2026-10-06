
import { ImageSourcePropType } from 'react-native';

export interface Bike {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  type: 'All' | 'Roadbike' | 'Mountain';
  image: ImageSourcePropType; 
  description: string;
}

  export type thamSoManHinh = {
    Welcome: undefined; 
    Home: undefined;   
    Detail: { bike: Bike };
  };