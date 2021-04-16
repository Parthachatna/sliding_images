import ImageGallery from 'react-image-gallery';
import React, { Component } from 'react';

const PREFIX_URL = 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';


const images = [
  {
    thumbnail: `${PREFIX_URL}4v.jpg`,
    original: `${PREFIX_URL}4v.jpg`,
    embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
    description: 'Render custom slides within the gallery',
    // renderItem: this._renderVideo.bind(this)
  },
  {
    original: `${PREFIX_URL}image_set_default.jpg`,
    thumbnail: `${PREFIX_URL}image_set_thumb.jpg`,
    imageSet: [
      {
        srcSet: `${PREFIX_URL}image_set_cropped.jpg`,
        media : '(max-width: 1280px)',
      },
      {
        srcSet: `${PREFIX_URL}image_set_default.jpg`,
        media : '(min-width: 1280px)',
      }
    ]
  },
  {
    original: `${PREFIX_URL}1.jpg`,
    thumbnail: `${PREFIX_URL}1t.jpg`,
    originalClass: 'featured-slide',
    thumbnailClass: 'featured-thumb',
    description: 'Custom class for slides & thumbnails'
  },
];

export default class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}