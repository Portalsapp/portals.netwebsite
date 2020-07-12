import * as React from 'react';

import { Text, View } from './Themed';

export default function ProfileButton({notification, image}: {notification: boolean, image: string}) {
    return (
        <View>
            <Text>
                {notification ? 'yea' : 'no'}
            </Text>
        </View>
    );
}
