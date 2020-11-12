import react from "react";
import { View, Text, Image } from "react-native";
import HeartIcon from "../assets/images/Heart";

export default function Post({
  title,
  course,
  text,
  writer,
  like,
  time,
  view,
}) {
  /*
  return (
    <>
      <View>
        <View>
          <Text>{title}</Text>
          <HeartIcon />
        </View>

        <Text>{text}</Text>
        <View>
          <Image />
          <Text>
            {writer} 조회 {view}
          </Text>
          <Text>{time}</Text>
        </View>
      </View>
    </>
  );
  */
  return <Text>{title}</Text>;
}
