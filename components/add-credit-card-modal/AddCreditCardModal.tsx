import React, { useRef, useState } from 'react';
import { CustomModal } from '../custom-modal/CustomModal';
import { BigHeading, MediumHeading } from '../typography/Typography';
import globalStyles from '../../lib/globalStyles';
import { Pressable, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

type AddCreditCardModalProps = {
  visibility: boolean;
  closeCreditCardModal: () => void;
};

const AddCreditCardModal = ({
  visibility,
  closeCreditCardModal,
}: AddCreditCardModalProps) => {
  const addCardValidationSchema = yup.object().shape({
    name: yup.string().required('Dane właściciela karty są wymagane'),
    cardNumber: yup.string().required('Wprowadź numer karty'),
    expirationDate: yup.string().required('Wpisz datę wygaśnięcia'),
    cvc: yup.string().required('Wpisz cvc'),
  });

  const handleSubmit = (values: any) => {
    console.log('vals', values);
  };

  return (
    <CustomModal
      visibility={visibility}
      onClose={() => {
        closeCreditCardModal();
      }}
    >
      <BigHeading customClassName='mb-4'>Dodaj kartę płatniczą</BigHeading>
      <Formik
        validationSchema={addCardValidationSchema}
        initialValues={{
          name: '',
          cardNumber: '',
          expirationDate: '',
          cvc: '',
        }}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={{ gap: 16 }} className='w-full flex flex-row flex-wrap '>
            <TextInput
              className='w-full h-12 text-base p-3 bg-[#fff]'
              style={[globalStyles.shadow, { borderRadius: 4 }]}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              placeholder='Imię i nazwisko właściciela karty'
            />
            <TextInput
              className='w-full h-12 text-base p-3 bg-[#fff]'
              style={[globalStyles.shadow, { borderRadius: 4 }]}
              onChangeText={handleChange('cardNumber')}
              onBlur={handleBlur('cardNumber')}
              value={values.cardNumber}
              keyboardType='numeric'
              placeholder='Numer karty'
            />
            <View className='flex flex-row'>
              <TextInput
                className='w-[50%] h-12 text-base p-3 bg-[#fff]'
                style={[globalStyles.shadow, { borderRadius: 4 }]}
                onChangeText={handleChange('expirationDate')}
                onBlur={handleBlur('expirationDate')}
                value={values.expirationDate}
                keyboardType='numeric'
                placeholder='Numer datę wygaśnięcia karty'
              />
              <TextInput
                className='w-[50%] h-12 text-base p-3 bg-[#fff]'
                style={[globalStyles.shadow, { borderRadius: 4 }]}
                onChangeText={handleChange('cvc')}
                onBlur={handleBlur('cvc')}
                value={values.cvc}
                keyboardType='numeric'
                placeholder='Numer cvc karty'
              />
            </View>
            <Pressable
              onPress={() => handleSubmit()}
              className='w-full py-3 bg-orange rounded-lg'
            >
              <MediumHeading customClassName='text-center text-white'>
                Zapisz dane karty
              </MediumHeading>
            </Pressable>
          </View>
        )}
      </Formik>
    </CustomModal>
  );
};

export default AddCreditCardModal;
