import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View, FlatList} from 'react-native';
import ProductJson from '../../../assets/products.json';
import Product from '../../components/Product';
import styles from './styles';

const Market = () => {
  const [productArray] = useState([
    ...new Set(ProductJson.map(item => item.category)),
  ]);

  const renderProductList = item => <Product item={item} />;

  return (
    <ScrollView>
      {productArray.map(item => {
        console.log(ProductJson[0].category);

        const filteredData = ProductJson.filter((data: any) => {
          return data?.category.includes(item);
        });
        console.log(filteredData);
        return (
          <View>
            <Text style={styles.productCategoryStyle}>{item}</Text>
            <FlatList
              horizontal
              data={filteredData.sort((a, b) => (a.order > b.order ? 1 : -1))}
              renderItem={({item}) => renderProductList(item)}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Market;
