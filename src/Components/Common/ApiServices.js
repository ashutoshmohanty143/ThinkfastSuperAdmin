import axios from 'axios';
const API_BASE_URL = "http://localhost:5000/api/curd/doc";
const token = sessionStorage.getItem("userToken");

class ApiServices {
  
    AddRecord(formData){
        console.log(formData);
        return axios.post(API_BASE_URL, formData, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });
    }

    GetAllRecords(collectionName){
        return axios.get(API_BASE_URL+"/?collection="+collectionName, {
            headers: {
              'Authorization': `Bearer ${token}`
            },
          });
    }

    GetSingleRecordById(id,collectionName){
      return axios.get(API_BASE_URL+"/"+id+"/?collection="+collectionName, {
          headers: {
            'Authorization': `Bearer ${token}`
          },
        });
    }

    DeleteRecord(id, collectionName){
        return axios.delete(API_BASE_URL+"/"+id+"/?collection="+collectionName, {
            headers: {
              'Authorization': `Bearer ${token}`
            },
        });
    }

    UpdateRecord(formData){
        return axios.put(API_BASE_URL,formData, {
          headers: {
            'Authorization': `Bearer ${token}`
          },
        });
    }

}

export default new ApiServices();