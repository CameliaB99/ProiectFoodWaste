import React, {useEffect} from "react";
import { repository } from "../../repository";
import {useDispatch, useSelector} from "react-redux";
import { Table } from "../../../../core/table";
import { columns } from "./columns";
import {DeleteModal} from "../../components/delete-modal";
import {UpdateModal} from "../../components/update-modal";

export const ExistingFriends = () => {
    const { getFriends } = repository
    const dispatch = useDispatch()
    const data = useSelector(state => state.friends.getFriends.data)

    useEffect(() => {
        dispatch(getFriends())
    }, [dispatch])

    return <div style={{ maxWidth: '60vw' }}>
        <Table columns={columns} page={data} headerColor={'rose'} />
        <DeleteModal />
        <UpdateModal />
    </div>
}
