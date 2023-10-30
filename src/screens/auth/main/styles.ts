import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#667085',
  },
  mainLogo: {
    width: width,
    height: height / 2,
  },
  buttonsContainer: {
    marginTop: 120,
    flexDirection: 'row',
    gap: 14,
  },
  signInButton: {
    backgroundColor: '#4461F2',
    paddingHorizontal: 35,
    paddingVertical: 17,
    borderRadius: 30,
  },
  signInButtonText: { color: '#ffffff', fontWeight: 'bold' },
  signOnButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 35,
    paddingVertical: 17,
    borderRadius: 30,
  },
  signOnButtonText: { color: '#4461F2', fontWeight: 'bold' },
});
