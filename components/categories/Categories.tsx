import React, { ReactNode, useRef, useState } from 'react';
import { View, TextInput } from 'react-native';
import { BigHeading } from '../typography/Typography';
import { CategoryCard } from './cards/CategoryCard';

export const Categories = () => {
  return (
    <View>
      <BigHeading customClassName='mt-6 mb-4'>Na co masz ochotę?</BigHeading>
      <CategoryCard name='Burger' />
    </View>
  );
};
