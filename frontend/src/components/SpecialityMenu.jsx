import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div id="speciality" className="py-16 px-4 md:px-10 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-3">Browse by Medical Specialties</h2>
        <p className="text-black mb-8 max-w-2xl mx-auto">
          Connect with specialists across various medical fields for personalized care.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {specialityData.map((item, index) => (
            <Link
              to={`/doctors/${item.speciality}`}
              onClick={() => scrollTo(0, 0)}
              className="group bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-blue-200"
              key={index}
            >
              <div className="bg-blue-50 p-3 rounded-lg w-14 h-14 mx-auto mb-3 group-hover:bg-blue-100 transition-colors">
                <img className="w-full h-full object-contain" src={item.image} alt={item.speciality} />
              </div>
              <p className="text-sm font-medium text-black group-hover:text-blue-600">{item.speciality}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialityMenu;