function Home() {
    return (
        <>
            <div className="bg-[#4A8C82] flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            FarmaHome
                        </h2>
                        <p className='text-xl'>
                            Sua Farmácia em casa!
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4 hover:bg-[#A3D2C2] hover:text-[#3C6B62] transition-colors'
                                >
                                Produtos
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://i.im.ge/2025/04/16/vXEsfM.Design-sem-nome-2.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
