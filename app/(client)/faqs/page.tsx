import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/Container";
import { Faqs } from "@/components/Faqs";

export function FaqPage() {
  return (
    <Container className="flex">
     <Faqs />
    </Container>
  );
}

export default FaqPage;
