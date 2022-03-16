import React, {useState} from 'react';
import {Text, View, Image} from 'react-native';

import styles from '../../components/Product/styles';

const DetailPage = ({route}) => {
  console.log(route.params);
  const [item] = useState(route.params.item);

  return (
    <View style={styles.detailPageStyle}>
      <Image
        style={{width: '100%', aspectRatio: 4 / 3}}
        source={{uri: item.image}}
      />
      <View style={styles.viewStyleMain}>
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

      <View style={styles.detailviewstyle}>
        {item?.discount_type ? (
          <View style={styles.strikeDetailMain}>
            <Text style={styles.strikeDetailText}>
              {item?.price > 0 ? item?.price : 'Free'}
            </Text>
            <Text numberOfLines={1} style={styles.productTitle}>
              {'    '}
              {route?.params?.discountedPrice > 0
                ? route?.params?.discountedPrice
                : 'Free'}
            </Text>
          </View>
        ) : (
          <Text style={styles.priceDetailStyle}>
            {(item?.price).toFixed(2) > 0 ? item?.price : 'Free'}
          </Text>
        )}
      </View>

      <Text style={{padding: 20}} numberOfLines={10}>
        {item?.short_description}
      </Text>
    </View>
  );
};

export default DetailPage;
