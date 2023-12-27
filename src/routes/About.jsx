import React from "react";
import Navbar from "../components/Navbar";
import andre from '../assets/andre.jpg'
import lito from '../assets/lito.jpg'
import charles from '../assets/charles.jpg'
import kath from '../assets/kath.jpg'
import althea from '../assets/althea.jpg'
import jose from '../assets/jose.jpg'
import russel from '../assets/russel.jpg'
import joan from '../assets/joan.jpg'
import sigue from '../assets/sigue.jpg'
import Footer from "../components/Footer";


function About(){
    return(
        <>
        <Navbar/>
        <div className="pt-32 font-bold text-center text-red-500">
        <p className="text-6xl">ABOUT</p>
              
               <p className="text-center text-xl mt-14 text-gray-700 mx-8">
                This website represents the culmination of our coursework in EMATH 213. It serves as <br/>
                 the final project. Specifically, the platform excels in the <span className="text-red-500">Classification of Solutions</span> to<br/>
                 <span className="text-red-500">Growth and Decay</span> problems and provides solutions for <span className="text-red-500">Newton's Law of Cooling/Heating</span> <br/>
                 differential equations. We invite you to explore this comprehensive web application,<br/>
                 a testament to our understanding of differential equations. <br/>
                 </p>
                 <p className="text-6xl pt-24">MEMBERS</p>

                 <div className="grid grid-cols-1 gap-10 justify-center items-center mt-16 mb-10 lg:grid lg:grid-cols-4 mx-20 md:grid md:grid-cols-2">
                     <div className="flex flex-col justify-center items-center gap-5 bg-red-500 py-5 rounded-lg px-5">
                        <img className="w-[210px] rounded-md" src={andre} alt="" srcset="" />
                        <p className="text-xl text-white">Andre Jarl Aniana</p>
                     </div>
                     <div className="flex flex-col justify-center items-center gap-5 bg-red-500 py-5 rounded-lg px-5">
                        <img className="w-[210px] rounded-md" src={lito} alt="" srcset="" />
                        <p className="text-xl text-white">Angelito Valderama</p>
                     </div>
                     <div className="flex flex-col justify-center items-center gap-5 bg-red-500 py-5 rounded-lg px-5">
                        <img className="w-[200px] rounded-md" src={charles} alt="" srcset="" />
                        <p className="text-xl text-white">Charles Zoilo A. Yana</p>
                     </div>
                     <div className="flex flex-col justify-center items-center gap-5 bg-red-500 py-5 rounded-lg px-5">
                        <img className="w-[190px] rounded-md" src={kath} alt="" srcset="" />
                        <p className="text-xl text-white">Katlyn Pearl C. Ibasitas</p>
                     </div>
                     <div className="flex flex-col justify-center items-center gap-5 bg-red-500 py-5 rounded-lg px-5">
                        <img className="w-[210px] rounded-md" src={althea} alt="" srcset="" />
                        <p className="text-xl text-white">Althea Lee B. Arcelo</p>
                     </div>
                     <div className="flex flex-col justify-center items-center gap-5 bg-red-500 py-5 rounded-lg px-5">
                        <img className="w-[190px] rounded-md" src={jose} alt="" srcset="" />
                        <p className="text-xl text-white">Jose Adrian Ace Y. Bascos</p>
                     </div>
                     <div className="flex flex-col justify-center items-center gap-5 bg-red-500 py-5 rounded-lg px-5">
                        <img className="w-[210px] rounded-md " src={joan} alt="" srcset="" />
                        <p className="text-xl text-white">Joan Mangas Perez</p>
                     </div>
                     <div className="flex flex-col justify-center items-center gap-5 bg-red-500 py-5 rounded-lg px-5">
                        <img className="w-[210px] rounded-md h-[270px]" src={russel} alt="" srcset="" />
                        <p className="text-xl text-white">Christian Russell</p>
                     </div>
                    
                 </div>

                 <p className="text-5xl pt-10 lg:text-6xl">INSTRUCTOR</p>

                 <div className="flex justify-center items-center flex-col py-10">
                
                 <div className="flex flex-col justify-center items-center gap-5 bg-red-500 py-5 rounded-lg px-5">
                        <img className=" rounded-md h-[280px]" src={sigue} alt="" srcset="" />
                        <p className="text-xl text-white">Engr.  Ramel H. Sigue</p>
                     </div>
                 </div>

        </div>
        <Footer/>
        </>
    )
}

export default About