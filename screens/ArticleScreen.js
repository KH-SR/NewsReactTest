import React from 'react';
import {StyleSheet, View, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import { WebView } from 'react-native-webview';
import {useDispatch, useSelector} from 'react-redux';
import {addClip, deleteClip} from '../store/actions/user';
import ClipButton from '../components/ClipButton';

export default ArticleScreen = ({route}) => {

    const {url} = route.params.article;
    const {author} = route.params.article;
    const {imageUrl} = route.params.article;
    const {title} = route.params.article;

const dispatch = useDispatch();
const user = useSelector(state => state.user);
const {clips} = user;

const isClipped = () => {
    //配列内を検索してtrueかfalseを返す
    return clips.some(clip => clip.url ===　url)
    }

const toggleClip = () => {
if (isClipped()){
    dispatch(deleteClip({clip:{url,author,imageUrl,title}}));
}else{
    dispatch(addClip({clip:{url,author,imageUrl,title}}));

}

}

return (
<SafeAreaView style={styles.container}>
    {/* <ClipButton onPress={} enabled={} /> */}
    <TouchableOpacity onPress={() => {dispatch(addClip({clip:{url,author,imageUrl,title}}))}}>
        <Text style={{margin: 10, fontSize:30}}>ADD_CLIP</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {dispatch(deleteClip({clip:{url,author,imageUrl,title}}))}}>
        <Text style={{margin: 10, fontSize:30}}>DELETE_CLIP</Text>
    </TouchableOpacity>
    <WebView source={{uri: url}} />
</SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
}
});