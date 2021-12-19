import axios from "axios";

export async function getCareers() {
  const response = await axios.get(
    "https://2rksqj0zwg.execute-api.ap-northeast-2.amazonaws.com/dev/careers"
  );
  return JSON.parse(response.data.body);
}
