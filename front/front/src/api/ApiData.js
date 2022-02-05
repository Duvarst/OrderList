import axios from "axios";

export async function getData() {
  try {
    const result = await axios.get("http://localhost:5000/api/order", {
      method: "GET",
      headers: {
        "Content-Type": "text/plain:charset=UTF-8",
      },
      mode: "cors",
    });
    return result.data;
  } catch (e) {
    console.log(e);
  }
}
export async function getDataOne() {
  try {
    const result = await axios.get(
      "http://localhost:5000/api/order/61fd568fe482fb6e43c96bb3",
      {
        method: "GET",
        headers: {
          "Content-Type": "text/plain:charset=UTF-8",
        },
        mode: "cors",
      }
    );
    return result.data;
  } catch (e) {
    console.log(e);
  }
}
