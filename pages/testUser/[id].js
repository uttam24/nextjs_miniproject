import React from 'react';
import axios from 'axios';

const NewUserId =({user})=>{
	return(
		<div className="container">
		   <h1> Single User Id</h1>
		   <p>Name :- {user.name}</p>
		   <p>Phone:- {user.email}</p>
		   <p>Email:- {user.phone}</p>
		</div>
	)
}

export default NewUserId

export async function getServerSideProps(context) {
	try{
		const {data} = await axios.get(`http://localhost:3000/api/test/${context.query.id}`);
		return{
			props:{
				user:data,
			}
		}
	}
	catch(error){

	}
}