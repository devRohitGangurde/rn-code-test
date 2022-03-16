import React, {useEffect} from 'react';
import {View} from 'react-native';
import Product from '../../components/Product';
import {SafeAreaView} from 'react-native-safe-area-context';

const Info = () => {
  var productItem = {
    id: 1,
    name: 'Ho-ho-ho! courage of death.',
    image: 'https://picsum.photos/id/1/400/300',
    short_description:
      'When the dubloon hobbles for tortuga, all breezes burn scrawny, cold sharks.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit magna turpis, eget volutpat leo commodo a. Morbi vitae venenatis dui, eu sollicitudin neque. Duis quis orci eros. Donec non augue rhoncus, molestie orci placerat, facilisis risus. Aliquam fermentum nulla sapien, sed gravida lacus dictum sit amet. Sed a cursus odio, suscipit pellentesque felis. Aenean neque libero, dignissim ut est ut, tempor luctus arcu. Vivamus eu sodales tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nVivamus dignissim non velit at lobortis. Vivamus ut blandit est. Vestibulum quis nisl non libero dapibus dapibus. Nulla sapien arcu, ultrices et tortor a, ullamcorper gravida nisl. Mauris lacinia venenatis massa nec tristique. In suscipit dignissim dui nec condimentum. Nam et ipsum tempor, pulvinar erat vel, commodo tellus. Aliquam molestie turpis ut placerat tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce at iaculis dolor, at dignissim metus.\n\nSed sed urna iaculis mauris maximus convallis. Pellentesque nulla nisi, porta non gravida in, aliquet a tortor. Nullam accumsan justo eu felis lobortis, eu pulvinar nibh pellentesque. Quisque consectetur tempor venenatis. Nam bibendum, purus ac ultrices bibendum, sem metus iaculis sapien, in maximus turpis dolor at ex. Nullam vel tincidunt velit. Integer consectetur ut mi ut dapibus. Cras molestie ipsum vitae erat imperdiet semper et interdum metus. Nullam sed efficitur ante. Etiam tincidunt porta tortor sit amet pulvinar. Morbi vitae ex in eros pulvinar tincidunt. Mauris in fringilla sem, at pretium nunc.',
    price: 10000,
    discount: null,
    discount_type: null,
    order: 1,
    category: 'Pirate',
  };

  return (
    <SafeAreaView>
      <View>
        <Product item={productItem} />
      </View>
    </SafeAreaView>
  );
};
export default Info;
