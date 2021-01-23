import React from "react";
import ListIcon from '@material-ui/icons/List'
import ScheduleIcon from '@material-ui/icons/Schedule'

import { ExistingGroceries } from "./containers/existing-groceries";
import {Pills} from "../../core/pills";
import { NewGrocery } from "./containers/new-grocery";

const tabs = [
    {
        tabButton: 'Alimentele mele',
        tabIcon: ScheduleIcon,
        tabContent: <ExistingGroceries />,
    },
    {
        tabButton: 'Aliment nou',
        tabIcon: ListIcon,
        tabContent: <NewGrocery/>,
    },
]

export const Groceries = () => <div>
    <Pills tabs={tabs} />
</div>
