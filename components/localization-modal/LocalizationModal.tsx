import React, { useEffect, useRef, useState } from 'react';
import { BigHeading, BodyText, MediumHeading } from '../typography/Typography';

import { CustomModal } from '../custom-modal/CustomModal';
import * as Location from 'expo-location';
import { Location as LocationType } from '../../lib/types';
import { Pressable, TextInput, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import globalStyles from '../../lib/globalStyles';

interface LocalizationModalProps {
  currentAddress: string;
  visibility: boolean;
  onAddressChange: (address: string) => void;
  closeCategoriesModal: () => void;
}

export const LocalizationModal = ({
  currentAddress,
  visibility,
  onAddressChange,
  closeCategoriesModal,
}: LocalizationModalProps) => {
  const [location, setLocation] = useState<LocationType | null>(null);
  const [address, setAddress] = useState(currentAddress);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const mapRef = useRef<MapView | null>(null);

  useEffect(() => {
    getAddressCoords();
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  }

  const getAddressCoords = async () => {
    if (address) {
      const geocodeLocation = await Location.geocodeAsync(address);
      if (geocodeLocation.length > 0) {
        setLocation({ coords: geocodeLocation[0] });
        if (mapRef.current) {
          mapRef.current.animateToRegion({
            latitude: geocodeLocation[0].latitude,
            longitude: geocodeLocation[0].longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }
      }
    }
  };

  const handleClose = async () => {
    const reverseGeocodedAddress = await Location.reverseGeocodeAsync({
      longitude: location?.coords.longitude || 0,
      latitude: location?.coords.latitude || 0,
    });

    const address = `${reverseGeocodedAddress[0].street || ''} ${
      reverseGeocodedAddress[0].streetNumber ||
      reverseGeocodedAddress[0].name ||
      ''
    }, ${reverseGeocodedAddress[0].city || ''}`;
    onAddressChange(address);
    closeCategoriesModal();
  };

  return (
    <CustomModal visibility={visibility} onClose={handleClose}>
      <View className='flex-1 w-full'>
        {location && (
          <View>
            <BigHeading customClassName='mb-4'>Twoja lokalizacja</BigHeading>
            <TextInput
              placeholder='Wpisz adres dostawy manualnie'
              value={address}
              onChangeText={setAddress}
              className='h-12 text-base p-3 bg-[#fff] mb-2'
              style={[globalStyles.shadow, { borderRadius: 4 }]}
            />

            <MapView
              ref={mapRef}
              className='w-full h-[75%] mb-4'
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
            <Pressable
              onPress={getAddressCoords}
              className='py-3 bg-orange rounded-lg'
            >
              <MediumHeading customClassName='text-center text-white'>
                Ustaw lokalizację
              </MediumHeading>
            </Pressable>
          </View>
        )}
      </View>
    </CustomModal>
  );
};
