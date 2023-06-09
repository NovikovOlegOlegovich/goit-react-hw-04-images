import React, { useState, useEffect } from 'react';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import { Wrapper } from './App.styled';
import Modal from '../Modal';
import Loader from '../Loader';
import Skeleton from '../Skeleton';
import { getIMG } from '../../API';
import Button from '../Button';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const IMG_ON_PAGE = 12;

const App = () => {
  const [images, setImages] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [currentImg, setCurrentImg] = useState('');
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    if (!searchWord) {
      return;
    }
    const fetchImsges = async () => {
      try {
        const fetchImages = await getIMG(searchWord, currentPage);

        if (!fetchImages.total) {
          throw new Error('No matches found');
        }

        const CalctotalPage = Math.ceil(fetchImages.total / IMG_ON_PAGE);

        setImages(images => [...images, ...fetchImages.hits]);
        setStatus(STATUS.RESOLVED);
        setTotalPage(CalctotalPage);
      } catch (errors) {
        setError(errors.message);
        setStatus(STATUS.REJECTED);
        console.log(`Error: ${error}`);
      }
    };
    fetchImsges();
  }, [searchWord, currentPage, error]);

  const onSubmitForm = searchWord => {
    setSearchWord(searchWord);
    setCurrentPage(1);
    setImages([]);
    setStatus(STATUS.PENDING);
  };

  const handleModal = () => {
    setModalIsVisible(modalIsVisible => !modalIsVisible);
  };

  const handlSetCurrentImg = img => {
    handleModal();
    setCurrentImg(img);
  };

  const handleLoadMore = () => {
    setCurrentPage(currentPage => currentPage + 1);
  };

  const showLoadMoreButton = images.length !== 0 && currentPage < totalPage;

  return (
    <Wrapper>
      <Searchbar onSubmitForm={onSubmitForm}></Searchbar>
      <Loader status={status}></Loader>
      <ImageGallery
        images={images}
        searchWord={searchWord}
        handlSetCurrentImg={handlSetCurrentImg}
        webformatURL={currentImg}
        status={status}
      />

      {showLoadMoreButton && (
        <Button handleClick={handleLoadMore}>Load More</Button>
      )}

      {modalIsVisible && (
        <Modal currentImg={currentImg} handleModal={handleModal} />
      )}

      <Skeleton status={status} />
    </Wrapper>
  );
};

export default App;
