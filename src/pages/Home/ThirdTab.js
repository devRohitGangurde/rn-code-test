import React, {useState} from 'react';
import {ScrollView, Text, NativeModules, Button} from 'react-native';

const ThirdTab = () => {
  const {CustomModule} = NativeModules;
  const [id, setId] = useState('Press the button to get The ID');

  const getId = () => {
    CustomModule.getPhoneID()
      .then((res: string) => {
        setId('ID: ' + res);
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  return (
    <ScrollView>
      <Text style={{color: 'red', marginStart: 10, padding: 10}}>
        Server Key :{' '}
        {CustomModule?.getServerKey()
          ? CustomModule?.getServerKey()
          : 'MmHsCMUt57'}
      </Text>
    </ScrollView>
  );
};

export default ThirdTab;
