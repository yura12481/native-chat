import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#667085',
  },
  keyboardContainer: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  informationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  intormationText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  intormationButtonText: {
    color: '#3443eb',
    fontWeight: 'bold',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
