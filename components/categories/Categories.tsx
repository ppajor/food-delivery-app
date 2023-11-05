import React, { ReactNode, useRef, useState } from 'react';
import { View, TextInput, Pressable } from 'react-native';
import { BigHeading, BodyText } from '../typography/Typography';
import { CategoryCard } from './cards/CategoryCard';
import { ScrollView } from 'react-native-gesture-handler';
import { ListingSectionModal } from '../listing-section-modal/ListingSectionModal';
import { ngrokURL } from '../../lib/constants';
import { Restaurant } from '../../lib/types';

interface CategoriesProps {
  openCategoriesModal: () => void;
  items: {
    id_category: number;
    name: string;
    image_url: string;
  }[];
}

export const Categories = ({ openCategoriesModal, items }: CategoriesProps) => {
  const [restaurantCategoryData, setRestaurantCategoryData] = useState(null);
  const [listingModalVisible, setListingModalVisible] = useState(false);

  const handleCategoryPress = async (name: string) => {
    console.log('name', name);
    const res = await fetch(`${ngrokURL}/api/restaurants`);
    const data = await res.json();
    // console.log('data', data);
    if (data) {
      const filteredData = data.filter(
        (restaurant: Restaurant) => restaurant.category === name,
      );
      console.log('filtered', filteredData);
      setRestaurantCategoryData(filteredData);
      setListingModalVisible(true);
    }
  };

  return (
    <View className='py-8 '>
      <View className='flex flex-row justify-between'>
        <BigHeading customClassName='mb-4'>Na co masz ochotę?</BigHeading>
        <Pressable onPress={() => openCategoriesModal()}>
          <BodyText customClassName='text-orange'>Wszystkie</BodyText>
        </Pressable>
      </View>
      <ScrollView horizontal>
        <View style={{ gap: 8 }} className='flex flex-row pb-2'>
          {items.map(({ name, image_url, id_category }, idx) => (
            <Pressable
              key={id_category}
              onPress={() => handleCategoryPress(name)}
            >
              <CategoryCard name={name} icon={image_url} />
            </Pressable>
          ))}
        </View>
      </ScrollView>
      {restaurantCategoryData && (
        <ListingSectionModal
          title={`Kategoria ${restaurantCategoryData[0]?.category}`}
          items={restaurantCategoryData}
          visibility={listingModalVisible}
          closeCategoriesModal={() => setListingModalVisible(false)}
        />
      )}
    </View>
  );
};
