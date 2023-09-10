import React from 'react';
import { View } from 'react-native';
import { LargeText } from '../../components/typography/Typography';

const orderFinished = () => {
  return (
    <View>
      <LargeText>
        Dziękujemy za dokonanie zamówienia, kurier Andryj Szewczenko jest juz w
        drodze
      </LargeText>
    </View>
  );
};

export default orderFinished;
