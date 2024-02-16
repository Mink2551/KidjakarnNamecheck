import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 px-4">
            <div className="container mx-auto flex flex-col  justify-between items-center">
                <div className="flex flex-col  items-center">
                    <h3 className="text-lg font-bold">COOLKID SATIT</h3>
                    <ul className="flex flex-wrap gap-4 mt-4 ">
                        <li><a href="/" className="hover:text-gray-400">Home</a></li>
                        <li><a href="/gradeselect" className="hover:text-gray-400">Selector</a></li>
                    </ul>
                </div>
                <div className="flex gap-4 mt-4 ">
                    <a href="#" className="hover:text-gray-400"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                    <a href="#" className="hover:text-gray-400"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                    <a href="#" className="hover:text-gray-400"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                </div>
            </div>
            <div className="text-center mt-4">
                <p>สามารถติดตามผลงานของเรากรรมการนักเรียนได้ที่ช่องทางต่างๆ</p>
            </div>
        </footer>
    );
}

export default Footer;
