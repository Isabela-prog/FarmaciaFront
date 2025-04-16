import Categoria from './Categoria';

export default interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: number;
  foto: string;
  fabricante: string
  categoria: Categoria | null;
}