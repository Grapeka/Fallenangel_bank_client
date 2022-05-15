import TransactionList from "../../components/transaction/TransactionList";

const CardTx = () => {
  const heads = [
    "Transaction ID",
    "From",
    "To",
    "Value",
    "Due date",
    "Date and time",
  ];
  const cardTransactions = [
    {
      id: "1",
      fromAccount: "4827190022",
      toAccount: "7721928301",
      value: 800.5,
      dueDate: "2023-04-20 13:48:22",
      dateAndTime: "2022-04-20 13:48:22",
    },
    {
      id: "2",
      fromAccount: "4827190022",
      toAccount: "7721928301",
      value: 800.5,
      dueDate: "2023-04-20 13:48:22",
      dateAndTime: "2022-04-20 13:48:22",
    },
    {
      id: "3",
      fromAccount: "4827190022",
      toAccount: "7721928301",
      value: 800.5,
      dueDate: "2023-04-20 13:48:22",
      dateAndTime: "2022-04-20 13:48:22",
    },
    {
      id: "4",
      fromAccount: "4827190022",
      toAccount: "7721928301",
      value: 800.5,
      dueDate: "2023-04-20 13:48:22",
      dateAndTime: "2022-04-20 13:48:22",
    },
    {
      id: "5",
      fromAccount: "4827190022",
      toAccount: "7721928301",
      value: 800.5,
      dueDate: "2023-04-20 13:48:22",
      dateAndTime: "2022-04-20 13:48:22",
    },
    {
      id: "6",
      fromAccount: "4827190022",
      toAccount: "7721928301",
      value: 800.5,
      dueDate: "2023-04-20 13:48:22",
      dateAndTime: "2022-04-20 13:48:22",
    },
    {
      id: "7",
      fromAccount: "4827190022",
      toAccount: "7721928301",
      value: 800.5,
      dueDate: "2023-04-20 13:48:22",
      dateAndTime: "2022-04-20 13:48:22",
    },
    {
      id: "8",
      fromAccount: "4827190022",
      toAccount: "7721928301",
      value: 800.5,
      dueDate: "2023-04-20 13:48:22",
      dateAndTime: "2022-04-20 13:48:22",
    },
  ];
  return <TransactionList heads={heads} data={cardTransactions} />;
};

export default CardTx;
