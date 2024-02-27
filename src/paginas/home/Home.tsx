
import homeLogo from '../../assets/home1.png'
import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';



function Home() {
    return (
        <>
        <div className="bg-teal-600 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Olá!</h2>
              <p className='text-xl'>Expresse aqui seus sentimentos</p>
  
              <div className="flex justify-around gap-4">
              <ModalPostagem />
              <button className='rounded bg-purple-900 text-white py-2 px-4'>Ver postagens</button>
            </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
        <ListaPostagens />
      </>
    );
}

export default Home;