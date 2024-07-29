import { Children, ReactNode } from 'react'
import { Button, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface PropsTouchableOpacity extends TouchableOpacityProps { children: ReactNode }
export default function Button({ children, ...props }: PropsTouchableOpacity) {
    return (
        <TouchableOpacity className='' {...props}>
            <Text>{Children}</Text>
        </TouchableOpacity>
    )
}