import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Phone, Mail, MapPin, Clock, Facebook, MessageCircle, Instagram } from "lucide-react"
import Image from "next/image"
import { useForm, ValidationError } from '@formspree/react'

export function ChatPopover() {
  const [state, handleSubmit] = useForm("xovkgaqv")

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '')
    e.target.value = value.slice(0, 11)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="whatsapp-link relative">
          <span className="absolute left-[7px] top-[7px] z-50 size-10">
            <span className="flex size-full items-center justify-center animate-ping rounded-full bg-green-500 opacity-75">
            </span>
          </span>
          <Image 
            src="/ios-message.svg"
            alt="Chat"
            width={40}
            height={40}
            className="whatsapp-icon z-50"
          />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Tabs defaultValue="message" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="message">Send Message</TabsTrigger>
            <TabsTrigger value="contact">Contact Info</TabsTrigger>
          </TabsList>
          
          <TabsContent value="message" className="mt-4">
            {state.succeeded ? (
              <div className="grid gap-4">
                <div className="space-y-2 text-center py-4">
                  <h4 className="leading-none font-medium">Thanks for your message!</h4>
                  <p className="text-muted-foreground text-sm">
                    We&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="leading-none font-medium">Chat with us</h4>
                  <p className="text-muted-foreground text-sm">
                    Send us a message and we&apos;ll get back to you.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="h-8"
                      required
                    />
                    <ValidationError 
                      prefix="Name" 
                      field="name"
                      errors={state.errors}
                      className="text-red-500 text-xs"
                    />
                  </div>
                  <div className="grid gap-2 pt-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="text"
                      name="phone"
                      placeholder="08012345678"
                      className="h-8"
                      onInput={handlePhoneInput}
                      pattern="\d{11}"
                      title="Please enter exactly 11 digits"
                      required
                    />
                    <ValidationError 
                      prefix="Phone" 
                      field="phone"
                      errors={state.errors}
                      className="text-red-500 text-xs"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      className="min-h-[100px] resize-none"
                      required
                    />
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                      className="text-red-500 text-xs"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={state.submitting}
                    className="w-full mt-2 text-white bg-shop_dark_green"
                  >
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            )}
          </TabsContent>
          
          <TabsContent value="contact" className="mt-4">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="leading-none font-medium">Get in Touch</h4>
                <p className="text-muted-foreground text-sm">
                  Reach us through any of these channels.
                </p>
              </div>
              
              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-shop_dark_green mt-0.5" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">Address</p>
                    <p className="text-sm text-muted-foreground">
                      110 Nkemba St, off Abak Road,<br />
                      Uyo
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-shop_dark_green mt-0.5" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">Phone</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <a href="tel:+2347082831875" className="block hover:text-shop_dark_green">
                        07082831875
                      </a>
                      <a href="tel:+2348066890131" className="block hover:text-shop_dark_green">
                        08066890131
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-shop_dark_green mt-0.5" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">Email</p>
                    <a href="mailto:info.rosiewig@gmail.com" className="text-sm text-muted-foreground hover:text-shop_dark_green">
                      info.rosiewig@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-shop_dark_green mt-0.5" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">Open Time</p>
                    <p className="text-sm text-muted-foreground">
                      Mon - Sat: 8:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="grid gap-1">
                    <p className="text-sm font-semibold tracking-wide">Stay Connected</p>
                    <div className="flex gap-4 mt-2">
                      <a
                        href="https://www.facebook.com/rosie.wig.9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" bg-emerald-700 hover:bg-emerald-700 p-2 rounded-full transition-colors inline-flex items-center justify-center"
                        aria-label="Facebook"
                      >
                        <Facebook className="h-4 w-4 text-white" />
                      </a>
                      <a
                        href="https://wa.link/mo1b1i"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-shop_light_green hover:bg-emerald-700 p-2 rounded-full transition-colors inline-flex items-center justify-center"
                        aria-label="WhatsApp"
                      >
                        <MessageCircle className="h-4 w-4 text-white" />
                      </a>
                      <a
                        href="https://www.instagram.com/rosie_wig?igsh=MXE0c3dncjZpejFhbw%3D%3D&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-shop_dark_green hover:bg-emerald-700 p-2 rounded-full transition-colors inline-flex items-center justify-center"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-4 w-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  )
}