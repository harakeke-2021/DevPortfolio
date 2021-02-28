import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function PersonalSignup () {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    pronoun: '',
    profilePicture: '',
    bio: ''
  })

  function onChange (e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
  }

  return (
    <>

      <div className="w-full bg-blue-100 px-auto">
        <h1>Welcome! Let&apos;s create your profile</h1>
        <h2>Add your details:</h2>

        <div className="w-auto bg-blue-400 flex flex-col">
          <form onSubmit={handleSubmit}>

            <div className="listItem" >
              <label htmlFor='firstName'>First Name</label>
              <input id='firstName' type='text' name='firstName' value={form.firstName} onChange={onChange} required />
            </div>
            <div className="listItem">
              <label htmlFor='lastName'>Last Name</label>
              <input className="bg-gray-100 rounded-md" id='lastName' type='text' name='lastName' value={form.lastName} onChange={onChange} required />
            </div>

            {/* Pronoun might be a checkbox
                She/Her
                He/Him
                They/Them
            */}
            <div className="listItem">
              <label htmlFor='pronoun'>Pronoun</label>
              <input id='pronoun' type='text' name='pronoun' value={form.pronoun} onChange={onChange} required />
            </div>

            <div className="listItem">
              <label htmlFor='profilePicture'>Add a Profile Picture</label>
              <input id='profilePicture' type='file' name='profilePicture' accept="image/png, image/jpeg" required />
            </div>

            <div className="listItem">
              <label htmlFor='bio'>Bio</label>
              <input id='bio' type='text' name='bio' value={form.bio} onChange={onChange} required />
            </div>

            <Link to='/more'>
              <button>Next</button>
            </Link>

          </form>

        </div>

      </div>
    </>
  )
}

export default PersonalSignup

// sign up stage 2 PersonalSignup.jsx

// first name
// last name
// pronoun
// profile picture
// bio