import React, { ReactNode, useRef, useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

interface LayoutProps {
  children: ReactNode;
}

export const Container = ({ children }: LayoutProps) => {
  return (
    <ScrollView className='flex-1 p-4 bg-[#FDFDFD]'>{children}</ScrollView>
  );
};
