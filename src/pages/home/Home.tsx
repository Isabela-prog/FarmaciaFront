import { useEffect, useState } from "react";
import { buscar } from "../../services/Service";
import CardCategorias from "../../components/categorias/cardcategorias/CardCategorias";
import Categoria from "../../models/Categoria";

function Home() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  // Função para buscar as categorias
  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias);
    } catch (error: any) {
      alert("Erro ao carregar as categorias.");
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  return (
    <>
      <div className="bg-[#4A8C82] flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">FarmaHome</h2>
            <p className="text-xl">Sua Farmácia em casa!</p>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://i.im.ge/2025/04/16/vXEsfM.Design-sem-nome-2.png"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-8">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categorias.map((categoria) => (
              <CardCategorias key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
