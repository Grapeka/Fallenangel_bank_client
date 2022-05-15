import TransactionList from "../../components/transaction/TransactionList";

const SwapTx = () => {
  const heads = [
    "Transaction ID",
    "From",
    "To",
    "Value",
    "Rate",
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
  return <TransactionList heads={heads} data={swapData} />;
};

export default SwapTx;
