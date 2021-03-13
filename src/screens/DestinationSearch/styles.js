import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
  circle: {
    height: 5,
    width: 5,
    backgroundColor: '#111',
    position: 'absolute',
    top: 30,
    borderRadius:2.5,
    marginLeft: 10
  },
  
  iconWrapper: {
    backgroundColor: '#e3d405',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#d4d4cd',
    padding: 5,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  line: {
    marginLeft: 12,
    width: 1,
    height: 55,
    backgroundColor: '#111',
    position: 'absolute',
    top: 37
  },
  square: {
    height: 5,
    width: 5,
    backgroundColor: '#111',
    position: 'absolute',
    top: 95,
    marginLeft: 10

  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 5,
    alignItems: 'center',
    
  },
  text: {
    color: '#111'
  },
  textInput: {
    backgroundColor: '#eeeeee',
    height: 50,
    marginBottom: 10,
    padding: 10,
    color: '#111',
    borderRadius: 5,
    marginLeft:25
  },
  separator: {
    backgroundColor: '#f7f7f7',
    height:3
  }
});
