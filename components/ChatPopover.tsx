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
import { MessageSquare, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import { useForm, ValidationError } from '@formspree/react'

export function ChatPopover() {
  const [state, handleSubmit] = useForm("xjkaypoa")

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
                    We'll get back to you as soon as possible.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="leading-none font-medium">Chat with us</h4>
                  <p className="text-muted-foreground text-sm">
                    Send us a message and we'll get back to you.
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
                  <div className="grid gap-2">
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
                  <Phone className="h-5 w-5 text-shop_dark_green mt-0.5" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">Phone</p>
                    <a href="tel:+2348012345678" className="text-sm text-muted-foreground hover:text-shop_dark_green">
                      +234 801 234 5678
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-shop_dark_green mt-0.5" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">Email</p>
                    <a href="mailto:info@yourcompany.com" className="text-sm text-muted-foreground hover:text-shop_dark_green">
                      info@yourcompany.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-shop_dark_green mt-0.5" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">Address</p>
                    <p className="text-sm text-muted-foreground">
                      123 Business Street,<br />
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 text-shop_dark_green mt-0.5" />
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">Business Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Mon - Fri: 9:00 AM - 6:00 PM<br />
                      Sat: 10:00 AM - 4:00 PM
                    </p>
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