import React, { useState } from "react";
import moment, { Moment } from "moment";
import "moment/locale/de";
import { Avatar, Tag } from "antd";
import NumberFormat from "react-number-format";

interface Props {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  date: Moment;
  status: string;
  canceled: boolean;
  bid: number | null;
}

const dateFormat =  "Do MMM LT"

const generateHexcode = () => {
  let possibleChars = "0123456789ABCDEF";
  let hexcode: string = "#";
  for (let i: number = 0; i < 6; i++) {
    hexcode = hexcode + possibleChars[Math.floor(Math.random() * 16)];
  }
  return hexcode;
};

const ApplicantCard: React.FC<Props> = ({
  firstName,
  lastName,
  phone,
  date,
  email,
  canceled,
  bid,
}) => {
  const [avatarColor, setAvatarColor] = useState<string>(generateHexcode());

  return (
    <div className="applicant-card">
      <div className="avatar">
        <Avatar
          style={{ backgroundColor: avatarColor, verticalAlign: "middle" }}
          size="large"
        >
          {firstName[0]}{lastName[0]}
        </Avatar>
      </div>
      <p>{`${firstName} ${lastName}`}</p>
      <p>{phone}</p>
      <p>{email}</p>
      {canceled ? (
        <Tag color="red" className="date-tag">
          {`CANCELED ${date.format(dateFormat)}`}
        </Tag>
      ) : (
        <Tag color="#9D9D9D" className="date-tag">
          {moment() > date
            ? `VIEWED ${date.format(dateFormat)}`
            : `APPOINTMENT ${date.format(dateFormat)}`}
        </Tag>
      )}
      {bid ? (
        <Tag color="rgb(245, 188, 65)" className="bid-tag">
          BID{" "}
          <NumberFormat
            value={bid}
            displayType={"text"}
            thousandSeparator={"."}
            decimalSeparator={","}
            suffix={"€"}
            renderText={(value) => <span>{value}</span>}
          />
        </Tag>
      ) : null}
    </div>
  );
};

export default ApplicantCard;
