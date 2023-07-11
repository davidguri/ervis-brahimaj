import styles from "./Faq.module.css";
import Layout from "../components/layout/Layout";

import FaqContainer from "../components/global/faqContainer";

export default function Faq() {
  const faqs = [
    // Dummy Data
    {
      title: "What is chiropractic care?",
      content:
        "Chiropractic care is a health care profession based on interactions of the spine and nervous system, as well as the surrounding muscles.",
    },
    {
      title: "What is a chiropractic adjustment?",
      content:
        "A chiropractic adjustment is the art of using a specific, controlled force in a precise direction that is applied to a spinal joint not moving properly or “locked up.” The purpose of this natural and safe procedure is to correct structural alignment and eliminate interference in the nervous system. For the patient, this means improved spinal function, reduction in pain, and an overall improvement in health and wellness.",
    },
    {
      title: "What types of pain do chiropractors treat?",
      content:
        "Chiropractors are known for their expertise in caring for patients with back pain, neck pain, and headaches. They also treat sports injuries and other disorders involving muscles, ligaments and joints. The benefits of chiropractic care go beyond this and extend into general health as our core body structure affects overall function and health.",
    },
    {
      title: "Do adjustments hurt?",
      content:
        "Chiropractic manipulation is a highly controlled procedure that rarely causes discomfort because minimal force and gentle pressure are used. In fact, most patients feel relief immediately following treatment. Any reported soreness after an initial adjustment has been described as similar to that associated with starting a new exercise program. Drinking plenty of water, using an ice pack, and engaging in light stretching after your first visit can help ease any discomfort promote healing.",
    },
    {
      title: "Are adjustments safe?",
      content:
        "Chiropractic care is widely recognized as one of the safest drug-free, non-invasive therapies available for the treatment of most back and neck problems. Spinal adjustments are extremely safe when performed by a licensed chiropractor.",
    },
    {
      title: "Can I see a chiropractor if I'm pregnant?",
      content:
        "Many pregnant women find that chiropractic adjustments improve the pregnancy experience and make delivery easier. Adjustments are adapted to accommodate the stage of pregnancy and the unique needs of each patient.",
    },
    {
      title: "Can I learn to adjust myself?",
      content:
        "Chiropractors are trained to adjust in a very specific location and direction. As a result, it is virtually impossible to adjust oneself correctly and accurately.",
    },
    {
      title: "Will I be required to remove my clothing at my appointment?",
      content:
        "Some procedures may require you to remove some pieces of clothing, however most do not. If you have any questions or concerns, bring them up immediately with your chiropractor.",
    },
    {
      title: "Will a chiropractic adjustment completely remove back pain?",
      content:
        "For many, back pain can become chronic if left untreated. Chiropractic care has been shown to ease and even eliminate back pain for many patients.",
    },
  ];

  return (
    <Layout>
      <main className={styles.main}>
        <section className={styles.titleContainer}>
          <text className={styles.title}>FAQ</text>
        </section>
        <section className={styles.content}>
          <div className={styles.itemContainer}>
            {faqs.map((faqs, i) => {
              return (
                <div key={i}>
                  <FaqContainer title={faqs.title} content={faqs.content} />
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </Layout>
  );
}
