import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native"
import React from "react"
import { useNavigation } from "@react-navigation/native"
import MealDetails from "./MealDetails"
import { NavigationProp, ParamListBase } from "@react-navigation/native"

type RootStackParamList = {
  meal: { mealId: string } // Add other routes along with their expected params
  // otherRoute: { otherParam: type };
  // Add as many routes as you have in your app with their respective params
}

type Props = {
  id: string
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
  id,
}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const handlePress = () => {
    navigation.navigate("meal", {
      mealId: id,
    })
  }
  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress} android_ripple={{ color: "ddd" }}>
        <View>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
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
})
