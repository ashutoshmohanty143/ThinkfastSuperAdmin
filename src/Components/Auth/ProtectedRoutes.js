
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
  
function ProtectedRoutes(props) {
      const {Comp} = props;
      const navigate = useNavigate();
      useEffect(() =>{
          let token = sessionStorage.getItem('userToken');
          if(!token){
            navigate('/');
          }
      });
      return (
        <div>
            <Comp />
        </div>
      );
};
export default ProtectedRoutes;
