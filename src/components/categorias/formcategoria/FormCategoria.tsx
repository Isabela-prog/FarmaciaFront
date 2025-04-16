import { ChangeEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import Categoria from "../../../models/Categoria";

function FormCategoria() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: { Authorization: '' } // Token não necessário agora
            });
        } catch (error: any) {
            alert('Erro ao buscar a categoria.');
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    }

    function retornar() {
        navigate("/categorias");
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria, {
                    headers: { 'Authorization': '' } // Token não necessário
                });
                alert('A Categoria foi atualizada com sucesso!');
            } catch (error: any) {
                alert('Erro ao atualizar a categoria.');
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria, {
                    headers: { 'Authorization': '' } // Token não necessário
                });
                alert('A Categoria foi cadastrada com sucesso!');
            } catch (error: any) {
                alert('Erro ao cadastrar a categoria.');
            }
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8 text-green-600 font-bold">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                <label htmlFor="nome" className="text-slate-800 font-semibold">
                        Nome da Categoria
                    </label>
                    <input
                        type="text"
                        placeholder="Digite o nome da Categoria"
                        name="nome"
                        className="border-2 border-green-300 rounded p-2 focus:outline-green-400"
                        value={categoria.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <label htmlFor="descricao" className="text-slate-800 font-semibold">
                        Descrição da Categoria
                    </label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sua categoria"
                        name="descricao"
                        className="border-2 border-green-300 rounded p-2 focus:outline-green-400"
                        value={categoria.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-white bg-green-300 
                               hover:bg-green-400 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit"
                >
                    {isLoading ? (
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        />
                    ) : (
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    )}
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;
