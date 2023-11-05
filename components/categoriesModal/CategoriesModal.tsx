import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { BigHeading } from '../typography/Typography';
import { ScrollView } from 'react-native-gesture-handler';
import { CategoryCard } from '../categories/cards/CategoryCard';
import { CustomModal } from '../custom-modal/CustomModal';

interface CategoriesModalProps {
  visibility: boolean;
  closeCategoriesModal: () => void;
  items: {
    name: string;
    image_url: ReactNode;
  }[];
}

export const CategoriesModal = ({
  items,
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
          {items.map(({ name, image_url }, idx) => (
            <CategoryCard key={idx} name={name} icon={image_url} />
          ))}
        </View>
      </ScrollView>
    </CustomModal>
  );
};
