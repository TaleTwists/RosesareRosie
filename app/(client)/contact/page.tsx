"use client";

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Form() {
  const [state, handleSubmit] = useForm("xovkgaqv");

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    e.target.value = value.slice(0, 11);
  };

  if (state.succeeded) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center py-12 space-y-4">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
            <svg
              className="w-8 h-8 text-emerald-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">
            Message Sent Successfully!
          </h3>
          <p className="text-gray-600">
            Thank you for reaching out. We'll get back to you as soon as possible.
          </p>
          <Button
            onClick={() => window.location.reload()}
            className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 rounded-lg shadow-lg mb-2">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Get In Touch</h2>
      <p className="text-gray-600 mb-8">
        Fill out the form below and we'll get back to you shortly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-gray-700 font-medium">
            Name *
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            className="mt-1"
            required
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-gray-700 font-medium">
            Email *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            className="mt-1"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-gray-700 font-medium">
            Phone Number *
          </Label>
          <Input
            id="phone"
            name="phone"
            type="text"
            placeholder="08012345678"
            className="mt-1"
            onInput={handlePhoneInput}
            pattern="\d{11}"
            title="Please enter exactly 11 digits"
            required
          />
          <ValidationError
            prefix="Phone"
            field="phone"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div>
          <Label htmlFor="message" className="text-gray-700 font-medium">
            Message *
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us how we can help you..."
            className="mt-1 min-h-[150px] resize-none"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <Button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg font-semibold"
        >
          {state.submitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
}