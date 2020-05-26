import React, { FC } from 'react';
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native';
import {articleStyle} from '../../constans/Styles';


const Article = () => {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum aliquam lorem a gravida. Donec posuere molestie eros, ut tempus justo venenatis non."
    return (
        <View>
            <ScrollView style={articleStyle.scrollView}>
                <View style={articleStyle.tile}>
                    <Image style={articleStyle.tileImage} resizeMode='contain' source={require('../../assets/1.jpg')}></Image>
                    <View style={articleStyle.tileTextContainer}>
                        <Text style={articleStyle.tileText}>{text}</Text>
                    </View>
                </View>
                <View style={articleStyle.tile}>
                    <View style={articleStyle.tileTextContainer}>
                        <Text style={articleStyle.tileText}>{text}</Text>
                    </View>
                    <Image style={articleStyle.tileImage} resizeMode='contain' source={require('../../assets/2.png')}></Image>
                </View>
                <View style={articleStyle.tile}>
                    <Image style={articleStyle.tileImage} resizeMode='contain' source={require('../../assets/3.jpg')}></Image>
                    <View style={articleStyle.tileTextContainer}>
                        <Text style={articleStyle.tileText}>{text}</Text>
                    </View>
                </View>
                <View style={articleStyle.tile}>
                    <View style={articleStyle.tileTextContainer}>
                        <Text style={articleStyle.tileText}>{text}</Text>
                    </View>
                    <Image style={articleStyle.tileImage} resizeMode='contain' source={require('../../assets/4.jpg')}></Image>
                </View>
                <View style={articleStyle.tile}>
                    <Image style={articleStyle.tileImage} resizeMode='contain' source={require('../../assets/5.jpg')}></Image>
                    <View style={articleStyle.tileTextContainer}>
                        <Text style={articleStyle.tileText}>{text}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Article;