import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';

import { Ionicons } from '@expo/vector-icons';

import {
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import { Colors } from '../constants/colors';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'PlaceDetails'
>;

export default function PlaceDetailsScreen({
  route,
}: Props) {
  const { place } = route.params;

  const handleEdit = () => {
    console.log('Editar lugar');
  };

  const handleAddCategory = () => {
    console.log('Adicionar categoria');
  };

  const handleCopyAddress = () => {
    console.log('Copiar endereço');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Imagem */}

        <ImageBackground
          source={{ uri: place.image }}
          style={styles.image}
        >
          <TouchableOpacity
            style={styles.editButton}
            activeOpacity={0.8}
            onPress={handleEdit}
          >
            <Ionicons
              name="pencil"
              size={22}
              color={Colors.background}
            />
          </TouchableOpacity>
        </ImageBackground>

        {/* Conteúdo */}

        <View style={styles.content}>
          <Text style={styles.title}>
            {place.name}
          </Text>

          {/* Categorias */}

          <View style={styles.categoriesContainer}>
            {place.categories.map((category) => (
              <View
                key={category}
                style={styles.category}
              >
                <Text style={styles.categoryText}>
                  {category}
                </Text>
              </View>
            ))}

            <TouchableOpacity
              style={styles.addCategoryButton}
              onPress={handleAddCategory}
            >
              <Ionicons
                name="add"
                size={17}
                color={Colors.white}
              />
            </TouchableOpacity>
          </View>

          {/* Descrição */}

          <Text style={styles.description}>
            {place.description}
          </Text>

          {/* Mapa */}

          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: place.latitude,
                longitude: place.longitude,
                latitudeDelta: 4,
                longitudeDelta: 4,
              }}
            >
              <Marker
                coordinate={{
                  latitude: place.latitude,
                  longitude: place.longitude,
                }}
                title={place.name}
              />
            </MapView>
          </View>

          {/* Endereço */}

          <View style={styles.addressContainer}>
            <Text
              style={styles.address}
              numberOfLines={1}
            >
              {place.address}
            </Text>

            <TouchableOpacity
              onPress={handleCopyAddress}
              style={styles.copyButton}
            >
              <Ionicons
                name="copy-outline"
                size={22}
                color={Colors.white}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
  },

  image: {
    width: '100%',
    height: 270,
  },

  editButton: {
    position: 'absolute',
    right: 18,
    top: 18,

    width: 44,
    height: 44,

    borderRadius: 22,

    backgroundColor: Colors.primary,

    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 40,
  },

  title: {
    color: Colors.white,
    fontSize: 34,
    fontWeight: '400',
    marginBottom: 12,
  },

  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 8,
    marginBottom: 22,
  },

  category: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 10,
  },

  categoryText: {
    color: Colors.background,
    fontSize: 14,
    fontWeight: '500',
  },

  addCategoryButton: {
    width: 23,
    height: 23,

    borderRadius: 12,

    borderWidth: 1.5,
    borderColor: Colors.white,

    alignItems: 'center',
    justifyContent: 'center',
  },

  description: {
    color: Colors.white,
    fontSize: 16,
    lineHeight: 21,
    marginBottom: 24,
  },

  mapContainer: {
    width: '100%',
    height: 270,

    borderRadius: 30,
    overflow: 'hidden',

    backgroundColor: Colors.lightGray,
  },

  map: {
    width: '100%',
    height: '100%',
  },

  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 14,
    paddingHorizontal: 20,
  },

  address: {
    flexShrink: 1,
    color: Colors.lightGray,
    fontSize: 14,
  },

  copyButton: {
    marginLeft: 8,
  },
});