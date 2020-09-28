import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import {
  StyleSheet, FlatList, SafeAreaView,
} from 'react-native';
import ListItem from '../components/ListItem';
import Constants from 'expo-constants';
import axios from 'axios';

const URL=`http://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`;
//引数の時点で展開すればconst {navigation} = props;を記載しないで済む
export default HomeScreen = ({navigation}) => {
  // state,設定時に使用するset,useStateで初期値を設定
  const [articles, setArticles] = useState([]);
  //第２引数の値が変化した時だけ第１引数のメソッドが実行される
  useEffect(() => {
fetchArticles();
  }, [])

const fetchArticles = async () => {
  try {
    const response = await axios.get(URL);
    setArticles(response.data.articles)
  } catch (error) {
    console.error(error);
  }
}

  return (
    // セーフエリアだけに表示させる(使わないと見切れてしまう)
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
      // ここで指定した配列が
        data={articles}
      // 一つずつitemとして取り出されて処理されるのでセルを個数分作成する
        renderItem={({ item }) => (
          <ListItem
            author={item.author}
            imageUrl={item.urlToImage}
            title={item.title}
            onPress={() => navigation.navigate("Article", {article: {url:item.url,author:item.author,imageUrl:item.urlToImage,title:item.title}})}
          />
        )}
        // listにはStringのkeyが必要
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    // 中身を横並びにするならrow,縦並びにするならcolumn（何も設定しないとcolumnになる）
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    // 余った箇所をいっぱいに使うので1
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    // スペースの間隔などを整える（swiftのスタックビューみたいな感じ）
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 13,
  },
  subText: {
    fontSize: 10,
    color: 'gray',
  },
});
