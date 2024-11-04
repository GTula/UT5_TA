import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Components/Home';
import Counter from './Components/TA1/Counter';
import Input from './Components/TA2/Input';
import List from './Components/TA3/List';
import ImageChange from './Components/TA4/Image';
import ImageGallery from './Components/TA5/Gallery';
import SwipeList from './Components/TA6/SwipeList';
import MovieSearch from './Components/TA7/MovieSearch';
import AppDimensions from './Components/TA8/AppDimensions';
import PlatformApi from './Components/TA9/PlatformApi';
import ShowLocation from './Components/TA10/ShowLocation';
import AlbumImagePicker from './Components/TA11/AlbumImagePicker';
import CamerImagePicker from './Components/TA12/CameraImagePicker';
import CameraExpoImage from './Components/TA13/CameraExpoImage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Tareas' }} />
        <Stack.Screen name="TA1" component={Counter} options={{ title: 'TA1 - Counter' }} />
        <Stack.Screen name="TA2" component={Input} options={{ title: 'TA2 - Input' }} />
        <Stack.Screen name="TA3" component={List} options={{ title: 'TA3 - List Tasks' }} />
        <Stack.Screen name="TA4" component={ImageChange} options={{ title: 'TA4 - Chane Image' }} />
        <Stack.Screen name="TA5" component={ImageGallery} options={{ title: 'TA5 - Gallery' }} />
        <Stack.Screen name="TA6" component={SwipeList} options={{ title: 'TA6 - Swipe List' }} />
        <Stack.Screen name="TA7" component={MovieSearch} options={{ title: 'TA7 - Movie search' }} />
        <Stack.Screen name="TA8" component={AppDimensions} options={{ title: 'TA8 - Api Dimensions' }} />
        <Stack.Screen name="TA9" component={PlatformApi} options={{ title: 'TA9 - Api Platform' }} />
        <Stack.Screen name="TA10" component={ShowLocation} options={{ title: 'TA10 - Expo Location' }} />
        <Stack.Screen name="TA11" component={AlbumImagePicker} options={{ title: 'TA11 - Image Picker' }} />
        <Stack.Screen name="TA12" component={CamerImagePicker} options={{ title: 'TA12 - Camera Picker' }} />
        <Stack.Screen name="TA13" component={CameraExpoImage} options={{ title: 'TA13 - Camera Expo' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
