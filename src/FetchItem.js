import React from "react";

export default function FetchItem({ resultActivity }) {
  const { activity, accessibility, type, participants, price } = resultActivity;
  return (
    <div >
      <table className="table table-bordered border-dark border-2 text-center fs-4 text-wrap">
        <tbody>
          <tr>
            <td className="w-25 p-3 border border-dark border-2">Активность</td>
            <td className="w-75 p-3 border border-dark border-2">{activity}</td>
          </tr>
          <tr>
            <td className="w-25 p-3 border border-dark border-2">Сложность</td>
            <td className="w-75 p-3 border border-dark border-2">
              {Math.round(accessibility * 10)}/10
            </td>
          </tr>
          <tr>
            <td className="w-25 p-3 border border-dark border-2">Тип</td>
            <td className="w-75 p-3 border border-dark border-2">{type}</td>
          </tr>
          <tr>
            <td className="w-25 p-3 border border-dark border-2">Участники</td>
            <td className="w-75 p-3 border border-dark border-2">
              {participants}
            </td>
          </tr>
          <tr>
            <td className="w-25 p-3 border border-dark border-2">Цена</td>
            <td className="w-75 p-3 border border-dark border-2">
              {price * 10}/10
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
