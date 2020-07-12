import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#55b9f3',
  },
  formContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerFormShadow: {
    borderRadius: 50,
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
    borderRadius: 50,
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
    padding: 30,
  },
  formInput: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
    marginVertical: 8,
  },
  formSubmit: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
    marginVertical: 8,
    width: 100,
    textAlign: 'center',
  },
});
