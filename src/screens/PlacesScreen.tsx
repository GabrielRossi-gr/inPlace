import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import { PlaceCard } from '../components/PlaceCard';
import { Colors } from '../constants/colors';
import { places } from '../data/places';

import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Places'
>;

export default function PlacesScreen({
  navigation,
}: Props) {
  const handleAddPlace = () => {
    console.log('Adicionar lugar');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Meus Lugares
          </Text>

          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddPlace}
            activeOpacity={0.8}
          >
            <Text style={styles.addButtonText}>
              +
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
        >
          {places.map((place) => (
            <PlaceCard
              key={place.id}
              name={place.name}
              description={place.description}
              image={place.image}
              onPress={() =>
                navigation.navigate(
                  'PlaceDetails',
                  {
                    place,
                  },
                )
              }
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 22,
  },

  title: {
    color: Colors.white,
    fontSize: 34,
    fontWeight: '700',
  },

  addButton: {
    width: 42,
    height: 42,
    borderRadius: 21,

    backgroundColor: Colors.primary,

    alignItems: 'center',
    justifyContent: 'center',
  },

  addButtonText: {
    color: Colors.background,
    fontSize: 32,
    fontWeight: '500',
    lineHeight: 34,
  },

  list: {
    paddingBottom: 40,
  },
});