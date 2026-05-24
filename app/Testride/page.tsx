import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"   
import { MapPin } from "lucide-react";


export default function Testride() {
  return (
    <div className="bg-black py-16 min-h-screen text-white p-4 md:p-16 select-none">
      
   
        <div className="text-center mb-16">
            <h1 className="text-white text-4xl md:text-[54px] font-extrabold tracking-tight leading-none">
            Book a{' '}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-[#00c853] via-[#00a86b] to-[#005f60]">
                Test Ride
            </span>
            </h1>
            <p className="text-zinc-400 text-base md:text-xl mt-5 font-normal tracking-wide max-w-2xl mx-auto">
            Feel the thrill of electric. Book a free test ride at a dealership near you.
            </p>
        </div>

  
        <div className="w-full max-w-4xl mx-auto bg-[#0c0c0c] border border-zinc-900 rounded-3xl p-6 md:p-10 shadow-2xl">
            <form className="space-y-6">
            
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label className="text-zinc-200 text-base font-semibold">Full Name</Label>
                        <Input 
                            type="text"
                            placeholder="Your full name" 
                            className="bg-[#121212] border-zinc-800 rounded-xl h-12 text-zinc-300 placeholder:text-white 
                            focus-visible:ring-1 focus-visible:ring-green-500 focus-visible:border-green-500 transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label className="text-zinc-200 text-base font-semibold">Phone Number</Label>
                        <Input 
                            type="tel"
                            placeholder="+977 98xxxxxxxx" 
                            className="bg-[#121212] border-zinc-800 rounded-xl h-12 text-zinc-300 placeholder:text-white 
                            focus-visible:ring-1 focus-visible:ring-green-500 focus-visible:border-green-500 transition-all"
                        />
                    </div>
                </div>

            
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label className="text-zinc-200 text-base font-semibold">Location</Label>
                        <Select>
                            <SelectTrigger className="w-full h-12! bg-[#121212] border-zinc-800 rounded-xl text-zinc-300 
                                focus:ring-1 focus:ring-green-500 transition-all text-left">
                                <SelectValue placeholder="Location" />
                            </SelectTrigger>

                            <SelectContent 
                                position="popper" 
                                sideOffset={-1} 
                                className="bg-[#121212] border-zinc-800 text-zinc-300 rounded-xl"
                                >
                                <SelectItem value="kathmandu" className="cursor-pointer hover:bg-zinc-700">Kathmandu</SelectItem>
                                <SelectItem value="lalitpur" className="cursor-pointer hover:bg-zinc-700">Lalitpur</SelectItem>
                                <SelectItem value="bhaktapur" className="cursor-pointer hover:bg-zinc-700">Bhaktapur</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    
                    <div className="space-y-2">
                        <Label className="text-zinc-200 text-base font-semibold">Prefered Model</Label>
                        <Select>
                            <SelectTrigger className="w-full h-12! bg-[#121212] border-zinc-800 rounded-xl
                                text-zinc-300 focus:ring-1 focus:ring-green-500 transition-all text-left">
                                <SelectValue placeholder="Preferred Model" />
                            </SelectTrigger>

                            <SelectContent 
                                position="popper" 
                                sideOffset={-1} 
                                className="bg-[#121212] border-zinc-800 text-zinc-300 rounded-xl"
                                >
                                <SelectItem value="ThunderX" className="cursor-pointer hover:bg-zinc-700">Thunder X</SelectItem>
                                <SelectItem value="Volt Cruiser" className="cursor-pointer hover:bg-zinc-700">Volt Cruiser</SelectItem>
                                <SelectItem value="EcoRide" className="cursor-pointer hover:bg-zinc-700">Eco Ride</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                
                <div className="space-y-2">
                    <Label className="text-zinc-200 text-base font-semibold">Prefered Date</Label>
                    <Input 
                    type="date"
                    className="bg-[#121212] border-zinc-800 rounded-xl h-12 text-zinc-300 placeholder:text-zinc-600 
                    focus-visible:ring-1 focus-visible:ring-green-500 focus-visible:border-green-500 transition-all w-full 
                    scheme-dark"
                    />
                </div>

            
                <Button 
                    type="button" 
                    className="w-full bg-[#00c853] hover:bg-[#00a844] text-black cursor-pointer font-semibold text-lg h-14 rounded-xl transition-all duration-300 mt-4 active:scale-[0.99]"
                >
                    Confirm Test Ride
                </Button>

            </form>
        </div>





        
        <div className="mx-auto mt-16 px-6 md:px-10 py-20 bg-black">
  
            <div className="text-center mb-16">
                <h1 className="text-white text-3xl font-semibold">
                Dealership{" "}
                <span className="bg-clip-text text-transparent bg-linear-to-r from-[#00c853] via-[#00a86b] to-[#005f60]">
                    Locations
                </span>
                </h1>
            </div>


            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-[#111111] border border-zinc-700 rounded-2xl h-15 px-6 flex items-center gap-4">
                    <MapPin className="text-[#00c853] w-6 h-6" />
                    <h3 className="text-white text-2xl">
                        Kathmandu
                    </h3>
                </div>

   
                <div className="bg-[#111111] border border-zinc-700 rounded-2xl h-15 px-6 flex items-center gap-4">
                    <MapPin className="text-[#00c853] w-6 h-6" />
                    <h3 className="text-white text-2xl">
                        Lalitpur
                    </h3>
                </div>

   
                <div className="bg-[#111111] border border-zinc-700 rounded-2xl h-15 px-6 flex items-center gap-4">
                    <MapPin className="text-[#00c853] w-6 h-6" />
                    <h3 className="text-white text-2xl">
                        Bhaktapur
                    </h3>
                </div>

   
                <div className="bg-[#111111] border border-zinc-700 rounded-2xl h-15 px-6 flex items-center gap-4">
                    <MapPin className="text-[#00c853] w-6 h-6" />
                    <h3 className="text-white text-2xl">
                        Pokhara
                    </h3>
                </div>

   
                <div className="bg-[#111111] border border-zinc-700 rounded-2xl h-15 px-6 flex items-center gap-4">
                    <MapPin className="text-[#00c853] w-6 h-6" />
                    <h3 className="text-white text-2xl">
                        Chitwan
                    </h3>
                </div>

   
                <div className="bg-[#111111] border border-zinc-700 rounded-2xl h-15 px-6 flex items-center gap-4">
                    <MapPin className="text-[#00c853] w-6 h-6" />
                    <h3 className="text-white text-2xl">
                        Butwal
                    </h3>
                </div>

            </div>
        </div>
            





    </div>
  )
}