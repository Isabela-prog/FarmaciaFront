import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 bg-[#3C6B62] text-white'>
                <div className="container flex justify-between text-lg px-8">
                    <Link to='/home' className="text-2xl font-bold">FarmaHome</Link>

                    <div className='flex gap-4'>
                        <Link to='/categorias' className='hover:underline'>Lista Categorias</Link>
                        <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
