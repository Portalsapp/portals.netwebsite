import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  portalSelectContainer: {
    flex: 0.15,
    justifyContent: 'center',
  },
  portalSelectButtonContainer: {
    paddingHorizontal: 40,
    flexShrink: 1,
  },
  portalSelectButton: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    flexShrink: 10,
    width: '15%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  portalSelectButtonText: {
    fontSize: 36,
    fontFamily: 'OpenSans_300Light',
  },

  portalsArea: {
    flex: 1,
  },
  portalsContainer: {
    padding: 40,
    // flexDirection: 'row',
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  portalsContentContainerStyle: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
  },
});
