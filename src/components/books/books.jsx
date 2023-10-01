import React, { useEffect, useState } from 'react';
import imgR from '../../image/about-img.jpg';
import './books.css';
import Header from '../header/Header';
import { Link } from 'react-router-dom';

const API_URL = 'https://api.kutubxona1.librarynetbuilder.uz/books';
const API_URL1 = `https://api.kutubxona1.librarynetbuilder.uz`

const Books_List = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        console.log(books)
        console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

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
          {books.map((book, index) => ( 
            <li key={index} className='book-item d-flex mt-5 mx-3 justify-content-center'>
              <div className='mb-3 mt-3 mx-4'>
              <img src={API_URL1 + book.image} alt={book.title} className='mx-5' width={200} height={200} />
              </div>
              <div className='book-details font-monospace px-4 p-3'>
                <h4>Kitob nomi: {book.title || "No Title"}</h4>
                <p>Yozuvchisi: {book.author.name || "No Author"}</p>
                <p className=''>Kitob haqida: {book.description || "No description"}</p>
                <p className='text-success category'>Category: {book.category?.name || "No category"}</p>
                <a href={book.audio}>
                  <audio src={book.audio} className='' controls></audio>
                </a>
                <div>
                  <br />
                </div>
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
