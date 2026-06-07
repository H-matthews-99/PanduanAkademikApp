import React from 'react';
import { Card, Text, Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function MatakuliahCard({ item, onPress }) {
  return (
    <Card style={styles.card} mode="elevated">
      <Card.Content>
        <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>{item.nama}</Text>
        <Text variant="bodyMedium">Kode: {item.kode} | SKS: {item.sks}</Text>
        <Text variant="bodySmall" style={{ color: 'gray' }}>Dosen: {item.dosen}</Text>
      </Card.Content>
      <Card.Actions>
        {/* Explicit Intent / Navigasi Antar Screen */}
        <Button onPress={onPress}>Lihat Detail</Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { marginHorizontal: 16, marginVertical: 8, borderRadius: 12 }
});