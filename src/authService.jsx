import {URL} from "./url"
import axios from 'axios'

// authService.js
const authService = {
    isAuthenticated: false,
    user: null,
    token: null,
  
    async login(username, password) {
      // Perform login and obtain access token
      // Set isAuthenticated, user, and token
    },
  
    async logout() {
      // Perform logout and reset isAuthenticated, user, and token
    },
  
    async getUser() {
      // Fetch user details from the server using the access token
      // Update user details
      try{
     
        const accessToken = localStorage.getItem("access_token");
    
        if(!accessToken){
              // Handle the case where the access token is not available
          console.error('Access token not found')
        }
    
    
          const res = await axios.get(URL+"/api/users/"+userId,{
            headers: {
              Authorization: `Bearer ${accessToken}`,
            }
          }
          )
          setUser(res.data)
          console.log(res.data)
      }
      catch(err){
        console.log(err)
      }
    },
  };
  
  export default authService;