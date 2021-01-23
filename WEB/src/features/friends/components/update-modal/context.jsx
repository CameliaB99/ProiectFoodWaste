import {createContext, useContext} from "react";
import {repository} from "../../repository";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {useHistory} from "react-router-dom";

export const FriendUpdatingContext = createContext({})

export const useFriendUpdatingContext = () => useContext(FriendUpdatingContext)

const useCustomFormik = friend => {
    const { PrietenId, ...rest } = friend
    const history = useHistory()
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: rest,
        enableReinitialize: true,
        onSubmit: values => {
            console.log(PrietenId)
            return dispatch(repository.updateFriend(PrietenId, values, history));
        }
    })
    
    return { ...formik }
}

export const useDefaultFriendUpdatingContext = props => {
   
    const formik = useCustomFormik(props.friend)
    
    return { ...props, ...formik }
}