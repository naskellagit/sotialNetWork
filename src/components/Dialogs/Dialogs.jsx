import React from "react";
import myCSS from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Mesage from './MesageItems/MesageItem';
import NewMesageContainer from "./AddMesage/NewMesageContainer";

const Dialogs = (props) => {
  let mesageElements = props.mesageData.map(elem => <Mesage mesage = {elem.mesage} />)
  let dialogItems = props.dialogsData.map(elem => <DialogItem name = {elem.name} id = {elem.id} />);
    return (
      <div className={myCSS.dialogs}>
        <div className={myCSS.dialogsItems}>{dialogItems}</div>
        <div className={myCSS.maseges}>{mesageElements}</div>
        <NewMesageContainer />
      </div>
    );
}
export default Dialogs;