import React, { ReactNode, useRef, useState } from 'react';
import { View, TextInput, Modal, Pressable } from 'react-native';
import { BigHeading, BodyText } from '../typography/Typography';
import { ScrollView } from 'react-native-gesture-handler';
import HamburgerIcon from '../../assets/svgs/hamburger.svg';
import ChickenIcon from '../../assets/svgs/chicken.svg';
import PizzaIcon from '../../assets/svgs/pizza.svg';
import { CategoryCard } from '../categories/cards/CategoryCard';
import globalStyles from '../../lib/globalStyles';

interface CategoriesModalProps {
  visibility: boolean;
  closeCategoriesModal: () => void;
}

export const CategoriesModal = ({
  visibility,
  closeCategoriesModal,
}: CategoriesModalProps) => {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={visibility}
      onRequestClose={() => {
        closeCategoriesModal();
      }}
    >
      <View
        style={[globalStyles.modalContainer]}
        className='flex-1 items-center justify-center bg-white'
      >
        <BigHeading customClassName='mb-4'>Wybierz kategorię</BigHeading>

        <ScrollView>
          <View style={{ gap: 8 }} className='flex flex-row flex-wrap pb-2'>
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
      <View className='absolute top-4 right-8'>
        <Pressable onPress={() => closeCategoriesModal()}>
          <BodyText>X</BodyText>
        </Pressable>
      </View>
    </Modal>
  );
};
