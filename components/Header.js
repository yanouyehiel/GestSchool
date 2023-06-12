import React from 'react'
import { View, Text } from 'react-native'

const Header = (props) => {
    return (
        <View style={{ marginLeft: 15 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 22, color: '#f2f2f2' }}>
                {props.name}
            </Text>
        </View>
    )
}

export default Header;