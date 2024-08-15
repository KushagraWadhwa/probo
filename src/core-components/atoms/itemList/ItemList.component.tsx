import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Styles} from './ItemList.styles';
import {drink, snickersChco} from '../../../../assets';
import {LocalSvg} from 'react-native-svg/css';

interface listData {
  id?: number;
  title?: string;
  image?: any;
  price?: string;
  weight?: string;
}

interface ItemListProps {
  itemListData?: Array<listData>;
  search?: boolean;
}

const ItemList = (props: ItemListProps) => {
  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={props?.itemListData}
        style={Styles.listStyles}
        contentContainerStyle={Styles.flatListContainer}
        renderItem={({item, index}) => {
          return (
            <View style={Styles.viewMain} key={index}>
              <View style={Styles.leftContainer}>
                <View>
                  <Text style={Styles.title}>{item?.title}</Text>
                </View>
                <View style={Styles.leftBottom}>
                  <Text style={Styles.weight}>{item?.weight}</Text>
                  <Text style={Styles.price}>{item?.price}</Text>
                </View>
              </View>
              <View>
                <Image
                  style={Styles.image}
                  source={props?.search ? snickersChco : drink}
                />
                <TouchableOpacity style={Styles.addButon}>
                  <Text style={Styles.addText}>{'+ Add'}</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </>
  );
};

export default ItemList;
