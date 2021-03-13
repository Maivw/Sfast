import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'relative'
  },
  circle: {
    width: 5,
    height:5,
    borderRadius:2.5,
    backgroundColor: 'yellow',
    marginLeft: 20
  },
  image: {
    top: -250,
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    position: 'absolute',
  },
  innerContainer: {
    backgroundColor: '#111',
    position: 'absolute',
    top: '30%',
    left: '0%',
    height:'100%',
    width: '100%',
    borderRadius: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  
  },
  messageRowWrapper: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal:30,
  },
  messageRow: {
    color: '#fff',
    paddingVertical: 15,
    paddingLeft: 20,
  },
  doMoreRow: {
    color: '#f7f7f7',
    paddingVertical: 15,
    paddingLeft: 20,
  },
  makeMoneyRow:{
    color: '#fff',
    fontSize: 14,
    paddingVertical: 15,
    paddingLeft: 20,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  name: {
    color: '#fff',
    fontSize: 24,
    marginLeft: 20
  },
  wrapper:{
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginHorizontal: 30
  },
  userImage: {
    marginLeft: 20,
    width: 60,
    height:60,
    borderRadius: 30,
    backgroundColor: '#eeeeee',
    alignItems: 'center'
  }, 
  userIcon: {
    elevation: 3,
    marginTop: 10,
  },
  userRow:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    marginLeft: 20,
    marginTop: 50,
  },

});
