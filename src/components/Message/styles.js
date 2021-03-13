import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  containerMessage: {
    backgroundColor: '#f5ed0a',
    paddingVertical: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#111',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginTop: -160,
  },

  title: {
    fontSize: 18,
    color: '#111',
    fontWeight: 'bold',
    paddingVertical: 10,
    textAlign: 'center',
  },
  text: {
    paddingHorizontal: 20,
    lineHeight: 20,
    color: '#111',
    fontSize: 16,
  },
  learnMore: {
    paddingHorizontal: 20,
    marginTop: 10,
    color: '#111',
    fontWeight: 'bold',
  },
});
