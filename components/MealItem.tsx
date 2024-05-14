import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native"
import React from "react"

type Props = {
  title: string
  imageUrl: string
  duration: number
  complexity: string
  affordability: string
}

const MealItem = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: Props) => {
  return (
    <View style={styles.container}>
      <Pressable android_ripple={{ color: "ddd" }}>
        <View>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.item}>{duration}</Text>
          <Text style={styles.item}>{complexity.toUpperCase()}</Text>
          <Text style={styles.item}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  item: {
    fontSize: 12,
  },
})
