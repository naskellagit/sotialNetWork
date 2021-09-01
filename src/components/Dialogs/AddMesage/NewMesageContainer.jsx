import { connect } from 'react-redux';
import {updateNewMesageCreater, sendMesageCreater} from '../../../Redax/mesagePageReducer';
import NewMesage from './NewMesage';

const mapStateToProps = (state) => {
    return {
        value: state.mesagePage.newMesageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMesage: () => dispatch(sendMesageCreater()),
        updateNewMesage: (text) => dispatch(updateNewMesageCreater(text))
    }
}

const NewMesageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMesage);

export default NewMesageContainer;