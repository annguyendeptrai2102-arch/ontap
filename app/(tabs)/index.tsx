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

  const validatePhone = () => {

    const phoneRegex = /^(0[3|5|7|8|9])[0-9]{8}$/;

    if (phone === "") {
      alert("Vui lòng nhập số điện thoại");
      return;
    }

    if (!phoneRegex.test(phone)) {
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
        onChangeText={(text) => setPhone(text)}
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