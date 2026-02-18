// response is form mai jayega 


class ApiResponse {
  constructor(statuscode, data, message = "Success") {
    this.statuscode = statuscode;
    this.message = message;
    this.data = data;
    this.success = statuscode < 300 ;
  } }



  /*
  Instead of writing this everywhere ❌:

res.status(201).json({
  success: true,
  message: "Complaint created",
  data: complaint
});


We do this ✅:

res
  .status(201)
  .json(new ApiResponse(201, complaint, "Complaint created"));
  
  */ 