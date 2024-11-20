import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { down, left, right, up, take, join } from './store/Comand';

function App() {
  const comandRef = useRef();
  const side = useSelector(state => state.comand.comand)
  const [taken, setTaken]= useState(false)
  const [data1, setData1] = useState([])

  const blockRef = useRef()
  

  const dispatch = useDispatch()


  useEffect(() =>{
    let copy =  JSON.parse(localStorage.getItem('data'))
    if (copy) {
      setData1(copy)
    }
  },[])
  function addComand(e) {
    e.preventDefault()
    console.log(comandRef.current.value.toUpperCase().split(""));

    dispatch(down(comandRef.current.value.toUpperCase().split("")))
    dispatch(left(comandRef.current.value.toUpperCase().split("")))
    dispatch(right(comandRef.current.value.toUpperCase().split("")))
    dispatch(up(comandRef.current.value.toUpperCase().split("")))
    dispatch(join(comandRef.current.value.toUpperCase().split("")))
    dispatch(take(comandRef.current.value.toUpperCase().split("")))

    console.log(side);
    let translateX = 0;
    let translateY = 0;

    if (side.right) {
      translateX += side.right * 44;
    }
    if (side.left) {
      translateX -= side.left * 44; 
    }
    if (side.up) {
      translateY -= side.up * 44;
    }
    if (side.down) {
      translateY += side.down * 44; 
    }

    if (blockRef.current) {
      blockRef.current.style.transition = "transform 2s ease";
      blockRef.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
    }

    if (side.take) {
      setTaken(true)
    }


    let data ={
      origin: comandRef.current.value,
      date: new Date().toISOString()
    }

    let copied =[...data1,data]
    setData1(copied)
    localStorage.setItem('data', JSON.stringify(data1))
    comandRef.current.value = ''
  }
  return (
    <div className='flex gap-10 flex-row mx-auto max-w-[1000px] mb-40 '>
      <div className='w-[440px] mt-20'>
      <div className='flex gap-3 '>
        <span className='text-gray-400 text-xl'>R- to right</span>
        <span className='text-gray-400 text-xl'>L- to left</span>
        <span className='text-gray-400 text-xl'>U- to up</span>
        <span className='text-gray-400 text-xl'>D- to down</span>
        <span className='text-gray-400 text-xl'>O- take</span>
        <span className='text-gray-400 text-xl'>B- join</span>
      </div>
      <h1 className='text-2xl text-gray-500 font-semibold mb-4'>Control Panel</h1>
      <table className='flex flex-col gap-1 '>
        <tr className=' flex flex-row gap-1' >
          <th ref={blockRef} className='w-10 h-10 absolute z-10 bg-blue-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
        </tr>
        
        <tr className='flex flex-row gap-1' >
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className={`w-10 h-10 ${taken ? 'bg-gray-400' : 'bg-red-400'}  rounded-md`}></th>
        </tr>

        <tr className='flex flex-row gap-1' >
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
        </tr>

        <tr className='flex flex-row gap-1' >
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
        </tr>

        <tr className='flex flex-row gap-1' >
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
        </tr>

        <tr className='flex flex-row gap-1' >
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
        </tr>

        <tr className='flex flex-row gap-1' >
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
          <th className='w-10 h-10 bg-gray-400 rounded-md'></th>
        </tr>

      </table>

      <div className='mt-10 '>
        <label className='text-gray-500 mb-2' htmlFor="comand">Buyruqni kiriting</label>
        <input ref={comandRef} placeholder='only L,R,U,D,O,B'  id='comand' className='uppercase mt-2 border-solid rounded-md  border-blue-700 border-2 w-[400px] py-1 px-2 outline-none' type="text" />
      </div>
      <button onClick={addComand} className='bg-black py-2 text-white rounded-md px-2 mt-2'>Execute Comand</button>
      
      </div>



      <div className='w-[600px]  mt-20 border-2 rounded-md border-blue-500 p-4'>
        <h1 className='text-xl text-gray-500 font-semibold'>Comand History</h1>
        <div className='flex flex-row justify-between mt-2'>
                <span className='text-gray-500 font-sans font-semibold'>Origin</span>
                <span className='text-gray-500 font-sans font-semibold'>Timestamp</span>
                <div className='flex flex-row gap-10'>
                  <span className='text-gray-500 font-sans font-semibold'>Before</span>
                  <span className='text-gray-500 font-sans font-semibold'>After</span>
                </div>
              </div>
        {
          data1.length > 0 && data1.map(function (value,index) {
            return(
              <div key={index} className='flex justify-between'>
                <h1 className='text-blue-200 font-semibold'>{value.origin.toUpperCase()}</h1>
                <h1  className='text-gray-500 font-sans font-semibold'>{value.date.slice([0],[10])}    {value.date.slice([11],[19])}
                </h1>
                
                <h1 className='text-gray-500 font-sans font-semibold'>(0,2)</h1>
                <h1 className='text-gray-500 font-sans font-semibold'>(2,0)</h1>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App