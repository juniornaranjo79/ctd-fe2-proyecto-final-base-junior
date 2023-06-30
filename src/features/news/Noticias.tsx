import { ContenedorNoticias, ListaNoticias, TituloNoticias } from "./styled";
import { useNoticias } from "./hook/useNoticias";
import { Tarjeta }from "./components/Tarjeta";
import { Modal } from "./components/Modal";

const Noticias = () => {
  const { noticias, modal, setModal } = useNoticias();

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        {noticias.map((n) => (
          <Tarjeta noticia={n} setModal={setModal} />
        ))}
        {modal ? ( <Modal modal={modal} setModal={setModal} />
         ) : null}
      </ListaNoticias>
    </ContenedorNoticias>
  );
};

export default Noticias;

//Utilice el principio SOLID de Principio de responsabilidad única separando el componente en varios y cada uno con su respectiva responsabilidad
