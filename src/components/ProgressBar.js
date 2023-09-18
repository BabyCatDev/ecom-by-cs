import React from 'react';
import { View, Text, StyleSheet, Animated, useWindowDimensions  } from 'react-native';
import { useTheme } from "@react-navigation/native";
import { Icon } from '@rneui/themed';
import dayjs from 'dayjs';

const ProgressBar = ({ obj, income, deadline }) => {
    const { colors } = useTheme();
    const { width } = useWindowDimensions();

    let percent = 0;

    try {
      if (obj == 0 || obj == undefined || income == undefined) {
        percent = 0;
      } else {
        if (obj <= income) {
          percent = 100;
        } else {
          percent = income / obj * 100;
        }
      }
    } catch (e) {
      console.error(e);
      percent = 0;
    }

    const displayWidth = width * percent / 115;

    return (
        <View>
            <View style={{ height: 40 }}>
                <Text style={[styles.textStyle, { color: colors.black }]}>{`But: ${obj || 0}    Revenu: ${income || 0}`}</Text>
                <Text style={[styles.textStyle, { color: colors.black }]}>{`Date Limite: ${dayjs(deadline).format("YYYY-MM-DD") || ''}`}</Text>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Animated.View style={[styles.bar, { width: displayWidth, backgroundColor: colors.primary }]}>
                        <Text style={styles.animatedText}>{percent.toFixed(0)}%</Text>
                    </Animated.View>
                    <Icon
                    size={20}
                    marginLeft={5}
                    name='truck'
                    type='font-awesome-5'
                    color={colors.primary} />
                </View>
            </View>
        </View>
    );
};
  
const styles = StyleSheet.create({
    container: {
        height: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.08,
        shadowRadius: 2.22,
        elevation: 10,
    },
    bar: {
        height: 20,
        borderRadius: 10,
    },
    animatedText: {
        textAlign: 'center',
        color:"#fff"
    },
    textStyle: {
        fontSize: 17,
        fontFamily: "Montserrat-Medium",
        textAlign: "center"
    },
});

export { ProgressBar };