import React, { useState } from 'react'

const Test03 = ({result}) => {

    const [form, setForm] = useState({
      country : '',
      state : '',
      city : ''
    })

    const handleChange = (e) => {

        const {name, value} = e.target ;

        if( name === 'country'){

          setForm({country : value, state : '', city : '' })
        }
        else if( name === 'state'){
          
          setForm({...form, state : value,  city : '' })
        }
        else{
          setForm({...form, [name] : value})
        }
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        console.log(form);
        
    }


  return (
    <div className='bg-amber-400 '>

        <form className='flex flex-col items-center gap-10' onSubmit={handleSubmit}>
            
            <select
            name='country'
            value={form.country}
            onChange={handleChange}
            >
              <option value="">Country</option>
              {Object.keys(result).map( (country) => (

                  <option key={country}>{country}</option>
              ))}
            </select>
            
            <select
            name='state'
            value={form.state}
            onChange={handleChange}
            disabled={!form.country}
            >
              <option value="">State</option>
              {form.country && Object.keys(result[form.country].states).map( (state) => (

                  <option key={state}>{state}</option>
              ))}
            </select>
            
            <select
            name='city'
            value={form.city}
            onChange={handleChange}
            >
              <option value="">City</option>
              {form.country && form.state && result[form.country].states[form.state].map( (city) => (

                  <option id={city}>{city}</option>
              ))}
            </select>
            <button className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600">
              Submit
            </button>
            
        </form>
      
    </div>
  )
}

export default Test03


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(form);
//   };

//   return (
//     <div className='text-center'>

//       <form 
//         className='bg-amber-300 flex flex-col items-center gap-5 p-5' 
//         onSubmit={handleSubmit}
//       >

//         {/* COUNTRY */}
//         <select
//           name="country"
//           value={form.country}
//           onChange={handleChange}
//           className="border p-2 rounded"
//         >
//           <option value="">Country</option>
//           {Object.keys(result).map((c) => (
//             <option key={c} value={c}>
//               {c}
//             </option>
//           ))}
//         </select>

//         {/* STATE */}
//         <select
//           name="state"
//           value={form.state}
//           onChange={handleChange}
//           className="border p-2 rounded"
//           disabled={!form.country}
//         >
//           <option value="">State</option>
//           {form.country &&
//             Object.keys(result[form.country].states).map((s) => (
//               <option key={s} value={s}>
//                 {s}
//               </option>
//             ))}
//         </select>

//         {/* CITY */}
//         <select
//           name="city"
//           value={form.city}
//           onChange={handleChange}
//           className="border p-2 rounded"
//           disabled={!form.state}
//         >
//           <option value="">City</option>
//           {form.country && form.state &&
//             result[form.country].states[form.state].map((c) => (
//               <option key={c} value={c}>
//                 {c}
//               </option>
//             ))}
//         </select>

//         <button className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600">
//           Submit
//         </button>

//       </form>

//     </div>
//   );
// };

// export default Test03;