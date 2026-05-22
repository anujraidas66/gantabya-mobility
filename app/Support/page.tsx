import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faCircleNodes, faUsers } from "@fortawesome/free-solid-svg-icons";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Support() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8 md:p-16">
      
        <div className="text-center mb-16">
            <h1 className="text-4xl text-green-500 md:text-5xl font-bold mb-12">
            Suppo
            <span className="bg-clip-text text-transparent bg-linear-to-r from-[#00e676] to-[#0055ff]">
                rt
            </span>
            </h1>
        </div>



        <div className="flex gap-25">

            <div>
                <Accordion type="single" collapsible className="w-130">
                
                    <AccordionItem 
                        value="item-1" 
                        className="bg-[#0c0c0c] border border-zinc-900 rounded-2xl px-6 mb-4 overflow-hidden data-[state=open]:pb-2 transition-all duration-200"
                        >
                        <AccordionTrigger className="text-zinc-400 text-lg font-normal hover:no-underline h-14 flex items-center justify-between w-full py-0 group">
                            <span>
                                How far can Gantabya bikes go on a single charge?
                            </span>
                        </AccordionTrigger>
                        
                        <AccordionContent className="text-white  text-lg leading-6.5 pb-4 pt-1 transition-all">
                        Our bikes range 300km on a full charge, depending on riding conditions and terrain.
                        </AccordionContent>

                    </AccordionItem>

                </Accordion>
            </div>



            <div>
                <Accordion type="single" collapsible className="w-130">
                
                    <AccordionItem 
                        value="item-1" 
                        className="bg-[#0c0c0c] border border-zinc-900 rounded-2xl px-6 mb-4 overflow-hidden data-[state=open]:pb-2 transition-all duration-200"
                        >
                        <AccordionTrigger className="text-zinc-400 text-lg font-normal hover:no-underline h-14 flex items-center justify-between w-full py-0 group">
                            <span>
                                How long does it take to charge?
                            </span>
                        </AccordionTrigger>
                        
                        <AccordionContent className="text-white  text-lg leading-6.5 pb-4 pt-1 transition-all">
                        A full charge takes 3 hours on home. Fast charging to 80% is available in under 40 minutes at supported stations.
                        </AccordionContent>

                    </AccordionItem>

                </Accordion>
            </div>

        </div>



        <div className="flex gap-25">

            <div>
                <Accordion type="single" collapsible className="w-130">
                
                    <AccordionItem 
                        value="item-1" 
                        className="bg-[#0c0c0c] border border-zinc-900 rounded-2xl px-6 mb-4 overflow-hidden data-[state=open]:pb-2 transition-all duration-200"
                        >
                        <AccordionTrigger className="text-zinc-400 text-lg font-normal hover:no-underline h-14 flex items-center justify-between w-full py-0 group">
                            <span>
                                What warranty do you offer?
                            </span>
                        </AccordionTrigger>
                        
                        <AccordionContent className="text-white  text-lg leading-6.5 pb-4 pt-1 transition-all">
                       All Gantabya motorcycles come with a 5 year warranty on the battery pack.
                        </AccordionContent>

                    </AccordionItem>

                </Accordion>
            </div>



            <div>
                <Accordion type="single" collapsible className="w-130">
                
                    <AccordionItem 
                        value="item-1" 
                        className="bg-[#0c0c0c] border border-zinc-900 rounded-2xl px-6 mb-4 overflow-hidden data-[state=open]:pb-2 transition-all duration-200"
                        >
                        <AccordionTrigger className="text-zinc-400 text-lg font-normal hover:no-underline h-14 flex items-center justify-between w-full py-0 group">
                            <span>
                               Where can i get my bike serviced?
                            </span>
                        </AccordionTrigger>
                        
                        <AccordionContent className="text-white  text-lg leading-6.5 pb-4 pt-1 transition-all">
                        We have services center only in Kathmandu Valley. 
                        </AccordionContent>

                    </AccordionItem>

                </Accordion>
            </div>

        </div>














        <div className="flex gap-25">

            <div>
                <Accordion type="single" collapsible className="w-130">
                
                    <AccordionItem 
                        value="item-1" 
                        className="bg-[#0c0c0c] border border-zinc-900 rounded-2xl px-6 mb-4 overflow-hidden data-[state=open]:pb-2 transition-all duration-200"
                        >
                        <AccordionTrigger className="text-zinc-400 text-lg font-normal hover:no-underline h-14 flex items-center justify-between w-full py-0 group">
                            <span>
                               Is financing available?
                            </span>
                        </AccordionTrigger>
                        
                        <AccordionContent className="text-white  text-lg leading-6.5 pb-4 pt-1 transition-all">
                         Yes! We partner with major Nepali banks and financial institutions to offer attractive EMI plans starting from NPR 8000/month.
                        </AccordionContent>

                    </AccordionItem>

                </Accordion>
            </div>



            <div>
                <Accordion type="single" collapsible className="w-130">
                
                    <AccordionItem 
                        value="item-1" 
                        className="bg-[#0c0c0c] border border-zinc-900 rounded-2xl px-6 mb-4 overflow-hidden data-[state=open]:pb-2 transition-all duration-200"
                        >
                        <AccordionTrigger className="text-zinc-400 text-lg font-normal hover:no-underline h-14 flex items-center justify-between w-full py-0 group">
                            <span>
                               Can i ride in rain?
                            </span>
                        </AccordionTrigger>
                        
                        <AccordionContent className="text-white  text-lg leading-6.5 pb-4 pt-1 transition-all">
                          Absolutely. All Gantabya bikes are IP67 rated- fully protected against dust, water splashed, and heavy rain.
                        </AccordionContent>

                    </AccordionItem>

                </Accordion>
            </div>

        </div>








        
       














        <div className="flex justify-center items-center w-full px-4 gap-7">
            
            <div className="border border-zinc-700 w-full
                max-w-107.5 h-50 py-6 rounded-xl flex flex-col items-center justify-center
                text-center px-10 hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.30)] transition-all duration-300 group">
                <FontAwesomeIcon icon={faLeaf} className="text-[#00d84f]" />
                <h1 className="text-white text-[30px] font-normal mb-2">Warranty</h1>
                <h2 className="text-zinc-400 font-medium "> 3-year vehicle + 5-year battery warranty on all models.</h2>
            </div>



            <div className="border border-zinc-700 w-full
                max-w-107.5 h-50 py-6 rounded-xl flex flex-col items-center justify-center
                text-center px-10 hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.30)] transition-all duration-300 group">
                <FontAwesomeIcon icon={faCircleNodes} className="text-[#00d84f] size-5xl" />
                <h1 className="text-white text-[30px] font-normal mb-2">Service Centers</h1>
                <h2 className="text-zinc-400 font-medium">25+ authorized centers across Nepal for hassle-free servicing.</h2>
            </div>



            <div className="border border-zinc-700 w-full
                max-w-107.5 h-50 py-6 rounded-xl flex flex-col items-center justify-center
                text-center px-10 hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.30)] transition-all duration-300 group">
                <FontAwesomeIcon icon={faUsers} className="text-[#00d84f] size-5xl" />
                <h1 className="text-white text-[30px] font-normal mb-2">24/7 Support</h1>
                <h2 className="text-zinc-400 font-medium">Call or chat with our support team for anytime.</h2>
            </div>

      </div>

    </div>
  );
}