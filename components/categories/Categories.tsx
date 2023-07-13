import React, { ReactNode, useRef, useState } from 'react';
import { View, TextInput } from 'react-native';
import { BigHeading, BodyText } from '../typography/Typography';
import { CategoryCard } from './cards/CategoryCard';
import { ScrollView } from 'react-native-gesture-handler';

export const Categories = () => {
  return (
    <View>
      <BigHeading customClassName='mt-6 mb-4'>Na co masz ochotę?</BigHeading>
      <ScrollView horizontal>
        <View className='flex flex-row gap-2'>
          <CategoryCard name='Burger' />
          <CategoryCard name='Pizza' />
          <CategoryCard name='Chicken' />
          <CategoryCard name='Burger' />
          <CategoryCard name='Pizza' />
        </View>
      </ScrollView>
    </View>
  );
};
