import React, { useRef, useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { useSearchBox } from 'react-instantsearch-hooks';

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
    <View className=''>
      <TextInput
        className='h-12 text-base p-3 bg-[#fff]'
        ref={inputRef}
        style={styles.input}
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

const styles = StyleSheet.create({
  input: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});
