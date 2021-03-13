import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    opacity: 0.95,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 5,
    paddingVertical: 10,
  },
  personIcon: {},
  image: {
    height: 50,
    width: 100,
    resizeMode: 'cover',
  },
  midContainer: {
    marginRight: 40,
  },
  price: {
    fontSize: 12,
    paddingLeft: 10,
    fontWeight: 'bold',
  },
  rightContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  time: {
    fontSize: 12,
    paddingTop: 5,
    color: '#5e5d5c',
  },
  text: {
    fontWeight: 'bold',
  },
});
