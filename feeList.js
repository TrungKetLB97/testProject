import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const FeeList = () => {
  const [fees, setFees] = useState(require('./data.json'));

  const addFee = () => {
    const newFee = {
      id: fees.length + 1,
      name: '',
      type: 'thành tiền',
      value: 0,
      rateType: 'pp1',
    };
    setFees([...fees, newFee]);
  };

  const removeFee = index => {
    setFees(fees.filter((fee, i) => i !== index));
  };

  const handleChangeName = (index, name) => {
    setFees(fees.map((fee, i) => (i === index ? {...fee, name} : fee)));
  };

  const handleChangeType = (index, type) => {
    setFees(
      fees.map((fee, i) =>
        i === index
          ? {
              ...fee,
              type,
              value: type === 'thành tiền' ? 0 : fee.value,
              rateType: type === 'tỷ lệ' ? 'pp1' : '',
            }
          : fee,
      ),
    );
  };

  const handleChangeValue = (index, value) => {
    setFees(fees.map((fee, i) => (i === index ? {...fee, value} : fee)));
  };

  const handleChangeRateType = (index, rateType) => {
    setFees(fees.map((fee, i) => (i === index ? {...fee, rateType} : fee)));
  };

  return (
    <ScrollView>
      <View style={{width: 300, height: '100%'}}>
        {fees.map((fee, index) => (
          <View key={fee.id}>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: 'blue',
                margin: 8,
              }}
              placeholder="Tên phụ phí"
              value={fee.name}
              onChangeText={name => handleChangeName(index, name)}
            />
            <Picker
              selectedValue={fee.type}
              onValueChange={type => handleChangeType(index, type)}>
              <Picker.Item label="Thành tiền" value="thành tiền" />
              <Picker.Item label="Tỷ lệ" value="tỷ lệ" />
            </Picker>
            {fee.type === 'thành tiền' ? (
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: 'blue',
                  margin: 8,
                }}
                placeholder="Giá trị"
                value={fee.value.toString()}
                onChangeText={value => handleChangeValue(index, value)}
                keyboardType="numeric"
              />
            ) : (
              <Picker
                selectedValue={fee.rateType}
                onValueChange={rateType =>
                  handleChangeRateType(index, rateType)
                }>
                <Picker.Item label="phuphi1" value="phuphi1" />
                <Picker.Item label="phuphi2" value="phuphi2" />
                <Picker.Item label="phuphi3" value="phuphi3" />
              </Picker>
            )}
            <TouchableOpacity
              onPress={() => removeFee(index)}
              style={{
                width: 100,
                height: 45,
                borderRadius: 10,
                backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>Xóa</Text>
            </TouchableOpacity>
          </View>
        ))}
        <TouchableOpacity
          onPress={addFee}
          style={{
            width: 100,
            height: 45,
            borderRadius: 10,
            backgroundColor: 'green',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 18,
          }}>
          <Text>Thêm phụ phí</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default FeeList;
