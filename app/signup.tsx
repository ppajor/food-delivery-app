import {
  Button,
  KeyboardAvoidingView,
  Pressable,
  TextInput,
  View,
} from 'react-native';
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
import { Link } from 'expo-router';
import * as yup from 'yup';

export default function Login() {
  const signupValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Wpisz właściwy email')
      .required('Email jest wymagany'),
    phone: yup
      .string()
      .min(8, ({ min }) => `Number must be at least ${min} characters`)
      .required('Telefon jest wymagany'),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Hasło jest wymagane'),
    confirmPassword: yup
      .string()
      .required('Powtórz hasło.')
      .oneOf([yup.ref('password')], 'Hasła muszą być takie same'),
  });

  return (
    <View
      style={{
        marginTop: Constants.statusBarHeight,
        flex: 1,
        borderWidth: 2,
      }}
      className='bg-white'
    >
      <View className='flex h-full flex-col p-12 '>
        <BigHeading customClassName='mb-5'>Utwórz konto</BigHeading>
        <SmallText customClassName='text-gray'>
          Utwórz konto by móc korzystać z naszej szerokiej oferty
        </SmallText>
        <View style={{ flex: 1 }} className='mt-8 h-full'>
          <Formik
            validationSchema={signupValidationSchema}
            initialValues={{
              email: '',
              phone: '+48 ',
              password: '',
              confirmPassword: '',
            }}
            onSubmit={(values) => console.log(values)}
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
                <View className='bg-[#f3f3f3] py-2 px-7 rounded-lg'>
                  <SmallText customClassName='text-gray'>Email</SmallText>
                  <TextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder='Wpisz email'
                  />
                  {errors.email && touched.email && (
                    <SmallText customClassName='text-red-700 mt-1'>
                      {errors.email}
                    </SmallText>
                  )}
                </View>

                <View className='bg-[#f3f3f3] py-2 px-7 rounded-lg'>
                  <SmallText customClassName='text-gray'>Telefon</SmallText>
                  <TextInput
                    keyboardType='numeric'
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    value={values.phone}
                    placeholder='Wpisz numer telefonu'
                  />
                  {errors.phone && touched.phone && (
                    <SmallText customClassName='text-red-700 mt-1'>
                      {errors.phone}
                    </SmallText>
                  )}
                </View>
                <View className='bg-[#f3f3f3] py-2 px-7 rounded-lg '>
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
                <View className='bg-[#f3f3f3] py-2 px-7 rounded-lg mb-8'>
                  <SmallText customClassName='text-gray'>
                    Powtórz hasło
                  </SmallText>
                  <TextInput
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                    placeholder='Powtórz hasło'
                    secureTextEntry={true}
                  />
                </View>
                {errors.confirmPassword && touched.confirmPassword && (
                  <SmallText customClassName='text-red-700 mt-1'>
                    {errors.confirmPassword}
                  </SmallText>
                )}
                <View>
                  <Pressable
                    onPress={() => handleSubmit()}
                    className='py-3 bg-orange rounded-lg'
                  >
                    <MediumHeading customClassName='text-center text-white'>
                      Zarejestruj się
                    </MediumHeading>
                  </Pressable>
                </View>
                <View className='mt-4 flex flex-row'>
                  <SmallText customClassName='text-gray'>
                    Masz juz konto?{' '}
                  </SmallText>
                  <Link href='/login'>
                    <SmallText customClassName='text-orange'>
                      Zaloguj się!
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
