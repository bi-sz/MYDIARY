import React, { useCallback } from "react";
import { View } from 'react-native';
import { Header } from '../components/Header/Header';
import { Spacer } from "../components/Spacer";
import { useNavigation } from "@react-navigation/native";

export const DiaryDetailScreen = () =>{
    const navigation = useNavigation();

    const onPressBack = useCallback(()=>{
        navigation.goBack();

    }, [])

    return (
        <View style={{flex:1}}>
            <Header>
                <Header.Group>
                    <Header.Icon iconName='arrow-back' onPress={onPressBack}></Header.Icon>
                    <Spacer space={12} horizontal/>
                    <Header.Title title='DIARY DETAIL'></Header.Title>
                </Header.Group>
            </Header>
        </View>
    )
}