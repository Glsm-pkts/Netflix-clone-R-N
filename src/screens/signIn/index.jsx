import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import defaultStyle from '../../styles';
import HeaderComp from '../../components/ui/headerComp';
import InputComp from '../../components/ui/inputComp';
import ButtonComp from '../../components/ui/buttonComp';
import {themeColors} from '../../themes/themeColors';
import {Formik} from 'formik';
import {signInvalidationSchema} from '../../utils/validationSchema';
import {useNavigation} from '@react-navigation/native';
import {WATCHLIST} from '../../utils/routes';
import {ArrowLeft, EyeSlash, Eye} from 'iconsax-react-native'; // Iconsax importu

const SignInScreen = () => {
  const navigation = useNavigation();
  const [secure, setSecure] = useState(true);
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={defaultStyle.container}>
      <HeaderComp
        icon={
          <ArrowLeft size={30} color={themeColors.WHITE} /> // Iconsax ArrowLeft ikonu
        }
        iconPosition="left"
        onPress={() => navigation.goBack()}
      />
      <View style={{height: 60}} />
      <ScrollView style={styles.inputContainer}>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={signInvalidationSchema}
          onSubmit={(values, {resetForm}) => {
            console.log(values);
            navigation.navigate(WATCHLIST);
            resetForm('');
          }}>
          {({
            handleSubmit,
            handleBlur,
            handleChange,
            setFieldValue,
            values,
            errors,
            touched,
          }) => (
            <View>
              <InputComp
                placeholder="E-mail"
                placeholderTextColor={themeColors.GRAY}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={touched.email && errors.email}
              />
              <View>
                <InputComp
                  placeholder="password"
                  placeholderTextColor={themeColors.GRAY}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  error={touched.password && errors.password}
                  secureTextEntry={secure}
                />
                <TouchableOpacity
                  style={styles.eye}
                  onPress={() => setSecure(!secure)}>
                  {secure == true ? (
                    <EyeSlash size={22} color={themeColors.WHITE} /> // Iconsax EyeSlash ikonu
                  ) : (
                    <Eye size={22} color={themeColors.WHITE} /> // Iconsax Eye ikonu
                  )}
                </TouchableOpacity>
              </View>

              <View style={{marginTop: 50}}>
                <ButtonComp
                  title={'Sign In'}
                  color={themeColors.RED}
                  onPress={handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>

        <View style={{marginTop: 20}}>
  <Text style={styles.infotext}>Having trouble logging in?</Text>
  <Text style={[styles.infotext, {}]}>
    Don’t have an account yet?{' '}
    <Text style={{color: themeColors.RED}}> Create an account here</Text>.
  </Text>
</View>
<Text style={styles.info}>
  Your login is protected by Google reCAPTCHA to ensure security and prevent bots.
  Click here to learn more.
</Text>

      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  inputContainer: {},
  infotext: {
    color: themeColors.WHITE,
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'center',
    lineHeight: 20,
  },
  info: {
    textAlign: 'center',
    marginTop: 20,
    color: themeColors.GRAY,
    paddingHorizontal: 80,
    lineHeight: 20,
    fontSize: 16,
  },
  eye: {
    position: 'absolute',
    top: 30,
    right: 30,
  },
});
