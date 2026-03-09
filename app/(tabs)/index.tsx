import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  AppState
} from "react-native";

export default function SignIn() {

  const [phone, setPhone] = useState("");
  const [appState, setAppState] = useState(AppState.currentState);

  // useEffect 1: chạy khi app mở
  useEffect(() => {
    alert("Ứng dụng đã khởi chạy");
  }, []);

  // useEffect 2: chạy khi phone thay đổi
  useEffect(() => {
    if (phone !== "") {
      console.log("Số điện thoại thay đổi:", phone);
    }
  }, [phone]);

  // useEffect 3: lắng nghe trạng thái app
  useEffect(() => {

    const subscription = AppState.addEventListener("change", (nextState) => {
      setAppState(nextState);
      console.log("App State:", nextState);
    });

    return () => {
      subscription.remove();
    };

  }, []);

  const handlePhoneChange = (text) => {

    let cleaned = text.replace(/\D/g, "");

    if (cleaned.length > 3 && cleaned.length <= 6) {
      cleaned = cleaned.replace(/(\d{3})(\d+)/, "$1 $2");
    }
    else if (cleaned.length > 6) {
      cleaned = cleaned.replace(/(\d{3})(\d{3})(\d+)/, "$1 $2 $3");
    }

    setPhone(cleaned);
  };

  const validatePhone = () => {

    const phoneNumber = phone.replace(/\s/g, "");

    const phoneRegex = /^(0[35789])[0-9]{8}$/;

    if (phoneNumber === "") {
      alert("Vui lòng nhập số điện thoại");
      return;
    }

    if (!phoneRegex.test(phoneNumber)) {
      alert("Số điện thoại không đúng định dạng!");
      return;
    }

    alert("Số điện thoại hợp lệ!");
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Đăng nhập</Text>

      <Text style={styles.label}>Nhập số điện thoại</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="numeric"
        value={phone}
        onChangeText={handlePhoneChange}
      />

      <TouchableOpacity style={styles.button} onPress={validatePhone}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>

      <Text style={styles.stateText}>
        Trạng thái App: {appState}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff"
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40
  },

  label: {
    fontSize: 16,
    marginBottom: 10
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20
  },

  button: {
    backgroundColor: "#1976D2",
    padding: 15,
    borderRadius: 8
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16
  },

  stateText: {
    marginTop: 20,
    textAlign: "center",
    color: "gray"
  }

});
