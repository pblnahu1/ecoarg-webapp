// archivo para manejar la api de dolarapi.com

import axios from "axios";

const API_URL = "https://dolarapi.com/v1/dolares";

export type DolarData = {
    nombre: string;
    compra: string;
    venta: string;
    fechaActualizacion: string;
};

export const getDolares = async (): Promise<DolarData[]> => {
    const response = await axios.get(API_URL);
    return response.data;
}