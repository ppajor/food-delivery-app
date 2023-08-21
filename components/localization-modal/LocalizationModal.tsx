import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { BigHeading, BodyText } from '../typography/Typography';

import { CustomModal } from '../custom-modal/CustomModal';
import * as Location from 'expo-location';
import { Location as LocationType } from '../../lib/types';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

interface LocalizationModalProps {
  visibility: boolean;
  closeCategoriesModal: () => void;
}

export const LocalizationModal = ({
  visibility,
  closeCategoriesModal,
}: LocalizationModalProps) => {
  const [location, setLocation] = useState<LocationType | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>('');
  console.log('location', location);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation(location);
      console.log('location', location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  }

  return (
    <CustomModal
      visibility={visibility}
      onClose={() => {
        closeCategoriesModal();
      }}
    >
      <View className='flex-1 w-full'>
        {location && (
          <View>
            <BigHeading customClassName='mb-4'>Your localization</BigHeading>
            <MapView
              className='w-full h-full'
              initialRegion={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                }}
              />
            </MapView>
          </View>
        )}
      </View>
    </CustomModal>
  );
};
