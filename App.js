import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mr Mountain Tunisia 🏔️</Text>
      <Text style={styles.sub}>التطبيق يخدم 100% - تم إصلاح المشكلة</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
  sub: { fontSize: 16, textAlign: 'center' }
});
