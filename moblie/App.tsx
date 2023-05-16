import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-600">
      <Text className="text-center text-5xl font-bold text-gray-50">
        Hello Word
      </Text>
      <StatusBar style="light" />
    </View>
  )
}
