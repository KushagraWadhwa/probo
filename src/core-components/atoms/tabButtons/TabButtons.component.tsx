import {Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {colors} from '../../../core-constants';

export enum CustomTab {
  Tab1 = 'Tab1',
  Tab2 = 'Tab2',
}

interface TabButtonProps {
  onSelectTab?: (btnVal: number) => void;
  selectedTab?: number;
}

const TabButtons = (props: TabButtonProps) => {
  const [selectedTab, setSelectedTab] = useState<CustomTab>(CustomTab.Tab1);

  const tabPointX = useSharedValue(props?.selectedTab === 1 ? 180 : 360);

  const handlePress = (index: number) => {
    if (index === 1) {
      setSelectedTab(CustomTab.Tab1);
    } else {
      setSelectedTab(CustomTab.Tab2);
    }
  };

  useEffect(() => {
    if (props?.selectedTab === 1) {
      setSelectedTab(CustomTab.Tab1);
    } else {
      setSelectedTab(CustomTab.Tab2);
    }
  }, [props?.selectedTab]);

  const onTabPress = (index: number) => {
    tabPointX.value = withTiming(180 * index, {}, () => {
      runOnJS(handlePress)(index);
    });
    // handlePress(index);
  };

  const animatedStyle = useAnimatedStyle(() => {
    const width = 270;
    return {
      transform: [
        {
          translateX: tabPointX.value - width,
        },
      ],
    };
  });

  return (
    <View
      style={{
        borderRadius: 25,
        justifyContent: 'center',
        marginHorizontal: 25,
        borderWidth: 1,
        width: 360,
        height: 45,
      }}>
      <Animated.View
        style={[
          animatedStyle,
          {
            position: 'absolute',
            backgroundColor:
              selectedTab === CustomTab.Tab1 ? colors.darkBlue : colors.red,
            borderRadius: 25,
            width: 180,
            height: 45,
            alignSelf: 'center',
          },
        ]}
      />
      <View
        style={[
          {
            flexDirection: 'row',
          },
        ]}>
        <TouchableOpacity
          onPress={() => {
            props?.onSelectTab && props?.onSelectTab(1);
            onTabPress(1);
          }}
          style={{
            flex: 1,
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              textAlign: 'center',
              color:
                selectedTab === CustomTab.Tab1 ? colors.white : colors.black,
            }}>
            {'Yes ₹ 5.3'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props?.onSelectTab && props?.onSelectTab(2);
            onTabPress(2);
          }}
          style={{
            flex: 1,
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              textAlign: 'center',
              color:
                selectedTab === CustomTab.Tab2 ? colors.white : colors.black,
            }}>
            {'No ₹ 4.7'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TabButtons;
