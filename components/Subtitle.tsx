import { StyleSheet, Text, View } from "react-native"
import React from "react"

type Props = {
  title: string
}

const Subtitle = ({ title }: Props) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{title}</Text>
    </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
})
