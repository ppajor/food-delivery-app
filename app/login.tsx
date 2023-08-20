import { Button, Pressable, TextInput, View } from 'react-native';
import {
  BigHeading,
  BodyText,
  LargeText,
  LogoFont,
  MediumHeading,
  SmallText,
} from '../components/typography/Typography';
import Constants from 'expo-constants';
import { Formik } from 'formik';
import { Link, Redirect } from 'expo-router';
import * as yup from 'yup';
import { useState } from 'react';

export default function Login() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Wpisz właściwy email')
      .required('Email jest wymagany'),
    password: yup.string().required('Hasło jest wymagane'),
  });

  if (isSubmitted) return <Redirect href='/home' />;

  return (
    <View
      style={{ marginTop: Constants.statusBarHeight, flex: 1, borderWidth: 2 }}
      className='bg-white'
    >
      <View className='flex h-full flex-col p-12 '>
        <BigHeading customClassName='mb-5'>Zaloguj się</BigHeading>
        <SmallText customClassName='text-gray'>
          Utwórz konto by móc korzystać z naszej szerokiej oferty
        </SmallText>
        <View style={{ flex: 1 }} className='mt-8 h-full'>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => setIsSubmitted(true)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View style={{ flex: 1 }} className='flex gap-3'>
                <View className='bg-[#f3f3f3] h-[64px] pt-2 px-7 rounded-lg'>
                  <SmallText customClassName='text-gray'>Email</SmallText>
                  <TextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder='Wpisz email'
                  />
                </View>
                {errors.email && touched.email && (
                  <SmallText customClassName='text-red-700 mt-1'>
                    {errors.email}
                  </SmallText>
                )}
                <View className='bg-[#f3f3f3] h-[64px] pt-2 px-7 rounded-lg mb-8'>
                  <SmallText customClassName='text-gray'>Hasło</SmallText>
                  <TextInput
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder='Wpisz hasło'
                    secureTextEntry={true}
                  />
                </View>
                {errors.password && touched.password && (
                  <SmallText customClassName='text-red-700 mt-1'>
                    {errors.password}
                  </SmallText>
                )}
                <View className='w-full'>
                  <Pressable
                    onPress={() => handleSubmit()}
                    className='py-3 bg-orange rounded-lg'
                  >
                    <MediumHeading customClassName='text-center text-white'>
                      Zaloguj się
                    </MediumHeading>
                  </Pressable>
                </View>

                <View className='mt-4 flex flex-row'>
                  <SmallText customClassName='text-gray'>
                    Nie posiadasz konta?{' '}
                  </SmallText>
                  <Link href='/signup'>
                    <SmallText customClassName='text-orange'>
                      Zarejestruj się!
                    </SmallText>
                  </Link>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </View>
  );
}
