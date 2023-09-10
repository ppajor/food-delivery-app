import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { BigHeading, TagText } from '../../typography/Typography';

import {
  MenuCategoryItem as MenuCategoryItemType,
  RestaurantMenuCategory,
} from '../../../lib/types';
import MenuCategoryItem from './MenuCategoryItem';

type CategoriesContentProps = {
  menuCategories: RestaurantMenuCategory[];
};

const CategoriesContent = ({ menuCategories }: CategoriesContentProps) => {
  const [tabActive, setTabActive] = useState({ name: 'Pizza', id: 1 });
  const [tabContent, setTabContent] = useState<MenuCategoryItemType[] | null>(
    null,
  );
  const handleTabActive = (name: string, id: number) => {
    setTabActive({ name: name, id: id });
  };

  useEffect(() => {
    const selectedCategory = menuCategories.find(
      (category) => category.id === tabActive.id,
    );

    if (selectedCategory) {
      setTabContent(selectedCategory.items);
    } else {
      setTabContent(null);
    }
  }, [tabActive, menuCategories]);
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{ gap: 20 }}
          className='w-full min-w-[100vw] h-full flex flex-row px-4'
        >
          <View className='absolute min-w-[100vw] w-full h-[4px] bottom-0 bg-lightgray' />

          {menuCategories?.map((category: RestaurantMenuCategory) => (
            <Pressable
              key={category.id}
              style={{
                borderBottomWidth: tabActive.id === category.id ? 4 : 0,
                borderColor: '#F2C94C',
              }}
              className='h-full border-b-2 py-2'
              onPress={() => handleTabActive(category.name, category.id)}
            >
              <TagText>{category.name}</TagText>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <View>
        <BigHeading customClassName='mt-6 mb-4'>{tabActive.name}</BigHeading>
        <View>
          {tabContent?.map((item: MenuCategoryItemType) => (
            <MenuCategoryItem key={item.id} item={item} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default CategoriesContent;
