import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import defaultStyle from '../../styles';
import HeaderComp from '../../components/ui/headerComp';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import InputComp from '../../components/ui/inputComp';
import {watchListvalidationSchema} from '../../utils/validationSchema';
import ButtonComp from '../../components/ui/buttonComp';
import {themeColors} from '../../themes/themeColors';
import {addWatchList} from '../../store/slice/watchListSlice';

const AddWatchListItemScreen = ({navigation}) => {
  //   const {watchList} = useSelector(state => state.watchListStore);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={defaultStyle.container}>
      <HeaderComp />
      <Text style={styles.title}> Who Is Watching </Text>
      <View style={{marginBottom: 60}}>
        <Formik
          initialValues={{id: Date.now(), title: 'Büş'}}
          validationSchema={watchListvalidationSchema}
          onSubmit={values => {
            dispatch(addWatchList(values));
            // console.log('valuesssss ===> ', values);

            navigation.goBack();
          }}>
          {({handleBlur, handleSubmit, handleChange, values, errors}) => (
            <ScrollView style={{}}>
             <InputComp
  placeholder="Name"
  placeholderTextColor={themeColors.GRAY}
  value={values.title} // values yerine value kullanıldı
  onChangeText={handleChange('title')}
  onBlur={handleBlur('title')}
  error={errors.title}
/>


              <ButtonComp
                title="SAVE"
                color={themeColors.RED}
                onPress={handleSubmit}
              />
            </ScrollView>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default AddWatchListItemScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: themeColors.WHITE,
    letterSpacing: 3,
    marginTop: 50,
  },
});
