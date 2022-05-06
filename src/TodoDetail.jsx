import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const TodoDetail = () => {
	const { id } = useParams();
	const [todo, setTodo] = useState({});

	useEffect(() => {
		fetchTodo();
	}, []);

	const fetchTodo = async () => {
		const { data } = await axios(`http://localhost:8080/todos/${id}`);
		setTodo(data);
	};
	return (
		<div>
			<h2>Todo details</h2>
			<h3>Todo: {todo.text}</h3>
			<p>Status: {todo.status ? 'done' : 'pending'}</p>
		</div>
	);
};
