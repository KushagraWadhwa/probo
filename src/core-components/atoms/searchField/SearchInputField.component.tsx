/* eslint-disable react-native/no-inline-styles */
import {
  StyleProp,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {colors} from '../../../core-constants';
import {Styles} from './SearchInputField.styles';
import {LocalSvg} from 'react-native-svg/css';

interface SearchInputProps {
  title?: string;
  onChangeText?: (text: string) => void;
  placeholderText?: string;
  value?: string;
  onBack?: () => void;
  onSearch?: () => void;
  onClear?: () => void;
  viewStyle?: StyleProp<ViewStyle>;
  fontsStyle?: StyleProp<TextStyle>;
}

const SearchInputField = (props: SearchInputProps) => {
  return (
    <View style={[Styles.mainView, props?.viewStyle]}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            props?.onBack && props?.onBack();
          }}
          style={{justifyContent: 'center'}}>
          <LocalSvg asset={require('../../../../assets/back.svg')} />
        </TouchableOpacity>
        <TextInput
          value={props?.value}
          autoCorrect={false}
          style={[
            Styles.inputText,
            {
              paddingTop:
                props?.value?.length > 0 && props?.title?.length > 0 ? 5 : 10,
            },
            props?.fontsStyle,
          ]}
          placeholder={props?.placeholderText ?? 'Enter Username'}
          placeholderTextColor={colors.textDarkGray}
          onChangeText={props?.onChangeText}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        {props?.value?.length >= 1 && (
          <TouchableOpacity
            onPress={() => {
              props?.onClear && props?.onClear();
            }}
            style={{justifyContent: 'center', right: 10}}>
            <LocalSvg asset={require('../../../../assets/cancel.svg')} />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => {
            props?.onSearch && props?.onSearch();
          }}
          style={{justifyContent: 'center'}}>
          <LocalSvg asset={require('../../../../assets/search.svg')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchInputField;
