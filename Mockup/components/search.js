import React from 'react'
import { StyleSheet, View, TextInput, Image, TouchableOpacity } from 'react-native';

function Search() {
    return (
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search"
            />
            <Image
                source={require("./mynaui_search.svg")}
                style={styles.searchIcon}
            />
            <TouchableOpacity>
                <Image
                    source={require("./Group 2.svg")}
                    style={styles.settings}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    settings: {
        height: '48px',
        width: '50px',
    },

    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: '0'

    },

    searchIcon: {
        position: 'relative',
        height: '30px',
        width: '30px',
        left: '-248px',
        zIndex: '1',

    },

    searchInput: {
        height: '48px',
        width: '265px',
        backgroundColor: '#fff',
        border: 'none',
        borderRadius: '14px',
        paddingHorizontal: 10,
        position: 'relative',
        paddingLeft: '48px'
    },
})

export default Search