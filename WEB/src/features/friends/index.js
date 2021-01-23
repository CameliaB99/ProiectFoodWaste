import React from "react";
import ListIcon from '@material-ui/icons/List'
import ScheduleIcon from '@material-ui/icons/Schedule'

import { ExistingFriends } from "./containers/existing-friends";
import {Pills} from "../../core/pills";
import { NewFriend } from "./containers/new-friend";

const tabs = [
    {
        tabButton: 'Prietenii mei',
        tabIcon: ScheduleIcon,
        tabContent: <ExistingFriends />,
    },
    {
        tabButton: 'Prieten nou',
        tabIcon: ListIcon,
        tabContent: <NewFriend/>,
    },
]

export const Friends = () => <div>
    <Pills tabs={tabs} />
</div>
