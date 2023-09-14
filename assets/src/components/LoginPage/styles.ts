import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    /*
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    padding: 20
    */
   marginTop: 30
  },
  subContainer: {
    /* 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%'
    */
},
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
    margin: 10
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    margin: 10
  },
  titleLogin: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'purple',
    margin: 10
  }, 

  input: {
    height: 45,
    alignSelf: 'flex-start',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 20,
    width: '85%',
    margin: 10,
    padding: 5,
  },
  button: {
    backgroundColor: 'blueviolet',
    width: '80%',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 6,
  },
  textButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  salvarSenha: {
    flexDirection: 'row-reverse',
  }
});