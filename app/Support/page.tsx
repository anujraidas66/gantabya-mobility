import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faCircleNodes, faUsers } from "@fortawesome/free-solid-svg-icons";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Support() {
  const faqs = [
    {
      id: "faq-1",
      question: "How far can Gantabya bikes go on a single charge?",
      answer: "Our bikes range 300km on a full charge, depending on riding conditions and terrain."
    },
    {
      id: "faq-2",
      question: "How long does it take to charge?",
      answer: "A full charge takes 3 hours at home. Fast charging to 80% is available in under 40 minutes at supported stations."
    },
    {
      id: "faq-3",
      question: "What warranty do you offer?",
      answer: "All Gantabya motorcycles come with a 5 year warranty on the battery pack."
    },
    {
      id: "faq-4",
      question: "Where can i get my bike serviced?",
      answer: "We have service centers only in Kathmandu Valley."
    },
    {
      id: "faq-5",
      question: "Is financing available?",
      answer: "Yes! We partner with major Nepali banks and financial institutions to offer attractive EMI plans starting from NPR 8000/month."
    },
    {
      id: "faq-6",
      question: "Can i ride in rain?",
      answer: "Absolutely. All Gantabya bikes are IP67 rated- fully protected against dust, water splashes, and heavy rain."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl text-green-500 md:text-5xl font-bold mb-12">
            Suppo
            <span className="bg-clip-text text-transparent bg-linear-to-r from-[#00e676] to-[#0055ff]">
              rt
            </span>
          </h1>
        </div>



        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {faqs.map((faq) => (
            <Accordion key={faq.id} type="single" collapsible className="w-full">
              <AccordionItem 
                value={faq.id} 
                className="bg-[#0c0c0c] border border-zinc-900 rounded-2xl px-6 mb-4 overflow-hidden data-[state=open]:pb-2 transition-all duration-200"
              >
                <AccordionTrigger className="text-zinc-400 text-lg font-normal hover:no-underline h-14 flex items-center justify-between w-full py-0 text-left group">
                  <span>{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-white text-lg leading-relaxed pb-4 pt-1 transition-all">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>

       

        <div className="grid md:grid-cols-3 gap-6 w-full justify-items-center">
         
          <div className="border border-zinc-700 w-full max-w-sm h-52 py-6 rounded-xl flex flex-col items-center justify-center text-center px-8 hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.30)] transition-all duration-300 group">
            <FontAwesomeIcon icon={faLeaf} className="text-[#00d84f] text-5xl mb-3" />
            <h2 className="text-white text-2xl font-normal mb-2">Warranty</h2>
            <p className="text-zinc-400 font-medium text-sm">3-year vehicle + 5-year battery warranty on all models.</p>
          </div>

          
          <div className="border border-zinc-700 w-full max-w-sm h-52 py-6 rounded-xl flex flex-col items-center justify-center text-center px-8 hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.30)] transition-all duration-300 group">
            <FontAwesomeIcon icon={faCircleNodes} className="text-[#00d84f] text-5xl mb-3" />
            <h2 className="text-white text-2xl font-normal mb-2">Service Centers</h2>
            <p className="text-zinc-400 font-medium text-sm">25+ authorized centers across Nepal for hassle-free servicing.</p>
          </div>

         
          <div className="border border-zinc-700 w-full max-w-sm h-52 py-6 rounded-xl flex flex-col items-center justify-center text-center px-8 hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.30)] transition-all duration-300 group">
            <FontAwesomeIcon icon={faUsers} className="text-[#00d84f] text-5xl mb-3" />
            <h2 className="text-white text-2xl font-normal mb-2">24/7 Support</h2>
            <p className="text-zinc-400 font-medium text-sm">Call or chat with our support team anytime.</p>
          </div>
        </div>
      </div>
    </div>
  );
}