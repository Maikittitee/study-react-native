import { StyleSheet, Text, View } from 'react-native'
import { ThemedText } from '@/components/ThemedText';
import React from 'react'
// import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

const Index = () => {
  return (
	<View>
	  <ThemedText>Aura</ThemedText>
	  <ThemedText>Aura</ThemedText>
	  <ThemedText>Aura</ThemedText>
	  <Text style={{color:'white'}}>Aura</Text>
	  <ThemedText>Aura</ThemedText>
	</View>
  )
}

export default Index

const styles = StyleSheet.create({})