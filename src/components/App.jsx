import { Application } from './App.styled';
import Button from './button/Button';
import ImageGallery from './imageGallery/ImageGallery';
import Searchbar from './searchbar/Searchbar';
import { Component } from 'react';
import { getImages } from 'utils';
import Loader from './loader/Loader';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: '',
    isLoading: false,
    totalImages: 0,
    error: '',
  };

  componentDidUpdate = async (_, prevState) => {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });
      try {
        const data = await getImages({ query, page });
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          totalImages: data.totalHits,
          error: '',
        }));
      } catch (error) {
        this.setState({ error: error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  };

  handleSubmit = normilizedQuery => {
    this.setState({ query: normilizedQuery, images: [], page: 1 });
  };

  handleClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isLoading, totalImages, error } = this.state;
    const isBtnShown =
      totalImages !== images.length && !isLoading && totalImages > 0;

    return (
      <Application>
        <Searchbar handleSubmit={this.handleSubmit} />
        {images.length > 0 && <ImageGallery images={images} />}
        {isBtnShown && <Button onClick={this.handleClick} />}
        {isLoading && <Loader />}
        {error && <p>{error}</p>}
      </Application>
    );
  }
}
