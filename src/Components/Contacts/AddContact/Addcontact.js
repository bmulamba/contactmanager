import React from 'react'
import { Link } from 'react-router-dom'

export default function Addcontact() {
  return (
    <React.Fragment>
      <section className='ass-contact'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <p className='h4 text-success fw-bold'> Create Contact</p>
              <p className='fst-italic'>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown
              </p>
            </div>
          </div>
        
        <div className='row'>
          <div className='col-md-4'>
            <form>
              <div className='mb-2'>
                <input type='text' className='form-control' placeholder='Name' />
              </div>
              <div className='mb-2'>
                <input type='text' className='form-control' placeholder='Photo url' />
              </div>
              <div className='mb-2'>
                <input type='text' className='form-control' placeholder='Contact' />
              </div>
              <div className='mb-2'>
                <input type='text' className='form-control' placeholder='Email'/>
              </div>
              <div className='mb-2'>
                <input type='text' className='form-control' placeholder='Title' />
              </div>
              <div className='mb-2'>
                <select className='form-control'>
                  <option value="">Select Group</option>
                </select>
              </div>
              <div className='mb-2'>
                <input type='submit' className='btn btn-success' value="Create" /> 
                <Link to={"/contacts/list"} className="btn btn-primary ms-2" >Home</Link>
              </div>
            </form>
          </div>
        </div>
        </div>
      </section>
    </React.Fragment>
  )
}
