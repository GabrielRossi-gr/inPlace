import {
  NavigationContainer,
} from '@react-navigation/native';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import PlacesScreen from '../screens/PlacesScreen';
import PlaceDetailsScreen from '../screens/PlaceDetailsScreen';

import { Place } from '../types/Place';

export type RootStackParamList = {
  Places: undefined;

  PlaceDetails: {
    place: Place;
  };
};

const Stack =
  createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Places"
          component={PlacesScreen}
        />

        <Stack.Screen
          name="PlaceDetails"
          component={PlaceDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}