import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {themeColors} from '../../themes/themeColors';

const InputComp = ({
  value = '',
  onChangeText,
  onBlur,
  placeholder = '',
  error = '',
  secureTextEntry = false,
  keyboardType = 'default',
  placeholderTextColor = themeColors.LIGHT_GRAY,
  style = {},
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default InputComp;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  inputWrapper: {
    backgroundColor: themeColors.DARK_GRAY,
    borderRadius: 5,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginTop: 20,
  },
  textInput: {
    fontSize: 16,
    color: themeColors.WHITE,
    fontWeight: '600',
    paddingHorizontal: 10,
  },
  errorText: {
    color: themeColors.RED,
    fontSize: 14,
    marginTop: 5,
    marginLeft: 15,
    fontWeight: '600',
  },
});
