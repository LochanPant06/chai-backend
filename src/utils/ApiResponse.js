// response is form mai jayega 


class ApiResponse {
  constructor(statuscode, data, message = "Success") {
    this.statuscode = statuscode;
    this.message = message;
    this.data = data;
    this.success = statuscode < 300 ;
  } }