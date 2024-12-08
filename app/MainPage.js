import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";

export default function MainPage() {
    const router = useRouter(); // Expo Router를 사용하여 페이지 이동

    return (
        <View style={styles.container}>
            {/* 1사분면: 알약 아이콘 */}
            <TouchableOpacity
                style={[styles.iconContainer, styles.topLeft]}
                onPress={() => router.push("/MedicationPage")}
            >
                <Text style={styles.iconText}>💊</Text>
                <Text style={styles.label}>약 섭취 알림</Text>
            </TouchableOpacity>

            {/* 2사분면: 심박수 아이콘 */}
            <TouchableOpacity
                style={[styles.iconContainer, styles.topRight]}
                onPress={() => router.push("/HeartRatePage")}
            >
                <Text style={styles.iconText}>❤️</Text>
                <Text style={styles.label}>심박수 측정</Text>
            </TouchableOpacity>

            {/* 3사분면: 연락처 아이콘 */}
            <TouchableOpacity
                style={[styles.iconContainer, styles.bottomLeft]}
                onPress={() => router.push("/ContactPage")}
            >
                <Text style={styles.iconText}>📞</Text>
                <Text style={styles.label}>비상 연락처</Text>
            </TouchableOpacity>

            {/* 4사분면: 긴급 아이콘 */}
            <TouchableOpacity
                style={[styles.iconContainer, styles.bottomRight]}
                onPress={() => router.push("/EmergencyPage")}
            >
                <Text style={styles.iconText}>🚨</Text>
                <Text style={styles.label}>긴급 상황</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        backgroundColor: "#f8f9fa",
    },
    iconContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: "#4caf50",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
    },
    iconText: {
        fontSize: 50,
        color: "#fff",
    },
    label: {
        fontSize: 14,
        color: "#fff",
        marginTop: 10,
        textAlign: "center",
    },
    topLeft: {
        top: "20%",
        left: "15%",
    },
    topRight: {
        top: "20%",
        right: "15%",
    },
    bottomLeft: {
        bottom: "20%",
        left: "15%",
    },
    bottomRight: {
        bottom: "20%",
        right: "15%",
    },
});
