import React from 'react';
import { View, StyleSheet, Linking, Share, ScrollView } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';

export default function DetailScreen({ route, navigation }) {
  const { item } = route.params;

  // 4. IMPLICIT INTENTS IMPLEMENTATION
  const hubungiDosen = () => {
    // Membuka WhatsApp langsung ke nomor dosen
    Linking.openURL(`https://wa.me/${item.telp}`);
  };

  const kirimEmail = () => {
    Linking.openURL(`mailto:${item.email}?subject=Tanya%20Matakuliah%20${item.nama}`);
  };

  const lihatMaps = () => {
    // Koordinat Kampus dummy
    const latitude = '-6.200000';
    const longitude = '106.816666';
    Linking.openURL(`geo:${latitude},${longitude}?q=${latitude},${longitude}(Kampus+Utama)`);
  };

  const bagikanMatakuliah = async () => {
    try {
      await Share.share({
        message: `Ayo ambil mata kuliah ${item.nama} (${item.sks} SKS) bersama dosen ${item.dosen}!`,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDaftar = () => {
    // 3. Kembali ke Home membawa data
    navigation.navigate({
      name: 'Home',
      params: { daftarMK: item.nama },
      merge: true,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card} mode="outlined">
        <Card.Content>
          <Text variant="headlineSmall" style={styles.title}>{item.nama}</Text>
          <Text variant="titleMedium">Kode: {item.kode}</Text>
          <Text variant="bodyLarge">SKS: {item.sks}</Text>
          <Text variant="bodyLarge" style={{ marginBottom: 15 }}>Dosen: {item.dosen}</Text>
        </Card.Content>
      </Card>

      <View style={styles.buttonGroup}>
        <Button mode="contained" icon="whatsapp" onPress={hubungiDosen} style={styles.btn}>Hubungi Dosen</Button>
        <Button mode="contained" icon="email" onPress={kirimEmail} style={styles.btn}>Kirim Email</Button>
        <Button mode="contained" icon="map-marker" onPress={lihatMaps} style={styles.btn}>Lihat di Google Maps</Button>
        <Button mode="contained" icon="share-variant" onPress={bagikanMatakuliah} style={styles.btn}>Bagikan Mata Kuliah</Button>
        
        <Button mode="contained-tonal" buttonColor="#4caf50" textColor="#fff" onPress={handleDaftar} style={[styles.btn, { marginTop: 20 }]}>
          Daftar Mata Kuliah Ini
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  card: { marginBottom: 20 },
  title: { fontWeight: 'bold', color: '#6200ee', marginBottom: 10 },
  buttonGroup: { gap: 10 },
  btn: { borderRadius: 8 }
});