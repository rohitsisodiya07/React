import React, { useState } from 'react'

const Test07 = ({collegeData}) => {

    const [form, setForm] = useState({
        state : '',
        college : '',
        course : '',
        branch : '',
        section : '',
        class : ''
    })

    const handleChange = (e) => {

            const {name, value} = e.target ;

            if( name === 'state'){
                setForm({state : value, college : '', course : '', branch : '', section : ''})
            }
            else if( name === 'college'){
                setForm({...form, college : value, course : '', branch : '', section : ''})
            }
            else if( name === 'course'){
                setForm({...form, course : value, branch : '', section : ''})
            }
            else if( name === 'branch'){
                setForm({...form, branch : value, section : ''})
            }
            else if( name === 'section'){
                setForm({...form, section : value, class : ''})
            }
            else{
                setForm({...form, [name] : value})
            }
    }

    const handleSubmit = (e) => {

            e.preventDefault() ;
            console.log("College Data :", form);
            
    }
  return (
    <div className="text-center mt-5">
      <form className="flex flex-col justify-center items-center gap-3" onSubmit={handleSubmit}>

            <select
            name='state'
            value={form.state}
            onChange={handleChange}
            className='border-2 p-2 rounded'>

                    <option value="">Select State</option>
                    {Object.keys(collegeData).map( (state) => (

                        <option key={state} value={state}>{state}</option>
                    ))}
            </select>

            <select
            name='college'
            value={form.college}
            onChange={handleChange}
            disabled={!form.state}
            className='border-2 p-2 rounded'>

                    <option value="">Select College</option>
                    {form.state && Object.keys(collegeData[form.state].colleges).map( (college) => (

                        <option key={college} value={college}>{college}</option>
                    ))}
            </select>

            <select
            name='course'
            value={form.course}
            onChange={handleChange}
            disabled={!form.college}
            className='border-2 p-2 rounded'>

                    <option value="">Select course</option>
                    {form.state && form.college && Object.keys(collegeData[form.state].colleges[form.college].courses).map( (course) => (

                        <option key={course} value={course}>{course}</option>
                    ))}
            </select>
           
            <select
            name='branch'
            value={form.branch}
            onChange={handleChange}
            disabled={!form.course}
            className='border-2 p-2 rounded'>

                    <option value="">Select Branch</option>
                    {form.state && form.college && form.course && Object.keys(collegeData[form.state].colleges[form.college].courses[form.course].branches).map( (branch) => (

                        <option key={branch} value={branch}>{branch}</option>
                    ))}
            </select>

            <select
            name='section'
            value={form.section}
            onChange={handleChange}
            disabled={!form.branch}
            className='border-2 p-2 rounded'>

                    <option value="">Select Section</option>
                    {form.state && form.college && form.course && form.branch && 
                        Object.keys(collegeData[form.state].colleges[form.college].courses[form.course].branches[form.branch].sections).map( (section) => (

                        <option key={section} value={section}>{section}</option>
                    ))}
            </select>

            <select
            name='class'
            value={form.class}
            onChange={handleChange}
            disabled={!form.section}
            className='border-2 p-2 rounded'>

                    <option value="">Select Class</option>
                    {form.state && form.college && form.course && form.branch && form.section &&
                        collegeData[form.state].colleges[form.college].courses[form.course].branches[form.branch].sections[form.section].map( (section) => (

                        <option key={section} value={section}>{section}</option>
                    ))}
            </select>

            <button className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600">
              Submit
            </button>
            

        </form>
    </div>
  )
}

export default Test07