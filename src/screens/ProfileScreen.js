import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text, Card } from 'react-native-paper';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Avatar.Text size={80} label="BR" style={styles.avatar} />
      <Text variant="headlineMedium" style={{ fontWeight: 'bold' }}>Budi Raharjo</Text>
      <Text variant="bodyLarge" style={{ color: 'gray', marginBottom: 20 }}>NIM: 12345678</Text>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">Informasi Akademik</Text>
          <Text variant="bodyMedium">Program Studi: Teknik Informatika</Text>
          <Text variant="bodyMedium">Semester: 6</Text>
          <Text variant="bodyMedium">IPK Kumulatif: 3.85</Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#f5f5f5' },
  avatar: { backgroundColor: '#6200ee', marginBottom: 15, marginTop: 30 },
  card: { width: '100%', borderRadius: 12 }
});