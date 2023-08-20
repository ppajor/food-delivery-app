import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  shadow: {
    shadowColor: '#9A9A9A',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  modalContainer: {
    paddingHorizontal: 16,
    paddingVertical: 40,
  },
});

export default globalStyles;
