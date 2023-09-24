import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/aboutUs/About';
import BookDetail from './components/bookDetail/bookDetail';
import Books_List from './components/books/books';
import Home from './components/pages/Home';

function App() {
	return (
		<Router>
			<Routes >
				<Route  path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route  path='/bookDetail'  element={<BookDetail />} />
				<Route path='/booksList' element={<Books_List />} />
			</Routes>
		</Router>
	);
}

export default App;
