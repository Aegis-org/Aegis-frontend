import { useState, useRef } from "react";
import Profile from "../../components/Profile";
import { useGetScreenBreakPoint } from "../../hooks/useGetScreenBreakPoint";
import { users } from "../../utils/DummyProductData";
import ProfileButton from "../../components/ProfileButton";
import defaultVehicleImage from "../../assets/product-mercedes.png"
import { validFileType, returnFileSize } from "./imageValidation";


const Dashboard = () => {
    const user = users[0]
    const screen = useGetScreenBreakPoint()
    const imageRef = useRef(null)

    const initialState = {
        image: {},
        type: '',
        model: '',
        year: '',
        mileage: '',
        location: '',
        price: '',
        engineNumber: '',
        vin: '',
        fuel: ''
    }

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setValues({...values, [name]: value})
    }

    const updateImage = () => {
        const imageFile = imageRef.current.files[0]
        if (!imageFile) return
        if (validFileType(imageFile)) {
            const size = returnFileSize(imageFile)
            const url = URL.createObjectURL(imageFile)
            setImage({ imageFile, error:"", url:url, size:size })
        } else {
            setImage({error: 'Invalid file type'})
        }
    }

    const clearForm = () => {
        setValues(initialState)
        setImage({})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('formSubmitted')
    }

    const [image, setImage] = useState({})
    const [values, setValues] = useState(initialState)

    const dummyInputs = [{text: 'Car Model', type:'text', name: 'model', halfSpan: true}, {text: 'Year', type:'number', name: 'year', halfSpan: true}, {text: 'Mileage', type:'number', name: 'mileage', placeholder:'Vehicle mileage in KM'}, {text: 'Location', type:'text', name: 'location', placeholder:'Current address'}]
    const fuelOptions = ['petroleum', 'diesel', 'hydrogen', 'electricity']

    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4 justify-between my-5 md:my-20 px-2">
            <div className=" flex flex-col gap-y-4 md:pr-8">
                <div>
                    <p className='font-semibold mb-1 pl-2'>Seller's Name</p>
                    <div className="bg-pry-accent px-2 py-3 rounded-xl font-medium whitespace-nowrap">{user.firstName + ' ' + user.lastName}</div>
                </div>
                <div>
                    <p className='font-semibold mb-1 pl-2'>Upload Vehicle Image</p>
                    <div className="relative flex items-center bg-pry-accent px-2 py-2 rounded-xl font-medium whitespace-nowrap">
                        <label className="cursor-pointer" htmlFor="vehicleImage">Select Image</label>
                        <input type="file" 
                        accept="image/*"
                        name="vehicleImage"
                        className="uploadVehicleImage" 
                        ref={imageRef}
                        id= 'vehicleImage'
                        onChange={updateImage}
                        required
                        />
                        <p className="w-full px-2 py-2 rounded-lg ml-3 h-full bg-white">
                            {image.imageFile ? image.imageFile.name  : 'No file selected'}
                            
                        </p>
                        {image.error && <p className="absolute text-red-500 text-sm bottom-0">{image.error}</p>}
                    </div>
                </div>
                <div>
                    <p className="text-center mt-10">CAR DETAILS</p>
                    <div className="grid gap-2 grid-cols-2 max-w-full">
                        {/* <InputField text={'Car Model'} type={'text'} name={'model'} />
                        <InputField text={'Year'} type={'text'} name={'year'} /> */}
                        {dummyInputs.map(input => (
                            <div className={`col-span-2 md:${input.halfSpan && 'col-span-1'}`}>
                                <label className="font-semibold mb-1 pl-2" htmlFor={input.name}>{input.text}</label>
                                <input 
                                className="bg-pry-accent rounded-xl font-medium text-base p-2 w-full text-gray-800" 
                                type={input.type} 
                                name={input.name} 
                                id={input.name}
                                value={values.[input.name]}
                                placeholder={input.placeholder}
                                onChange={(e) => handleInput(e)}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="w-1/2 mx-auto mt-6 cursor-pointer" onClick={() => clearForm()}>
                        <ProfileButton text={'Clear'} textColor={'text-red-500'} bgColor={'bg-pry-accent'} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-y-6 dashboard-divider md:px-8">
                <h1 className="font-medium text-center ">UPLOAD VEHICLES FOR DISPLAY</h1>
                <div className=" aspect-video overflow-hidden">
                    <img 
                    className="block w-full h-40 object-contain rounded-xl"
                    src={image.url? image.url : defaultVehicleImage} 
                    alt="uploaded vehicle or default vehicle" />
                </div>
                <div className="px-5 py-5 bg-pry-clr rounded-xl text-white">
                    <form className="flex flex-col gap-y-4" onSubmit={(e) => submitHandler(e)}>
                        
                        <label htmlFor="type">
                            Vehicle Type
                            <input className="bg-white bg-opacity-50 rounded-xl font-medium mt-1 px-4 py-2 w-full text-white focus:outline-none focus:bg-opacity-30" type="text" name="type" id="type" />
                        </label>

                        <label className="relative " htmlFor="price">
                            Asking Price
                            <input 
                            className="bg-white bg-opacity-50 rounded-xl font-medium mt-1 pl-5 px-4 py-2 w-full text-white focus:outline-none focus:bg-opacity-30" 
                            type="number" name="price" id="price" 
                            />
                            <span className="absolute font-bold text-lg left-2 top-8 text-pry-clr">$</span>
                        </label>

                        <label htmlFor="engineNumber">
                            Engine Number
                            <input className="bg-white bg-opacity-50 rounded-xl font-medium mt-1 px-4 py-2 w-full text-white focus:outline-none focus:bg-opacity-30" 
                            type="text" name="engineNumber" id="engineNumber"
                            value={values.engineNumber}
                            onChange={(e) => handleInput(e) }
                            />
                        </label>

                        <label htmlFor="fuel">
                            Fuel
                            <select value={values.fuel} name="fuel" id="fuel"
                            className="capitalize bg-white bg-opacity-50 rounded-xl font-medium my-1 px-4 py-2 w-full text-white focus:outline-none focus:bg-opacity-30" 
                            placeholder='Select vehicle fuel source' 
                            onChange={(e) => handleInput(e)}>
                                {fuelOptions.map(option => (
                                    <option 
                                    key={option}
                                    className="capitalize bg-black bg-opacity-50 rounded-xl font-medium mt-1 px-4 py-2 w-full text-white focus:outline-none focus:bg-opacity-30"
                                    value={option}>
                                        {option}
                                    </option>
                                ))}   
                            </select> 
                        </label>

                        <div className="mx-auto mt-4">
                            <button type="submit">
                                <ProfileButton text={'Upload'} textColor={'text-pry-clr'} bgColor={'bg-pry-accent'} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            { !screen.match(/^(sm|md|lg)$/) && <div className="dashboard-divider md:pl-8"><Profile className="" user={user} dashboard={'seller'}/></div> }
        </div>
    )
}

// const InputField = ({ text, type, name, values}) => {
//     return (
//         <div className="flex flex-col w-full">
//             <label className="font-semibold mb-1 pl-2" htmlFor={name}>{text}</label>
//             <input 
//             className="bg-pry-accent rounded-xl font-medium text-base p-2 w-full text-gray-800" 
//             type={type} 
//             name={name} 
//             id={name}
//             value={values.[name]}
            
//              />
//         </div>
//     )
// }

export default Dashboard