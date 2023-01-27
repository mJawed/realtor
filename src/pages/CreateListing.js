
import {useState} from'react'

function CreateListing() {

const[propertyName, setpropertyName]=useState("")
const[propertytype, setpropertytype]=useState('rent');
const[bedrooms, setbedrooms]=useState('');
const[bathrooms, setbathrooms]=useState('');
const[parking,setparking]=useState(false)
const[furnished,setfurnished]=useState(false)
const[address, setaddress]=useState('')
const[description,setdescription]=useState('')
const[offer,setoffer]=useState(false);
const[regularPrice, setregularPrice]=useState('')
const[discountedPrice, setdiscountedPrice]=useState('')


const formData = {
  propertyName,
  propertytype,
  bedrooms, 
  bathrooms,
  parking,
  furnished,
  address,
  description,
  offer,
  regularPrice
} 


function onChange(){

}


function onSubmit(e){

  e.preventDefault()

  console.log(formData)

}


    return ( <>
    
    
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">Create a Listing</h1>
      <form method="post" onSubmit={onSubmit}>
        <p className="text-lg mt-6 font-semibold">Sell / Rent</p>
        <div className="flex">
          <button
            type="button"
            id="type"
            value="sale"
            onChange={(e)=>{setpropertytype(e.target.value)}}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
            ${propertytype === 'rent' ? "bg-white text-black":"bg-slate-600 text-white"}`
    }
 
          >
              
            sell
          </button>
          <button
            type="button"
            id="type"
            value="rent"
            onChange={(e)=>{setpropertytype(e.target.value)}}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
            ${propertytype === 'sale' ? "bg-white text-black": "bg-slate-600 text-white"}
            `}
             
          >
            rent
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Name</p>
        <input
          type="text"
          id="name"
         value={propertyName}
          onChange={(e)=>{setpropertyName(e.target.value)}}
          placeholder="Name"
          maxLength="32"
          minLength="10"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <div className="flex space-x-6 mb-6">
          <div>
            <p className="text-lg font-semibold">Beds</p>
            <input
              type="number"
              id="bedrooms"
              min="1"
              max="50"
              required
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
            value={bedrooms}
            onChange={(e)=>{setbedrooms(e.target.value)}}
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Baths</p>
            <input
              type="number"
              id="bathrooms"
              min="1"
              max="50"
              required
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
            value={bathrooms}
            onChange={(e)=>{setbathrooms(e.target.value)}}
            
            />
          </div>
        </div>
        <p className="text-lg mt-6 font-semibold">Parking spot</p>
        <div className="flex">
          <button
            type="button"
            id="parking"
        value={parking}
        onChange={(e)=>setparking(e.target.value)}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
             ${!parking === true ? "bg-white text-black" :"bg-slate-600 text-white"}`}

          >
            Yes
          </button>
          <button
            type="button"
            id="parking"
            value={parking}
            onChange={(e)=>setparking(e.target.value)}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
            ${!parking === false ? "bg-white text-black" :"bg-slate-600 text-white"}`}

          >
            no
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Furnished</p>
        <div className="flex">
          <button
            type="button"
            id="furnished"

            value={true}
            onChange={(e)=>setfurnished(e.target.value)}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
            ${!furnished === true ? "bg-white text-black" :"bg-slate-600 text-white"}`}
          >
            yes
          </button>
          <button
            type="button"
            id="furnished"
            value={false}
            onChange={(e)=>setfurnished(e.target.value)}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
            ${!furnished === false ? "bg-white text-black" :"bg-slate-600 text-white"}`}
          >
            no
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Address</p>
        <textarea
          type="text"
          id="address"
   
          placeholder="Address"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
       value={address}
       onChange={(e)=>{setaddress(e.target.value)}}
       
       />
      
        <p className="text-lg font-semibold">Description</p>
        <textarea
          type="text"
          id="description"
       
          placeholder="Description"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        
        value={description}
        onChange={(e)=>{setdescription(e.target.value)}}
        />
        <p className="text-lg font-semibold">Offer</p>
        <div className="flex mb-6">
          <button
            type="button"
            id="offer"
        
            value={true}
            onChange={(e)=>setoffer(e.target.value)}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
            ${!offer ? "bg-white text-black" :"bg-slate-600 text-white"}`}
          >
            yes
          </button>
          <button
            type="button"
            id="offer"
            value={false}
            onChange={(e)=>setoffer(e.target.value)}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
            ${offer ? "bg-white text-black" :"bg-slate-600 text-white"}`}
          >
            no
          </button>
        </div>
        <div className="flex items-center mb-6">
          <div className="">
            <p className="text-lg font-semibold">Regular price</p>
            <div className="flex w-full justify-center items-center space-x-6">
              <input
                type="number"
                id="regularPrice"
                min="50"
                max="400000000"
                required
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
              
              value={regularPrice}
              onChange={(e)=>{setregularPrice(e.target.value)}}
              />
              {propertytype === "rent" && (
                <div className="">
                  <p className="text-md w-full whitespace-nowrap">$ / Month</p>
                </div>
              )}
            
            </div>
          </div>
        </div>



        {offer && (
          <div className="flex items-center mb-6">
            <div className="">
              <p className="text-lg font-semibold">Discounted price</p>
              <div className="flex w-full justify-center items-center space-x-6">
                <input
                  type="number"
                  id="discountedPrice"
                  value={discountedPrice}
                  onChange={(e)=>{setdiscountedPrice(e.target.value)}}
                  min="50"
                  max="400000000"
                  required={offer}
                  className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
                />
                {propertytype === "rent" && (
                  <div className="">
                    <p className="text-md w-full whitespace-nowrap">
                      $ / Month
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
          
     
        <div className="mb-6">
          <p className="text-lg font-semibold">Images</p>
          <p className="text-gray-600">
            The first image will be the cover (max 6)
          </p>
          <input
            type="file"
            id="images"
            onChange={onChange}
            accept=".jpg,.png,.jpeg"
            multiple
            required
            className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
          />
        </div>
        <button
          type="submit"
          className="mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Create Listing
        </button>
      </form>
    </main>
    
    </> );
}

export default CreateListing;