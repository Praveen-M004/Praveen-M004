import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={{margin: 10, textAlign: "center", fontSize: 40, color:"green"}}>FITNESS APP</Text>
      <View>
        <TouchableOpacity onPress={()=> navigation.navigate("Hello")}>
         <Image source={{uri:'https://www.mensjournal.com/.image/t_share/MTk3Mzg4NzI3MzQzOTgyNDkx/overheadtricepsextension.jpg'}} style={styles.image}  />
        </TouchableOpacity> 
         <Text style={{position: "absolute",fontSize: 30,marginLeft: 10}}>Gym Workouts</Text>
      </View>
      <View>
         <Image source={{uri:'https://www.healthifyme.com/blog/wp-content/uploads/2020/11/straight-arm-plank.jpg'}} style={styles.image} />
         <Text style={{position: "absolute",fontSize: 30,marginLeft: 10}}>Home Workouts</Text>
      </View>   
      <View>
         <Image source={{uri:'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXhlcmNpc2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'}} style={styles.image} />
         <Text style={{position: "absolute",fontSize: 30,marginLeft: 10}}>Yoga</Text>
      </View>   
         <Image source={{uri:'https://fitbod.me/wp-content/uploads/2022/08/exercises-per-muscle-group.jpg'}} style={styles.image} />
      </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: "center",
    overflow: 'scroll'
  },
  image: {
    width: 300,
    height: 200,
    margin: 5, 
    borderRadius: 5
  },
  imageContainer: {
      flexDirection: "column"
  }
});

export default HomeScreen;