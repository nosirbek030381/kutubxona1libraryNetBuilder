import React, { useEffect } from 'react';
import './bookDetail.css';
import ImgR from '../../image/about-img.jpg'

const BookDetails = ({ title, author, description, coverImage, pdfLink, audio }) => {

	return (
		<div className='book-card container font-monospace'>
			<h2 className='mb-4'>{title}</h2>
			<div className='book-info d-flex justify-content-center align-items-center' >
				<div className='book-cover'>
					<img src={coverImage} alt={title} className='mx-5' width={120} height={150} />
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
	);
};

export default BookDetails;
