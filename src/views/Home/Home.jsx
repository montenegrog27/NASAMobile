import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {format, sub} from 'date-fns';

import Header from '../../components/Header';
import TodayImage from '../../components/TodayImage';
import fetchAPI from '../../utils/fetch';
import LastFiveDaysImages from '../../components/LastFiveDaysImages';

function Home() {
  const [todaysImage, setTodaysImage] = useState();
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState([]);
  useEffect(() => {
    const loadTodayImage = async () => {
      try {
        const todaysImageResponse = await fetchAPI();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        console.error(error);
        setTodaysImage(undefined);
      }
    };

    const loadLast5DaysImages = async () => {
      try {
        const date = new Date();
        const todayDate = format(date, 'yyyy-MM-dd');
        const fiveDaysAgo = format(sub(date, {days: 5}), 'yyyy-MM-dd');

        const rangeDate = `&start_date=${fiveDaysAgo}&end_date=${todayDate}`;
        const lastFiveDaysImagesResponse = await fetchAPI(rangeDate);

        setLastFiveDaysImages(lastFiveDaysImagesResponse);
      } catch (error) {
        console.error(error);
      }
    };
    loadTodayImage().catch(null);
    loadLast5DaysImages().catch(null);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <TodayImage {...todaysImage} />
      <LastFiveDaysImages postImages={lastFiveDaysImages} />
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
});

export default Home;
