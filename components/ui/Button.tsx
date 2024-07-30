import {ReactNode } from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface PropsTouchableOpacity extends TouchableOpacityProps { children: ReactNode }
export default function Button({ children, ...props }: PropsTouchableOpacity) {
    return (
        <TouchableOpacity className='' {...props}>
            <Text>{children}</Text>
        </TouchableOpacity>
    )
}