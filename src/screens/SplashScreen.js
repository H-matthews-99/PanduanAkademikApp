import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, ActivityIndicator } from 'react-native-paper';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      // Menggunakan replace agar Splash Screen dihapus dari Back Stack
      navigation.replace('Main');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.title}>PANDUAN AKADEMIK</Text>
      <Text variant="bodyMedium">Loading Informasi Mahasiswa...</Text>
      <ActivityIndicator style={{ marginTop: 20 }} animating={true} size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontWeight: 'bold', color: '#6200ee', marginBottom: 10 }
});