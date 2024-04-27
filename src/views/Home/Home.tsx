import React, { useEffect } from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import fetchAPI from "../../utils/fetch"

function Home() {
  useEffect(() => {
    const loadTodayImage = async () => {
try {
  const todaysImage = await fetchAPI();
  console.log(todaysImage)
} catch (error) {
  
}
    } 
      loadTodayImage().catch(null)
  }, [])
  
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
});

export default Home;
