import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8 md:p-16">
       <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-12">
                Contact{' '}
                <span className="bg-clip-text text-transparent bg-linear-to-r from-[#00e676] to-[#0055ff]">
                Us
                </span>
            </h1>
        </div>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
       
        <form className="bg-[#111] p-8 rounded-2xl border border-gray-800 ">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-400">Name</label>
              <input type="text" placeholder="Your full name" className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none transition" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-400">Email</label>
              <input type="email" placeholder="your@email.com" className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none transition" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-400">Message</label>
              <textarea placeholder="How can we help?" rows={4} className="w-full h-65 bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none transition"></textarea>
            </div>
            <button className="w-full bg-[#00e676] hover:bg-[#00c853] text-black font-bold py-3 rounded-lg transition duration-200">
              Send Message
            </button>
          </div>
        </form>

      
        <div className="space-y-8">
          <ContactItem  icon={<FontAwesomeIcon icon={faLocationDot} className="text-green-500" />} title="Office" details={["Kathmandu, Nepal", "New Baneshwor, Kathmandu 44600"]}/>
          <ContactItem  icon={<FontAwesomeIcon icon={faPhone} className="text-green-500" />}  title="Phone"    details={["+977 1-XXXXXXX", "+977 98XXXXXXXX"]} />
          <ContactItem icon={<FontAwesomeIcon icon={faEnvelope} className="text-green-500" />}  title="Email" details={["info@gantabya.com", "nkandel21@gmail.com"]}/>
            
          
          <div className="h-48 w-full bg-gray-800 rounded-xl flex items-center justify-center border border-gray-700 overflow-hidden">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112965.73367675628!2d85.2599292552802!3d27.70895594411135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1fe18db0ea!2sKathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2snp!4v1716277200000!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
        </div>
      </div>
    </div>
  );
}


function ContactItem({ icon, title, details }: { icon: React.ReactNode, title: string, details: string[] }) {
  return (
    <div className="bg-[#111] p-6 rounded-2xl border border-gray-800 flex gap-4">
      <div className="mt-1">{icon}</div>
      <div>
        <h3 className="font-bold mb-1">{title}</h3>
        {details.map((line, i) => <p key={i} className="text-gray-400 text-sm">{line}</p>)}
      </div>
    </div>
  );
}