// import React from "react";
// import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
// import { useRouter } from "expo-router";

// export default function CallPage() {
//     const router = useRouter();

//     return (
//         <View style={styles.container}>
//             <Image source={require("../assets/call.jpg")} style={styles.image} />
//             <TouchableOpacity
//                 style={styles.backButton}
//                 onPress={() => router.push("/MainPage")}
//             >
//                 <Text style={styles.backButtonText}>메인으로 돌아가기</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#ffffff" },
//     image: { width: "100%", height: "80%", resizeMode: "contain" },
//     backButton: { padding: 15, backgroundColor: "#007bff", borderRadius: 10, marginTop: 20 },
//     backButtonText: { color: "#fff", fontSize: 16 },
// });
