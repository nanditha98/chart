// // import React, { useState } from 'react'
// // import Button from './Button';

// // const Nav = () => {
// //     let Links =[
// //       {name:"HOME",link:"/"},
// //       {name:"SERVICE",link:"/"},
// //       {name:"ABOUT",link:"/"},
// //       {name:"BLOG'S",link:"/"},
// //       {name:"CONTACT",link:"/"},
// //     ];
// //     let [open,setOpen]=useState(false);
// //   return (
// //     <div className='shadow-md w-full fixed top-0 left-0'>
// //       <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
// //       <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
// //       text-gray-800'>
// //         <span className='text-3xl text-indigo-600 mr-1 pt-2'>
// //         <ion-icon name="logo-ionic"></ion-icon>
// //         </span>
// //         Designer
// //       </div>
      
// //       <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
// //       <ion-icon name={open ? 'close':'menu'}></ion-icon>
// //       </div>

// //       <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
// //         {
// //           Links.map((link)=>(
// //             <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
// //               <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
// //             </li>
// //           ))
// //         }
// //         <Button>
// //           Get Started
// //         </Button>
// //       </ul>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Nav


// function Nav(){
//     return(
//   <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 ">
//   <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto p-1 mx-30 flex justify-center text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-300 flex-1" src="data:image/jpeg;base64,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" alt="" width="384" height="512"/>
//   <div class="pt-6 md:p-8 text-start md:text-right space-y-1">
//     <blockquote>
//         <div>
//         <p class="text-lg font-medium">
//         “Tailwind CSS is the only framework that I've seen scale
//         on large teams. Its easy to customize, adapts to any design,
//         and the build size is tiny.”
//         </p>
//         </div> 
//         <div>
//         <p class="text-lg font-medium">
//         “Tailwind CSS is the only framework that I've seen scale
//         on large teams. Its easy to customize, adapts to any design,
//         and the build size is tiny.”
//         </p>
//         </div>  
//     </blockquote>
//     <figcaption class="font-medium">
//       <div class="text-sky-500  text-end p-1 dark:text-sky-400">
//         Sarah Dayan
//       </div>
//       <div class="text-slate-700 text-end  dark:text-slate-500 ">
//         Staff Engineer, Algolia
//       </div>
//     </figcaption>
//   </div>
// </figure>

//     )
// }
// export default Nav


import { useState, useEffect } from 'react';

function AutoLogout({ duration, onLogout }) {
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    // Set up the timer when the component mounts
    const timeoutId = setTimeout(() => {
      onLogout();
    }, duration);

    // Save the timer ID so we can clear it when the component unmounts
    setTimer(timeoutId);

    // Clean up the timer when the component unmounts or duration changes
    return () => {
      clearTimeout(timer);
    };
  }, [duration, onLogout, timer]);

  return null;
}

// Example usage:
function App() {
  const handleLogout = () => {
    // Your logout logic here
  };

  return (
    <div>
      <h1>Your app here</h1>
      <AutoLogout duration={60000} onLogout={handleLogout} />
    </div>
  );
}