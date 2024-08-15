import {StyleSheet} from 'react-native';
import {colors} from '../../../core-constants';

export const Styles = StyleSheet.create({
  mainView: {
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 13,
    backgroundColor: 'white',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
  },
  inputText: {
    paddingHorizontal: 10,
    color: colors.black,
    paddingBottom: 10,
  },
  title: {color: colors.golden, paddingHorizontal: 10, paddingTop: 5},
  flexRow: {flexDirection: 'row'},
  justCount: {justifyContent: 'center'},
  marLeft: {marginLeft: 15},
  titleHead: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 5,
  },
  subtitleHead: {fontSize: 12, color: colors.black},
  justCenter: {justifyContent: 'center'},
});
