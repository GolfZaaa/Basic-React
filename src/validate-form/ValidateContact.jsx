import * as yup from "yup";

export const ValidateContact = yup.object({
  name: yup.string().required("กรุณากรอกชื่อ"),
  email: yup.string()
  .matches(
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    "รูปแบบอีเมลไม่ถูกต้อง"
  )
  .required("กรุณากรอกอีเมล"),
  password: yup.string().required("กรุณากรอกรหัสผ่าน"),
  subject: yup.string().required("กรุณากรอกชื่อเรื่อง"),
  message: yup.string().required("กรุณากรอกข้อความ"),
  phonenumber: yup.string().required("กรุณากรอกเบอร์โทรศัพท์"),
  status: yup.string().required("กรุณาเลือก")
})