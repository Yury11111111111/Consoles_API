import React from "react";
import "../css/style.css"

const Console = (props) => {
  return (
    <div className="Console">
      <img src={props.console.pics_url} alt="" />
      <div>{props.console.Name}</div>
      <div>Была издана в {props.console.Year} году</div>
      {props.console.Players === 1 ? (
        <div>Поддерживает 1 игрока</div>
      ) : (
        <div>Поддерживает {props.console.Players} игроков</div>
      )}
    </div>
  );
};

export default Console;
