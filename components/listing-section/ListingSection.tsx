import React from 'react';
import { Pressable, View } from 'react-native';
import { BigHeading, BodyText } from '../typography/Typography';
import { ListingItem } from './ListingItem';
import { Restaurant } from '../../lib/types';
import globalStyles from '../../lib/globalStyles';

type ListingSectionProps = {
  items: Restaurant[];
  openListingModal: () => void;
};

export const ListingSection = ({
  items,
  openListingModal,
}: ListingSectionProps) => {
  return (
    <View>
      <Pressable onPress={openListingModal}>
        <View className='flex flex-row justify-between'>
          <BigHeading customClassName='mb-4'>Popularne teraz</BigHeading>
          <BodyText customClassName='text-orange'>Wszystkie</BodyText>
        </View>
      </Pressable>
      <View style={{ gap: 8 }}>
        {items.map((item, idx) => (
          <View key={idx} style={[globalStyles.shadow]}>
            <ListingItem key={idx} item={item} />
          </View>
        ))}
      </View>
    </View>
  );
};
