import Carousel from "./components/Carousel"
import Slick from "./components/Slick";
const App = ()=>{
  return (
    <main>
      {/* <Carousel/> */}
      <Slick/>
    </main>
  )
}

export default App;













// import { useState } from "react";
// import { AiFillLeftSquare, AiFillRightSquare } from "react-icons/ai";
// import { FaQuoteRight } from "react-icons/fa";
// import { list } from "./data";

// const App = () => {
//   const [users, setUsers] = useState(list)
//   const [index, setIndex] = useState(0)
//   const [isActive , setIsActive] = useState(false)
//   const length = users.length

//   const showNext = () => {
//     if (index === length - 1) {
//       setIndex(0)
//     } else {
//       setIndex(index + 1)
//     }
//   }

//   const showPrev = () => {
//     if (index === 0) {
//       setIndex(users.length - 1)
//     }
//     else {
//       setIndex(index - 1)
//     }
//   }

//   return (<div>
//     <div className="one">
//       <div className="slide">
//         <img src={users[0].image} className="person-img" alt="img" />
//         <h4 className="name">{users[0].name}</h4>
//         <h5 className="title">{users[0].title}</h5>
//         <p className="text">{users[0].quote}</p>
//         <FaQuoteRight className="icon" />
//       </div>
//     </div>


//     <div className="two hide">
//       <div className="slide">
//         <img src={users[1].image} className="person-img" alt="img" />
//         <h4 className="name">{users[1].name}</h4>
//         <h5 className="title">{users[1].title}</h5>
//         <p className="text">{users[1].quote}</p>
//         <FaQuoteRight className="icon" />
//         < AiFillLeftSquare className="prev" onClick={showPrev} />
//         < AiFillRightSquare className="next" onClick={showNext} />
//       </div>
//     </div>
//     < AiFillLeftSquare className="prev" onClick={showPrev} />
//     < AiFillRightSquare className="next" onClick={showNext} />
//   </div>
//   );
// };
// export default App;

