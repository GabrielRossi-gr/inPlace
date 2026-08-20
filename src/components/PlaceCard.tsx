import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface PlaceCardProps {
  name: string;
  description: string;
  image: string;
  onPress?: () => void;
}

export function PlaceCard({
  name,
  description,
  image,
  onPress,
}: PlaceCardProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <ImageBackground
        source={{ uri: image }}
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.content}>
          <Text style={styles.title}>
            {name}
          </Text>

          <Text
            style={styles.description}
            numberOfLines={2}
          >
            {description}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 245,
    borderRadius: 30,
    overflow: 'hidden',
    marginBottom: 20,
  },

  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  imageStyle: {
    borderRadius: 30,
  },

  content: {
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 18,
    backgroundColor: 'rgba(40, 40, 40, 0.75)',
  },

  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '400',
    marginBottom: 8,
  },

  description: {
    color: '#FFFFFF',
    fontSize: 13,
    lineHeight: 17,
  },
});