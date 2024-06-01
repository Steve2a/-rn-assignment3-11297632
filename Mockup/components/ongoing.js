import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const Ongoing = () => {
  return (
    <FlatList
        data={[
            {key: '1', text: ' Mobile App Development '},
            {key: '2', text: ' Web Development '},
            {key: '3', text: ' Pushp Ups '},
            {key: '4', text: ' Volunteer '},
            {key: '5', text: ' Learn a New Skill '},
            {key: '6', text: ' Drawing '},
            {key: '7', text: ' Photography '},
            {key: '8', text: ' Learn an Instrument '},
            {key: '9', text: ' Gardening '},
            {key: '10', text: ' Cleaning '},
            {key: '11', text: ' Meditate '},
            {key: '12', text: ' Learn an Instrument '},
            {key: '13', text: ' Explore Nature '},
            {key: '14', text: ' Listen to Podcasts '},
            {key: '15', text: ' Play a Board Game '},
        ]}

        renderItem={ ({item}) => <View style={styles.Itemcard}> <Text style={styles.Item} >{ item.text }</Text> </View> }

    />
  );
}
const styles = StyleSheet.create({

    Itemcard:{
        height: '128px',
        width: '340px',
        backgroundColor: '#fff',
        marginBottom: '15px',
        borderRadius: '15px',
        justifyContent: 'center',
        paddingLeft:'20px',
        border:'1px solid #E8D1BA'



    }, 

    Item:{
        fontSize: '16px',
        fontWeight: '700',
    }
  })

export default Ongoing