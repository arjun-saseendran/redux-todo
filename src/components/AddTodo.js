import React, {useState}  from 'react';
import { useDispatch } from 'react-redux';
import {addTodo} from '../features/todo/todoSlice'

export const AddTodo = () => {
	const [input, setInput] = useState('')
	const dispatch = useDispatch();
	
	return(

		<div>AddTodo</div>

		)
}