import React, { ReactNode, useRef, useState } from 'react';
import { View, TextInput, Pressable } from 'react-native';
import { BigHeading, BodyText } from '../typography/Typography';
import { CategoryCard } from './cards/CategoryCard';
import { ScrollView } from 'react-native-gesture-handler';
import HamburgerIcon from '../../assets/svgs/hamburger.svg';
import ChickenIcon from '../../assets/svgs/chicken.svg';
import PizzaIcon from '../../assets/svgs/pizza.svg';

interface CategoriesProps {
  openCategoriesModal: () => void;
}

export const Categories = ({ openCategoriesModal }: CategoriesProps) => {
  return (
    <View className='py-8 '>
      <View className='flex flex-row justify-between'>
        <BigHeading customClassName='mb-4'>Na co masz ochotę?</BigHeading>
        <Pressable onPress={() => openCategoriesModal()}>
          <BodyText customClassName='text-orange mr-2'>Wszystkie</BodyText>
        </Pressable>
      </View>
      <ScrollView horizontal>
        <View style={{ gap: 8 }} className='flex flex-row pb-2'>
          <CategoryCard
            name='Burger'
            icon={<HamburgerIcon width={36} height={36} />}
          />
          <CategoryCard
            name='Pizza'
            icon={<PizzaIcon width={46} height={46} />}
          />
          <CategoryCard
            name='Chicken'
            icon={<ChickenIcon width={36} height={36} />}
          />
          <CategoryCard
            name='Burger'
            icon={<HamburgerIcon width={36} height={36} />}
          />
          <CategoryCard
            name='Pizza'
            icon={<PizzaIcon width={36} height={36} />}
          />
        </View>
      </ScrollView>
    </View>
  );
};
