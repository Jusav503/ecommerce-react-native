import React from 'react'
import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import ProductItem from '../../components/ProductItem'
import products from '../../data/products'

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <FlatList
                data={products}
                renderItem= {({item}) => <ProductItem item={item} />}
            />
        </SafeAreaView>
    )
}

export default HomeScreen
