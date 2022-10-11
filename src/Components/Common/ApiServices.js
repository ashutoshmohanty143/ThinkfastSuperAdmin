import axios from 'axios';
//const API_BASE_URL = "http://localhost:5000/api/curd/doc";
const API_BASE_URL = "https://thinkfast.in:5000/api/curd/doc";

class ApiServices {
  
  AddRecord(formData){    
    const token = sessionStorage.getItem("userToken");
      return axios.post(API_BASE_URL, formData, {
          headers: {
              'Authorization': `Bearer ${token}`
          },
      });
  }

    GetAllRecords(collectionName){
      const token = sessionStorage.getItem("userToken");
        return axios.get(API_BASE_URL+"/?collection="+collectionName, {
            headers: {
              'Authorization': `Bearer ${token}`
            },
          });
    }

    GetSingleRecordById(id,collectionName){
      const token = sessionStorage.getItem("userToken");
      return axios.get(API_BASE_URL+"/"+id+"/?collection="+collectionName, {
          headers: {
            'Authorization': `Bearer ${token}`
          },
        });
    }

    DeleteRecord(id, collectionName){
      const token = sessionStorage.getItem("userToken");
        return axios.delete(API_BASE_URL+"/"+id+"/?collection="+collectionName, {
            headers: {
              'Authorization': `Bearer ${token}`
            },
        });
    }

    UpdateRecord(formData){
      const token = sessionStorage.getItem("userToken");
      return axios.put(API_BASE_URL,formData, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });
    }

}

export default new ApiServices();