import React from "react";
import "./Test.css";
import axios from "axios";
import useAsync from "../lib/useAsync";

async function getCareers() {
  const response = await axios.get(
    "https://2rksqj0zwg.execute-api.ap-northeast-2.amazonaws.com/dev/careers"
  );
  return JSON.parse(response.data.body);
}

// const StoreToProps = (state) => ({
//   res: state.resReducer.res,
// });

function ResScreen() {
  const [state, refetch] = useAsync(getCareers, []);

  const { loading, data: careers, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>${error}</div>;
  if (!careers) return null;

  switch (state) {
    case "$0":
      return <p>$0결과입니다.</p>;
    case "$1":
      return <p>$1결과입니다.</p>;
    case "$5":
      return <p>$5결과입니다.</p>;
    default:
      return <div>결과창입니다.</div>;
  }
}

export default ResScreen;
