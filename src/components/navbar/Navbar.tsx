import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 bg-[#3C6B62] text-white'>
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">FarmaHome</Link>

                    <div className='flex gap-4'>
                        Lista categorias
                        Cadastrar categorias
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
