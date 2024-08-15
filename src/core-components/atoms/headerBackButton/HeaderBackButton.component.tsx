import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Styles} from './HeaderBackButton.styles';
import {LocalSvg} from 'react-native-svg/css';

interface HeaderBackButtonProps {
  title?: string;
  onPressSearch?: () => void;
}

const HeaderBackButton = (props: HeaderBackButtonProps) => {
  return (
    <View style={Styles.mainView}>
      <View style={Styles.flexRow}>
        <TouchableOpacity style={Styles.justCount}>
          <LocalSvg asset={require('../../../../assets/blackBack.svg')} />
        </TouchableOpacity>
        <View style={Styles.marLeft}>
          <Text style={Styles.titleHead}>
            {props?.title ?? 'Product Categories'}
          </Text>
          <Text style={Styles.subtitleHead}>{'Select any product to add'}</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={props?.onPressSearch}
        style={Styles.justCenter}>
        <LocalSvg asset={require('../../../../assets/blackSearch.svg')} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBackButton;
