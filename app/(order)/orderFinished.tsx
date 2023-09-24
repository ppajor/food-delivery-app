import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { LargeText } from '../../components/typography/Typography';

const orderFinished = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <View className='w-full h-full flex items-center justify-center'>
      {loading && (
        <ActivityIndicator
          //visibility of Overlay Loading Spinner
          visible={loading}
          //Text with the Spinner
          textContent={'Loading...'}
          //Text style of the Spinner Text
        />
      )}

      {!loading && (
        <LargeText>
          Dziękujemy za dokonanie zamówienia, kurier Andryj Szewczenko jest juz
          w drodze
        </LargeText>
      )}
    </View>
  );
};

export default orderFinished;
