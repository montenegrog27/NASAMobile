import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';

function Detail(params) {
  const route = useRoute();
  const {title, url, explanation, date} = route.params;

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image source={{uri: url ? url : ''}} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView style={styles.explanationContainer}>
          <Text style={styles.explanation}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: 16,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(7,26,93,255)',
  },
  content: {
    backgroundColor: '#2c449d',
    marginVertical: 24,
    padding: 16,
    borderRadius: 32,
    flex: 1,
  },
  image: {
    width: '100%',
    height: '50%',
    borderColor: '#fff',
    borderRadius: 32,
    borderWidth: 2,
    marginBottom: 16,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  date: {
    color: '#fff',
    fontSize: 16,
  },
  explanationContainer: {
    color: '#fff',
    marginVertical: 16,
  },
  explanation: {
    color: '#fff',
    fontSize: 15,
  },
});

export default Detail;
