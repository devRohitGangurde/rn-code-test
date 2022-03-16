import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

var discountedPriceNew;

const Product = ({item}) => {
  const [discountedPrice, setDisCountedPrice] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    if (item.discount_type === 'amount') {
      var discountAmt = item.discount;
      discountedPriceNew = item.price - discountAmt;
    } else if (item.discount_type === 'percentage') {
      var discountPerc = item.discount;
      discountedPriceNew = item.price * (discountPerc / 100);
      discountedPriceNew = item.price - discountedPriceNew;
    }
    setDisCountedPrice(discountedPriceNew);
  }, [item]);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DetailPage', {
          item: item,
          discountedPrice: discountedPrice,
        });
      }}>
      <View style={styles.containerStyle}>
        <ImageBackground
          source={{uri: item.image}}
          resizeMode="cover"
          imageStyle={styles.borderRadius}
          style={styles.productImageStyle}>
          <View style={styles.parantViewStyle}>
            <View styles={styles.bgColor}>
              <View style={styles.viewStyle}>
                <Text numberOfLines={1} style={styles.productTitle}>
                  {item?.name}
                </Text>
                <Image
                  style={styles.profilePhotoStyle}
                  source={{
                    uri: item?.image,
                  }}
                />
              </View>
              {item.discount_type ? (
                <View style={styles.discoutStyle}>
                  <Text style={styles.strike}>
                    {item?.price > 0 ? item?.price : 'Free'}
                  </Text>
                  <Text numberOfLines={1} style={styles.productTitle}>
                    {'    '}
                    {discountedPrice > 0 ? discountedPrice : 'Free'}
                  </Text>
                </View>
              ) : (
                <Text numberOfLines={1} style={styles.productTitle}>
                  {(item?.price).toFixed(2) > 0 ? item?.price : 'Free'}
                </Text>
              )}

              <Text numberOfLines={1} style={styles.productSubTitle}>
                {item?.short_description}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default Product;
