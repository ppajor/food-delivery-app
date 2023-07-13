import React, { useRef, useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { useSearchBox } from 'react-instantsearch-hooks';
import globalStyles from '../../lib/globalStyles';

export function SearchBox(props) {
  const { query, refine } = useSearchBox(props);
  const [inputValue, setInputValue] = useState(query);
  const inputRef = useRef(null);

  function setQuery(newQuery) {
    setInputValue(newQuery);
    refine(newQuery);
  }

  // Track when the InstantSearch query changes to synchronize it with
  // the React state.
  // We bypass the state update if the input is focused to avoid concurrent
  // updates when typing.
  if (query !== inputValue && !inputRef.current?.isFocused()) {
    setInputValue(query);
  }

  return (
    <View style={globalStyles.shadow}>
      <TextInput
        className='h-12 text-base p-3 bg-[#fff]'
        ref={inputRef}
        style={[globalStyles.shadow, { borderRadius: 4 }]}
        value={inputValue}
        onChangeText={setQuery}
        clearButtonMode='while-editing'
        autoCapitalize='none'
        autoCorrect={false}
        spellCheck={false}
        placeholder='Poszukaj czegoś dla siebie...'
        autoCompleteType='off'
        placeholderTextColor='#c9c9c9'
      />
    </View>
  );
}
