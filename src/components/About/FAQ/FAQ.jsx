import { useState } from "react";

import "./FAQ.css";

import faqs from "../../../data/faqs";

function FAQ() {
  const [openId, setOpenId] = useState(null);

  function toggleFAQ(id) {
    setOpenId(openId === id ? null : id);
  }

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-header">
          <span>Frequently Asked Questions</span>

          <h2>Everything You Need to Know</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="faq-item"
              onClick={() => toggleFAQ(faq.id)}>
              <div className="faq-question">
                <h3>{faq.question}</h3>

                <span>{openId === faq.id ? "−" : "+"}</span>
              </div>

              {openId === faq.id && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
