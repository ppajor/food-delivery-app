import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { LargeText } from '../../components/typography/Typography';
import { router } from 'expo-router';

const paymentBlikConfirmation = () => {
  //TODO: create reusable component for activity indicator (it is not orderFinished copy)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.replace('/paymentBlikSuccess');
    }, 5000);
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
          <LargeText>Potwierdź transakcję w aplikacji mobilnej banku</LargeText>
        </>
      )}
    </View>
  );
};

export default paymentBlikConfirmation;
