import {createContext, useContext} from "react";
import {repository} from "../../repository";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {useHistory} from "react-router-dom";

export const GroceryUpdatingContext = createContext({})

export const useGroceryUpdatingContext = () => useContext(GroceryUpdatingContext)

const useCustomFormik = grocery => {
    const { AlimentId, ...rest } = grocery
    const history = useHistory()
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: rest,
        enableReinitialize: true,
        onSubmit: values => dispatch(repository.updateGrocery(AlimentId, values, history))
    })

    return { ...formik }
}

export const useDefaultGroceryUpdatingContext = props => {
    const formik = useCustomFormik(props.grocery)

    return { ...props, ...formik }
}