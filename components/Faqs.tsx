import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "./Container";
import Title from "./Title";

export function Faqs() {
  return (
    <Container className="flex flex-col items-center justify-center space-y-2 pt-8 pb-14 ">
      <p className="text-center text-xs">FAQs</p>
      <Title className="md:text-4xl text-2xl font-medium">
        Questions?
        <span className="text-emerald-700 pl-1">Look here.</span>
      </Title>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-md font-bold">
            Shipping Information
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance bg-emerald-900 p-3 rounded text-white">
            <h3 className="font-bold text-md">
              What is your shipping policy and how long does delivery take?
            </h3>
            <p>
              Our delivery timeframes depend on your location. However, we offer free shipping on all orders within the Uyo metropolitan area.
            </p>
            <p>
              Delivery costs are based on your shipping distance - the farther your location, the higher the logistics cost. We work with reliable courier services to ensure your wigs arrive safely and on time.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-md font-bold">
            Wig Care and Maintenance
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance bg-emerald-900 p-3 rounded text-white">
            <h3 className="font-bold text-md">
              How do I care for and maintain my wig to make it last longer?
            </h3>
            <p>
              When you purchase our wigs, hair care instructions and tutorials are complimentary with your purchase. We&apos;ll send detailed care guides via email and share tips on our social media platforms.
            </p>
            <p>
              Our blog also provides multiple tutorials covering washing, styling, storage, and maintenance tips to help ensure a longer lifespan for your wigs.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-md font-bold">
            Return and Exchange Policy
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance bg-emerald-900 p-3 rounded text-white">
            <h3 className="font-bold text-md">
              What is your return and exchange policy?
            </h3>
            <p>
              We only offer refunds if it is proven beyond reasonable doubt that the issue with delivery or product quality is solely the fault of ROSIEWIG.
            </p>
            <p>
              For products lost in transit, we will work with the logistics company to ensure you receive a full refund or replacement. Please note that due to hygiene reasons, wigs cannot be returned once the protective seal has been opened, unless the product is defective.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-md font-bold">
            Choosing the Right Wig
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance bg-emerald-900 p-3 rounded text-white">
            <h3 className="font-bold text-md">
              How do I choose the right wig size and cap construction for me?
            </h3>
            <p>
              We offer various cap constructions including lace fronts, full lace, 360 lace, and traditional caps. Each product page includes detailed descriptions to help you choose the best option for your needs.
            </p>
            <p>
              To find your perfect fit, measure around your head from the front hairline, behind your ear, to the nape of your neck, and back to the front. Most of our wigs come with adjustable straps for a customized fit. If you need help, contact our customer service team for personalized assistance.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-md font-bold">
            Wig Revamping Services
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance bg-emerald-900 p-3 rounded text-white">
            <h3 className="font-bold text-md">
              What does your wig revamping service include and how long does it take?
            </h3>
            <p>
              Our wig revamping service includes professional cleaning, reconditioning, restyling, and restoration of your existing wigs. We can refresh tired wigs, re-curl or straighten hair, fix tangled sections, and bring your wig back to life.
            </p>
            <p>
              The turnaround time is typically 5-7 business days depending on the condition of the wig and the level of work required. Pricing varies based on the services needed. Contact us for a quote and to book your revamping appointment.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-md font-bold">
            Customization Options
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance bg-emerald-900 p-3 rounded text-white">
            <h3 className="font-bold text-md">
              Can I customize or pre-style my wig before it&apos;s shipped to me?
            </h3>
            <p>
              Yes! We offer customization services including pre-plucking the hairline, bleaching knots, cutting to your desired length, adding baby hairs, and tinting the lace to match your skin tone.
            </p>
            <p>
              Some basic customizations are complimentary, while more extensive styling may incur additional fees. Please specify your customization needs when placing your order, or contact us to discuss your requirements and pricing before purchase.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Container>
  );
}