
//  jab api error aayege to iss tarah se he aayege code isse form mai read hoga or response bhejega 

class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong ",
    errors = [],
    statck = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.sucess = false;
    this.errors = errors;



    if (statck) {
      this.stack = statck;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;