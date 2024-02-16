import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import front1 from "../../public/front1.jpg";
import "../../src/index.css"
import { faArrowDown, faArrowDownLong, faArrowRightLong, faDownLong, faDownload, faTableList, faWindowRestore } from "@fortawesome/free-solid-svg-icons";

const Gradeselect = () => {
    const [content, setContent] = useState('b'); // Initial state is 'b'

    // Function to handle button click
    const handleButtonClick = (value) => {
        setContent(value); // Update state based on button click
    };

    useEffect(() => {
        const handleResize = () => {
            // Check if screen width is large (lg)
            if (window.innerWidth >= 1024) {
                setContent('a'); // Switch to content 'b' in large responsive layout
            } else {
                setContent('b'); // Otherwise, stay on content 'a'
            }
        };

        // Listen for window resize event
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="relative w-full h-screen bg-cover" style={{backgroundImage: `url(${front1})`}}>
            {/* Layer 2 white background */}
            <div className="absolute rounded-2xl top-5 left-5 right-5 bottom-5 bg-white bg-opacity-90">
                
                <div className="grid">
                    {content === 'a' && (
                        <>
                            <div className='absolute top-5 right-8 text-2xl gap-x-5 flex'>
                                <button onClick={() => handleButtonClick('a')}><FontAwesomeIcon className="text-blue-500"       icon={faWindowRestore}/></button>
                                <button onClick={() => handleButtonClick('b')}><FontAwesomeIcon className='hover:text-blue-300' icon={faTableList}/></button>
                            </div>
                        </>
                    )}
                    {content === 'a' && <div>
                        
                        <div className='grid grid-cols-3 mt-16 m-5'>
                            <div>
                                <div className='m-3 rounded-2xl'>
                                    <div className="card w-full bg-base-100 shadow-xl">
                                       <div className="card-body">
                                         <h2 className="card-title">โรงเรียน</h2>
                                         <p>ข้อมูลการเช็คชื่อของทุกระดับชั้นในโรงเรียน</p>
                                         <div className="card-actions justify-end">
                                         <a href="" className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-2xl px-3 py-2 rounded-xl"><FontAwesomeIcon className="animate-bounce text-gray-200" icon={faDownLong} /> <span className=" font-bold text-gray-200">View here</span></a>
                                         </div>
                                       </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='pb-5 m-3 rounded-2xl'>
                                <div className='m-3 rounded-2xl'>
                                    <div className="card w-full bg-base-100 shadow-xl">
                                       <div className="card-body">
                                         <h2 className="card-title">ชั้นมัธยมศึกษาปีที่ 1</h2>
                                         <p>ข้อมูลการเช็คชื่อของะดับชั้นมัธยมศึกษาปีที่ 1</p>
                                         <div className="card-actions justify-end">
                                         <a href="" className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-2xl px-3 py-2 rounded-xl"><FontAwesomeIcon className="animate-bounce text-gray-200" icon={faDownLong} /> <span className=" font-bold text-gray-200">View here</span></a>
                                         </div>
                                       </div>
                                    </div>
                                </div>
                                
                                </div>

                                <div className='pb-5 m-3 rounded-2xl'>
                                <div className='m-3 rounded-2xl'>
                                    <div className="card w-full bg-base-100 shadow-xl">
                                       <div className="card-body">
                                       <h2 className="card-title">ชั้นมัธยมศึกษาปีที่ 2</h2>
                                         <p>ข้อมูลการเช็คชื่อของะดับชั้นมัธยมศึกษาปีที่ 2</p>
                                         <div className="card-actions justify-end">
                                         <a href="" className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-2xl px-3 py-2 rounded-xl"><FontAwesomeIcon className="animate-bounce text-gray-200" icon={faDownLong} /> <span className=" font-bold text-gray-200">View here</span></a>
                                         </div>
                                       </div>
                                    </div>
                                </div>

                                </div>
                                <div className='pb-5 m-3 rounded-2xl'><div className='m-3 rounded-2xl'>
                                    <div className="card w-full bg-base-100 shadow-xl">
                                       <div className="card-body">
                                       <h2 className="card-title">ชั้นมัธยมศึกษาปีที่ 3</h2>
                                         <p>ข้อมูลการเช็คชื่อของะดับชั้นมัธยมศึกษาปีที่ 3</p>
                                         <div className="card-actions justify-end">
                                         <a href="" className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-2xl px-3 py-2 rounded-xl"><FontAwesomeIcon className="animate-bounce text-gray-200" icon={faDownLong} /> <span className=" font-bold text-gray-200">View here</span></a>
                                         </div>
                                       </div>
                                    </div>
                                </div>
                                
                                </div>
                            </div>

                            <div>
                                <div className='pb-5 m-3 rounded-2xl'><div className='m-3 rounded-2xl'>
                                    <div className="card w-full bg-base-100 shadow-xl">
                                       <div className="card-body">
                                         <h2 className="card-title">ชั้นมัธยมศึกษาปีที่ 4</h2>
                                         <p>ข้อมูลการเช็คชื่อของะดับชั้นมัธยมศึกษาปีที่ 4</p>
                                         <div className="card-actions justify-end">
                                         <a href="" className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-2xl px-3 py-2 rounded-xl"><FontAwesomeIcon className="animate-bounce text-gray-200" icon={faDownLong} /> <span className=" font-bold text-gray-200">View here</span></a>
                                         </div>
                                       </div>
                                    </div>
                                </div>
                                
                                </div>
                                <div className='pb-5 m-3 rounded-2xl'><div className='m-3 rounded-2xl'>
                                    <div className="card w-full bg-base-100 shadow-xl">
                                       <div className="card-body">
                                         <h2 className="card-title">ชั้นมัธยมศึกษาปีที่ 5</h2>
                                         <p>ข้อมูลการเช็คชื่อของะดับชั้นมัธยมศึกษาปีที่ 5</p>
                                         <div className="card-actions justify-end">
                                         <a href="" className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-2xl px-3 py-2 rounded-xl"><FontAwesomeIcon className="animate-bounce text-gray-200" icon={faDownLong} /> <span className=" font-bold text-gray-200">View here</span></a>
                                         </div>
                                       </div>
                                    </div>
                                </div>
                                
                                </div>
                                <div className='pb-5 m-3 rounded-2xl'><div className='m-3 rounded-2xl'>
                                    <div className="card w-full bg-base-100 shadow-xl">
                                       <div className="card-body">
                                         <h2 className="card-title">ชั้นมัธยมศึกษาปีที่ 6</h2>
                                         <p>ข้อมูลการเช็คชื่อของะดับชั้นมัธยมศึกษาปีที่ 6</p>
                                         <div className="card-actions justify-end">
                                         <a href="" className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-2xl px-3 py-2 rounded-xl"><FontAwesomeIcon className="animate-bounce text-gray-200" icon={faDownLong} /> <span className=" font-bold text-gray-200">View here</span></a>
                                         </div>
                                       </div>
                                    </div>
                                </div>
                                
                                </div>
                            </div>
                        </div>
                        
                        </div>}
                    {content === 'b' && <div>
                        <div className='absolute top-5 right-8 text-2xl gap-x-5 flex'>
                                <button onClick={() => handleButtonClick('a')}><FontAwesomeIcon className={`${window.innerWidth >= 1024 ? 'hidden lg:block' : 'hidden'} hover:text-blue-300`} icon={faWindowRestore}/></button>
                                <button onClick={() => handleButtonClick('b')}><FontAwesomeIcon className={`${window.innerWidth >= 1024 ? 'hidden lg:block' : 'hidden'} text-blue-500`} icon={faTableList}/></button>
                        </div>

                    <div className='w-4/5 grid bg-gray-200 shadow-2xl rounded-2xl mx-auto my-12'>
                        <div className="overflow-x-auto custom-height">
                            <table className="table table-pin-rows">
                            <thead>
                              <tr>
                                <th>โรงเรียน</th>
                              </tr>
                            </thead>
                            <tbody>
                              <div className='my-5 rounded-2xl'>
                                <div className='m-3 rounded-2xl'>
                                    <div className="card w-full bg-base-100 shadow-xl">
                                       <div className="card-body">
                                         <h2 className="card-title">โรงเรียน</h2>
                                         <p>ข้อมูลการเช็คชื่อของทุกระดับชั้นในโรงเรียน</p>
                                         <div className="card-actions justify-end">
                                            <a href="" className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-2xl px-3 py-2 rounded-xl"><FontAwesomeIcon className="animate-bounce text-gray-200" icon={faDownLong} /> <span className=" font-bold text-gray-200">View here</span></a>
                                         </div>
                                       </div>
                                    </div>
                                </div>
                              </div>
                            </tbody>

                            <thead>
                              <tr>
                                <th>ชั้นมัธยมศึกษาปีที่ 1</th>
                              </tr>
                            </thead>
                            <tbody>
                              <div className='my-5 rounded-2xl'>
                                <div className='m-3 rounded-2xl'>
                                    <div className="card w-full bg-base-100 shadow-xl">
                                       <div className="card-body">
                                         <h2 className="card-title">ชั้นมัธยมศึกษาปีที่ 1</h2>
                                         <p>ข้อมูลการเช็คชื่อของทุกระดับชั้นในโรงเรียน 1</p>
                                         <div className="card-actions justify-end">
                                            <a href="" className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-2xl px-3 py-2 rounded-xl"><FontAwesomeIcon className="animate-bounce text-gray-200" icon={faDownLong} /> <span className=" font-bold text-gray-200">View here</span></a>
                                         </div>
                                       </div>
                                    </div>
                                </div>
                              </div>
                            </tbody>
                            
                            <thead>
                              <tr>
                                <th>ชั้นมัธยมศึกษาปีที่ 2</th>
                              </tr>
                            </thead>
                            <tbody>
                              <div className='my-5 rounded-2xl'>
                                <div className='m-3 rounded-2xl'>
                                    <div className="card w-full bg-base-100 shadow-xl">
                                       <div className="card-body">
                                         <h2 className="card-title">ชั้นมัธยมศึกษาปีที่ 2</h2>
                                         <p>ข้อมูลการเช็คชื่อของะดับชั้นมัธยมศึกษาปีที่ 2</p>
                                         <div className="card-actions justify-end">
                                            <a href="" className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-2xl px-3 py-2 rounded-xl"><FontAwesomeIcon className="animate-bounce text-gray-200" icon={faDownLong} /> <span className=" font-bold text-gray-200">View here</span></a>
                                         </div>
                                       </div>
                                    </div>
                                </div>
                              </div>
                            </tbody>

                            <thead>
                              <tr>
                                <th>ชั้นมัธยมศึกษาปีที่ 3</th>
                              </tr>
                            </thead>
                            <tbody>
                              <div className='my-5 rounded-2xl'>
                                <div className='m-3 rounded-2xl'>
                                    <div className="card w-full bg-base-100 shadow-xl">
                                       <div className="card-body">
                                         <h2 className="card-title">ชั้นมัธยมศึกษาปีที่ 3</h2>
                                         <p>ข้อมูลการเช็คชื่อของะดับชั้นมัธยมศึกษาปีที่ 3</p>
                                         <div className="card-actions justify-end">
                                            <a href="" className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-2xl px-3 py-2 rounded-xl"><FontAwesomeIcon className="animate-bounce text-gray-200" icon={faDownLong} /> <span className=" font-bold text-gray-200">View here</span></a>
                                         </div>
                                       </div>
                                    </div>
                                </div>
                              </div>
                            </tbody>

                            <thead>
                              <tr>
                                <th>ชั้นมัธยมศึกษาปีที่ 4</th>
                              </tr>
                            </thead>
                            <tbody>
                              <div className='my-5 rounded-2xl'>
                                <div className='m-3 rounded-2xl'>
                                    <div className="card w-full bg-base-100 shadow-xl">
                                       <div className="card-body">
                                         <h2 className="card-title">ชั้นมัธยมศึกษาปีที่ 4</h2>
                                         <p>ข้อมูลการเช็คชื่อของะดับชั้นมัธยมศึกษาปีที่ 4</p>
                                         <div className="card-actions justify-end">
                                            <a href="" className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-2xl px-3 py-2 rounded-xl"><FontAwesomeIcon className="animate-bounce text-gray-200" icon={faDownLong} /> <span className=" font-bold text-gray-200">View here</span></a>
                                         </div>
                                       </div>
                                    </div>
                                </div>
                              </div>
                            </tbody>

                            <thead>
                              <tr>
                                <th>ชั้นมัธยมศึกษาปีที่ 5</th>
                              </tr>
                            </thead>
                            <tbody>
                              <div className='my-5 rounded-2xl'>
                                <div className='m-3 rounded-2xl'>
                                    <div className="card w-full bg-base-100 shadow-xl">
                                       <div className="card-body">
                                         <h2 className="card-title">ชั้นมัธยมศึกษาปีที่ 5</h2>
                                         <p>ข้อมูลการเช็คชื่อของะดับชั้นมัธยมศึกษาปีที่ 5</p>
                                         <div className="card-actions justify-end">
                                            <a href="" className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-2xl px-3 py-2 rounded-xl"><FontAwesomeIcon className="animate-bounce text-gray-200" icon={faDownLong} /> <span className=" font-bold text-gray-200">View here</span></a>
                                         </div>
                                       </div>
                                    </div>
                                </div>
                              </div>
                            </tbody>

                            <thead>
                              <tr>
                                <th>ชั้นมัธยมศึกษาปีที่ 6</th>
                              </tr>
                            </thead>
                            <tbody>
                              <div className='my-5 rounded-2xl'>
                                <div className='m-3 rounded-2xl'>
                                    <div className="card w-full bg-base-100 shadow-xl">
                                       <div className="card-body">
                                         <h2 className="card-title">ชั้นมัธยมศึกษาปีที่ 6</h2>
                                         <p>ข้อมูลการเช็คชื่อของะดับชั้นมัธยมศึกษาปีที่ 6</p>
                                         <div className="card-actions justify-end">
                                            <a href="" className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-2xl px-3 py-2 rounded-xl"><FontAwesomeIcon className="animate-bounce text-gray-200" icon={faDownLong} /> <span className=" font-bold text-gray-200">View here</span></a>
                                         </div>
                                       </div>
                                    </div>
                                </div>
                              </div>
                            </tbody>

                          </table>
                          </div>
                    </div>
                    </div>}
                    
                </div>
            </div>
        </div>
    );
};

export default Gradeselect;
