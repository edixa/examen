import React from 'react';
import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';


type Props = NativeStackScreenProps<MainStackParamList, 'Inicio'>;

const Inicio = ({ navigation,route }:Props) => {

  const { id, tweet_text } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>{id} {tweet_text}</Text> 
    </View>
  );
}

export default Inicio
