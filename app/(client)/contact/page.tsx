"use client";

import React from "react";
import {
  Clock,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";
import Container from "@/components/Container";
import Form from "@/components/Form";

const ContactPage: React.FC = () => {
  return (
    <Container>
      {/* Header */}
      {/* <div className="bg-emerald-800 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-emerald-200">
          <span>Home</span> <span className="mx-2">/</span>{" "}
          <span>Contact Us</span>
        </p>
      </div> */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <Form />

          {/* Right Column - Contact Info */}
          <div className="bg-emerald-800 text-white p-8 space-y-8">
            {/* Address */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Address</h3>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <p className="text-emerald-100">
                  110 Nkemba St, off Abak Road, Uyo
                </p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span className="text-emerald-100">
                    07082831875, 08066890131
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span className="text-emerald-100">
                    info.rosiewig@gmail.com
                  </span>
                </div>
              </div>
            </div>

            {/* Open Time */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Open Time</h3>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-1 flex-shrink-0" />
                <div className="text-emerald-100">
                  <p>Mon - Sat: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
            {/* Stay Connected */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/rosie.wig.9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 hover:bg-yellow-600 p-3 rounded-full transition-colors inline-block"
                >
                  <Facebook className="h-5 w-5 text-gray-900" />
                </a>
                <a
                  href="https://wa.link/mo1b1i"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 hover:bg-yellow-600 p-3 rounded-full transition-colors inline-block"
                >
                  <MessageCircle className="h-5 w-5 text-gray-900" />
                </a>
                <a
                  href="https://www.instagram.com/rosie_wig?igsh=MXE0c3dncjZpejFhbw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 hover:bg-yellow-600 p-3 rounded-full transition-colors inline-block"
                >
                  <Instagram className="h-5 w-5 text-gray-900" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Embed */}
      {/* <div className="map-container">
 <div className="py-16 md:py-0 rounded-lg px-10 lg:px-24">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.4120561736663!2d7.905549974191914!3d5.036740638654441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105d57cf87833099%3A0xba1fed027884b483!2sGlam%20by%20Rosie%20Wig!5e0!3m2!1sen!2sng!4v1759498333662!5m2!1sen!2sng" 
    width={100} 
    height={450} 
    style={{ border: 0 }} 
    allowFullScreen={true}
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
    title="Glam by Rosie Wig Location"
    className="rounded-lg"
  />
</div>
</div> */}
    </Container>
  );
};

export default ContactPage;
