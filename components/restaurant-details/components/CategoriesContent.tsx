import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import {
  BigHeading,
  BodyText,
  SmallText,
  TagText,
} from '../../typography/Typography';
import { Image } from 'expo-image';
import Separator from '../../separator/Separator';

const CategoriesContent = ({ categories }) => {
  const [tabActive, setTabActive] = useState({ name: 'Pizza', id: 1 });
  const [tabContent, setTabContent] = useState(null);
  const handleTabActive = (name: string, id: number) => {
    setTabActive({ name: name, id: id });
  };

  useEffect(() => {
    const selectedCategory = categories.find(
      (category) => category.id === tabActive.id,
    );

    if (selectedCategory) {
      setTabContent(selectedCategory.items);
    } else {
      setTabContent(null);
    }
  }, [tabActive, categories]);

  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{ gap: 20 }}
          className='w-full min-w-[100vw] h-full flex flex-row px-4'
        >
          <View className='absolute min-w-[100vw] w-full h-[4px] bottom-0 bg-lightgray' />

          {categories.map((category, idx) => (
            <Pressable
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
          {tabContent?.map((item) => (
            <View>
              <View className='flex flex-row'>
                <Image
                  placeholder={blurhash}
                  source={require('../../../assets/images/pizza-buffa.png')}
                  className='w-[72px] h-[72px] rounded-lg mr-6'
                  contentFit='cover'
                />
                <View className='flex-1 '>
                  <View className='flex flex-row justify-between mb-2'>
                    <TagText>{item.name}</TagText>
                    <SmallText>
                      {item.price}
                      {item.currency}
                    </SmallText>
                  </View>
                  <BodyText customClassName='text-gray'>
                    {item.description}
                  </BodyText>
                </View>
              </View>
              <Separator customClassName='my-3' />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default CategoriesContent;
