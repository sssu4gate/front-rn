import * as React from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components/native";
import * as theme from "../assets/theme";
import Heart from "../assets/images/Heart";
import Calendar from "../assets/images/Calendar";
import Check from "../assets/images/Check";
import CheckFull from "../assets/images/CheckFull";

const Container = styled.View`
  margin-top: 50px;
  height: 100px;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background: #f3f3f3;
  border-bottom-width: 1px;
  border-bottom-color: #e3e3e3;
`;
const Row = styled.View`
  flex: ${({ flex }) => (flex ? flex : 1)};
  width: 100vw;
  padding-left: 25px;
  padding-right: 25px;
  flex-direction: row;
  align-items: flex-end;
  ${({ paddingTop }) => (paddingTop ? `padding-top: ${paddingTop}` : "")}
  ${({ paddingBottom }) =>
    paddingBottom ? `padding-bottom: ${paddingBottom}` : ""}
`;
const Title = styled.Text`
  font-size: 28px;
  color: ${theme.PRIMARY_TEXT_COLOR};
  font-weight: bolder;
  flex: 8;
`;
const IconContainer = styled.View`
  flex: 2;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

const Profile = styled.Image`
  border-radius: 50%;
  width: 28px;
  height: 28px;
`;

export default function CourseTitle({
  mode = "edit",
  title = "코스 1",
  heart = 0,
  user = {
    img:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2200&q=80",
    name: "앤서니",
  },
  view = 0,
  date,
  location,
}) {
  return (
    <Container>
      <Row flex={5.5} paddingTop="14px">
        <Title>{title}</Title>
        {mode == "view" ? (
          <IconContainer
            style={{ justifyContent: "flex-end", alignItems: "flex-end" }}
          >
            <Heart length={20} />
            <Text
              style={{
                fontSize: "20px",
                color: theme.PRIMARY_COLOR,
                marginLeft: "3px",
                fontWeight: "300",
              }}
            >
              {heart}
            </Text>
          </IconContainer>
        ) : (
          ""
        )}
      </Row>
      <Row flex={4.5}>
        {mode == "view" ? (
          <>
            <IconContainer style={{ flex: 8 }}>
              <Profile source={{ uri: user.img }} />
              <Text
                style={{
                  color: theme.SECOND_TEXT_COLOR,
                  fontSize: "12px",
                  marginLeft: "8px",
                }}
              >
                {user.name} 조회 {view}
              </Text>
            </IconContainer>
            <IconContainer
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: theme.SECOND_TEXT_COLOR,
                  fontSize: "10px",
                }}
              >
                {location}
              </Text>
              <Text
                style={{
                  color: theme.SECOND_TEXT_COLOR,
                  fontSize: "10px",
                }}
              >
                {date}
              </Text>
            </IconContainer>
          </>
        ) : (
          <>
            <IconContainer style={{ justifyContent: "flex-start" }}>
              <Calendar length={14} />
              <Text
                style={{
                  fontSize: "12px",
                  color: theme.SECOND_TEXT_COLOR,
                  fontWeight: "bold",
                  marginLeft: "5px",
                }}
              >
                {date ? date : "미정"}
              </Text>
            </IconContainer>
            <IconContainer style={{ justifyContent: "flex-end" }}>
              <Check />
              <Text
                style={{
                  fontSize: "12px",
                  color: theme.PRIMARY_COLOR,
                  fontWeight: "bold",
                  marginLeft: "5px",
                }}
              >
                공유
              </Text>
            </IconContainer>
          </>
        )}
      </Row>
    </Container>
  );
}
