import React, {useState, useEffect} from 'react';
import {View, Text,Pressable, Image} from 'react-native';
import {styles} from "./styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {Auth} from "aws-amplify";

export default function About() {
  return(
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/bg.jpeg")}/>
      <View style={styles.innerContainer}>
        <View style={styles.userRow}>
          <View style={styles.userImage}>
            <FontAwesome style={styles.userIcon}name={'user'} size={30} />
          </View>
          <Text style={styles.name}>Mai Van Wagner</Text>
        </View>
        <View style={styles.messageRowWrapper}>
          <Text style={styles.messageRow}>Message</Text>
          <View style={styles.circle}></View>
        </View>
        <Pressable onPress={()=> console.warn("Domor")}>
          <View style={styles.wrapper}>
            <Text style={styles.doMoreRow}>Do more with your account</Text>
          </View>
        </Pressable>
        <Pressable onPress={()=> console.warn("money")}>
          <View style={styles.wrapper}>
            <Text style={styles.makeMoneyRow}>Make money driving</Text>
          </View>
        </Pressable>
        <Pressable onPress={()=> {Auth.signOut()}}>
          <View style={styles.wrapperSignout}>
            <Text style={styles.signout}>Sign out</Text>
          </View>
        </Pressable>
      </View>
      
    </View>
  )
}
