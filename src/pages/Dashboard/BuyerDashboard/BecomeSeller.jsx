import { useState } from 'react'
import ProfileButton from "../../../components/ProfileButton";
import { IoClose } from 'react-icons/io5';

const BecomeSeller = ({sellerModal, setSellerModal}) => {

    const initialState = {
        businessName: '',
        businessEmail: '',
        cacNumber: '',
        address: '',
        companySize: 0
    }
    const [values, setValues] = useState(initialState)
    // const [sellerModal, setSellerModal] = useState(false)


    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setValues({...values, [name]: value})
    }

    const submitHandler = async(e) => {
        e.preventDefault()

        try {
            const response = await fetch(
                "https://aigis-backend-api.herokuapp.com/api/users/edit",
                {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        isSeller: true
                    })
                }
            )
            const res = await response.json()
            console.log(res)
        } catch (error) {
            console.log('error form try/catch: ', error)
        }
    }
    
    return (
        <>
            <div className={`top-0 left-0 w-screen h-screen fixed bg-black bg-opacity-80 z-10 ${sellerModal ? 'visible' : 'hidden'}`} onClick={() => setSellerModal(false)}>
            </div>
            <div className={`fixed rounded-lg seller-modal-form px-10 pb-10 bg-white z-20 ${sellerModal ? 'visible' : 'hidden'}`}>
                <IoClose size='1.758rem' className='absolute z-20 right-1 top-1 text-red-600 cursor-pointer hover:text-red-400' onClick={() => setSellerModal(false)}/>
                <h1 className='text-lg font-bold text-center text-gray-600 mt-8'>Sell With <span className='text-2xl text-pry-clr'>AIGIS</span> </h1>
                <hr className='mt-2 mb-8 bg-blue-300'/>
                <form className="w-full h-full flex flex-col gap-y-4" onSubmit={(e) => submitHandler(e)}>
                    <InputField text={'Business Name'} type={'text'} name={'businessName'} values={values} handleInput={handleInput} />
                    <InputField text={'Business Email'} type={'text'} name={'businessEmail'} values={values} handleInput={handleInput} />
                    <InputField text={'CAC Number'} type={'number'} name={'cacNumber'} values={values} handleInput={handleInput} />
                    <InputField text={'Address'} type={'text'} name={'address'} values={values} handleInput={handleInput} />
                    <InputField text={'Company Size'} type={'text'} name={'companySize'} values={values}  handleInput={handleInput} />
                    <div className="mx-auto mt-4">
                        <button type="submit">
                            <ProfileButton text={'Start Selling'} textColor={'text-white'} bgColor={'bg-pry-clr'} />
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

const InputField = ({ text, type, name, values, placeholder, handleInput, icon}) => {
    return (
        <div className="flex flex-col w-full">
            <label htmlFor={name} className="relative">
                {text}
                <input className="border-gray-300 border rounded-xl font-medium mt-1 px-4 pl-5 py-2 w-full text-black focus:outline-none focus:bg-gray-500 placeholder-purple-300 " 
                type={type} name={name} id={name}
                value={values[name]}
                placeholder={placeholder}
                onChange={(e) => handleInput(e) }
                required
                />
                {icon && <span className="absolute font-bold text-md left-2 bottom-2 text-purple-900 rounded-full">$</span>}
            </label>
        </div>
    )
}

export default BecomeSeller
