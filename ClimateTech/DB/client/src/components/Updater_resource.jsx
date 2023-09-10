import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Updater_resource=({data,update})=>{
    const navigate=useNavigate();

    let unique_method = [];
    let unique_link = [];
    let unique_component_type = [];
    data.map((val)=>{unique_method.push(val.method),unique_link.push(val.link),unique_component_type.push(val.component_type)})
    unique_method=unique_method.filter((item,index) => unique_method.indexOf(item) === index);
    unique_link=unique_link.filter((item,index) => unique_link.indexOf(item) === index);
    unique_component_type=unique_component_type.filter((item,index) => unique_component_type.indexOf(item) === index);

    const sId=JSON.parse(sessionStorage.getItem('update_resource'))["id"];
    const sMethod=JSON.parse(sessionStorage.getItem('update_resource'))["method"];
    const sLink=JSON.parse(sessionStorage.getItem('update_resource'))["link"];
    const sComponent_type=JSON.parse(sessionStorage.getItem('update_resource'))["component_type"];
    


    const [id,setId]=useState(sId);
    const [method,setMethod]=useState(sMethod);
    const [link,setLink]=useState(sLink);
    const [component_type,setComponentType]=useState(sComponent_type);

    const HandleSubmission=(e)=>{
        e.preventDefault()
        console.log("Submitted");
        update({method,link,component_type},id);
        
        setId("");
        setMethod("");
        setLink("");
        setComponentType("");
        

        navigate("/update_resource");
    }


    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
            <h1 className="text-2xl font-semibold mb-6 text-center">Resource Table</h1>
            <form onSubmit={HandleSubmission}>
                <div className="mb-4">
                    <label htmlFor="ComponentType" className="block text-sm font-medium text-gray-700">
                        ComponentType
                    </label>
                    {/* <input
                        type="text"
                        id="ComponentType"
                        placeholder="Enter ComponentType"
                        value={componentType}
                        onChange={(e) => setComponentType(e.target.value)}
                        className="w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                        required
                    /> */}
                    <input 
                    id="compt"
                    type="text" 
                    list="componentType" 
                    value={component_type}
                    placeholder="Enter Component Type" 
                    className="w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                    onChange={(e) => setComponentType(e.target.value)}
                    required/>
                    <datalist id="componentType" >

                    {data.map((compt)=>(<option value={compt.component_type} key={compt.component_type} >{compt.component_type}</option>))}

                    </datalist> 
                </div>
                <div className="mb-4">
                    <label htmlFor="component" className="block text-sm font-medium text-gray-700">
                        Method
                    </label>
                    <input
                        type="text"
                        id="component"
                        placeholder="Enter Method"
                        value={method}
                        onChange={(e) => setMethod(e.target.value)}
                        className="w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                        required
                    />
                    
                </div>
                <div className="mb-4">
                    <label htmlFor="componentType" className="block text-sm font-medium text-gray-700">
                        Link
                    </label>
                    <input
                        type="text"
                        id="componentType"
                        placeholder="Enter Link"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        className="w-full border rounded py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                        required
                    />
                </div>
                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    </div>
      );
}
export default Updater_resource