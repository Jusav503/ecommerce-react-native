import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { View, Text, TextInput, Alert, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import countryList from "country-list";

import styles from "./styles";
import Buttons from "../../components/Buttons";

const countries = countryList.getData();
const AdressScreen = () => {
  const [country, setCountry] = useState(countries[0].code);
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [addressError, setAddressError] = useState("");

  const onCheckout = () => {
    if (!fullname) {
      Alert.alert("Please fill in the empty fields");
    }
  };
  const validateAddress = () => {
    if (address.length < 5) {
      setAddressError('Please enter a valid address');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Picker
          selectedValue={country}
          onValueChange={setCountry}
          style={styles.picker}
        >
          {countries.map((country) => (
            <Picker.Item value={country.code} label={country.name} />
          ))}
        </Picker>

        {/* Name */}
        <View style={styles.row}>
          <Text>Full name</Text>
          <TextInput
            style={styles.input}
            value={fullname}
            onChangeText={setFullname}
          />
        </View>

        {/* Number */}
        <View style={styles.row}>
          <Text>Phone number</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            keyboardType={"phone-pad"}
          />
        </View>

        {/* Address */}
        <View style={styles.row}>
          <Text>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Street address, Apt, Suite, Unit, Building (optional)"
            value={address}
            onChangeText={text => {
              setAddress(text);
              setAddressError("");
            }}
            onEndEditing={validateAddress}
          />
          {!!addressError && (
            <Text style={styles.errorLabel}>{addressError}</Text>
          )}
        </View>

        {/* City */}
        <View style={styles.row}>
          <Text>City</Text>
          <TextInput style={styles.input} value={city} onChangeText={setCity} />
        </View>

        <Buttons text="Checkout" onPress={onCheckout} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AdressScreen;
