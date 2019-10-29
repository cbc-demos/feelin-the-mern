import axios from "axios";

export default {
  getAllMembers: function() {
    // This will be a make a GET request with axios to /api/members
    return axios.get("/api/members")
  },

  addNewMember: function(member) {
    // This will make a POST request with axios to /api/new.
    // Passing a member object as the body of the request
    return axios.post("/api/members", member)
  }
};
