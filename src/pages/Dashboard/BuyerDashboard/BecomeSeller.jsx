import { useContext, useState } from 'react'
import ProfileButton from "../../../components/ProfileButton";
import { IoClose } from 'react-icons/io5';
import GlobalContext from '../../../utils/GlobalContextProvider';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../../components/Spinner';

const BecomeSeller = ({sellerModal, setSellerModal}) => {

    const user = useContext(GlobalContext)
    const navigate = useNavigate()

    const initialState = {
        businessName: '',
        businessEmail: '',
        cacNumber: '',
        address: '',
        companySize: 0
    }
    const [values, setValues] = useState(initialState)
    // const [sellerModal, setSellerModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({errorState: 'initial', errorValues:[]})


    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setValues({...values, [name]: value})
    }

    const submitHandler = async(e) => {
        e.preventDefault()
        setLoading(true)

        console.log(user.userInfo._id)
        const response = await fetch(
            "https://aigis-backend-api.herokuapp.com/api/users/becomeaseller",
            {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: user.userInfo._id,
                    businessName: values.businessName,
                    businessEmail: values.businessEmail,
                    cac: values.cacNumber,
                    address: values.address,
                    companySize: values.companySize
                }),
                redirect: "follow"
            }
        )

        if (response.status === 200) {
            setLoading(false)
            const res = await response.json();
            console.log(res)
            setError({errorState: false, errorValues:[]})

            setTimeout(() => {
               setError({errorState: 'initial'})
               navigate(`/${user.userInfo.isSeller}/${user.userInfo._id}`)
            }, 3000)
        } else {
            setLoading(false)
            console.log(response);
            setError({errorState: true, errorValues:[response.statusText]})
        }
    }
    
    return (
        <div className={`top-0 left-0 w-screen h-screen fixed z-10 ${sellerModal ? 'visible' : 'hidden'}`}>
            <div div className={`top-0 left-0 relative w-full h-full bg-black bg-opacity-80`} id="modal-close" onClick={() => setSellerModal(false)}></div>
        
            <div className={`fixed rounded-lg seller-modal-form px-10 pb-10 bg-white z-20 ${sellerModal ? 'visible' : 'hidden'}`}>
                <IoClose size='1.758rem' className='absolute z-20 right-1 top-1 text-red-600 cursor-pointer hover:text-red-400' onClick={() => setSellerModal(false)}/>
                <h1 className='text-lg font-bold text-center text-gray-600 mt-8'>Sell With <span className='text-2xl text-pry-clr'>AIGIS</span> </h1>
                <hr className='mt-2 mb-8 bg-blue-300'/>
                <form className="w-full h-full flex flex-col gap-y-4" onSubmit={(e) => submitHandler(e)}>
                    <InputField text={'Company Name'} type={'text'} name={'businessName'} values={values.businessName} handleInput={handleInput} />
                    <InputField text={'Business Email'} type={'text'} name={'businessEmail'} values={values.businessEmail} handleInput={handleInput} />
                    <InputField text={'CAC Number'} type={'text'} name={'cacNumber'} values={values.cacNumber} handleInput={handleInput} />
                    <InputField text={'Address'} type={'text'} name={'address'} values={values.address} handleInput={handleInput} />
                    <InputField text={'Company Size'} type={'number'} name={'companySize'} values={values.companySize}  handleInput={handleInput} />
                    <div className="mx-auto mt-4">
                        <button type="submit">
                            <ProfileButton text={'Start Selling'} textColor={'text-white'} bgColor={'bg-pry-clr'} />
                        </button>
                    </div>
                </form>
            </div>
            {loading && (
                <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-600 bg-opacity-50 z-50">
                <Spinner />
                </div>
            )}

            {error.errorState === false && (
                <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-40">
                <div className="p-8 rounded-lg bg-white font-bold text-green-400 shadow-lg">
                    <p>Congratulations 🍾🍾, You are now a Seller on <span className='text-xl text-pry-clr'>AIGIS</span></p>
                    <p className='py-8 text-center font-medium text-red-500' >Redirecting you to the seller dashboard</p>  
                </div>
                </div>
            )}

            {error.errorState === true && error.errorValues && (
                <div className="w-50 h-20 p-5 rounded-lg relative mx-auto my-5 font-semibold text-red-500">
                    {error.errorValues.map((err) => (
                    <p key={err}>Error: {err}</p>
                    ))}
                </div>
            )}
        </div>
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
