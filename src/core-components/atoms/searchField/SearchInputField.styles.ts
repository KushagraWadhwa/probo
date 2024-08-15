import {StyleSheet} from 'react-native';
import {colors} from '../../../core-constants';

export const Styles = StyleSheet.create({
  mainView: {
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  inputText: {
    paddingHorizontal: 10,
    color: colors.black,
    paddingBottom: 10,
  },
  title: {color: colors.golden, paddingHorizontal: 10, paddingTop: 5},
});
