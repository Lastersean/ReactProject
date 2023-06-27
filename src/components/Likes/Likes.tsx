import './Likes.css'
import {AiOutlineLike, AiFillLike} from 'react-icons/ai'
import  {useState} from 'react'


const Likes = () => {
    const [like, setLike] = useState(false)
    const handleClick = () => {
        if(like===true) {
            console.log('unliked')
            setLike(false)

        }else{
            console.log('liked')
            setLike(true) 
        }
       
           
    
    }
  return (
    <>
    <div  onClick={handleClick}>Like the Page{like? <AiFillLike/>:<AiOutlineLike/> }</div>

    </>
    
  )
}

export default Likes