import { INoticiasNormalizadas } from "../type"
import { CloseButton, TarjetaModal, ContenedorModal, DescripcionModal, ImagenModal, TituloModal, BotonSuscribir, CotenedorTexto }from "../styled"
import { SuscribeImage, CloseButton as Close } from "../../../assets"

interface ModalProps {
    modal: INoticiasNormalizadas,
    setModal: React.Dispatch<React.SetStateAction<INoticiasNormalizadas | null>>
}

export const Modal= ({ modal, setModal }: ModalProps) => {

    const closeModal = () => {
        setModal(null)
    };

    const handleSubcribe = () => {
        setTimeout(() => {
            alert("Suscripto!");
            setModal(null);
          }, 1000)
    }

    if (modal.esPremium ) {
        return (
            <ContenedorModal>
              <TarjetaModal>
                <CloseButton onClick={closeModal}>
                  <img src={Close} alt="close-button" />
                </CloseButton>
                <ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />
                <CotenedorTexto>
                  <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
                  <DescripcionModal>
                    Suscríbete a nuestro newsletter y recibe noticias de
                    nuestros personajes favoritos.
                  </DescripcionModal>
                  <BotonSuscribir onClick={handleSubcribe}>
                    Suscríbete
                  </BotonSuscribir>
                </CotenedorTexto>
              </TarjetaModal>
            </ContenedorModal>
        );
    }
    else {
        return(
            <ContenedorModal>
              <TarjetaModal>
                <CloseButton onClick={() => setModal(null)}>
                  <img src={Close} alt="close-button" />
                </CloseButton>
                <ImagenModal src={modal.imagen} alt="news-image" />
                <CotenedorTexto>
                  <TituloModal>{modal.titulo}</TituloModal>
                  <DescripcionModal>{modal.descripcion}</DescripcionModal>
                </CotenedorTexto>
              </TarjetaModal>
            </ContenedorModal>
        )

    }
};

