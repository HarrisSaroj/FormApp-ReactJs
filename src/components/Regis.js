import React, { useState } from 'react'

const Regis = () => {

    const [formData, setFormData] = useState({
        firstname : "",
        lastname : "",
        email : "",
        country : "india",
        street : "",
        city : "",
        state : "",
        zip : "",
        comment : false,
        candidate : false,
        offers : false
    })

    function changeHandler(event){
        const {name, value, type, checked} = event.target;

        setFormData((previousData) => {
            return{
                ...previousData,
                [name] : type === "checkebox" ? checked : value
            }
        }) 

    }

    function submitHandler(event){
        event.preventDefault();
        console.log(formData);
    }
  return (
    <div className='flex flex-col items-center mt-2'>
        <form onSubmit={submitHandler}>
            <label htmlFor='firstname'>First Name</label><br/>
            <input
                type='text'
                name = "firstname"
                id='firstname'
                placeholder='First Name'
                value={formData.firstname}
                onChange={changeHandler}
                className='outline'
            /><br/>

            <label htmlFor='lastname'>Last Name</label><br/>
            <input
                type='text'
                name = "lastname"
                id='lastname'
                placeholder='Last Name'
                value={formData.lastname}
                onChange={changeHandler}
                className='outline'
            /><br/>

            <label htmlFor='email'>Email</label><br/>
            <input
                type='email'
                name = "email"
                id='email'
                placeholder='Email Address'
                value={formData.email}
                onChange={changeHandler}
                className='outline'
            /><br/>

            <label>Country</label><br/>
            <select
                name='country'
                id='country'
                onChange={changeHandler}
                value={formData.country}
                className='outline'
            >
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
                <option>GreenLand</option>
            </select>
            <br/>
            <label htmlFor='street'>Street Address</label><br/>
            <input
                type='text'
                name = "street"
                id='street'
                placeholder='Street Address'
                value={formData.street}
                onChange={changeHandler}
                className='outline'
            /><br/>
            <label htmlFor='city'>City</label><br/>
            <input
                type='text'
                name = "city"
                id='city'
                placeholder='City name'
                value={formData.city}
                onChange={changeHandler}
                className='outline'
            /><br/>
            <label htmlFor='state'>State/Province</label><br/>
            <input
                type='text'
                name = "state"
                id='state'
                placeholder='State/Province'
                value={formData.state}
                onChange={changeHandler}
                className='outline'
            /><br/>
            <label htmlFor='zip'>Zip/Postal Code</label><br/>
            <input
                type='text'
                name = "zip"
                id='zip'
                placeholder='Zip/Postal Code'
                value={formData.zip}
                onChange={changeHandler}
                className='outline'
            /><br/><br/>

            <fieldset>
                <legend>By Email</legend>
                <div className='flex'>
                    <input
                        type='checkbox'
                        name='comment'
                        id='comment'
                        checked={formData.comment}
                        onChange={changeHandler}
                    />
                    <div className='pl-4 pt-6'>
                        <label>Comments</label>
                        <p className='opacity-[.7]'>Get notified when someone posts a comment on posting</p>
                    </div>                    
                </div>

                <div className='flex'>
                    <input
                        type='checkbox'
                        name='candidate'
                        id='candidate'
                        checked={formData.candidate}
                        onChange={changeHandler}
                    />
                    <div className='pl-4 pt-6'>
                        <label>Candidate</label>
                        <p className='opacity-[.7]'>Get Notified when a candidate applies for a job.</p>
                    </div>
                </div>

                <div className='flex'>
                    <input
                        type='checkbox'
                        name='offers'
                        id='offers'
                        checked={formData.offers}
                        onChange={changeHandler}
                    />
                    <div className='pl-4 pt-6'>
                        <label>Offers</label>
                        <p className='opacity-[.7]'>Get notified when a candidate accepts or rejects an offer.</p>
                    </div>
                </div>
            </fieldset><br/><br/>

            <fieldset>
                <legend>Push Notification</legend>
                <p className='opacity-[.7]'>These are delivered by SMS to your Mobile Phone.</p>
                <div className='flex pt-4'>
                    <input 
                        type='radio'
                        name='pushNotification'
                        id='pushEverything'
                        value="Everything"
                        checked={formData.mode === "Everything"}
                        onChange={changeHandler}
                    />
                    <label className='pl-4' htmlFor='pushEverything'>Everything</label>
                </div>
                <div className='flex pt-4'>
                    <input 
                        type='radio'
                        name='pushNotification'
                        id='pushEmail'
                        value="Same as email"
                        checked={formData.mode === "Same as email"}
                        onChange={changeHandler}
                    />
                    <label className='pl-4' htmlFor='pushEmail'>Same as Email</label>
                </div>
                <div className='flex pt-4'>
                    <input 
                        type="radio"
                        name='pushNotification'
                        id='pushNothing'
                        value="No push Notification"
                        checked={formData.mode === "No push Notification"}
                        onChange={changeHandler}
                    />
                    <label className='pl-4' htmlFor='pushNothing'>No push Notification</label>
                </div>
            </fieldset>

            <button className='bg-blue-500 text-white font-bold rounded py-2 px-4'>Save</button>
        </form>
    </div>
  )
}

export default Regis;