import { Details1 } from "./details1";
import { Details2 } from "./details2";
import { Heading } from "./headings";
import { PhoneDet } from "./phone-det";
import { EmailDet } from "./email-det";
import { SlackDet } from "./slack-det";
import ImgSwitch from "./img-switch";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Tags from "./tags";

export function UserCard({ id }) {
  const [name, setName] = useState(null);
  const [role, setRole] = useState(null);
  const [phno, setPhno] = useState(null);
  const [email, setEmail] = useState(null);
  const [pod, setPod] = useState(null);
  const [dob, setDob] = useState(null);
  const [doj, setDoj] = useState(null);
  const [slack, setSlack] = useState(null);
  const [address, setAddress] = useState(null);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();

    // Pad day and month with leading zeros if needed
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}/${formattedMonth}/${year}`;
  }

  useEffect(() => {
    const fetchData = async () => {
      if (id !== undefined) {
        const { data } = await axios.get(
          `http://localhost:8080/getPersonalDetails/${id}`
        );
        setName(data.name);
        setRole(data.role);
        setPhno(data.phoneNo);
        setEmail(data.email);
        setPod(data.pod);
        setDob(formatDate(data.dob));
        setDoj(formatDate(data.doj));
        setSlack(data.slackUrl);
        setAddress(data.address);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#212327",
        padding: "40px",
        maxWidth: "1000px",
        borderRadius: "30px",
      }}
      className="flex flex-col gap-5"
    >
      <div className="flex justify-between">
        <Heading title="Employee Details" />
        <div className=" flex gap-4">
          <button
            type="button"
            className="text-white bg-[#313236] px-3 rounded-md text-lg"
          >
            Update profile picture
          </button>
          <button
            type="button"
            className="text-white bg-[#313236] px-3 rounded-md text-lg"
          >
            Download info
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <ImgSwitch />
        <div>
          <Heading title={name} />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
            <Details1 title="Role" content={role} />
            <PhoneDet title="Phone Number" content={phno} />
            <EmailDet title="Email Address" content={email} />
            <SlackDet title="Slack" content={slack} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 ">
        <Details2 title="Pod" content={pod} />
        <Details2 title="Joining Date" content={doj} />
        <Details2 title="Date of birth" content={dob} />
        <Details2 title="Address" content={address} />
      </div>
      <Tags tag="barbie" />
    </div>
  );
}
