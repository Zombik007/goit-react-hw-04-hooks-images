import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';

import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import ImagesApiService from '../../services/apiService';
import Button from '../Button';
import Loader from '../Loader';

const imageApiService = new ImagesApiService();

export default function ImageGallery({ imageName, modalContent, openModal }) {
  const [images, setImages] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!imageName) {
      return;
    }
    imageApiService.resetPage();
    setLoading(true);
    setStatus('pending');

    imageApiService.query = imageName;
    imageApiService
      .fetchImagesApi()
      .then(image => {
        if (image.length === 0) {
          toast.warning(
            `Sorry for your request ${imageName}, no results were found.`,
            {
              position: 'top-right',
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            },
          );
          setError(
            `Sorry for your request ${imageName}, no results were found.`,
          );
          setLoading(true);
          setStatus('rejected');
          return;
        } else {
          setImages(image);
          setLoading(true);
          setStatus('resolved');
        }
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [imageName]);

  const handleButtonClick = () => {
    const scrollTo = document.documentElement.scrollHeight - 141;
    imageApiService.changePage();
    imageApiService
      .fetchImagesApi()
      .then(image => {
        setImages(state => [...state, ...image]);
        setLoading(true);

        window.scrollTo({
          top: scrollTo,
          behavior: 'smooth',
        });
      })

      .finally(setLoading(false));
  };

  if (status === 'idle') {
    return (
      <div
        style={{
          textAlign: 'center',
          fontSize: '18px',
        }}
      >
        Enter what picture you want to find
      </div>
    );
  }

  if (status === 'pending') {
    imageApiService.resetPage();
    return (
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <Loader />
      </div>
    );
  }

  if (status === 'rejected') {
    imageApiService.resetPage();
    return (
      <h2
        style={{
          textAlign: 'center',
        }}
      >
        {error}
      </h2>
    );
  }

  if (status === 'resolved') {
    return (
      <>
        <ul className={styles.ImageGallery}>
          <ImageGalleryItem
            image={images}
            openModal={openModal}
            modalContent={modalContent}
          />
        </ul>
        {loading ? (
          <Button onClick={handleButtonClick}>Load more</Button>
        ) : (
          <Loader />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  openModal: PropTypes.func.isRequired,
  modalContent: PropTypes.func.isRequired,
  imageName: PropTypes.string.isRequired,
};
