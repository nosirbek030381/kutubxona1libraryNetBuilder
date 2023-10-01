import React, { useEffect } from 'react';
import './bookDetail.css';
import ImgR from '../../image/about-img.jpg'
import Header from '../header/Header';

const BookDetails = ({ title, author, description, coverImage, pdfLink, audio }) => {

	return (
		<div>
			{/* <div>
				<Header />
			</div> */}
		<div className='book-card container font-monospace'>
			<h2 className='mb-4'>{title}</h2>
			<div className='book-info d-flex justify-content-center align-items-center clr' >
				<div className='book-cover mb-4'>
					<img src={coverImage} alt={title} className='mx-5' width={200} height={200} />
				</div>
				<div className='card card-header w-75'>
					<p>Author: {author}</p>
					<p>Description: {description}</p>
					<a href={audio} className='text-decoration-none mb-3 audio'>
            <audio src={audio} controls className='col-sm-10 text-dark'></audio>
          </a>
          <div>
            <br />
          </div>
					<a
						href={pdfLink}
						target='_blank'
						className='text-decoration-none btn btn-white btn-outline-primary'
						rel='noopener noreferrer'
					>
						View PDF
					</a>
				</div>
			</div>
		</div>
		
		</div>
	);
};

export default BookDetails;
