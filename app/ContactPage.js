import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { database } from "../firebase";
import { ref, push } from "firebase/database";
import { useRouter } from "expo-router";

export default function ContactPage() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const router = useRouter();

    const addContact = () => {
        if (phoneNumber.trim()) {
            push(ref(database, "contacts"), { phone: phoneNumber });
            setPhoneNumber("");
            Alert.alert("성공", "비상 연락처가 추가되었습니다.");
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="전화번호 입력"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
            />
            <Button title="비상 연락처 추가" onPress={addContact} />
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
    container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f1f8ff" },
    input: { borderWidth: 1, padding: 10, width: "80%", marginBottom: 10, borderRadius: 5, borderColor: "#ddd" },
    backButton: { padding: 15, backgroundColor: "#007bff", borderRadius: 10, marginTop: 20 },
    backButtonText: { color: "#fff", fontSize: 16 },
});
