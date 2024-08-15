import {StyleSheet} from 'react-native';
import {colors} from '../../../core-constants';

export const Styles = StyleSheet.create({
  listStyles: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
    marginTop: 10,
    paddingTop: 5,
  },
  viewMain: {
    flexDirection: 'row',
    backgroundColor: '#F1EFEF',
    borderRadius: 8,
    marginVertical: 5,
    marginHorizontal: 10,
    justifyContent: 'space-between',
    padding: 10,
  },
  flatListContainer: {paddingBottom: 10},
  leftContainer: {width: '70%', justifyContent: 'space-between'},
  title: {fontSize: 14, color: colors.black},
  leftBottom: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  weight: {
    fontSize: 16,
    color: colors.black,
    fontWeight: 'bold',
    lineHeight: 19.36,
  },
  price: {
    fontSize: 16,
    color: colors.black,
    fontWeight: 'bold',
    lineHeight: 19.36,
  },
  image: {width: 68, height: 68},
  addButon: {
    marginTop: 10,
    backgroundColor: colors.white,
    width: 68,
    borderRadius: 4,
  },
  addText: {
    textAlign: 'center',
    color: colors.lightGreen,
    fontSize: 12,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
});
