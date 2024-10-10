import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="mb-8">If you have any questions or would like to work together, please don't hesitate to get in touch.</p>
      <ContactForm />
      <h2 className="text-2xl font-bold mt-8 mb-2">Other Ways to Connect</h2>
      <ul className="list-disc pl-6">
        <li>Email: john@example.com</li>
        <li>Phone: (123) 456-7890</li>
        <li>Twitter: @johndoe</li>
        <li>LinkedIn: linkedin.com/in/johndoe</li>
      </ul>
    </div>
  );
}