//  jab api error aayege to iss tarah se he aayege code isse form mai read hoga or response bhejega

/*

We are creating a custom error

It behaves like JavaScript’s built-in Error

But with extra API-related info

*/
class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong ",
    errors = [],
    stack = ""
  ) {
    super(message);
    /*
    Calls parent Error class
    Sets error.message
    Without this ❌ → error won’t behave correctly.
    */
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      //shows when error occers  used for debuging
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;

/*

Instead of writing this everywhere ❌:

res.status(400).json({ message: "Error" });


We throw errors like this ✅:

throw new ApiError(400, "All fields are required");

*/

/*
| Parameter    | Purpose                                |
| ------------ | -------------------------------------- |
| `statusCode` | HTTP status (400, 401, 404, 500)       |
| `message`    | Main error message                     |
| `errors`     | Extra details (validation errors etc.) |
| `stack`      | Debugging info (optional)              |

*/
