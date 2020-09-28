import React from 'react';
import {StyleSheet, SafeAreaView, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import ListItem from '../components/ListItem';


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
    },
})

export default ClipScreen = ({navigation}) => {
    const user = useSelector(state => state.user);
    const {clips} =user;
    return(
        <SafeAreaView style={styles.container}>
        <FlatList
            data={clips}
            renderItem={({item}) => (
            <ListItem
                author={item.author}
                imageUrl={item.imageUrl}
                title={item.title}
                onPress={() => navigation.navigate("Article", {article: {url:item.url,author:item.author,imageUrl:item.imageUrl,title:item.title}})}
            />
            )}
            keyExtractor={(item, index) => index.toString()}
        />
        </SafeAreaView>
    );
}