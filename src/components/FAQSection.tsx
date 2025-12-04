import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Wie schnell bekomme ich meinen Befund?",
      answer: "In der Regel innerhalb von 24–48 Stunden.",
    },
    {
      question: "Zahlt meine Krankenkasse die Kosten?",
      answer: "Es handelt sich um Selbstzahlerleistungen. PKV kann eine Erstattung anbieten (ohne Garantie). GKV übernimmt in der Regel nicht.",
    },
    {
      question: "Welche Smartwatches funktionieren?",
      answer: "Alle Geräte mit EKG-Export, z. B. Apple, Samsung, Garmin.",
    },
    {
      question: "Was passiert, wenn etwas Ernstes gefunden wird?",
      answer: "Sie erhalten eine klare Empfehlung für das notwendige weitere Vorgehen.",
    },
    {
      question: "Ersetzt EKGJetzt meinen Kardiologen vor Ort?",
      answer: "Nein – wir bieten schnelle Orientierung, ersetzen aber keinen vollständigen kardiologischen Check.",
    },
    {
      question: "Wie sicher sind meine Daten?",
      answer: "Vollständig DSGVO-konform und verschlüsselt.",
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Häufige Fragen
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
            Häufige Fragen
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;