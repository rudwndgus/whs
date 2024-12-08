import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";

export default function HeartRatePage() {
    const [heartRate, setHeartRate] = useState(null);
    const [spo2, setSpo2] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchHeartRate = async () => {
            try {
                const response = await fetch("http://<your-raspberry-pi-ip>:5000/heartrate");
                const data = await response.json();
                if (data.heart_rate && data.spo2) {
                    setHeartRate(data.heart_rate);
                    setSpo2(data.spo2);
                } else if (data.error) {
                    console.error(data.error);
                }
            } catch (error) {
                console.error("Failed to fetch heart rate data:", error);
            }
        };

        const interval = setInterval(fetchHeartRate, 1000); // 1초마다 데이터 가져오기

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
    }, []);

    useEffect(() => {
        if (heartRate > 120) {
            Alert.alert("⚠️ 심박수 경고", `심박수가 위험 수준입니다! (${heartRate} bpm)`);
        }
    }, [heartRate]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>심박수 측정</Text>
            <Text style={styles.data}>
                {heartRate !== null ? `심박수: ${heartRate} bpm` : "심박수 측정 중..."}
            </Text>
            <Text style={styles.data}>
                {spo2 !== null ? `산소포화도: ${spo2}%` : ""}
            </Text>
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
    container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f8f9fa" },
    title: { fontSize: 24, marginBottom: 20, color: "#e53935" },
    data: { fontSize: 18, marginBottom: 10 },
    backButton: { padding: 15, backgroundColor: "#007bff", borderRadius: 10 },
    backButtonText: { color: "#fff", fontSize: 16 },
});
