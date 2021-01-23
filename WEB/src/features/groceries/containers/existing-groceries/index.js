import React, {useEffect} from "react";
import { repository } from "../../repository";
import {useDispatch, useSelector} from "react-redux";
import { Table } from "../../../../core/table";
import { columns } from "./columns";
import {DeleteModal} from "../../components/delete-modal";
import {UpdateModal} from "../../components/update-modal";

export const ExistingGroceries = () => {
    const { getGroceries } = repository
    const dispatch = useDispatch()
    const data = useSelector(state => state.groceries.getGroceries.data)

    useEffect(() => {
        dispatch(getGroceries())
    }, [dispatch])

    return <div style={{ maxWidth: '60vw' }}>
        <DeleteModal/>
        <UpdateModal />
        <Table columns={columns} page={data} headerColor={'rose'} />
    </div>
}
