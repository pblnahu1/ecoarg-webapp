import { useEffect, useState } from "react";
import { getDolares, DolarData } from "../../../services/DolarService";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";
import { DolarCalculatorCharts } from "../../recharts/DolarCalculatorCharts";
import {TooltipInfoHours} from "../../ui/TooltipInfoHours";

interface MainContentProps {
  darkMode: boolean;
}

const MainContent = ({ darkMode }: MainContentProps) => {
  const [dolares, setDolares] = useState<DolarData[]>([]);
  const [prevDolares, setPrevDolares] = useState<Record<string, number>>({});
  const [ultimaActualizacion, setUltimaActualizacion] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = await getDolares();
      setDolares(data);
      setUltimaActualizacion(data[0]?.fechaActualizacion || ""); // ✅ Corregido
      setLoading(false);

      // Obtener datos previos de localStorage
      const storedPrevData = JSON.parse(localStorage.getItem("prevDolares") || "{}");

      // Guardar datos en localStorage
      localStorage.setItem("dolares", JSON.stringify(data));

      // Guardar solo valores de venta en prevDolares
      const preciosActuales = data.reduce((acc, dolar) => {
        acc[dolar.nombre] = parseFloat(dolar.venta);
        return acc;
      }, {} as Record<string, number>);

      setPrevDolares(storedPrevData);
      localStorage.setItem("prevDolares", JSON.stringify(preciosActuales));
    } catch (error) {
      console.error("Error al obtener datos:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Obtener datos al cargar la página

    // Actualizar cada 5 minutos
    const interval = setInterval(fetchData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className={`p-[0.5rem] rounded-xl shadow-2xl ${darkMode ? "bg-stone-800" : "bg-gray-200"}`}>
        {/* <p className="text-lg text-center my-4 text-gray-500">{marketStatus}</p> */}

        <div>
          <TooltipInfoHours />
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-6">
          {loading ? (
            <p className="text-center text-gray-500 col-span-full">Cargando cotizaciones...</p>
          ) : (
            dolares.map((dolar) => {
              const precioActual = parseFloat(dolar.venta);
              const precioAnterior = prevDolares[dolar.nombre] || precioActual;

              let Icono = Minus;
              let color = "text-gray-400";

              if (precioActual > precioAnterior) {
                Icono = ArrowUp;
                color = "text-green-500";
              } else if (precioActual < precioAnterior) {
                Icono = ArrowDown;
                color = "text-red-500";
              }

              return (
                <div
                  key={dolar.nombre}
                  className={`
            rounded-xl border p-4 transition hover:scale-[1.01] duration-300
            ${darkMode
                      ? "bg-white/5 border-white/10 text-white"
                      : "bg-gray-50 border-gray-200 text-gray-800"}
          `}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-md font-semibold truncate">{dolar.nombre}</h3>
                    <Icono className={`w-4 h-4 ${color}`} />
                  </div>

                  <div className="space-y-1 text-sm leading-snug">
                    <p>
                      <span className="text-gray-500">Compra: </span>
                      <span className={`font-medium ${darkMode ? "text-lime-400" : "text-green-600"}`}>
                        ${dolar.compra}
                      </span>
                    </p>
                    <p>
                      <span className="text-gray-500">Venta: </span>
                      <span className={`font-medium ${darkMode ? "text-lime-400" : "text-green-600"}`}>
                        ${dolar.venta}
                      </span>
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <DolarCalculatorCharts darkMode={darkMode} />
        
        <div className="text-center">
          {/* <span className={`text-4xl font-semibold  ${darkMode ? "text-white" : "text-gray-800"}`}>Cotización del Dólar</span> */}

          <p className="text-sm text-gray-500 my-4">
            Datos obtenidos de{" "}
            <a
              href="https://dolarapi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 bg-indigo-700 hover:bg-indigo-600 text-white rounded"
            >
              DolarApi.com
            </a>
          </p>

          {ultimaActualizacion && (
            <p className="text-sm text-gray-500">
              Actualizado:{" "}
              {new Date(ultimaActualizacion).toLocaleString("es-AR", {
                timeZone: "America/Argentina/Buenos_Aires",
                hour12: true,
              })}
            </p>
          )}
        </div>


      </section>
    </>
  );
};

export default MainContent;
