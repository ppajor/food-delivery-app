import React, { ReactNode } from 'react';
import { Modal, Pressable, View } from 'react-native';
import { BodyText } from '../typography/Typography';
import globalStyles from '../../lib/globalStyles';

interface CustomModalProps {
  visibility: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const CustomModal = ({
  visibility,
  onClose,
  children,
}: CustomModalProps) => {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={visibility}
      onRequestClose={() => {
        onClose();
      }}
    >
      <View
        style={[globalStyles.modalContainer]}
        className='flex-1 items-center justify-center bg-white'
      >
        {children}
      </View>
      <View className='absolute top-4 right-8'>
        <Pressable onPress={() => onClose()}>
          <BodyText>X</BodyText>
        </Pressable>
      </View>
    </Modal>
  );
};
