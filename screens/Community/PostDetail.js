import * as React from "react";
import { View, ScrollView, RefreshControl } from "react-native";
import * as theme from "../../assets/theme";
import PostContent from "./PostContent";
import PostTitle from "./PostTitle";
import { requestLoadPost } from "../../reducers/postReducer";
import { connect } from "react-redux";
import LoadingSVG from "../../assets/Loading";

function PostDetail({
  navigation,
  route: { params },
  loading,
  error,
  token,
  requestLoadPost,
  post,
}) {
  const [refreshing, setRefreshing] = React.useState(true);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
  }, []);

  React.useEffect(() => {
    if (params?.id && refreshing) {
      requestLoadPost(token, params.id);
      setRefreshing(false);
    }
  }, [params, refreshing]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        dropShadow: "1px 1px black",
      }}
    >
      {loading ? (
        <View style={{ alignItems: "center" }}>
          <LoadingSVG width={80} height={80} />
        </View>
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <PostTitle post={post} />
          <PostContent post={post} />
        </ScrollView>
      )}
    </View>
  );
}

export default connect(
  (state) => ({
    error: state.post.error,
    loading: state.post.loading,
    token: state.user.accessToken,
    post: state.post.post,
  }),
  { requestLoadPost }
)(PostDetail);
