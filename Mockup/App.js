import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import Categories from './components/categories';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerView}>
        <View>
          <Text style={styles.header}>Hello Dev's</Text>
          <Text style={styles.miniheader}>14 tasks today</Text>
        </View>
        <View style={styles.profileImg}>
          <Image style={styles.img} source={require("./img/download.png")} />
        </View>
      </View>

      <View style={styles.stylesContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
        />

       <TouchableOpacity>
        <Image
          source={require("./img/Group 2.svg")} 
          style={styles.settings}
        /> 
        </TouchableOpacity> 
      </View>

      <Text style={styles.subheader}>Categories</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Categories imagesrc={require('./img/young woman working online.svg')} header={'Exercise'} tasks={'12 tasks'} />
        <Categories imagesrc={require('./img/3d-hygge-isometric-view-of-young-woman-sorting-craft-paper-2.png')} header={'Study'} tasks={'12 tasks'} />
        <Categories imagesrc={require('./img/3d-hygge-isometric-view-of-young-woman-and-man-discussing-the-project.png')} header={'Work'} tasks={'12 tasks'} />
        <Categories imagesrc={require('./img/3d-hygge-isometric-view-of-young-woman-leaning-on-table-2.png')} header={'Cook'} tasks={'12 tasks'} />
        <Categories imagesrc={require('./img/3d-hygge-isometric-view-of-young-woman-sorting-craft-paper-2.png')} header={'Paint'} tasks={'12 tasks'} />
        <Categories imagesrc={require('./img/3d-hygge-man-sitting-on-floor-with-laptop.png')} header={''} tasks={'12 tasks'} />
        <Categories imagesrc={require('./img/3d-hygge-isometric-view-of-young-girl-and-young-man-having-dinner-together-1.png')} header={'Eat'} tasks={'12 tasks'} />
        <Categories imagesrc={require('./img/3d-hygge-isometric-view-of-man-working-online.png')} header={'Call'} tasks={'12 tasks'} />
      </ScrollView>
      <StatusBar style="auto" />
    </ScrollView>

  );
  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F0E8',
    paddingTop: '30px',
    padding: '25px',
    fontFamily: 'lato',
  },

  headerView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '135px',
    marginBottom: '20px'

  },

  header: {
    fontSize: 32,
    fontWeight: 'bold',
    
  },
  subheader: {
    fontSize: '20px',
    fontWeight: '700',
    fontFamily: 'lato',
    marginTop: '30px',
    marginBottom:'10px'
  },

  miniheader: {
    fontSize: '12px',
    fontFamily: 'Lato',

  },



  profileImg: {
    width: '50px',
    height: '50px',
    borderRadius: '40px',
    backgroundColor: '#fff',
    alignContent: 'center'

  },

  img: {
    height: '45px',
    width: '46px'
  },

  settings: {
    height: '50px',
    width: '52px'

  },

  stylesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '40px',
    MarginTop: '100px'
  },

  searchInput: {
    flex: 1,
    height: '48px',
    width: '200px',
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '14px',
    paddingHorizontal: 10,
  },



});

