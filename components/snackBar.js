import { useSelector } from "react-redux"
import { store } from "../redux/store";
import { setSnackVisible } from "../redux/slice/user";
import { Button, Snackbar, Portal } from 'react-native-paper';

export default function SnackCommon({message}) {
    
    const onDismissSnackBar = () => {
        store.dispatch(setSnackVisible(false))
    }
    return (
        <Portal>
                <Snackbar
                    visible={useSelector(state => state.user.snackVisible)}
                    duration={3000}
                    onDismiss={onDismissSnackBar}
                >
                    {message||'Email and Password are required!'}
                </Snackbar></Portal>
    )
}

export function showSnack() {
    store.dispatch(setSnackVisible(true))
}