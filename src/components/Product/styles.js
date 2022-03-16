import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  productTitle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#FFF',
    fontSize: 12,
    paddingVertical: 5,
    flex: 1,
  },
  productSubTitle: {
    fontWeight: 'normal',
    textTransform: 'uppercase',
    color: '#FAFBFC',
    fontSize: 8,
    paddingVertical: 5,
  },
  productImageStyle: {
    aspectRatio: 4 / 3,
  },
  profilePhotoStyle: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
  },
  viewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewStyleMain: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  parantViewStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(00, 00, 00, 0.6)',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  borderRadius: {
    borderRadius: 10,
  },
  containerStyle: {
    margin: 10,
    borderRadius: 10,
    width: 300,
  },
  bgColor: {
    backgroundColor: 'gray',
  },
  discoutStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  strike: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'dashed',
    color: 'red',
    fontSize: 12,
  },
  detailPageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  detailviewstyle: {
    alignItems: 'center',
    padding: 20,
  },
  strikeDetailMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  strikeDetailText: {
    fontSize: 20,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'dashed',
    color: 'red',
  },
  priceDetailStyle: {
    color: 'white',
    fontSize: 25,
  },
});
export default styles;
