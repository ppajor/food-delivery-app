import React from 'react';
import { Pressable, View } from 'react-native';
import { BodyText, SmallText, TagText } from '../../typography/Typography';
import { Image } from 'expo-image';
import Separator from '../../separator/Separator';
import { Ionicons } from '@expo/vector-icons';
import { blurhash } from '../../../lib/constants';
import { MenuCategoryItem as MenuCategoryItemType } from '../../../lib/types';
import { useCartContext } from '../../../lib/contexts/CartContext';

type MenuCategoryItemProps = {
  item: MenuCategoryItemType;
  behaviour?: 'add' | 'remove';
};

const MenuCategoryItem = ({
  item,
  behaviour = 'add',
}: MenuCategoryItemProps) => {
  const { state, dispatch } = useCartContext();

  const handleAddToCart = (item: MenuCategoryItemType) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const handleRemoveFromCart = (item: MenuCategoryItemType) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  return (
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
          <View className='flex flex-row justify-between'>
            <BodyText customClassName='text-gray'>{item.description}</BodyText>
            {behaviour === 'add' ? (
              <Pressable onPress={() => handleAddToCart(item)}>
                <Ionicons
                  name='add-circle'
                  size={24}
                  color='#FF8D28'
                  className='self-end'
                />
              </Pressable>
            ) : (
              behaviour === 'remove' && (
                <Pressable onPress={() => handleRemoveFromCart(item)}>
                  <Ionicons
                    name='remove-circle'
                    size={24}
                    color='#FF8D28'
                    className='self-end'
                  />
                </Pressable>
              )
            )}
          </View>
        </View>
      </View>
      <Separator customClassName='my-3' />
    </View>
  );
};

export default MenuCategoryItem;
