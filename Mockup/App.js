import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerView}>
        <View>
          <Text style={styles.header}>Hello Dev's</Text>
          <Text style={styles.miniheader}>14 tasks today</Text>
        </View>
        <View style={styles.profileImg}></View>
      </View>
      <TextInput type='text' placeholder='Search' style={styles.searchbar} />
      <Text style={styles.subheader}>Categories</Text>
      <ScrollView>
        <view style={styles.categoriescard}></view>
      </ScrollView>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F0E8',
  },

  headerView: {
    display: 'flex',
    flexDirection: 'row',
    gap: '100px',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50px',
  },

  header: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Lato',
  },
  subheader: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Lato',
    marginTop: '30px',
    marginLeft: '20px'
  },

  miniheader: {
    fontSize: '12px',
    fontFamily: 'Lato',
    
  },

  searchbar: {
    width: '70%',
    fontWeight: 'bold',
    fontSize: '16px',
    fontFamily: 'Lato',
    marginTop: '15px',
    marginLeft: '15px',
    height: '48px',
    borderRadius: '20px',
    paddingLeft: '15px',
    border: 'solid 1px #FBF9F7',
  },

  profileImg: {
    width: '60px',
    height: '60px',
    borderRadius: '20px',
    backgroundColor: '#fff',

  }

});

