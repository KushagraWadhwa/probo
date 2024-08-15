import React, {useState} from 'react';
import {Styles} from '../styles/search.styles';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {SearchInputField} from '../../../core-components/atoms';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {allCategories} from '../../../core-constants/product-categories';
import {LocalSvg} from 'react-native-svg/css';
import {allProductsList} from '../../../core-constants/all-products';
import ItemList from '../../../core-components/atoms/itemList/ItemList.component';

interface SearchProps {
  navigation?: NavigationProp<ParamListBase>;
}

const Search = (props: SearchProps) => {
  const [inputText, setInputText] = useState('');
  return (
    <View style={Styles.mainView}>
      <View style={Styles.searchShadow}>
        <SearchInputField
          value={inputText}
          onChangeText={t => {
            setInputText(t);
          }}
          onClear={() => {
            setInputText('');
          }}
          onBack={() => {
            props?.navigation?.goBack();
          }}
        />
      </View>
      {inputText?.length <= 0 && (
        <ScrollView
          horizontal
          contentContainerStyle={Styles.container}
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled={true}
          alwaysBounceVertical={false}>
          <FlatList
            contentContainerStyle={Styles.flatContainer}
            numColumns={Math.ceil(allCategories.length / 3)}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={allCategories}
            directionalLockEnabled={true}
            alwaysBounceVertical={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity key={index} style={Styles.touchable}>
                  <Text style={Styles.title}>{item.title}</Text>
                  <View style={Styles.iconView}>
                    <LocalSvg asset={item?.icon} />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </ScrollView>
      )}
      {inputText?.length > 0 &&
        allProductsList
          .filter(item => {
            return item?.title
              .toLocaleLowerCase()
              .includes(inputText.toLocaleLowerCase());
          })
          .slice(0, 5)
          .map((item, index) => {
            return (
              <View key={index} style={Styles.inputView}>
                <View style={Styles.justCenter}>
                  <LocalSvg asset={item?.image} style={Styles.imageView} />
                </View>
                <Text numberOfLines={1} style={Styles.titleText}>
                  {item?.title}
                </Text>
              </View>
            );
          })}
      {inputText?.length > 0 &&
      allProductsList.filter(item => {
        return item?.title
          .toLocaleLowerCase()
          .includes(inputText.toLocaleLowerCase());
      })?.length > 0 ? (
        <ItemList
          search
          itemListData={allProductsList.filter(item => {
            return item?.title
              .toLocaleLowerCase()
              .includes(inputText.toLocaleLowerCase());
          })}
        />
      ) : null}
    </View>
  );
};

export default Search;
