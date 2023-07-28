import React, { ReactNode, useRef, useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

interface LayoutProps {
  children: ReactNode;
}

export const Container = ({ children }: LayoutProps) => {
  return <View className='flex-1 p-4 bg-[#FDFDFD]'>{children}</View>;
};
