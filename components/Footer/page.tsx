import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-8 border-t border-white/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
            <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-2xl font-bold">
                Gantabya Mobility
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Leading Nepal EV revolution since 2019. Premium electric motorcycles for the future of mobility.
            </p>
            </div>

        
            <div className="ml-20">
            <h3 className="font-bold text-lg mb-6">Explore</h3>
            <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-green-500 transition-colors">Our Bikes</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">Technology</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">Book Test Ride</a></li>
            </ul>
            </div>

            <div className="ml-10">
            <h3 className="font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-green-500 transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">Warranty</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">Services Centers</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">Contact Us</a></li>
            </ul>
            </div>

        
            <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3">
                <MapPin className="text-green-500" size={20} /> Kathmandu, Nepal
                </li>
                <li className="flex items-center gap-3">
                <Phone className="text-green-500" size={20} /> +977 1-XXXXXXX
                </li>
                <li className="flex items-center gap-3">
                <Mail className="text-green-500" size={20} /> info@gantabya.com
                </li>
            </ul>
            </div>
        </div>

     
        <div className="max-w-7xl mx-auto mt-10 border-t border-white/40 text-gray-500 flex justify-center items-center py-6">
            <span>© 2026 Gantabya Mobility. All Rights Reserved.</span>
        </div>
    </footer>
  );
}











// import { MapPin, Phone, Mail } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-black text-white py-16 px-8">
//       {/* Main container with max width */}
//       <div className="max-w-7xl mx-auto">
        
//         {/* UPPER BORDER: Now inside the container, matching the lower one */}
//         <div className="border-t border-white/20 pt-12">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//             {/* Brand Section */}
//             <div className="flex flex-col gap-4">
//               <div className="flex items-center gap-2 text-2xl font-bold">
//                 Gantabya Mobility
//               </div>
//               <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
//                 Leading Nepal EV revolution since 2019. Premium electric motorcycles for the future of
//                 mobility.
//               </p>
//             </div>

//             {/* Explore Section */}
//             <div className="md:ml-20">
//               <h3 className="font-bold text-lg mb-6">Explore</h3>
//               <ul className="space-y-4 text-gray-400">
//                 <li>
//                   <a href="#" className="hover:text-green-500 transition-colors">
//                     Our Bikes
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-green-500 transition-colors">
//                     Technology
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-green-500 transition-colors">
//                     About Us
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-green-500 transition-colors">
//                     Book Test Ride
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Support Section */}
//             <div className="md:ml-10">
//               <h3 className="font-bold text-lg mb-6">Support</h3>
//               <ul className="space-y-4 text-gray-400">
//                 <li>
//                   <a href="#" className="hover:text-green-500 transition-colors">
//                     FAQs
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-green-500 transition-colors">
//                     Warranty
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-green-500 transition-colors">
//                     Service Centers
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-green-500 transition-colors">
//                     Contact Us
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Contact Section */}
//             <div>
//               <h3 className="font-bold text-lg mb-6">Contact</h3>
//               <ul className="space-y-4 text-gray-400">
//                 <li className="flex items-center gap-3">
//                   <MapPin className="text-green-500 shrink-0" size={20} /> Kathmandu, Nepal
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <Phone className="text-green-500 shrink-0" size={20} /> +977 1-XXXXXXX
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <Mail className="text-green-500 shrink-0" size={20} /> info@gantabya.com
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* LOWER BORDER: Unchanged, inside the container */}
//         <div className="mt-12 border-t border-white/20">
//           <div className="flex justify-center items-center py-6">
//             <span className="text-gray-500 text-sm">© 2026 Gantabya Mobility. All Rights Reserved.</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }