import {
  ListRenderItemInfo,
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native"
import React from "react"
import Category from "../models/category"

type Props = {
  category: ListRenderItemInfo<Category>
  onPress: (id: string) => void
}

const CategoryGridTile = ({
  onPress,
  category: {
    item: { title, color, id },
  },
}: Props) => {
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: "#ddd" }}
        style={styles.button}
        onPress={() => onPress(id)}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    backgroundColor: "white",
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
})
