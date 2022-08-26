import axios from "axios";

const baseURL = "http://127.0.0.1:5000/api";

class Api {
  constructor() {
    const instance = axios.create({
      baseURL,
      timeout: 1000,
    });
    this.api = instance;
  }

  async getMeals() {
    return this.api.get("/meal");
  }
}

export default new Api();
