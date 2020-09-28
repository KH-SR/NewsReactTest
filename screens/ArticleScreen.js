import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import { WebView } from 'react-native-webview';

export default ArticleScreen = ({route}) => {
    const {article} = route.params;
    console.log(article);
return (
<SafeAreaView style={styles.container}>
    <WebView source={{uri: article}} />
</SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
}
});