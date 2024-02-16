import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import front1 from "../../public/front1.jpg";
import { faArrowDown, faArrowDownLong, faArrowRightLong, faDownLong, faDownload } from "@fortawesome/free-solid-svg-icons";

const Body = () => {
    return(
        <div className="relative w-full h-screen bg-cover" style={{backgroundImage: `url(${front1})`}}>
            {/* Gradient overlay */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tl from-gray-800 to-transparent"></div>   
            <div className="absolute sm:top-1/2 top-1/3 transform -translate-y-1/2 mx-10 bg-white bg-opacity-50 p-4 rounded-2xl">
               <div className="card card-side bg-base-100 shadow-2xl ">
                 <div className="card-body">
                   <h2 className="card-title text-2xl">NameChecks</h2>
                   <p>สามารถดูรายระเอียดได้ที่นี่</p>
                   <div className='ml-3 grid gap-y-2'>
                      <li>ตารางการเช็คชื่อในแต่ละวัน</li>
                      <li>นักเรียนที่ขาด, ลา, มาสาย ทั้งหมด</li>
                      <li>กรรมการนักเรียนที่รับผิดชอบการเช็คชื่อ</li>
                   </div>
                   <div className="card-actions justify-end">
                     <a href="/gradeselect" className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-2xl px-3 py-2 rounded-xl"><FontAwesomeIcon className="animate-bounce text-gray-200" icon={faDownLong} /> <span className=" font-bold text-gray-200">View here</span></a>
                   </div>
                 </div>
               </div>
            </div>
        </div>
    )
}

export default Body