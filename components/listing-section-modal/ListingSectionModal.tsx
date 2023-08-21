import React from 'react';
import { View } from 'react-native';
import { BigHeading } from '../typography/Typography';
import { Restaurant } from '../../lib/types';
import globalStyles from '../../lib/globalStyles';
import { ListingItem } from '../listing-section/ListingItem';
import { CustomModal } from '../custom-modal/CustomModal';

interface ListingModalProps {
  visibility: boolean;
  closeCategoriesModal: () => void;
  items: Restaurant[];
}

export const ListingSectionModal = ({
  visibility,
  closeCategoriesModal,
  items,
}: ListingModalProps) => {
  return (
    <CustomModal
      visibility={visibility}
      onClose={() => {
        closeCategoriesModal();
      }}
    >
      <View className='flex-1 w-full'>
        <BigHeading customClassName='mb-4'>Popularne teraz</BigHeading>
        <View style={{ gap: 8 }}>
          {items.map((item, idx) => (
            <View key={idx} style={[globalStyles.shadow]}>
              <ListingItem key={idx} item={item} />
            </View>
          ))}
        </View>
      </View>
    </CustomModal>
  );
};
