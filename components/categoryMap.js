import * as React from "react";
import { Image } from "react-native";

export default function categoryMap(code) {
  const constMap={
    "MT1":require("../assets/cart.png"), "CS2":require("../assets/cart.png"),
    "PS3":require("../assets/book.png"),"SC4":require("../assets/book.png"),"AC5":require("../assets/book.png"),
    "PK6":require("../assets/park.png"),"OL7":require("../assets/park.png"),
    "SW8":require("../assets/subway.png"),
    "BK9":require("../assets/money.png"),"PO3":require("../assets/money.png"),
    "CT1":require("../assets/landmark.png"),"AT4":require("../assets/landmark.png"),
    "FD6":require("../assets/eating.png"),
    "CE7":require("../assets/caffe.png"),
    "HP8":require("../assets/pill.png"),"PM9":require("../assets/pill.png"),
    "AD5":require("../assets/suk.png"),
  }
  let result = constMap[code];
  result = result?result:require("../assets/pin.png");
  return result;
}
