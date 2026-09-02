// import {z} from "zod";


// export const signupSchema=z.object({
//   name:
//       z.string()
//       .min(3,"Mininum length of name should be 3")
//       .max(30,"Maximum length of name should be 30")
//       .trim(),
//   age:
//       z.number()
//       .min(10,"Mininum age should be 10")
//       .max(100,"Maximum age should be 100")
//       .optional(),
//   email:
//       z.preprocess(
//         (value)=>typeof value=="string"?value.trim().toLowerCase:"",
//       z.email("Email must be valid")),
//   password:
//       z.string()
//       .min(8)
//       .max(30)
//       .regex(/[A-Z]/,"Your Password should have atleast one capital letter")
//       .regex(/[a-z]/,"Your Password should have atleast one small letter")
//       .regex(/[0-9]/,"Your Password should have atleast one number")
//       .regex(/[!@#$^*()<>~.,?{}]/,"Your Password should have atleast one special character")
// })

// export const loginSchema =z.object({
//     email:
//       z.preprocess(
//         (value)=>typeof value=="string"?value.trim().toLowerCase:"",
//       z.email("Email must be valid")),
//     password:
//       z.string()
//       .min(8)
//       .max(30)
//       .regex(/[A-Z]/,"Your Password should have atleast one capital letter")
//       .regex(/[a-z]/,"Your Password should have atleast one small letter")
//       .regex(/[0-9]/,"Your Password should have atleast one number")
//       .regex(/[!@#$^*()<>~.,?{}]/,"Your Password should have atleast one special character")
// })

import { z } from "zod";

export const signupSchema = z.object({
  name: z.string()
    .min(3, "Minimum length of name should be 3")
    .max(30, "Maximum length of name should be 30")
    .trim(),

  age: z.number()
    .min(10, "Minimum age should be 10")
    .max(100, "Maximum age should be 100")
    .optional(),

  email: z.preprocess(
    (value) =>
      typeof value === "string"
        ? value.trim().toLowerCase()
        : "",
    z.email("Email must be valid")
  ),

  password: z.string()
    .min(8, "Password must contain at least 8 characters")
    .max(30, "Password cannot exceed 30 characters")
    .regex(/[A-Z]/, "Password should have at least one capital letter")
    .regex(/[a-z]/, "Password should have at least one small letter")
    .regex(/[0-9]/, "Password should have at least one number")
    .regex(
      /[!@#$^*()<>~.,?{}]/,
      "Password should have at least one special character"
    )
});


export const loginSchema = z.object({
  email: z.preprocess(
    (value) =>
      typeof value === "string"
        ? value.trim().toLowerCase()
        : "",
    z.email("Email must be valid")
  ),

  password: z.string()
    .min(8, "Password must contain at least 8 characters")
    .max(30, "Password cannot exceed 30 characters")
    .regex(/[A-Z]/, "Password should have at least one capital letter")
    .regex(/[a-z]/, "Password should have at least one small letter")
    .regex(/[0-9]/, "Password should have at least one number")
    .regex(
      /[!@#$^*()<>~.,?{}]/,
      "Password should have at least one special character"
    )
});