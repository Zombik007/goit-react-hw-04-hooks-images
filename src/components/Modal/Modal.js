import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

const lightboxRoot = document.querySelector('#lightbox-root');

export default function Lightbox({ onClose, children }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.Lightbox__backdrop} onClick={handleBackdropClick}>
      <div className={styles.Lightbox__content}>{children}</div>
    </div>,
    lightboxRoot,
  );
}

Lightbox.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
