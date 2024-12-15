import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.shopTitle}>Spacial Style Shop</Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* About Section */}
        <View style={styles.card}>
          <Text style={styles.aboutTitle}>About Spacial Style Shop</Text>
          <Text style={styles.infoText}>
            Spacial Style Shop adalah aplikasi toko online yang menawarkan koleksi pakaian unik dengan tema spasial. Kami menghadirkan desain futuristik dan modern yang terinspirasi dari keindahan luar angkasa, mulai dari kaos hingga jaket eksklusif. Dengan kualitas terbaik dan gaya yang memikat, kami membantu Anda mengekspresikan diri dengan cara yang berbeda. Jelajahi koleksi kami dan temukan pakaian yang cocok untuk gaya Anda! 🌌✨
          </Text>
        </View>

        {/* More Information Section */}
        <View style={styles.card}>
          <Text style={styles.aboutTitle}>More Information</Text>
          <Text style={styles.infoText}>
            <Text style={styles.bold}>Email: </Text>
            rinditrisetyaningsih@gmail.com
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.bold}>Instagram: </Text>
            iam_rindyyy
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.bold}>WhatsApp: </Text>
            082139704108
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  header: {
    backgroundColor: '#007B9A',
    width: '100%',
    padding: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  shopTitle: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  content: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    width: '90%',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
    textAlign: 'justify',
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
    color: '#000',
  },
});

export default App;
