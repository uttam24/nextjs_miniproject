import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Head from 'next/head'

const Layout =({children, title})=>{
	return(	
		<>
			<Head>
	        <title>{title}</title>
	        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" / >
	        </Head>
			<Header/>
				{children}
			<Footer/>
		</>
	)
}
export default Layout