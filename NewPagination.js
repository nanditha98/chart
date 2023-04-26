// import React from 'react'

// const NewPagination = ({ nPages, currentPage, setCurrentPage }) => {

//     const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

//     // console.log("pageNumbers",pageNumbers);

//     const nextPage = () => {
//             if(currentPage !== nPages) setCurrentPage(currentPage + 1)
//     }
  

//     const prevPage = () => {
//         if(currentPage !== 1) setCurrentPage(currentPage - 1)
//     }
//     return (
//         <nav>
//             <ul className='pagination justify-content-center'>
//                 <li className="page-item">
//                     <a className="page-link" 
//                         onClick={prevPage} 
//                         href='#'>
                        
//                         Previous
//                     </a>
//                 </li>
//                 {pageNumbers.map(pgNumber => (
//                     <li key={pgNumber} 
//                         className= {`page-item ${currentPage == pgNumber ? 'active' : ''} `} >

//                         <a onClick={() => setCurrentPage(pgNumber)}  
//                             className='page-link' 
//                             href='#'>
                            
//                             {pgNumber}
//                         </a>
//                     </li>
//                 ))}
//                 <li className="page-item">
//                     <a className="page-link" 
//                         onClick={nextPage}
//                         href='#'>
                        
//                         Next
//                     </a>
//                 </li>
//             </ul>
//         </nav>
//     )
// }

// export default NewPagination


import React, { useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import axios from "axios";


export default function App() {
   const[data,setData]=useState([]);

   useEffect(() =>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res =>{
        console.log('getting from',res.data);
        setData(res.data);
    }).catch(err=>console.log(err))
   },[])
   const [imageNum, setImageNum] = useState(1);

   const sliderImages = () =>{
    return(
        <div>
            {
                data.map((data,index)=>{
                    return(
                        <>
                         <div>{data.id}</div>
                        <div>{data.title}</div>
                        </>
                       
                    )
                })
            }

        </div>
    )
   }
   return (
      <div>
         <h3>
            {" "}
            Creating the image slider using the react-simple-image-slider
         </h3>
         <SimpleImageSlider
            width={500}
            height={250}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
            onStartSlide = {(index, length) => {
            setImageNum(index);
            }}
            autoPlayDelay = {3}
         />
         <div style = {{ fontSize: "1.5rem" }}>
            The current image slide No is {imageNum}.
         </div>
      </div>
   );
}
