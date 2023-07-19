import { axios } from "@/configs";

const resource = "/data";

const dataRepositorry = {
    get: () => axios.get(resource),
};

export default dataRepositorry;
