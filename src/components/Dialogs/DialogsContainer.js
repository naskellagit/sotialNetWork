import { connect } from "react-redux";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
    return {
        mesageData: state.mesagePage.mesageData,
        dialogsData: state.mesagePage.dialogsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;