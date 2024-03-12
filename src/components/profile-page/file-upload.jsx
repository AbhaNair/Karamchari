/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";

function FileUpload({ heading }) {
  const [file, setFile] = useState();

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:5173/uploadFile";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
  }

  return (
    <div className="App text-lg">
      <form onSubmit={handleSubmit}>
        <h1>{heading}</h1>
        <div className="flex items-center justify-between">
          <input type="file" onChange={handleChange} />
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-[#313236] px-4 py-2 rounded-md text-lg"
            >
              Re-Upload
            </button>
            <button className="bg-[#313236] rounded-md text-lg h-10 px-2 ">
              <Icon icon="solar:file-download-bold-duotone" />
            </button>
            <button className="bg-[#313236] rounded-md text-lg h-10 px-2  ">
              <Icon icon="mingcute:delete-2-line" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FileUpload;
