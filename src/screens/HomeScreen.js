import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text, Banner } from 'react-native-paper';
import MatakuliahCard from '../components/MatakuliahCard';

const DATA_MK = [
  { id: '1', kode: 'IF123', nama: 'Pemrograman Mobile', sks: 3, dosen: 'Dr. Budi Santoso', email: 'budi@kampus.ac.id', telp: '628123456789' },
  { id: '2', kode: 'IF456', nama: 'Rekayasa Perangkat Lunak', sks: 4, dosen: 'Siti Aminah, M.T.', email: 'siti@kampus.ac.id', telp: '628987654321' },
];

export default function HomeScreen({ navigation, route }) {
  const [selectedMK, setSelectedMK] = useState(null);

  // Menerima data kembalian dari Detail Screen
  useEffect(() => {
    if (route.params?.daftarMK) {
      setSelectedMK(route.params.daftarMK);
    }
  }, [route.params?.daftarMK]);

  return (
    <View style={styles.container}>
      {selectedMK && (
        <Banner visible={true} actions={[{ label: 'Selesai', onPress: () => setSelectedMK(null) }]}>
          Anda berhasil mendaftar di kelas: {selectedMK}
        </Banner>
      )}

      <View style={styles.header}>
        <Text variant="headlineSmall" style={{ fontWeight: 'bold' }}>Selamat Datang,</Text>
        <Text variant="bodyLarge" style={{ color: '#6200ee' }}>Budi Raharjo (NIM: 12345678)</Text>
      </View>

      <Text variant="titleMedium" style={styles.sectionTitle}>Daftar Mata Kuliah</Text>

      <FlatList
        data={DATA_MK}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MatakuliahCard 
            item={item} 
            onPress={() => navigation.navigate('DetailMatakuliah', { item })} 
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { padding: 20, backgroundColor: '#fff', elevation: 2 },
  sectionTitle: { marginHorizontal: 16, marginTop: 15, marginBottom: 5, fontWeight: 'bold' }
});