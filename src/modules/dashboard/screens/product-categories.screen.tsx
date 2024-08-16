import React, {useRef, useState} from 'react';
import {Styles} from '../styles/product-categories.styles';
import {
  Dimensions,
  FlatList,
  Image,
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
                  <TouchableOpacity
                    onPress={() => {
                      props?.navigation?.navigate('event');
                    }}
                    key={index}
                    style={Styles.matchTouch}>
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
          container: Styles.modalContainer,
        }}
        ref={ref => (refRBSheet.current = ref)}>
        <View style={Styles.modalTitle}>
          <Text style={Styles.fontBold}>
            {'Kolkata wo win the match vs Mumbai'}{' '}
          </Text>
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
        <View style={Styles.modalBox}>
          <View style={Styles.priceTitle}>
            <Text>{'Price'}</Text>
            <View>
              <Text style={Styles.alignRight}>{'₹ 5.3'}</Text>
              <Text style={Styles.alignRight}>{'132045 aty available'}</Text>
            </View>
          </View>
          <View style={Styles.modalSlider}>
            <TouchableOpacity
              style={Styles.minusBox}
              onPress={() => {
                if (sliderValue > 0) {
                  setSliderValue(parseFloat(sliderValue.toString()) - 1);
                }
              }}>
              <Text style={Styles.fontBold}>{'-'}</Text>
            </TouchableOpacity>
            <View style={Styles.sliderView}>
              <Slider
                maximumValue={100}
                minimumValue={0}
                trackStyle={Styles.trackStyle}
                value={sliderValue}
                onValueChange={value => setSliderValue(value)}
              />
            </View>
            <TouchableOpacity
              style={Styles.plusBox}
              onPress={() => {
                if (sliderValue < 100) {
                  setSliderValue(parseFloat(sliderValue.toString()) + 1);
                }
              }}>
              <Text style={Styles.fontBold}>{'+'}</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.amountBox}>
            <View>
              <Text style={Styles.amountValue}>{'₹ 5.3'}</Text>
              <Text>{'You put'}</Text>
            </View>
            <View>
              <Text style={Styles.rightAmountValue}>{'₹ 10'}</Text>
              <Text>{'You get'}</Text>
            </View>
          </View>
        </View>
        <View style={Styles.swipeView}>
          <SwipeButton
            titleColor="white"
            railFillBackgroundColor={
              selectedTab === 1 ? colors.darkBlue : colors.red
            }
            railBackgroundColor={
              selectedTab === 1 ? colors.darkBlue : colors.red
            }
            railFillBorderColor="transparent"
            height={62}
            width={Dimensions.get('screen').width - 30}
            title={'Swipe for Yes'}
            shouldResetAfterSuccess
            thumbIconBackgroundColor="white"
            thumbIconBorderColor="white"
          />
        </View>
        <View style={Styles.balanceView}>
          <Text style={Styles.fontBold}>{'Available Balance : 400.00'}</Text>
        </View>
      </RBSheet>
    </>
  );
};

export default ProductCategories;
