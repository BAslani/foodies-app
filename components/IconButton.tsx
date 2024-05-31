import { Pressable, StyleSheet, Text } from "react-native"
import React from "react"

type Props = {
  onPress: () => void
  icon: string
  color: string
}

const IconButton = ({ onPress, color, icon }: Props) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <Text style={styles.save}>Save</Text>
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  save: {
    color: "white",
  },
})
