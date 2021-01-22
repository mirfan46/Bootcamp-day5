const axios = require("axios");

class Fetcher {
  constructor() {}

  getData = async (url) => {
    try {
      const response = await axios.get(url);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  deleteData = async (url) => {
    try {
      const response = await axios.delete(url);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  postData = async (url, data) => {
    try {
      const response = await axios.post(url, data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  putData = async (url, data) => {
    try {
      const response = await axios.put(url, data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  patchData = async (url, data) => {
    try {
      const response = await axios.patch(url, data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
}

const myFetcher = new Fetcher();
myFetcher.getData("https://httpbin.org/get");
myFetcher.deleteData("https://httpbin.org/delete");
myFetcher.postData("https://httpbin.org/post");
myFetcher.putData("https://httpbin.org/put");
myFetcher.patchData("https://httpbin.org/patch");
