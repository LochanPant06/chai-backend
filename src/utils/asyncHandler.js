import { request } from "express";

// MTHD 2 : simpler way

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

// MTHD 1

// *****NOTE*****

// const asyncHandler = () => {}
// const asyncHandler = (fn) =>() => {} // higher order function 
// const asyncHandler = (fn) =>async() => {}

// we can also pass error code from controller to here

// rapeted codeing se bachne ke liye hum ye function bana rahe hai

// const asyncHandler = (fn) => async (req, res, next) => {  //funtion ko open kara hai {higher order function}
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       sucess: false,
//       message: error.message,
//     });
//   }
// };

export default asyncHandler ;


/*
insted of doing this :-

export const createComplaint = async (req, res) => {
  try {
    const data = await Model.create(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


we do this :-

export const createComplaint = asyncHandler(async (req, res) => {
  const data = await Model.create(req.body);
  res.json(data);
});

*/ 