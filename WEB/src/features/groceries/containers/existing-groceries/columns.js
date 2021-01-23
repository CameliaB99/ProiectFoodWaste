import { Actions } from "../../components/actions";

const renderDisponibilitate = value=>{
    return value ? 'Disponibil' : 'Indisponibil';
}
export const columns = [
    {
        key: 'AlimentId',
        header: 'Id'
    },
    {
        key: 'AlimentDenumire',
        header: 'Nume'
    },
    {
        key: 'AlimentCategorie',
        header: 'Categorie'
    },
    {
        key: 'AlimentAlergeni',
        header: 'Alergeni'
    },
    {
        key: 'AlimentDisponibilitate',
        header: 'Disponibilitate',
        renderValue: renderDisponibilitate
    },
    {
        key: 'AlimentNrCalorii',
        header: 'Nr. Calorii'
    },
    {
        key: 'ComandaId',
        header: 'Id Comanda'
    },
    {
        key: 'AlimentId',
        header: 'Actiuni',
        renderValue: Actions
    }
]
