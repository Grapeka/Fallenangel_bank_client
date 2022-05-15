import TransactionList from "../../components/transaction/TransactionList";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Eclipse } from "react-loading-io";
const TransferTx = (props) => {
  console.log(props.continueData);
  const [citizenId, setCitizenId] = useState(props.continueData[0].citizenId);
  const [tx, setTx] = useState([]);
  useEffect(() => {
    const getTotalYearlyTx = () => {
      Axios.post("https://fallenangel-bank-api.herokuapp.com/transaction-all", {
        citizenId: citizenId,
      }).then((res) => {
        console.log(res.data);
        setTx(res.data);
      });
    };
    getTotalYearlyTx();
  }, []);

  const heads = [
    "Transaction ID",
    "From Acc.",
    "To Acc.",
    "Value",
    "Date and time",
    "Note",
  ];
  const transactionData = [
    {
      id: "1",
      fromAccount: "4827190022",
      toAccount: "7721928301",
      value: 800.5,
      status: "completed",
      dateAndTime: "2022-04-20 13:48:22",
    },
    {
      id: "2",
      fromAccount: "4827190022",
      toAccount: "7721928301",
      value: 800.5,
      status: "completed",
      dateAndTime: "2022-04-20 13:48:22",
    },
    {
      id: "3",
      fromAccount: "4827190022",
      toAccount: "7721928301",
      value: 800.5,
      status: "completed",
      dateAndTime: "2022-04-20 13:48:22",
    },
    {
      id: "4",
      fromAccount: "4827190022",
      toAccount: "7721928301",
      value: 800.5,
      status: "completed",
      dateAndTime: "2022-04-20 13:48:22",
    },
    {
      id: "5",
      fromAccount: "4827190022",
      toAccount: "7721928301",
      value: 800.5,
      status: "completed",
      dateAndTime: "2022-04-20 13:48:22",
    },
    {
      id: "6",
      fromAccount: "4827190022",
      toAccount: "7721928301",
      value: 800.5,
      status: "completed",
      dateAndTime: "2022-04-20 13:48:22",
    },
    {
      id: "7",
      fromAccount: "4827190022",
      toAccount: "7721928301",
      value: 800.5,
      status: "completed",
      dateAndTime: "2022-04-20 13:48:22",
    },
    {
      id: "8",
      fromAccount: "4827190022",
      toAccount: "7721928301",
      value: 800.5,
      status: "completed",
      dateAndTime: "2022-04-20 13:48:22",
    },
  ];
  if (tx.length != 0) {
    return <TransactionList heads={heads} data={tx} />;
  } else {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: "100px 0 0 0",
        }}
      >
        <Eclipse size={200} color={"#a8c0d3"} />
      </div>
    );
  }
};

export default TransferTx;
