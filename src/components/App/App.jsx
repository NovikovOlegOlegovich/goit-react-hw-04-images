import React, { Component } from 'react';
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

export class App extends Component {
  state = {
    images: [],
    searchWord: '',
    modalIsVisible: false,
    currentImg: '',
    status: STATUS.IDLE,
    error: '',
    currentPage: 1,
    totalPage: 0,
    imgOnPage: 12,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchWord !== this.state.searchWord ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.fetchIMG();
    }
  }

  async fetchIMG() {
    try {
      const images = await getIMG(
        this.state.searchWord,
        this.state.currentPage
      );

      if (!images.total) {
        throw new Error('No matches found');
      }

      const CalctotalPage = Math.ceil(images.total / 12);

      this.setState(prevState => ({
        images: [...prevState.images, ...images.hits],
        status: STATUS.RESOLVED,
        totalPage: CalctotalPage,
      }));
    } catch (error) {
      this.setState({ error: error.message, status: STATUS.REJECTED });
    }
  }

  onSubmitForm = searchWord => {
    this.setState({
      searchWord,
      currentPage: 1,
      images: [],
      status: STATUS.PENDING,
    });
  };

  handleModal = () => {
    this.setState(prevState => ({
      modalIsVisible: !prevState.modalIsVisible,
    }));
  };

  handlSetCurrentImg = img => {
    this.handleModal();
    this.setState({ currentImg: img });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  render() {
    const { currentImg, searchWord, status, modalIsVisible, images } =
      this.state;
    const { onSubmitForm, handlSetCurrentImg, handleModal, handleLoadMore } =
      this;

    const showLoadMoreButton =
      this.state.images.length !== 0 &&
      this.state.currentPage < this.state.totalPage;

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
  }
}
