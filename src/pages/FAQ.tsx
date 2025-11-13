import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground">
          Find answers to common questions about Qloset
        </p>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle>General Questions</CardTitle>
          <CardDescription>Learn more about Qloset and how it works</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Qloset?</AccordionTrigger>
              <AccordionContent>
                Qloset is an AI-powered fashion design platform that helps you create, visualize, and transform fashion products using cutting-edge artificial intelligence technology.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do the AI tools work?</AccordionTrigger>
              <AccordionContent>
                Our AI tools use advanced machine learning models to process your images and generate high-quality results. Simply upload your images, configure your preferences, and let our AI do the work.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What file formats are supported?</AccordionTrigger>
              <AccordionContent>
                We support common image formats including JPG, PNG, and WebP. For best results, we recommend using high-resolution images.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I integrate Qloset with my e-commerce platform?</AccordionTrigger>
              <AccordionContent>
                Yes! Qloset offers integrations with popular e-commerce platforms like Shopify and WooCommerce. Check our Integrations section for more details.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How do I upgrade to Pro?</AccordionTrigger>
              <AccordionContent>
                Click the "Upgrade to Pro" button in the sidebar to access premium features including unlimited generations, priority processing, and advanced AI models.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
