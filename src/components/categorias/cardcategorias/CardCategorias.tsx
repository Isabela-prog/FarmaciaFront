import { Link } from 'react-router-dom';
import Categoria from '../../../models/Categoria';

interface CardCategoriasProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriasProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between shadow-lg'>
      <header className='py-2 px-6 bg-[#A5D6A7] text-[#1B5E20] font-bold text-2xl'>
        Categoria
      </header>

      <div className='p-6 bg-[#F0F5F3] text-[#3C3C3C]'>
        <p className='text-xl font-semibold mb-2'>{categoria.nome}</p>
        <p className='text-base'>{categoria.descricao}</p>
      </div>

      <div className="flex">
        <Link to={`/editarcategoria/${categoria.id}`}
        className='w-full text-white bg-green-300 hover:bg-green-400
          flex items-center justify-center py-2'>
          <button className="w-full bg-transparent border-none text-white">
            Editar
          </button>
        </Link>
        <Link to={`/deletarcategoria/${categoria.id}`} 
          className='text-slate-100 bg-red-400 hover:bg-red-600 w-full 
          flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategorias;
