import React, {useRef} from 'react';
import {Styles} from '../styles/product-categories.styles';
import {
  FlatList,
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  allCategories,
  matchList,
  sportsList,
} from '../../../core-constants/product-categories';
import {LocalSvg} from 'react-native-svg/css';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import RBSheet from 'react-native-raw-bottom-sheet';
import TabButtons from '../../../core-components/atoms/tabButtons/TabButtons.component';
import {colors} from '../../../core-constants';

interface ProductCategoriesProps {
  navigation?: NavigationProp<ParamListBase>;
}

const ProductCategories = (props: ProductCategoriesProps) => {
  const refRBSheet = useRef([]);

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={Styles.mainView}>
        <TouchableWithoutFeedback>
          <View>
            <View style={Styles.headerView}>
              <TouchableOpacity onPress={() => {}}>
                <LocalSvg asset={require('../../../../assets/person.svg')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <LocalSvg asset={require('../../../../assets/coffee.svg')} />
              </TouchableOpacity>
            </View>
            <View style={Styles.horizontalImage}>
              <Image
                style={Styles.imageStyle}
                source={require('../../../../assets/landscapeEx.webp')}
              />
            </View>

            <FlatList
              horizontal
              contentContainerStyle={Styles.flatList}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={sportsList}
              directionalLockEnabled={true}
              alwaysBounceVertical={false}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity key={index} style={Styles.touchableList}>
                    <View style={Styles.alignCenter}>
                      <LocalSvg asset={item?.icon} />
                    </View>
                    <Text style={Styles.title2}>{item.title}</Text>
                  </TouchableOpacity>
                );
              }}
            />

            <Text style={Styles.trending}>{'Trending Now'}</Text>
            <ScrollView
              horizontal
              contentContainerStyle={Styles.container}
              showsHorizontalScrollIndicator={false}
              directionalLockEnabled={true}
              alwaysBounceVertical={false}>
              <FlatList
                contentContainerStyle={Styles.flatContainer}
                numColumns={Math.ceil(allCategories.length / 2)}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={allCategories}
                directionalLockEnabled={true}
                alwaysBounceVertical={false}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity key={index} style={Styles.touchable}>
                      <View style={Styles.iconView}>
                        <LocalSvg asset={item?.icon} />
                      </View>
                      <Text style={Styles.title}>{item.title}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </ScrollView>
            <View style={Styles.matchListView}>
              {matchList.map((item, index) => {
                return (
                  <TouchableOpacity key={index} style={Styles.matchTouch}>
                    <View style={Styles.matchListViewAlign}>
                      <View>
                        <Text style={Styles.matchTextTitle}>{item.title}</Text>
                        <Text style={Styles.subTitle}>{item.subTitle}</Text>
                      </View>
                      <View style={Styles.listIcon}>
                        <LocalSvg asset={item?.icon} />
                      </View>
                    </View>
                    <View style={Styles.buttonView}>
                      <TouchableOpacity
                        onPress={() => refRBSheet?.current?.open()}
                        style={Styles.button1}>
                        <Text style={Styles.btnTitle1}>{'Yes ₹ 5.3'}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => refRBSheet?.current?.open()}
                        style={Styles.button2}>
                        <Text style={Styles.buttonTitle2}>{'No  ₹ 4.7'}</Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      <RBSheet
        customStyles={{
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: 350,
          },
        }}
        ref={ref => (refRBSheet.current = ref)}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
          }}>
          <Text>{'Kolkata wo win the match vs Mumbai'} </Text>
          <View>
            <LocalSvg asset={require('../../../../assets/coffee.svg')} />
          </View>
        </View>
        <TabButtons />
        <View
          style={{
            borderColor: colors.gray,
            borderWidth: 0.6,
            borderRadius: 10,
            margin: 15,
            padding: 10,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>{'Price'}</Text>
            <View>
              <Text style={{textAlign: 'right'}}>{'₹ 5.3'}</Text>
              <Text style={{textAlign: 'right'}}>{'132045 aty available'}</Text>
            </View>
          </View>
          <View style={{borderBottomWidth: 0.5, borderStyle: 'dashed'}}>
            <Text>{'Slider'}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{textAlign: 'center'}}>{'₹ 5.3'}</Text>
              <Text>{'You put'}</Text>
            </View>
            <View>
              <Text style={{textAlign: 'center'}}>{'₹ 5.3'}</Text>
              <Text>{'You get'}</Text>
            </View>
          </View>
        </View>
      </RBSheet>
    </>
  );
};

export default ProductCategories;
