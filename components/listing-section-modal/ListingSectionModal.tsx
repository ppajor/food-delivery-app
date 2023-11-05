import React from 'react';
import { Pressable, View } from 'react-native';
import { BigHeading } from '../typography/Typography';
import { Restaurant } from '../../lib/types';
import globalStyles from '../../lib/globalStyles';
import { ListingItem } from '../listing-section/ListingItem';
import { CustomModal } from '../custom-modal/CustomModal';
import { Link } from 'expo-router';

interface ListingModalProps {
  title: string;
  visibility: boolean;
  closeCategoriesModal: () => void;
  items: Restaurant[];
}

export const ListingSectionModal = ({
  visibility,
  title,
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
        <BigHeading customClassName='mb-4'>{title}</BigHeading>
        <View style={{ gap: 8 }}>
          {items.map((item, idx) => (
            <View key={idx} style={[globalStyles.shadow]}>
              <Link
                key={idx}
                href={{
                  pathname: '/restaurant/' + idx,
                  params: item,
                }}
                asChild
              >
                <Pressable>
                  <ListingItem key={idx} item={item} />
                </Pressable>
              </Link>
            </View>
          ))}
        </View>
      </View>
    </CustomModal>
  );
};
