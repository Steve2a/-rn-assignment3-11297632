import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, } from 'react-native';
import Categories from './components/categories';
import Ongoing from './components/ongoing';
import Search from './components/search';
import Header from './components/header';

export default function App() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={ false }>
        <Header/>

        <Search />

        <Text style={styles.subheader}>Categories</Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Categories imagesrc={require('./img/young woman working online.svg')} header={'Exercise'} tasks={'12 tasks'} />
          <Categories imagesrc={require('./img/young woman working at desk.png')} header={'Study'} tasks={'12 tasks'} />
          <Categories imagesrc={require('./img/3d-hygge-isometric-view-of-young-woman-and-man-discussing-the-project.png')} header={'Work'} tasks={'12 tasks'} />
          <Categories imagesrc={require('./img/3d-hygge-isometric-view-of-young-woman-leaning-on-table-2.png')} header={'Cook'} tasks={'12 tasks'} />
          <Categories imagesrc={require('./img/3d-hygge-isometric-view-of-young-woman-sorting-craft-paper-2.png')} header={'Paint'} tasks={'12 tasks'} />
          <Categories imagesrc={require('./img/3d-hygge-man-sitting-on-floor-with-laptop.png')} header={'Code'} tasks={'12 tasks'} />
          <Categories imagesrc={require('./img/3d-hygge-isometric-view-of-young-girl-and-young-man-having-dinner-together-1.png')} header={'Eat'} tasks={'12 tasks'} />
          <Categories imagesrc={require('./img/3d-hygge-isometric-view-of-man-working-online.png')} header={'Call'} tasks={'12 tasks'} />
        </ScrollView>

        <Text style={styles.subheader}>Ongoing Tasks</Text>

        <Ongoing />
        
        <StatusBar style="auto" />
    </ScrollView>

    

  );
  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F0E8',
    paddingTop: '30px',
    padding: '25px',
  },

  subheader: {
    fontSize: '20px',
    fontWeight: '700',
    marginTop: '30px',
    marginBottom:'10px',
    fontFamily:'lato'
  },

});

