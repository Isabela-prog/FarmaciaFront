function Cadastro() {
    return (
      <>
        <div className="flex justify-center items-center h-screen bg-[#A3D2C2] font-bold">
          <form className='flex justify-center items-center flex-col w-11/12 max-w-md gap-3 bg-white p-6 rounded-lg shadow-md'>
            <h2 className='text-[#3C6B62] text-3xl'>Cadastrar Categoria</h2>
  
            <div className="flex flex-col w-full">
              <label htmlFor="nome" className="text-[#4A8C82]">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                className="border-2 border-[#4A8C82] rounded p-2"
              />
            </div>
  
            <div className="flex flex-col w-full">
              <label htmlFor="descricao" className="text-[#4A8C82]">Descrição</label>
              <input
                type="text"
                id="descricao"
                name="descricao"
                placeholder="Descrição"
                className="border-2 border-[#4A8C82] rounded p-2"
              />
            </div>
  
            <div className="flex justify-around w-full gap-8">
              <button
                type='reset'
                className='rounded text-white bg-red-400 hover:bg-red-600 w-1/2 py-2'
              >
                Cancelar
              </button>
  
              <button
                type='submit'
                className='rounded text-white bg-[#4A8C82] 
                           hover:bg-[#3C6B62] w-1/2 py-2 flex justify-center'
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </>
    )
  }
  
  export default Cadastro
  