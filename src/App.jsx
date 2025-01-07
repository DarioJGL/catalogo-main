import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [imagenes, setImagenes] = useState([]);

    useEffect(() => {
        const cargarImagenes = async () => {
            try {
                // Cambia la ruta a la ubicación correcta de tu JSON
                const response = await fetch("./zapatos.json");

                if (!response.ok) {
                    throw new Error("Error al cargar el JSON");
                }

                const data = await response.json();
                setImagenes(data.imagenes);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        cargarImagenes();
    }, []);

    return (
      <>
      <header>
        <h2>Catalogo</h2>
        <a href="https://wa.link/oeyv14"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png" alt="logo de whatsapp" />Escribe al Whatsapp</a>
      </header>
        <main>
            <ul>
                {imagenes.map((imagen, index) => (
                    <li key={index}>
                        <img src={imagen.ruta} alt={imagen.nombre} />
                        <p>Precio: ${imagen.precio + 50000}</p>
                    </li>
                ))}
            </ul>
        </main>
      </>
      
    );
}

export default App;
