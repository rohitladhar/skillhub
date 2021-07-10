import React, { useEffect } from 'react';
import axiosInstance from '../Axios';


export default function Logout() {
	
	useEffect(() => {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		localStorage.removeItem('apprentice');
		localStorage.removeItem('mentor');
		axiosInstance.defaults.headers['Authorization'] = null;
		window.location.href = '/';
	});
	return <div></div>;
}