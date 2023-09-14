import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    width: '100%',
    backgroundColor: 'blueviolet',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  container: {
    backgroundColor: 'white',
    width: '100%',
    marginTop: 30,
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%'
},
  title: {
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'purple',
    margin: 10
  },
  subTitle: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'red',
    margin: 10
  },
  titleLogin: {
    fontSize: 20,
    alignSelf: 'center',
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
    width: '90%',
    margin: 10,
    padding: 5,
  },
  button: {
    backgroundColor: 'blueviolet',
    width: '90%',
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
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 10,
    alignContent: 'stretch',
    alignSelf: 'auto'
  },

  lembrar: {
    marginRight: 10
  },

  logo: {
    width: 65,
    height: 55,
  }
});