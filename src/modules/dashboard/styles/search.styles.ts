import {StyleSheet} from 'react-native';
import {colors} from '../../../core-constants';

export const Styles = StyleSheet.create({
  mainView: {backgroundColor: 'white', flex: 1},
  searchShadow: {
    margin: 10,
    marginTop: 20,
    marginHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 25,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
  },
  container: {paddingLeft: 10},
  flatContainer: {alignSelf: 'flex-start'},
  touchable: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    marginRight: 7,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d3d3d3',
    flexDirection: 'row',
  },
  title: {color: colors.black},
  iconView: {justifyContent: 'center', marginLeft: 8},
  inputView: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 6,
  },
  justCenter: {justifyContent: 'center'},
  imageView: {width: 26, height: 20},
  titleText: {
    fontSize: 12,
    lineHeight: 18,
    color: colors.black,
    marginLeft: 10,
    maxWidth: '90%',
  },
});
