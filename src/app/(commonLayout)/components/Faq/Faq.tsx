"use client";
import { Accordion, AccordionItem } from "@heroui/react";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'

export default function Faq() {
    const faqs = [
        {
          question: "How do I place an order on TradeHub?",
          answer: `Placing an order on TradeHub is quick and easy. Follow these steps:<br><br>
          1. <strong>Browse Products:</strong> Use the search bar or categories to find what you need.  
          2. <strong>Select a Product:</strong> Click on an item to view details like price, description, and reviews.  
          3. <strong>Add to Cart:</strong> Choose the quantity and click 'Add to Cart'. You can continue shopping or proceed to checkout.  
          4. <strong>Review Your Cart:</strong> Click on the cart icon to review your selected items, update quantities, or remove items if needed.  
          5. <strong>Proceed to Checkout:</strong> Click 'Checkout' and enter your shipping address, payment method, and preferred delivery option.  
          6. <strong>Confirm & Pay:</strong> Verify your details and place your order. You'll receive an email confirmation with tracking details.  
          <br>If you need assistance, our support team is available 24/7.`,
        },
        {
          question: "What payment methods do you accept?",
          answer: `TradeHub supports multiple payment methods for convenience:<br><br>
          - <strong>Credit/Debit Cards:</strong> We accept Visa, MasterCard, American Express, and Discover.  
          - <strong>PayPal:</strong> Secure and fast payment using your PayPal account.  
          - <strong>Bank Transfers:</strong> Available for larger transactions.  
          - <strong>Cash on Delivery (COD):</strong> Only available in select locations (check at checkout).  
          - <strong>TradeHub Wallet:</strong> Earn cashback and pay with TradeHub credits.  
          <br>Your payment is <strong>fully secure</strong>, and we use <strong>SSL encryption</strong> to protect your details.`,
        },
        {
          question: "What is your return and refund policy?",
          answer: `We want you to be satisfied with your purchase. Here's how our return and refund process works:<br><br>
          ✅ <strong>Return Window:</strong> You can return items within <strong>14 days</strong> of delivery.  
          ✅ <strong>Eligibility:</strong> Items must be <strong>unused, in original packaging, and with all accessories/manuals included</strong>.  
          ✅ <strong>Non-Returnable Items:</strong> Certain products like perishable goods, personalized items, and digital downloads are not eligible for returns.  
          ✅ <strong>Refund Process:</strong> Once we receive the returned item, we will inspect it. If approved, refunds are processed within <strong>5-7 business days</strong> to your original payment method.  
          ✅ <strong>Exchange Option:</strong> Instead of a refund, you can choose an exchange or TradeHub credits for your next purchase.  
          <br>Need help? Contact our customer support for a smooth return process.`,
        },
        {
          question: "Do you offer international shipping?",
          answer: `Yes! TradeHub ships to multiple countries worldwide. Here’s what you need to know about international shipping:<br><br>
          - 🌍 <strong>Coverage:</strong> We ship to over <strong>50 countries</strong> including the US, UK, Canada, Australia, and more.  
          - 🚀 <strong>Shipping Time:</strong> Delivery times depend on your location:  
            - <strong>Standard Shipping:</strong> 7-14 business days  
            - <strong>Express Shipping:</strong> 3-5 business days  
          - 💰 <strong>Shipping Costs:</strong> The cost is calculated at checkout based on your location and package weight.  
          - 📦 <strong>Customs & Duties:</strong> Some international orders may be subject to customs fees or import taxes, which are the responsibility of the buyer.  
          <br>Track your order using the tracking number provided in your email after shipment.`,
        },
        {
          question: "How can I contact customer support?",
          answer: `We are always here to assist you! You can reach our customer support team through multiple channels:<br><br>
          - 📧 <strong>Email:</strong> Send us a message at <strong>support@tradehub.com</strong> and we'll respond within <strong>24 hours</strong>.  
          - 💬 <strong>Live Chat:</strong> Available on our website 24/7 for instant assistance.  
          - 📞 <strong>Phone:</strong> Call us at <strong>+1 234 567 890</strong> (Mon-Fri, 9 AM - 6 PM EST).  
          - 📱 <strong>Social Media:</strong> Message us on <strong>Facebook, Instagram, or Twitter</strong> for quick help.  
          <br>Need urgent support? Use <strong>Live Chat</strong> for the fastest response!`,
        },
      ];
      
  return (
    <div className="md:px-6 px-4 my-6">
      <h1 className="text-lg md:text-3xl my-4 md:my-10">
        Frequently Asked Questions
      </h1>
      <Accordion itemClasses={{title: "font-bold"}} variant="bordered">
        {faqs.map((faq, index) => (
          <AccordionItem
            
            key={index}
            aria-label={faq.question}
            title={faq.question}
          >
          <ReactMarkdown  className="prose max-w-none text-gray-700 leading-relaxed" rehypePlugins={[rehypeRaw]}>{faq.answer}</ReactMarkdown>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
