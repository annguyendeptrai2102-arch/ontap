import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default function SignIn() {

  const [phone, setPhone] = useState("");

  const handlePhoneChange = (text) => {

    // bỏ tất cả ký tự không phải số
    let cleaned = text.replace(/\D/g, "");

    // format số điện thoại
    if (cleaned.length > 3 && cleaned.length <= 6) {
      cleaned = cleaned.replace(/(\d{3})(\d+)/, "$1 $2");
    } 
    else if (cleaned.length > 6) {
      cleaned = cleaned.replace(/(\d{3})(\d{3})(\d+)/, "$1 $2 $3");
    }

    setPhone(cleaned);
  };

  const validatePhone = () => {

    // bỏ khoảng trắng để kiểm tra
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
  }

});
