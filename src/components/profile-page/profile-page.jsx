import { UserCard } from "../home-page/user-card/user-card.jsx";
import FileUpload from "./file-upload.jsx";
import { Heading } from "../home-page/user-card/headings.jsx";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Options from "../home-page/search-box/options.jsx";

export default function ProfilePage() {
  const [inputEnabled, setInputEnabled] = useState(false);

  const enableInput = () => {
    setInputEnabled(true);
  };
  const disableInput = () => {
    setInputEnabled(false);
  };

  return (
    <div className="bg-[#111111] h-full text-white flex flex-col gap-5 items-center p-10 overflow-auto ">
      <UserCard id={1} />
      <div className="flex flex-col gap-5 w-full items-center ">
        <div
          style={{
            backgroundColor: "#212327",
            padding: "40px",
            maxWidth: "1000px",
            borderRadius: "30px",
          }}
          className="flex flex-col gap-5 w-full"
        >
          <div className="flex justify-between">
            <Heading title="Banking details" />
            <button
              type="button"
              className="text-white bg-[#313236] px-3 rounded-md text-lg flex justify-center items-center gap-1 active:bg-gray-500 hover:bg-gray-700 focus:bg-gray-600"
              onClick={enableInput}
            >
              <Icon icon="ic:outline-edit" style={{ color: "white" }} />
              <span className="hidden lg:block">Edit Info</span>
            </button>
          </div>
          <div className="flex flex-col">
            <label className="text-lg">Account Number </label>
            <input
              type="text"
              name="Account Number"
              defaultValue="394758679"
              className=" bg-[#313236]  text-lg border border-none focus:border-emerald-900"
              disabled={!inputEnabled}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg">Account Type </label>
            <input
              type="text"
              name="Account Type"
              defaultValue="Savings"
              className=" bg-[#313236]  text-lg border border-none focus:border-emerald-900 "
              disabled={!inputEnabled}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg">Account Holder Name </label>
            <input
              type="text"
              name="Account Holder Name"
              defaultValue="Natasha Khaleira"
              className=" bg-[#313236]  text-lg border border-none focus:border-emerald-900"
              disabled={!inputEnabled}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg">Bank Name </label>
            <input
              type="text"
              name="Bank Name"
              defaultValue="Kotak Mahindra"
              className=" bg-[#313236]  text-lg border border-none focus:border-emerald-900"
              disabled={!inputEnabled}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg">Branch Name </label>
            <input
              type="text"
              name="Branch Name"
              defaultValue="Yelahanka"
              className=" bg-[#313236]  text-lg border border-none focus:border-emerald-900"
              disabled={!inputEnabled}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg">Ifsc </label>
            <input
              type="text"
              name="Ifsc"
              defaultValue="Kotak Mahindra"
              className=" bg-[#313236]  text-lg border border-none focus:border-emerald-900"
              disabled={!inputEnabled}
            />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#212327",
            padding: "40px",
            maxWidth: "1000px",
            borderRadius: "30px",
          }}
          className="flex flex-col gap-5 w-full"
        >
          <div>
            <Heading title="Documents" />
          </div>
          <FileUpload heading="Upload Aadhar" />
          <FileUpload heading="Upload PAN" />
          <FileUpload heading="Upload Offer Letter" />
        </div>
        <button
          className="bg-[#212327] p-2 w-32 rounded-xl text-lg flex justify-center items-center gap-1 active:bg-gray-500 hover:bg-gray-700"
          type="submit"
          onClick={disableInput}
        >
          <Icon icon="bxs:save" style={{ color: "white" }} />
          <span className="hidden lg:block ">Save Details</span>
        </button>
      </div>
    </div>
  );
}
