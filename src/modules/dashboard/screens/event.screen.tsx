import React, {useRef, useState} from 'react';
import {Styles} from '../styles/event.styles';
import {
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  HeaderBackButton,
  SearchInputField,
} from '../../../core-components/atoms';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {allCategories} from '../../../core-constants/product-categories';
import {LocalSvg} from 'react-native-svg/css';
import {allProductsList} from '../../../core-constants/all-products';
import ItemList from '../../../core-components/atoms/itemList/ItemList.component';
import {colors} from '../../../core-constants';
import {LineChart} from 'react-native-chart-kit';
import TabButtons from '../../../core-components/atoms/tabButtons/TabButtons.component';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Slider} from '@miblanchard/react-native-slider';
import SwipeButton from 'rn-swipe-button';

interface EventProps {
  navigation?: NavigationProp<ParamListBase>;
}

const Event = (props: EventProps) => {
  const [selectedTime, setSelectedTime] = useState(0);
  const [data1, setData1] = useState([50, 45, 56, 51, 64, 36, 65, 80]);
  const [data2, setData2] = useState([50, 55, 46, 49, 38, 80, 60, 40]);
  const refRBSheet = useRef([]);
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <>
      <HeaderBackButton title={'Event 8625'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Card 1 */}
        <View style={Styles.cardStyle}>
          <View style={Styles.padVert}>
            <LocalSvg
              height={50}
              width={50}
              asset={require('../../../../assets/coffee.svg')}
            />
          </View>
          <Text style={Styles.fontBold}>
            {'Kolkata to win the match vs Mumbai?'}
          </Text>
          <View style={Styles.card1List}>
            <View style={Styles.listView1}>
              <Text style={Styles.textTitle}>{'IPL'}</Text>
            </View>
            <View style={Styles.listView1}>
              <Text style={Styles.textTitle}>{'T20'}</Text>
            </View>
            <View style={Styles.listView1}>
              <Text style={Styles.textTitle}>{'Cricket'}</Text>
            </View>
          </View>
          <View style={Styles.greenLine}>
            <View style={Styles.whiteWord}>
              <Text style={Styles.textGreen}>{'H2H'}</Text>
            </View>
            <Text style={Styles.textGreen}>
              {'Last 5 T20 : Kolkata 4, Mumbai 1, DRAW 0'}
            </Text>
          </View>
        </View>
        {/* Chart Card */}
        <View
          style={{
            backgroundColor: colors.white,
            marginHorizontal: 20,
            marginTop: 20,
            borderRadius: 10,
          }}>
          <Text
            style={{
              paddingHorizontal: 15,
              paddingVertical: 15,
              fontWeight: 'bold',
              color: colors.black,
            }}>
            {'THE MARKET TREND /CHART'}
          </Text>
          <View
            style={{
              marginLeft: -20,
            }}>
            <LineChart
              withVerticalLines
              fromZero
              yAxisInterval={10}
              bezier
              transparent
              withShadow={false}
              data={{
                labels: [' 01:30 AM', ' 01:30 AM', ' 01:30 AM', ' 01:30 AM'],
                datasets: [
                  {
                    data: data1,
                    color: () => colors.darkBlue,
                    strokeWidth: 1.5,
                  },
                  {
                    data: data2,
                    color: () => colors.green,
                    strokeWidth: 1.5,
                  },
                ],
                legend: ['Yes', 'No'],
              }}
              width={Dimensions.get('window').width - 45}
              height={200}
              chartConfig={{
                labelColor: () => colors.darkGray,
                decimalPlaces: 0,
                color: () => colors.darkBlue,
              }}
              style={{
                borderRadius: 16,
              }}
              withDots={false}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              paddingBottom: 15,
            }}>
            <TouchableOpacity
              onPress={() => {
                setSelectedTime(0);
                setData1([50, 47, 53, 50, 53, 52, 54, 51, 72]);
                setData2([50, 58, 49, 57, 46, 60, 50, 40, 46]);
              }}
              style={{
                backgroundColor:
                  selectedTime != 0 ? colors.black : colors.white,
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 10,
                borderColor: selectedTime === 0 ? colors.black : colors.white,
                borderWidth: 0.5,
              }}>
              <Text
                style={{
                  color: selectedTime != 0 ? colors.white : colors.black,
                  fontWeight: 'bold',
                }}>
                {'1 h'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSelectedTime(1);
                setData1([50, 49, 53, 80, 53, 22, 54, 21, 72]);
                setData2([50, 18, 49, 47, 46, 80, 50, 20, 46]);
              }}
              style={{
                backgroundColor:
                  selectedTime != 1 ? colors.black : colors.white,
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 10,
                borderColor: selectedTime === 1 ? colors.black : colors.white,
                borderWidth: 0.5,
              }}>
              <Text
                style={{
                  color: selectedTime != 1 ? colors.white : colors.black,
                  fontWeight: 'bold',
                }}>
                {'3 h'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSelectedTime(2);
                setData1([50, 29, 53, 30, 63, 22, 54, 21, 72]);
                setData2([50, 48, 19, 47, 26, 40, 50, 20, 46]);
              }}
              style={{
                backgroundColor:
                  selectedTime != 2 ? colors.black : colors.white,
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 10,
                borderColor: selectedTime === 2 ? colors.black : colors.white,
                borderWidth: 0.5,
              }}>
              <Text
                style={{
                  color: selectedTime != 2 ? colors.white : colors.black,
                  fontWeight: 'bold',
                }}>
                {'12 h'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSelectedTime(3);
                setData1([50, 45, 56, 51, 64, 36, 65, 80]);
                setData2([50, 55, 46, 49, 38, 80, 60, 40]);
              }}
              style={{
                backgroundColor:
                  selectedTime != 3 ? colors.black : colors.white,
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 10,
                borderColor: selectedTime === 3 ? colors.black : colors.white,
                borderWidth: 0.5,
              }}>
              <Text
                style={{
                  color: selectedTime != 3 ? colors.white : colors.black,
                  fontWeight: 'bold',
                }}>
                {'All time'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Activity Order Book */}
        <View
          style={{
            backgroundColor: colors.white,
            borderRadius: 10,
            marginHorizontal: 20,
            marginVertical: 20,
          }}>
          <View style={{flexDirection: 'row', paddingTop: 15}}>
            <TouchableOpacity
              style={{
                borderBottomWidth: 2,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}>
              <Text
                style={{
                  paddingHorizontal: 15,
                  color: colors.black,
                  fontWeight: 'bold',
                }}>
                {'ACTIVITY'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  paddingHorizontal: 15,
                  color: colors.black,
                  fontWeight: 'bold',
                }}>
                {'ORDER BOOK'}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                marginHorizontal: 15,
                paddingTop: 20,
              }}>
              <View>
                <View style={{alignItems: 'center'}}>
                  <LocalSvg asset={require('../../../../assets/person.svg')} />
                </View>
                <Text style={{color: colors.black, fontWeight: 'bold'}}>
                  {'Hella'}
                </Text>
              </View>
              <View
                style={{flex: 1, marginHorizontal: 15, alignItems: 'center'}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View
                    style={{
                      flex: 0.8,
                      height: 20,
                      backgroundColor: colors.darkBlue,
                      borderTopLeftRadius: 6,
                      borderBottomLeftRadius: 6,
                    }}>
                    <Text
                      style={{
                        color: colors.black,
                        fontWeight: 'bold',
                        left: 5,
                      }}>
                      {'₹ 9'}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 0.2,
                      height: 20,
                      backgroundColor: colors.black,
                      borderTopRightRadius: 6,
                      borderBottomRightRadius: 6,
                    }}
                  />
                </View>
                <Text>{'a few second ago'}</Text>
              </View>
              <View>
                <View style={{alignItems: 'center'}}>
                  <LocalSvg asset={require('../../../../assets/person.svg')} />
                </View>
                <Text style={{color: colors.black, fontWeight: 'bold'}}>
                  {'Roblin'}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                marginHorizontal: 15,
                paddingTop: 20,
              }}>
              <View>
                <View style={{alignItems: 'center'}}>
                  <LocalSvg asset={require('../../../../assets/person.svg')} />
                </View>
                <Text style={{color: colors.black, fontWeight: 'bold'}}>
                  {'Hella'}
                </Text>
              </View>
              <View
                style={{flex: 1, marginHorizontal: 15, alignItems: 'center'}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View
                    style={{
                      flex: 0.5,
                      height: 20,
                      backgroundColor: colors.lightBlue,
                      borderTopLeftRadius: 6,
                      borderBottomLeftRadius: 6,
                      left: 5,
                    }}>
                    <Text style={{color: colors.darkBlue, fontWeight: 'bold'}}>
                      {'₹ 5'}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 0.5,
                      height: 20,
                      backgroundColor: colors.lightOrange,
                      borderTopRightRadius: 6,
                      borderBottomRightRadius: 6,
                    }}>
                    <Text
                      style={{
                        color: colors.orange,
                        fontWeight: 'bold',
                        textAlign: 'right',
                        right: 5,
                      }}>
                      {'₹ 5'}
                    </Text>
                  </View>
                </View>
                <Text>{'a few second ago'}</Text>
              </View>
              <View>
                <View style={{alignItems: 'center'}}>
                  <LocalSvg asset={require('../../../../assets/person.svg')} />
                </View>
                <Text style={{color: colors.black, fontWeight: 'bold'}}>
                  {'Roblin'}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                marginHorizontal: 15,
                paddingTop: 20,
              }}>
              <View>
                <View style={{alignItems: 'center'}}>
                  <LocalSvg asset={require('../../../../assets/person.svg')} />
                </View>
                <Text style={{color: colors.black, fontWeight: 'bold'}}>
                  {'Hella'}
                </Text>
              </View>
              <View
                style={{flex: 1, marginHorizontal: 15, alignItems: 'center'}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View
                    style={{
                      flex: 0.2,
                      height: 20,
                      backgroundColor: colors.lightBlue,
                      borderTopLeftRadius: 6,
                      borderBottomLeftRadius: 6,
                    }}>
                    <Text
                      style={{
                        color: colors.darkBlue,
                        fontWeight: 'bold',
                        left: 5,
                      }}>
                      {'₹ 2'}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 0.8,
                      height: 20,
                      backgroundColor: colors.lightOrange,
                      borderTopRightRadius: 6,
                      borderBottomRightRadius: 6,
                    }}>
                    <Text
                      style={{
                        color: colors.orange,
                        fontWeight: 'bold',
                        textAlign: 'right',
                        right: 5,
                      }}>
                      {'₹ 8'}
                    </Text>
                  </View>
                </View>
                <Text>{'a few second ago'}</Text>
              </View>
              <View>
                <View style={{alignItems: 'center'}}>
                  <LocalSvg asset={require('../../../../assets/person.svg')} />
                </View>
                <Text style={{color: colors.black, fontWeight: 'bold'}}>
                  {'Roblin'}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                marginHorizontal: 15,
                paddingTop: 20,
              }}>
              <View>
                <View style={{alignItems: 'center'}}>
                  <LocalSvg asset={require('../../../../assets/person.svg')} />
                </View>
                <Text style={{color: colors.black, fontWeight: 'bold'}}>
                  {'Hella'}
                </Text>
              </View>
              <View
                style={{flex: 1, marginHorizontal: 15, alignItems: 'center'}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View
                    style={{
                      flex: 0.4,
                      height: 20,
                      backgroundColor: colors.lightBlue,
                      borderTopLeftRadius: 6,
                      borderBottomLeftRadius: 6,
                    }}>
                    <Text
                      style={{
                        color: colors.darkBlue,
                        fontWeight: 'bold',
                        left: 5,
                      }}>
                      {'₹ 4'}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 0.6,
                      height: 20,
                      backgroundColor: colors.lightOrange,
                      borderTopRightRadius: 6,
                      borderBottomRightRadius: 6,
                    }}>
                    <Text
                      style={{
                        color: colors.orange,
                        fontWeight: 'bold',
                        right: 5,
                        textAlign: 'right',
                      }}>
                      {'₹ 6'}
                    </Text>
                  </View>
                </View>
                <Text>{'a few second ago'}</Text>
              </View>
              <View>
                <View style={{alignItems: 'center'}}>
                  <LocalSvg asset={require('../../../../assets/person.svg')} />
                </View>
                <Text style={{color: colors.black, fontWeight: 'bold'}}>
                  {'Roblin'}
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 8,
              paddingVertical: 8,
              alignItems: 'center',
              marginHorizontal: 15,
              marginVertical: 15,
            }}>
            <Text style={{color: colors.black, fontWeight: 'bold'}}>
              {'Show all ->'}
            </Text>
          </TouchableOpacity>
        </View>
        {/* About the Event */}
        <View
          style={{
            backgroundColor: colors.white,
            marginHorizontal: 20,
            paddingHorizontal: 20,
            paddingTop: 10,
          }}>
          <Text
            style={{
              color: colors.black,
              fontWeight: 'bold',
              fontSize: 20,
              marginBottom: 20,
            }}>
            {'About the event'}
          </Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 0.5}}>
              <Text>{'Traders'}</Text>
              <Text style={{color: colors.black, fontWeight: 'bold'}}>
                {'₹ 47.12k'}
              </Text>
            </View>
            <View style={{flex: 0.5}}>
              <Text>{'Traders'}</Text>
              <Text style={{color: colors.black, fontWeight: 'bold'}}>
                {'₹ 47.12k'}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 15,
              paddingBottom: 15,
              borderBottomWidth: 1,
              borderStyle: 'dashed',
            }}>
            <View style={{flex: 0.5}}>
              <Text>{'Started at'}</Text>
              <Text style={{color: colors.black, fontWeight: 'bold'}}>
                {'Jun 19, 2024 3:40 PM'}
              </Text>
            </View>
            <View style={{flex: 0.5}}>
              <Text>{'Ending at'}</Text>
              <Text style={{color: colors.black, fontWeight: 'bold'}}>
                {'Jun 19, 2024 3:40 PM'}
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderStyle: 'dashed',
              paddingTop: 10,
              paddingBottom: 10,
            }}>
            <Text style={{color: colors.black, fontWeight: 'bold'}}>
              {'Overview'}
            </Text>
            <Text style={{color: colors.black}}>
              {'Information about event'}
            </Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderStyle: 'dashed',
              paddingTop: 10,
              paddingBottom: 10,
            }}>
            <Text style={{color: colors.black, fontWeight: 'bold'}}>
              {'Source of Truth'}
            </Text>
            <Text style={{color: colors.black}}>
              {'Information about source of truth'}
            </Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderStyle: 'dashed',
              paddingTop: 10,
              paddingBottom: 10,
            }}>
            <Text style={{color: colors.black, fontWeight: 'bold'}}>
              {'Rules'}
            </Text>
            <Text style={{color: colors.black}}>{'Terms and conditions '}</Text>
          </View>
          <Text>{'KEEP TRADING'}</Text>
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

export default Event;
