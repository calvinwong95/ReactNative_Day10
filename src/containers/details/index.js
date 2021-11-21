import React from 'react';
import {View, Text} from 'react-native';


function Details ({navigation,route}) {
    
    
    return (
        <View>
            <Text>{route.params.id}</Text>
            <Text>{route.params.title}</Text>
            <Text>{route.params.ingredients}</Text>
            <Text>{route.params.steps}</Text>
        </View>
    )
}

export default Details;