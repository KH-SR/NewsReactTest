/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet, FlatList, SafeAreaView,
} from 'react-native';
import ListItem from './components/ListItem';
import articles from './sample/articles.json';

export default function App() {
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
