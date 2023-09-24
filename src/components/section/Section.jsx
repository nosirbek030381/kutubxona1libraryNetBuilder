import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookDetail from '../bookDetail/bookDetail';
import './section.css';

const URL = 'https://api.kutubxona2.librarynetbuilder.uz/search?';

const Section = () => {
	const [loading, setLoading] = useState(false);
	const [text, setText] = useState('');
	const [res, setRes] = useState('');
	const [selectedBook, setSelectedBook] = useState(null);
	const { id } = useParams();

	const scrollHeight = () => {
		const booksList = document.getElementById('booksList');
		if (res) booksList.scrollIntoView({ behavior: 'smooth' });
	};

	const handleClick = async e => {
		e.preventDefault();
		setLoading(true);
		const query = URL + new URLSearchParams({ name: text }).toString();
		const data = await fetch(query).then(res => res.json());

		if (typeof data === 'string') {
			setLoading(false);
			return setRes(data);
		}

		console.log(data);

		setRes({
			book: data[0],
		});
		setSelectedBook(data[0]);

		setLoading(false);
	};

	useEffect(() => {
		scrollHeight();
	}, [res]);

	return (
		<>
			{loading ? (
				<div className='preloader-box'>
					<div className='preloader'></div>
				</div>
			) : null}

			<div className='full d-flex justify-content-center align-items-center'>
				<div className='d-flex flex-column align-items-center'>
					<h1 className='text-white text-center'>Library center</h1>
					<p className='text-white text-center'>Kutubxonalarimizdan qidiring</p>
					<div className='choices'>
						<div>
							<form className='d-flex justify-content-center align-items-center bg-white form__action'>
								<input
									type='text'
									id='text'
									className='form-control w-100'
									placeholder='Qidiruv ... '
									onKeyUp={() => {
										setText(document.getElementById('text').value);
									}}
								/>
								<input
									type='submit'
									className='btn-search btn bg-white fas fa-search'
									onClick={handleClick}
									value='Qidirish'
								/>
							</form>
						</div>
					</div>
				</div>
			</div>

			{res.book ? (
				<div className='fullHeight' id='booksList'>
					<div className='container'>
						<div className='row offset-1'>
							{res.book.map((book, ind) => (
								
								<div className='col-lg-4  col-sm-4 col-md-4' key={ind}>
									<div className='card mt-5'>
										<div className='card-body'>
											<BookDetail 
											title={book.title}
											author={book.author?.name || "Unknown!!"}
											coverImage={book.image}
											description={book.description || "No description"}
											audio={book.audio && "no audio"}
											pdfLink={book.pdf}
											/>

											<div></div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			) : res ? (
				<div className='d-flex align-items-center justify-content-center fullHeight'>
					<h1 id='booksList' className='mt-5 text-white'>
						Kitob topilmadi 🙅‍♂️
					</h1>
				</div>
			) : null}
		</>
	);
};

export default Section;