import React from "react";
import Layout from "../../component/Layout"
import Link from 'next/link';
import {useRouter} from "next/router"

const Index =({data})=>{
	const router = useRouter();
	return(
		<Layout>
			<div className="container">
				<h1>All user list</h1>
				<table className="table">
				  <thead>
				    <tr>
				      <th>Name</th>
				    </tr>
				  </thead>
				 <tbody>
				 {data.map(user =>(
				 	<tr key={user.id}>
				 		<td onClick={()=>{router.push(`/users/${user.id}`)}}>{user.name}</td>
				 	</tr>
				 	))}
				 </tbody>
				</table>
			</div>
		</Layout>
	)
}
export default Index


export const getStaticProps = async()=> {
  	const res = await fetch('https://jsonplaceholder.typicode.com/users');
  	const data =await res.json();
  	return{
  		props:{
  			data:data,
  		},
  	}
}