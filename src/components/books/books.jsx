import React, { useEffect, useState } from 'react';
import imgR from '../../image/about-img.jpg';
import './books.css';
import Header from '../header/Header';
import { Link } from 'react-router-dom';

const API_URL = 'https://api.kutubxona1.librarynetbuilder.uz/books';

const Books_List = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Removed 'books' from dependencies

  return (
    <>
      <div>
        <Header />
      </div>
      <div className='mt-2 px-3'>
        <Link to={'/'} className='text-decoration-none'>
          <i className="fa fa-arrow-left" aria-hidden="true"></i> Go back
        </Link>
      </div>
      <div className='book-list card container mt-3 mb-4'>
        <h2>Books</h2>
        <ul>
          {books.map((book, index) => ( // Changed 'books' to 'book' as parameter name
            <li key={index} className='book-item d-flex mt-5 mx-3 '>
              <img src={imgR} alt={book.title} className='mx-5' width={120} height={100} />
              <div className='book-details font-monospace fw-normal'>
                <h3>{book.title}</h3>
                <p>{book.author.name}</p>
                <p>{book.description}</p>
                <a href={book.audio}>
                  <audio src={book.audio} controls></audio>
                </a>
                <a
                  href={book.pdf}
                  target='_blank'
                  className='text-decoration-none btn btn-white btn-outline-danger'
                  rel='noopener noreferrer'
                >
                  View PDF
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Books_List;
