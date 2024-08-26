import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MyMap = () => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // 예제 데이터
    const exampleMarkers = [
      { id: 1, latitude: 37.78825, longitude: -122.4324, title: 'Marker 1', description: 'Description 1' },
      { id: 2, latitude: 37.78845, longitude: -122.4358, title: 'Marker 2', description: 'Description 2' },
    ];
    setMarkers(exampleMarkers);
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markers.map(marker => (
          <Marker
            key={marker.id}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MyMap;
