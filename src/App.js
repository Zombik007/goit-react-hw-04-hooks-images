import React, { useState } from 'react';
// import { v4 as uuidv4 } from "uuid";
import { ToastContainer } from 'react-toastify';
import Modal from './components/Modal';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import 'react-toastify/dist/ReactToastify.min.css';

export default function App() {
  const [imageName, setImageName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalUrl, setModalUrl] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  const toggleLightbox = () => {
    setShowModal(!showModal);
  };

  const handleFormSubmit = imageName => {
    setImageName(imageName);
  };

  const modalContent = (url, alt) => {
    setModalUrl(url);
    setModalAlt(alt);
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery
        imageName={imageName}
        openModal={toggleLightbox}
        modalContent={modalContent}
      />

      {showModal && (
        <Modal onClose={toggleLightbox}>
          <img src={modalUrl} alt={modalAlt} />
        </Modal>
      )}
      <ToastContainer autoClose={3000} />
    </>
  );
}
