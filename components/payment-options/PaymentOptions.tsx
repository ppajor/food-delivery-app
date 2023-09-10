import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { BodyText, MediumHeading } from '../typography/Typography';
import { AntDesign } from '@expo/vector-icons';
import globalStyles from '../../lib/globalStyles';
import { PaymentOption } from '../../lib/types';
import AddCreditCardModal from '../add-credit-card-modal/AddCreditCardModal';

type PaymentOptionsProps = {
  selected: PaymentOption | null;
  setOption: (option: any) => void;
};

const PaymentOptions = ({ selected, setOption }: PaymentOptionsProps) => {
  const [creditCardModalOpen, setCreditCardModalOpen] = useState(false);

  const options = [
    {
      id: 1,
      name: 'creditCard',
      icon: <AntDesign name='creditcard' size={24} color='#FF8D28' />,
      text: 'Dodaj kartę kredytową',
    },
    {
      id: 2,
      name: 'blik',
      icon: <AntDesign name='creditcard' size={24} color='#FF8D28' />,
      text: 'Blik',
    },
    {
      id: 3,
      name: 'onDelivery',
      icon: <AntDesign name='creditcard' size={24} color='#FF8D28' />,
      text: 'Płatność przy odbiorze',
    },
  ];

  const handleOptionClick = (name: PaymentOption) => {
    setOption(name);
  };

  return (
    <View className='px-1'>
      <MediumHeading customClassName='pb-4'>Opcje płatności</MediumHeading>
      <View style={{ gap: 8 }}>
        {options.map((option) => (
          <Pressable
            key={option.id}
            onPress={() => {
              handleOptionClick(option.name as PaymentOption);
              option.name === 'creditCard' && setCreditCardModalOpen(true);
            }}
          >
            <View
              style={[
                globalStyles.shadow,
                {
                  gap: 8,
                  backgroundColor:
                    selected === option.name ? '#f2f2f2' : '#fff',
                },
              ]}
              className='flex flex-row items-center h-[42px] rounded-lg px-4'
            >
              {option.icon}
              <BodyText>{option.text}</BodyText>
            </View>
          </Pressable>
        ))}
      </View>
      <AddCreditCardModal
        visibility={creditCardModalOpen}
        closeCreditCardModal={() => setCreditCardModalOpen(false)}
      />
    </View>
  );
};

export default PaymentOptions;
