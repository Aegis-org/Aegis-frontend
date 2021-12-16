import { useState, useRef } from "react";
import Profile from "../../components/Profile";
import { useGetScreenBreakPoint } from "../../hooks/useGetScreenBreakPoint";
import { users } from "../../utils/DummyProductData";
import ProfileButton from "../../components/ProfileButton";

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
        console.log(imageRef.current.files[0])
        setValues({...values, image: imageRef.current.files[0]})
    }

    const [values, setValues] = useState(initialState)

    const dummyInputs = [{text: 'Car Model', type:'text', name: 'model', halfSpan: true}, {text: 'Year', type:'number', name: 'year', halfSpan: true}, {text: 'Mileage', type:'number', name: 'mileage', placeholder:'Vehicle mileage in KM'}, {text: 'Location', type:'text', name: 'location', placeholder:'Current address'}]

    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 justify-between my-20 px-2">
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
                        name="vehicleImage"
                        className="uploadVehicleImage" 
                        ref={imageRef}
                        id= 'vehicleImage'
                        onChange={updateImage}
                        required
                        />
                        <p className="w-full px-2 py-2 rounded-lg ml-3 h-full bg-white">{values.image.name ? values.image.name : 'No file selected'}</p>
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
                    <div className="w-1/2 mx-auto mt-6 cursor-pointer" onClick={() => setValues(initialState)}>
                        <ProfileButton text={'Clear'} textColor={'text-red-500'} bgColor={'bg-pry-accent'} />
                    </div>
                </div>
            </div>
            <div className="dashboard-divider md:px-2">Another component here</div>
            { !screen.match(/^(sm|md)$/) && <div className="dashboard-divider md:pl-8"><Profile className="" user={user} dashboard={'seller'}/></div> }
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
