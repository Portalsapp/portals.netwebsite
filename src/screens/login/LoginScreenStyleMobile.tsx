import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#55b9f3',
  },
  outerFormShadow: {
    borderRadius: 30,
    // background: #55b9f3;
    // box-shadow:  20px 20px 60px #489dcf,
    //             -20px -20px 60px #62d5ff;
    shadowColor: '#489dcf',
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 0.8,
    shadowRadius: 50,
    elevation: 20,
  },
  innerFormShadow: {
    borderRadius: 30,
    shadowColor: '#62d5ff',
    shadowOffset: {
      width: -20,
      height: -20,
    },
    shadowOpacity: 0.8,
    shadowRadius: 50,
    elevation: 20,
  },
  formBox: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 500,
  },
  formInput: {
    backgroundColor: 'white',
    height: 50,
    padding: 10,
    borderRadius: 4,
    marginVertical: 8,
    width: '80%',
    fontSize: 16,
    fontFamily: 'OpenSans_300Light',
    color: 'black',
  },
  titleText: {
    fontSize: 48,
    fontFamily: 'OpenSans_300Light',
    color: 'white',
  },
  submitButtonContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  submitButtonText: {
    fontSize: 16,
    fontFamily: 'OpenSans_400Regular',
  },
});
