import { Actions } from "../../components/actions";

export const columns = [
    {
        key: 'ComandaId',
        header: 'Id'
    },
    {
        key: 'ComandaDenumire',
        header: 'Denumire'
    },
    {
        key: 'PrietenId',
        header: 'Id Prieten'
    },
    {
        key: 'AlimentId',
        header: 'Id Aliment'
    },
    {
        key: 'ComandaId',
        header: 'Actiuni',
        renderValue: Actions
    }
]
