import { TarjetaNoticia, FechaTarjetaNoticia, DescripcionTarjetaNoticia, ImagenTarjetaNoticia, TituloTarjetaNoticia, BotonLectura } from "../styled"
import { INoticiasNormalizadas } from "../type"


interface TarjetaProps {
    noticia: INoticiasNormalizadas,
    setModal: React.Dispatch<React.SetStateAction<INoticiasNormalizadas | null>>,
}

export const Tarjeta = ({ noticia, setModal }: TarjetaProps) => {
    const handleClick = () => {
        setModal(noticia);
      };

    return(
        <TarjetaNoticia>
            <ImagenTarjetaNoticia src={noticia.imagen} />
            <TituloTarjetaNoticia>{noticia.titulo}</TituloTarjetaNoticia>
            <FechaTarjetaNoticia>{noticia.fecha}</FechaTarjetaNoticia>
            <DescripcionTarjetaNoticia>
              {noticia.descripcionCorta}
            </DescripcionTarjetaNoticia>
            <BotonLectura onClick={handleClick}>Ver más</BotonLectura>
          </TarjetaNoticia>
    )
}
