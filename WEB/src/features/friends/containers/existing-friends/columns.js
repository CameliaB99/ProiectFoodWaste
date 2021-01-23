import { Actions } from "../../components/actions";

export const columns = [
    {
        key: 'PrietenId',
        header: 'Id'
    },
    {
        key: 'PrietenNume',
        header: 'Nume'
    },
    {
        key: 'PrietenTip',
        header: 'Tip'
    },
    {
        key: 'PrietenAlergii',
        header: 'Alergii'
    },
    {
        key: 'PrietenId',
        header: 'Actiuni',
        renderValue: Actions
    }
]
