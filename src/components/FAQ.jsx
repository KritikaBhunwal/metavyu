import React, { useState, useRef, useEffect } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: 'What services do you offer?',
    answer: 'We provide full-service architecture, including planning, construction management, and interior design.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Timelines vary, but most residential projects range from 3 to 9 months depending on scope.',
  },
  {
    question: 'Do you work on commercial spaces?',
    answer: 'Yes, we have experience designing and managing small to mid-scale commercial projects.',
  },
  {
    question: 'Can I be involved in the design process?',
    answer: 'Absolutely! We believe in a collaborative process and welcome your input at every stage.',
  },
  {
    question: 'How do I get started?',
    answer: 'Reach out via our contact form or email, and we’ll schedule a free consultation.',
  },
];

const FAQItem = ({ question, answer, isActive, onClick }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isActive ? contentRef.current.scrollHeight : 0);
    }
  }, [isActive]);

  return (
    <div className={`faq-item ${isActive ? 'active' : ''}`} onClick={onClick}>
      <div className="faq-question">
        {question}
        <span className={`faq-icon ${isActive ? 'rotate' : ''}`}>
          {isActive ? '−' : '+'}
        </span>
      </div>
      <div
        className="faq-answer"
        ref={contentRef}
        style={{ maxHeight: `${height}px` }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="faq-section">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isActive={activeIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
