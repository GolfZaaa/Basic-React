import React, { useCallback, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import Select from "react-select";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const options = [
  { value: "chocolate", label: "chocolate" },
  { value: "strawberry", label: "strawberry" },
  { value: "vanilla", label: "vanilla" },
];

const FormEm = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({ accept: { "image/*": [] } });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <div>
      <div className="card ">
        <div className="row">
          <div className="form-group col-md-3 mt-3  mt-md-10  ">
            <div {...getRootProps({ style })}>
              <input {...getInputProps()} />
              <p style={{ color: "blue", fontSize: 17 }}>
                อัพโหลดรูปภาพโปรไฟล์
              </p>
              <p>PNG,JPG,JPEG ขนาดไม่เกิน 10MB</p>
            </div>
          </div>
          <div className="form-group col-md-3 mt-3 mt-md-10">
            <p>คำนำหน้าชื่อ(TH)</p>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              placeholder="-เลือก-"
            />

            <p>คำนำหน้าชื่อ(EN)</p>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              placeholder="-เลือก-"
            />

            <p>วันเดือนปีเกิด</p>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              placeholder="-เลือก-"
            />

            <p>โทรศัพท์มือถือ</p>
            <input className="form-control" />
          </div>
          <div className="form-group col-md-3 mt-3 mt-md-10">
            <p>ชื่อ(TH)</p>
            <input className="form-control" />

            <p>ชื่อ(EN)</p>
            <input className="form-control" />

            <p>อายุ</p>
            <input className="form-control" />

            <p>อีเมล</p>
            <input className="form-control" />
          </div>
          <div className="form-group col-md-3 mt-3 mt-md-10">
            <p>นามสกุล(TH)</p>
            <input className="form-control" />

            <p>นามสกุล(EN)</p>
            <input className="form-control" />

            <p>สัญชาติ</p>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              placeholder="-เลือก-"
            />
          </div>

          <div>
            <p style={{ color: "blue" }}>ส่วนที่1.1 :: ข้อมูลปัจจุบัน</p>

            <div className="row">
              <div className="form-group col-md-2 mt-3 mt-md-10">
                <p>เลขที่</p>
                <input className="form-control" />
                <p>ตรอก/ซอย</p>
                <input className="form-control" />
                <p>ตำบล/อำเภอ/จังหวัด/รหัสไปรษณีย์</p>
                <input className="form-control" />
              </div>
              <div className="form-group col-md-2 mt-3 mt-md-10">
                <p>หมู่ที่</p>
                <input className="form-control" />
              </div>

              <div className="form-group col-md-4 mt-3 mt-md-10">
                <p>หมู่บ้าน/อาคาร</p>
                <input className="form-control" />
                <p>ถนน</p>
                <input className="form-control" />
                <p>ตำแหน่งงาน</p>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  placeholder="-เลือก-"
                />
              </div>

              <div className="form-group col-md-4 mt-3 mt-md-10">
                <p>ชั้น</p>
                <input className="form-control" />
                <p>ค้นหาที่อยู่</p>
                <input className="form-control" />
                <p>ชื่อโครงการ</p>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  placeholder="-เลือก-"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormEm;
