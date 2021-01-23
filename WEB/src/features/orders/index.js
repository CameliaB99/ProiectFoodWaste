import React from "react";
import ListIcon from '@material-ui/icons/List'
import ScheduleIcon from '@material-ui/icons/Schedule'

import { ExistingOrders } from "./containers/existing-orders";
import { NewOrder } from "./containers/new-order";
import {Pills} from "../../core/pills";

const tabs = [
    {
        tabButton: 'Comenzile mele',
        tabIcon: ScheduleIcon,
        tabContent: <ExistingOrders />,
    },
    {
        tabButton: 'Comanda noua',
        tabIcon: ListIcon,
        tabContent: <NewOrder/>,
    },
]

export const Orders = () => <div>
    <Pills tabs={tabs} />
</div>
