import React from 'react'
import { LightBox } from 'react-lightbox-pack';
import "react-lightbox-pack/dist/index.css";
import {data} from './gridData'
const Grid = () => {
  const [toggle, setToggle] =  React.useState(false);
	const [sIndex, setSIndex] =  React.useState(0);
  const  lightBoxHandler  = (state, sIndex) => {
		setToggle(state);
		setSIndex(sIndex);
	};
  // const x = images.map((item) => {
  //   return(
  //     <div class='w-[18rem] xl:w-[23rem] 2xl:w-[28rem] h-[18rem] xl:h-[23rem] 2xl:w-[28rem] bg-black'>
  //         <img class='w-full h-full object-cover' alt='gridphoto' src={item}/>
  //     </div>
  //   )
  // })
  return (
  <div class='w-screen p-20'>
    <div class='w-full grid grid-cols-1 gap-4 place-items-center  md:grid-cols-2  lg:grid-cols-3'>
        {/* {x} */}
        {data.map((item, index) => (
        <div class='w-[18rem] xl:w-[23rem] 2xl:w-[28rem] h-[18rem] xl:h-[23rem] 2xl:w-[28rem] bg-black'>
				<img
					key={item.id}
					src={item.image}
					alt={item.title}
					class='w-full h-full object-cover cursor-pointer'
					onClick={() => {
					lightBoxHandler(true, index);
					}}
				/>
      </div>
			))}
      <LightBox
				state={toggle}
        event={lightBoxHandler}
        data={data}
        imageWidth="60vw"
        imageHeight="70vh"
        thumbnailHeight={50}
        thumbnailWidth={50}
        setImageIndex={setSIndex}
        imageIndex={sIndex}
			/>

    </div>
  </div>
  )
}

export default Grid