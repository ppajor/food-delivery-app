import React, { useEffect, useState } from 'react';
import { BodyText, LargeText } from '../../components/typography/Typography';
import { ActivityIndicator, View } from 'react-native';
import { router } from 'expo-router';

const paymentBlikSuccess = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.replace('/');
    }, 2000);
  }, []);

  return (
    <View className='w-full h-full flex items-center justify-center'>
      {loading && (
        <>
          <ActivityIndicator
            //visibility of Overlay Loading Spinner
            visible={loading}
            //Text with the Spinner
            textContent={'Loading...'}
            //Text style of the Spinner Text
          />
          <LargeText>
            Transakcja została zakończona pomyślnie, następuje przekierowanie do
            strony głownej
          </LargeText>
        </>
      )}
    </View>
  );
};

export default paymentBlikSuccess;
