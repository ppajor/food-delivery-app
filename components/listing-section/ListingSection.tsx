import React from 'react';
import { Pressable, View } from 'react-native';
import { BigHeading, BodyText } from '../typography/Typography';
import { ListingItem } from './ListingItem';
import { Restaurant } from '../../lib/types';
import { Link } from 'expo-router';

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
          <View key={idx} className=''>
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
  );
};
