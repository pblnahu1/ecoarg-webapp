import { useEffect, useState } from "react";
import { getDolares, DolarData } from "../../../services/DolarService";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";

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
    <section className={`p-12 rounded-xl shadow-2xl ${darkMode ? "bg-stone-800" : "bg-gray-200"}`}>
      <div className="text-center mb-10">
        <span className={`text-4xl font-semibold  ${darkMode ? "text-white" : "text-gray-800"}`}>Cotización del Dólar</span>
        
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p className="text-center text-gray-500 col-span-3">Cargando cotizaciones...</p>
        ) : (
          dolares.map((dolar) => {
            const precioActual = parseFloat(dolar.venta);
            const precioAnterior = prevDolares[dolar.nombre] || precioActual;

            let Icono = Minus;
            let color = "text-gray-500";

            if (precioActual > precioAnterior) {
              Icono = ArrowUp;
              color = "text-green-600";
            } else if (precioActual < precioAnterior) {
              Icono = ArrowDown;
              color = "text-red-600";
            }

            return (
              <div
                key={dolar.nombre}
                className={`p-6 rounded-lg ${darkMode ? "bg-zinc-950 hover:bg-neutral-950" : "bg-white hover:bg-gray-50"} 
                shadow-2xl transition-colors duration-200`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-2xl font-extrabold uppercase ${darkMode ? "text-white" : "text-gray-800"}`}>
                    {dolar.nombre}
                  </span>
                  <Icono className={`w-6 h-6 ${color}`} />
                </div>
                <div className="text-xl">
                  <p className={`${darkMode ? "text-white" : "text-gray-800"}`}>
                    Compra: <span className={`font-semibold ${darkMode ? "text-green-600" : "text-green-700"}`}>${dolar.compra}</span>
                  </p>
                  <p className={`${darkMode ? "text-white" : "text-gray-800"}`}>
                    Venta: <span className={`font-semibold ${darkMode ? "text-green-600" : "text-green-700"}`}>${dolar.venta}</span>
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default MainContent;
