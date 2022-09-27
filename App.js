import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, Button, FlatList } from 'react-native';
import EventCard from './src/components/EventCard';

// import { SafeAreaView } from 'react-native-safe-area-context'; Android
// import { SafeAreaView } from 'react-native'; iOS


export default function App() {

  function onPressLearnMore() {
    console.log('Evento onPress')
  }

  const events = [
    {name: 'Evento1'},
    {name: 'Evento2'},
    {name: 'Evento3'},
    {name: 'Evento4'},
    {name: 'Evento5'},
    {name: 'Evento6'},
    {name: 'Evento7'},
    {name: 'Evento8'},
    {name: 'Evento9'},
    {name: 'Evento10'},
    {name: 'Evento11'},
    {name: 'Evento12'},
    {name: 'Evento13'},
  ]

  return (
    <View style={styles.container}>
      <ScrollView>

        <Text style={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum minus vitae, explicabo enim totam alias, magnam error repellendus veniam velit ullam laborum ad ipsa? Debitis asperiores dicta quos blanditiis fuga.
        </Text>
        <View>
          <Image style={styles.tinyLogo} source={{ uri: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/S7YAOQ6MEJCLLE62NDSHNHQDOU.jpg' }} />
        </View>
        <Button
          onPress={onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </ScrollView>
      <FlatList 
        data={events}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        keyExtractor={(event) => event.name}
        renderItem={({item}) => <EventCard name={item.name}/>}
      />
      <StatusBar style="dark" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red'
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});


