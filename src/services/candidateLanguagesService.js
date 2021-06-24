import axios from "axios";

export default class candidateLanguagesService{
    getAll(){
        return axios.get("http://localhost:8080/candidatelanguages/getall")
    }
}
