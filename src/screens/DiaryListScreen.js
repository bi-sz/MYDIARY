import React, { useCallback, useState } from "react";
import { FlatList, View, useWindowDimensions } from 'react-native';
import { Header } from '../components/Header/Header';
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RemoteImage } from "../components/RemoteImage";
import { Button } from "../components/Button";
import { Icon } from "../components/Icons";
import { Spacer } from "../components/Spacer";
import { Typography } from "../components/Typography";
export const DiaryListScreen = () =>{
    const navigation = useNavigation();
    const safeAreaInset = useSafeAreaInsets();
    const {width} = useWindowDimensions();

    const onPressSettings = useCallback(()=>{
        navigation.navigate('Setting');

    }, [])

    const onPressAdd=  useCallback(()=>{
        navigation.navigate('AddDiary');
    }, [])

    const [data, setDate] = useState([{
        id:0,
        title:'TITLE_01',
        content:'CONTENT_01',
        createdAt:'2022-01-01',
        updatedAt:'2022-01-01',
        imageUrl:'https://docs.expo.dev/static/images/tutorial/backgroud-image.png'
    },
    {
        id:1,
        title:'TITLE_02',
        content:'CONTENT_02',
        createdAt:'2022-01-01',
        updatedAt:'2022-01-01',
        imageUrl:'https://docs.expo.dev/static/images/tutorial/backgroud-image.png'
    },
    {
        id:2,
        title:'TITLE_03',
        content:'CONTENT_03',
        createdAt:'2022-01-01',
        updatedAt:'2022-01-01',
        imageUrl:null
    }])

    return (
        <View style={{flex:1}}>
            <View style={{flex:1}}>
                <Header>
                    <Header.Group>
                        <Header.Title title='DIARY LIST'></Header.Title>
                    </Header.Group>

                    <Header.Icon iconName='settings' onPress={onPressSettings}></Header.Icon>
                </Header>

                <FlatList
                    data={data}
                    contentContainerStyle={{
                        paddingHorizontal:24,
                        paddingVertical:32,
                    }}
                    renderItem={({item})=>{
                        return (
                            <Button onPress={()=>{
                                navigation.navigate('DiaryDetail', {item})
                            }}>
                                <View style={{paddingVertical:12}}>
                                    {item.imageUrl !== null && (
                                        <>
                                            <RemoteImage
                                                url={item.imageUrl}
                                                width={width-24*2}
                                                height={(width-24*2) * 0.5}
                                                style={{borderRadius:8}}
                                            />

                                            <Spacer space={4}/>
                                        </>
                                    )}
                                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                        <View>
                                            <Typography fontSize={18}>{item.title}</Typography>
                                            <Spacer space={4}/>
                                            <Typography fontSize={12}>{item.content}</Typography>
                                        </View>

                                        <Typography fontSize={12}>{item.updatedAt}</Typography>
                                    </View>
                                </View>
                            </Button>
                        )
                    }}
                />
            </View>

            <View style={{position:'absolute', right:12, bottom:safeAreaInset.bottom + 24}}>
                <Button onPress={onPressAdd}>
                    <View style={{
                        width:60, 
                        height:60, 
                        borderRadius:30, 
                        backgroundColor:'black', 
                        alignItems:'center', 
                        justifyContent:'center' 
                    }}>
                        <Icon name='add' color='white' size={30}/>
                    </View>
                </Button>
            </View>
        </View>
    )
}