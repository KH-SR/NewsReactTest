import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';

// (props)と記載しなくても、この箇所で展開すれば後にprops.textなどの記載が不要になる
const ListItem = ({ imageUrl, title, author }) => (
  <View>
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri: imageUrl,
          }}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.text}>
          {title}
        </Text>
        <Text style={styles.subText}>{author}</Text>
      </View>
    </View>
  </View>

);
export default ListItem;

const styles = StyleSheet.create({

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
