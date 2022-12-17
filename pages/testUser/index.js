import React from 'react';
import Layout from "../../component/Layout"
import {useRouter} from "next/router"

const Index=({users})=>{
	const router = useRouter()
	return(
		<Layout title="Test User Api">
			<div className="container">
			  <h2>Data From Next Api</h2>
			  {
			  	users.map(user=>(
			  		<p key={user.id} onClick={()=>router.push(`/testUser/${user.id}`)}>{user.name}</p>
			  	))
			  }
			</div>
		</Layout>
	)
}

export default Index

export const getStaticProps = async()=>{
	const res = await fetch('http://localhost:3000/api/test');
	console.log(res)
	const users = await res.json()

	return{
		props:{
			users,
		},
	}
}