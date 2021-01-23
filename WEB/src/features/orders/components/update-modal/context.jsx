import {createContext, useContext} from "react";
import {repository} from "../../repository";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import {useHistory} from "react-router-dom";

export const OrderUpdatingContext = createContext({})

export const useOrderUpdatingContext = () => useContext(OrderUpdatingContext)

const useCustomFormik = order => {
    const { ComandaId, ...rest } = order
    const history = useHistory()
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: rest,
        enableReinitialize: true,
        onSubmit: values => dispatch(repository.updateOrder(ComandaId, values, history))
    })

    return { ...formik }
}

export const useDefaultOrderUpdatingContext = props => {
    const formik = useCustomFormik(props.order)

    return { ...props, ...formik }
}