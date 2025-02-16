"use client";
import { Accordion, AccordionItem } from "@heroui/react";

export default function Faq() {
    const faqs = [
        {
          question: "How do I place an order on TradeHub?",
          answer: `Placing an order on TradeHub is quick and easy. Follow these steps:\n
          1️⃣ **Browse Products:** Use the search bar or categories to find what you need.\n
          2️⃣ **Select a Product:** Click on an item to view details like price, description, and reviews.\n
          3️⃣ **Add to Cart:** Choose the quantity and click 'Add to Cart'. You can continue shopping or proceed to checkout.\n
          4️⃣ **Review Your Cart:** Click on the cart icon to review your selected items, update quantities, or remove items if needed.\n
          5️⃣ **Proceed to Checkout:** Click 'Checkout' and enter your shipping address, payment method, and preferred delivery option.\n
          6️⃣ **Confirm & Pay:** Verify your details and place your order. You'll receive an email confirmation with tracking details.\n
          If you need assistance, our support team is available 24/7.`,
        },
        {
          question: "What payment methods do you accept?",
          answer: `TradeHub supports multiple payment methods for convenience:\n
          - **Credit/Debit Cards:** We accept Visa, MasterCard, American Express, and Discover.\n
          - **PayPal:** Secure and fast payment using your PayPal account.\n
          - **Bank Transfers:** Available for larger transactions.\n
          - **Cash on Delivery (COD):** Only available in select locations (check at checkout).\n
          - **TradeHub Wallet:** Earn cashback and pay with TradeHub credits.\n
          Your payment is **fully secure**, and we use **SSL encryption** to protect your details.`,
        },
        {
          question: "What is your return and refund policy?",
          answer: `We want you to be satisfied with your purchase. Here's how our return and refund process works:\n
          ✅ **Return Window:** You can return items within **14 days** of delivery.\n
          ✅ **Eligibility:** Items must be **unused, in original packaging, and with all accessories/manuals included**.\n
          ✅ **Non-Returnable Items:** Certain products like perishable goods, personalized items, and digital downloads are not eligible for returns.\n
          ✅ **Refund Process:** Once we receive the returned item, we will inspect it. If approved, refunds are processed within **5-7 business days** to your original payment method.\n
          ✅ **Exchange Option:** Instead of a refund, you can choose an exchange or TradeHub credits for your next purchase.\n
          Need help? Contact our customer support for a smooth return process.`,
        },
        {
          question: "Do you offer international shipping?",
          answer: `Yes! TradeHub ships to multiple countries worldwide. Here’s what you need to know about international shipping:\n
          - 🌍 **Coverage:** We ship to over **50 countries** including the US, UK, Canada, Australia, and more.\n
          - 🚀 **Shipping Time:** Delivery times depend on your location:\n
            - Standard Shipping: **7-14 business days**\n
            - Express Shipping: **3-5 business days**\n
          - 💰 **Shipping Costs:** The cost is calculated at checkout based on your location and package weight.\n
          - 📦 **Customs & Duties:** Some international orders may be subject to customs fees or import taxes, which are the responsibility of the buyer.\n
          Track your order using the tracking number provided in your email after shipment.`,
        },
        {
          question: "How can I contact customer support?",
          answer: `We are always here to assist you! You can reach our customer support team through multiple channels:\n
          - 📧 **Email:** Send us a message at **support@tradehub.com** and we'll respond within **24 hours**.\n
          - 💬 **Live Chat:** Available on our website 24/7 for instant assistance.\n
          - 📞 **Phone:** Call us at **+1 234 567 890** (Mon-Fri, 9 AM - 6 PM EST).\n
          - 📱 **Social Media:** Message us on **Facebook, Instagram, or Twitter** for quick help.\n
          Need urgent support? Use **Live Chat** for the fastest response!`,
        },
      ];

  return (
    <div className="md:px-6 px-4 my-6">
      <h1 className="text-lg md:text-3xl my-4 md:my-10">
        Frequently Asked Questions
      </h1>
      <Accordion variant="bordered">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            aria-label="Accordion 1"
            title={faq.question}
          >
            {faq.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
