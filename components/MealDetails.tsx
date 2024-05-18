import { StyleSheet, Text, View } from "react-native"
import React from "react"

type Props = {
  duration?: number
  complexity?: string
  affordability?: string
  textStyle?: { color: string }
}

const MealDetails = ({
  duration,
  complexity,
  affordability,
  textStyle,
}: Props) => {
  return (
    <View style={[styles.details]}>
      <Text style={[styles.item, textStyle]}>{duration}</Text>
      <Text style={[styles.item, textStyle]}>{complexity?.toUpperCase()}</Text>
      <Text style={[styles.item, textStyle]}>
        {affordability?.toUpperCase()}
      </Text>
    </View>
  )
}

export default MealDetails

const styles = StyleSheet.create({
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
