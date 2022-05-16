import TransactionList from "../../components/transaction/TransactionList";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Eclipse } from "react-loading-io";
const SwapTx = (props) => {
  const [citizenId, setCitizenId] = useState(props.continueData[0].citizenId);
  const [swTx, setSwTx] = useState([]);
  useEffect(() => {
    const transwap = () => {
      Axios.post(
        "https://fallenangel-bank-api.herokuapp.com/transaction/swap",
        {
          citizenId: citizenId,
        }
      ).then((response) => {
        setSwTx(response.data);
      });
    };
    transwap();
  }, []);
  const heads = [
    "Transaction ID",
    "CitizenId",
    "From",
    "To",
    "Value",
    "Date and time",
  ];
  const swapData = [
    {
      id: "1",
      fromAccount: "THB",
      toAccount: "CNY",
      value: 800.5,
      Rate: "80/1",
      dateAndTime: "2022-04-20 13:48:22",
    },
    {
      id: "2",
      fromAccount: "THB",
      toAccount: "CNY",
      value: 800.5,
      Rate: "80/1",
      dateAndTime: "2022-04-20 13:48:22",
    },
    {
      id: "3",
      fromAccount: "THB",
      toAccount: "CNY",
      value: 800.5,
      Rate: "80/1",
      dateAndTime: "2022-04-20 13:48:22",
    },
    {
      id: "4",
      fromAccount: "THB",
      toAccount: "CNY",
      value: 800.5,
      Rate: "80/1",
      dateAndTime: "2022-04-20 13:48:22",
    },
    {
      id: "5",
      fromAccount: "THB",
      toAccount: "CNY",
      value: 800.5,
      Rate: "80/1",
      dateAndTime: "2022-04-20 13:48:22",
    },
    {
      id: "6",
      fromAccount: "THB",
      toAccount: "CNY",
      value: 800.5,
      Rate: "80/1",
      dateAndTime: "2022-04-20 13:48:22",
    },
    {
      id: "7",
      fromAccount: "THB",
      toAccount: "CNY",
      value: 800.5,
      Rate: "80/1",
      dateAndTime: "2022-04-20 13:48:22",
    },
    {
      id: "8",
      fromAccount: "THB",
      toAccount: "CNY",
      value: 800.5,
      Rate: "80/1",
      dateAndTime: "2022-04-20 13:48:22",
    },
  ];
  if (swTx.length != 0) {
    return <TransactionList heads={heads} data={swTx} />;
  }
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
};

export default SwapTx;
