import React, {useRef, useState} from 'react';
import {Styles} from '../styles/product-categories.styles';
import {
  Dimensions,
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
import {Slider} from '@miblanchard/react-native-slider';
import SwipeButton from 'rn-swipe-button';

interface ProductCategoriesProps {
  navigation?: NavigationProp<ParamListBase>;
}

const ProductCategories = (props: ProductCategoriesProps) => {
  const refRBSheet = useRef([]);
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedTab, setSelectedTab] = useState(1);

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
                        onPress={() => {
                          setSelectedTab(1);
                          refRBSheet?.current?.open();
                        }}
                        style={Styles.button1}>
                        <Text style={Styles.btnTitle1}>{'Yes ₹ 5.3'}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          setSelectedTab(2);
                          refRBSheet?.current?.open();
                        }}
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
            height: 400,
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
        <TabButtons
          selectedTab={selectedTab}
          onSelectTab={btnSelect => {
            if (btnSelect === 1) {
              setSelectedTab(1);
            } else {
              setSelectedTab(2);
            }
          }}
        />
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
          <View
            style={{
              borderBottomWidth: 0.5,
              borderStyle: 'dashed',
              flexDirection: 'row',
              justifyContent: 'center',
              paddingVertical: 10,
              marginBottom: 17,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: colors.gray,
                height: 25,
                width: 25,
                alignItems: 'center',
                marginTop: 7,
                borderRadius: 8,
              }}
              onPress={() => {
                if (sliderValue > 0) {
                  setSliderValue(parseFloat(sliderValue.toString()) - 1);
                }
              }}>
              <Text style={{fontWeight: 'bold'}}>{'-'}</Text>
            </TouchableOpacity>
            <View style={{flex: 1, marginHorizontal: 15}}>
              <Slider
                maximumValue={100}
                minimumValue={0}
                trackStyle={{height: 10, borderRadius: 10}}
                value={sliderValue}
                onValueChange={value => setSliderValue(value)}
              />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: colors.gray,
                height: 25,
                width: 25,
                alignItems: 'center',
                marginTop: 7,
                borderRadius: 8,
              }}
              onPress={() => {
                if (sliderValue < 100) {
                  setSliderValue(parseFloat(sliderValue.toString()) + 1);
                }
              }}>
              <Text style={{fontWeight: 'bold'}}>{'+'}</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 10,
            }}>
            <View>
              <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
                {'₹ 5.3'}
              </Text>
              <Text>{'You put'}</Text>
            </View>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: 'green',
                }}>
                {'₹ 10'}
              </Text>
              <Text>{'You get'}</Text>
            </View>
          </View>
        </View>
        <View style={{paddingHorizontal: 15, alignItems: 'center'}}>
          <SwipeButton
            // disabled={cartData?.length <= 0}
            titleColor="white"
            railFillBackgroundColor={
              selectedTab === 1 ? colors.darkBlue : colors.red
            }
            // railStyles={Styles.buttonRailStyle}
            railBackgroundColor={
              selectedTab === 1 ? colors.darkBlue : colors.red
            }
            // railBorderColor={colorBg}
            railFillBorderColor="transparent"
            height={62}
            width={Dimensions.get('screen').width - 30}
            title={'Swipe for Yes'}
            shouldResetAfterSuccess
            thumbIconBackgroundColor="white"
            thumbIconBorderColor="white"
          />
        </View>
      </RBSheet>
    </>
  );
};

export default ProductCategories;
