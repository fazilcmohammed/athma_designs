import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";
import React from 'react'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8982cc52-89fd-4e67-ac54-9cdee3fec2a1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult(data.message);
    }
  };


  return (
    <div className="min-h-screen">
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-corporate-navy">
            Contact Us
          </h1>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h2 className="text-xl sm:text-2xl font-semibold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8 text-sm sm:text-base ">
                Have questions about our job opportunities or travel packages? 
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex flex-col md:flex-row text-center md:text-left md:items-start items-center  gap-4">
                  <Mail className="text-corporate-coral w-5 h-5 sm:w-6 sm:h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600 text-sm sm:text-base">jbskyworld@gmail.com</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row text-center md:text-left md:items-start items-center gap-4">
                  <Phone className="text-corporate-coral w-5 h-5 sm:w-6 sm:h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600 text-sm sm:text-base">+91 944 600 4261</p>
                    <p className="text-gray-600 text-sm sm:text-base">+91 828 196 4261</p>
                    <p className="text-gray-600 text-sm sm:text-base">+91 999 582 3559</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row text-center md:text-left md:items-start items-center gap-4">
                  <MapPin className="text-corporate-coral w-5 h-5 sm:w-6 sm:h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                    Nalanchira, Kottamukal, Trivandrum
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <form onSubmit={onSubmit} className="space-y-6">
              <input type="hidden" name="from_name" value="SkyWorld Web"></input>
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" name="name" placeholder="Your name" />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" name="email" placeholder="Your email" />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Your message"
                    name="message"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-corporate-coral hover:bg-corporate-coral/90"
                >
                  {result ? result : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
