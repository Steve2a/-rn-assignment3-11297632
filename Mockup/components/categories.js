import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

const Categories = ({ imagesrc, header, tasks }) => {
  return (
    <View style={styles.categoriescard}>
      <Text style={styles.catHeader}>{header}</Text>
      <Text style={styles.tasks}>{tasks}</Text>
      <Image
        source={imagesrc}
        style={styles.tasksImg}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categoriescard: {
    width: '186px',
    height: '192px',
    backgroundColor: '#FBF9F7',
    borderRadius: '15px',
    padding: '15px',
    marginRight: '30px'
  },

  catHeader: {
    fontWeight: '700',
    fontSize: '16px',
    fontFamily: 'lato'
  },

  tasks: {
    fontSize: '12px',
    fontFamily: 'lato'

  },

  tasksImg: {
    height: '130px',
    width: '130px',
    marginLeft: '20px',

  }
})

export default Categories;