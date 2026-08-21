import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {

    const [isOpen, setIsOpen] = useState(true);

    const onCloseModal = () => {
        console.log('object');
        setIsOpen( false );
    }

    return (
        <Modal
            isOpen={ isOpen }
            onRequestClose={ onCloseModal }
            style={ customStyles }
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={ 200 }
        >
            <h1>Hola Mundo</h1>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iusto natus sapiente impedit vitae nisi odio, quidem modi voluptas dignissimos aut qui ut voluptatem suscipit totam itaque mollitia minima error.</p>

        </Modal>
    )
}
