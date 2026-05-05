import { Text, View, StyleSheet } from "react-native";

import { styles } from "./style";

// todo componente tem um retorno, mesmo que seja null.

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello, World! </Text>
            <Text style={styles.title}>Hello, World! </Text>
        </View>
    )
}