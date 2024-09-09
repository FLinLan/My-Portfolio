import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <p className="text-gray-700 mb-4">
        You can reach me at: <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">ml248@uw.edu</a>
      </p>
      {/* Add more contact information or a form if desired */}
    </section>
  );
}

export default Contact;
