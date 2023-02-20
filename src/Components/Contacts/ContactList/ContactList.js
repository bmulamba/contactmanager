import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ContactList.css'

export default function ContactList() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      setUsers(res.data);
    })
    .catch(err => {
      console.log(err);
    })
    
  });


  return (
    <React.Fragment>
           
      <section className='contact-section'>
        <div className='container'>
          <div className='grid'>
            <div className='row'>
              <div className='col'>
                <p className='h3'>ContactManager
                <Link to={'/contacts/add'} className="btn btn-primary ms-2">
                  <i className="fa fa-plus-circle me-2" /> New
                </Link>
                </p>
                <p className='fst-italic'>
                   Lorem ipsum, or lipsum as it is sometimes known, is dummy 
                   text used in laying out print, graphic or web designs. 
                   The passage is attributed to an unknown
                </p>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <form className='row'>
                  <div className='col'>
                    <div className='mb-2'>
                      <input type="text" className='form-control' placeholder='Search Names' />
                    </div>
                  </div>
                  <div className='col'>
                    <div className='mb-2'>
                      <input type="submit" className='btn btn-outline-dark' value="search" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='contact-list'>
        <div className='container'>
          <div className='row'>
          {users.map(user => (
            <div key={user.id}>{user.name}
            <div className='col-md-6'>
              <div className='card'>
                <div className='card-body'>
                  <div className='row align-items-center d-flex justify-content-around' >
                  
                  <div className='col-md-10'>
                    <ul className='list-group'>
                      <li className='list-group-item list-group-item-action'>
                        Name : <span className='fw-bolt'>{user.name}</span>
                      </li>
                      <li className='list-group-item list-group-item-action'>
                        Mobile : <span className='fw-bolt'> 76293292973</span>
                      </li>
                      <li className='list-group-item list-group-item-action'>
                        Email : <span className='fw-bolt'>warajan@gmail.com</span>
                      </li>
                    </ul>
                  </div>
                  <div className='col-md-1 d-flex flex-column align-items-center'>
                    <Link to={`/contacts/view/:contactId`} className="btn btn-warning">
                      <i className='fa fa-eye' />
                    </Link>
                    <Link to={`/contacts/edit/:contactId`} className="btn btn-primary my-2">
                      <i className='fa fa-pen' />
                    </Link>
                    <Link  className="btn btn-danger">
                      <i className='fa fa-trash' />
                    </Link>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
))}
</div>
        </div>
      </section>
    </React.Fragment>
  )
}
