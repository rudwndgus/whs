import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function EmergencyPage() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>긴급 상황 발생!</Text>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => router.push("/MainPage")}
            >
                <Text style={styles.backButtonText}>메인으로 돌아가기</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff5f5" },
    text: { fontSize: 24, fontWeight: "bold", color: "#e53935" },
    backButton: { padding: 15, backgroundColor: "#007bff", borderRadius: 10, marginTop: 20 },
    backButtonText: { color: "#fff", fontSize: 16 },
});
