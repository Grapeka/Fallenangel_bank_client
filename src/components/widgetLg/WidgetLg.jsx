import "./widgetLg.css";
import { useState } from "react";

export default function WidgetLg(props) {
  console.log(props.data);
  const [myData, setMyData] = useState(props.data);
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Transfer to</th>
            <th className="widgetLgTh">Date and time</th>
            <th className="widgetLgTh">Value</th>
            <th className="widgetLgTh">ID</th>
          </tr>
          {myData.map((e, i) => {
            if (i <= 2) {
              return (
                <tr key={i} className="widgetLgTr">
                  <td className="widgetLgUser">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      alt=""
                      className="widgetLgImg"
                    />
                    <span className="widgetLgName">{e.fromAccount}</span>
                  </td>
                  <td className="widgetLgDate">{e.dateAndTime}</td>
                  <td className="widgetLgAmount">{e.value} </td>
                  <td className="widgetLgStatus">
                    <Button type={`${e.transactionId}`} />
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}
