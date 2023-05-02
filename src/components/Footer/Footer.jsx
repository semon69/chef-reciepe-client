import React from 'react';
import { FaBeer, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className=" bg-black">
                <div className='footer p-10 w-full max-w-7xl mx-auto text-white'>
                    <div>
                        <span className="footer-title text-3xl">French Chef's</span>

                    </div>
                    <div>
                        <span className="footer-title">Contact With Us</span>
                        <div className='flex justify-between gap-4'>
                            <a className="link link-hover"><FaFacebook></FaFacebook></a>
                            <a className="link link-hover"><FaTwitter></FaTwitter></a>
                            <a className="link link-hover"><FaInstagram></FaInstagram></a>
                        </div>
                    </div>
                    <div>
                        <span className="footer-title">© 2023. All Rights Reserved to French Chef's.</span>

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;