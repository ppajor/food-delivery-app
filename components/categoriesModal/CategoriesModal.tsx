import React from 'react';
import { View } from 'react-native';
import { BigHeading } from '../typography/Typography';
import { ScrollView } from 'react-native-gesture-handler';
import HamburgerIcon from '../../assets/svgs/hamburger.svg';
import ChickenIcon from '../../assets/svgs/chicken.svg';
import PizzaIcon from '../../assets/svgs/pizza.svg';
import { CategoryCard } from '../categories/cards/CategoryCard';
import { CustomModal } from '../custom-modal/CustomModal';

interface CategoriesModalProps {
  visibility: boolean;
  closeCategoriesModal: () => void;
}

export const CategoriesModal = ({
  visibility,
  closeCategoriesModal,
}: CategoriesModalProps) => {
  return (
    <CustomModal
      visibility={visibility}
      onClose={() => {
        closeCategoriesModal();
      }}
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
    </CustomModal>
  );
};
