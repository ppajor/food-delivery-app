import React from 'react';
import { View } from 'react-native';
import { BigHeading } from '../typography/Typography';
import { ListingItem } from './ListingItem';
import { Restaurant } from '../../lib/types';
import globalStyles from '../../lib/globalStyles';

type ListingSectionProps = {
  items: Restaurant[];
};

export const ListingSection = ({ items }: ListingSectionProps) => {
  return (
    <View>
      <BigHeading customClassName='mb-4'>Popularne teraz</BigHeading>
      <View style={{ gap: 8 }}>
        {items.map((item, idx) => (
          <View style={[globalStyles.shadow]}>
            <ListingItem key={idx} item={item} />
          </View>
        ))}
      </View>
    </View>
  );
};
