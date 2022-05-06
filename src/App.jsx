import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, submitTodo } from './Redux/actions';
import { Routes, Route, Link } from 'react-router-dom';
import { TodoDetail } from './TodoDetail';
import './App.css';

function App() {
	const dispatch = useDispatch();
	const todos = useSelector(store => store.todos);
	const [text, setText] = useState('');

	useEffect(() => {
		dispatch(fetchTodos());
	}, []);

	const postTodo = () => {
		const newTodo = {
			text,
			status: false,
		};
		dispatch(submitTodo(newTodo));
		dispatch(fetchTodos());
	};

	return (
		<div className='App'>
			<Routes>
				<Route
					path='/'
					element={
						<div>
							<input
								type='text'
								id='todo'
								placeholder='todo here...'
								onChange={e => setText(e.target.value)}
							/>
							<button onClick={postTodo}>Add a todo</button>

							<div style={{ textAlign: 'left' }}>
								<ul>
									{todos.map(todo => (
										<Link to={`/todo/${todo.id}`} key={todo.id}>
											<li>{todo.text}</li>
										</Link>
									))}
								</ul>
							</div>
						</div>
					}
				/>
				<Route path='/todo/:id' element={<TodoDetail />} />
			</Routes>
		</div>
	);
}

export default App;
