import React, { FC } from 'react';
import { Image,  StyleSheet, Text, View, ScrollView } from 'react-native';
import {profileStyle} from '../../constans/Styles';

const Profile = () => {
    return (
        <View>
            <ScrollView style={profileStyle.scrollview}>
                <Image source={require("../../assets/logomini.jpg")} style={profileStyle.logo} /> 
                <Text style={profileStyle.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem temporibus natus quasi, in minus itaque odit deserunt, incidunt repellat accusamus magnam neque sed iusto a corrupti quis! Nesciunt, reprehenderit? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi odit amet itaque perspiciatis recusandae quae neque maxime fugiat asperiores, voluptatum consequuntur quas, dignissimos nesciunt sequi voluptatem ab et voluptatibus suscipit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda repellendus accusamus modi eaque, qui suscipit officia est, deleniti amet iusto architecto sit itaque! Ipsam dolor nihil ad. Vitae, rem temporibus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur cupiditate sequi aspernatur unde, porro explicabo pariatur, expedita animi voluptatibus mollitia corporis quo et quam accusamus ab maiores velit commodi voluptas.</Text>
            </ScrollView>
        </View>
    );
};

export default Profile;