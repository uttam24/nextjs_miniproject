import React from 'react';
import Layout from "../../component/Layout"
import axios from 'axios';
const UserId=({user})=>{
		
	return(
		<Layout>
			<div className="container">
				<h2>User Detail Page</h2>
				<table class="table">
				  <thead>
				    <tr>
				      <th scope="col">Name</th>
				      <th scope="col">Email</th>
				      <th scope="col">Website</th>
				      <th scope="col">Phone</th>
				    </tr>
				  </thead>
				  <tbody>
					<tr>
					  <td>{user.name}</td>
					  <td>{user.email}</td>
					  <td>{user.website}</td>
					  <td>{user.phone}</td>
					</tr>
				  </tbody>
				</table>
			</div>
		</Layout>
	)
}

export default UserId

export const getServerSideProps = async(context)=> {
    	const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${context.query.id}`);
    	return{
    		props:{
    			user:data,
    		}
    	}
}