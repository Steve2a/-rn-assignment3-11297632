import { StyleSheet, Text, View, Image, } from 'react-native';
import React from 'react'

const Header = () => {
  return (
    <View style={styles.headerView}>
    <View>
      <Text style={styles.header}>Hello , Devs</Text>
      <Text style={styles.miniheader}>14 tasks today</Text>
    </View>
    <View style={styles.profileImg}>
      <Image style={styles.img} source={require("./download.png")} />
    </View>
  </View>
  )
}

const styles = StyleSheet.create({

    headerView: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-between',
      marginBottom: '20px'
  
    },
  
    header: {
      fontSize: 32,
      fontWeight: '700',
      fontFamily:'lato'
      
    },
    
    miniheader: {
      fontSize: '12px',
      fontWeight: '500',
      fontFamily:'lato'
  
    },
  
  
  
    profileImg: {
      display:'flex',
      width: '50px',
      height: '50px',
      borderRadius: '40px',
      backgroundColor: '#fff',
      alignItems: 'center'
  
    },
  
    img: {
      height: '45px',
      width: '46px'
    },

})



export default Header