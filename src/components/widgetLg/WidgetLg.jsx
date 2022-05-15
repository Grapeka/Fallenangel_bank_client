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
      <h3 className="widgetLgTitle">Latest transactions</h3>
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
                      src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
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
