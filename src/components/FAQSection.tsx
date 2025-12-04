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
      answer: "Bei der EKG-Analyse erhalten Sie Ihren Befund innerhalb von 24–48 Stunden. Bei der Zweitmeinung ebenfalls innerhalb von 24–48 Stunden. Video-Konsultationen werden nach Terminverfügbarkeit zeitnah angeboten.",
    },
    {
      question: "Was passiert bei auffälligen Befunden?",
      answer: "Bei auffälligen Befunden erhalten Sie eine klare Handlungsempfehlung. Je nach Dringlichkeit empfehlen wir einen zeitnahen Arztbesuch oder weitere Diagnostik. Bei sehr dringenden Auffälligkeiten kontaktieren wir Sie proaktiv.",
    },
    {
      question: "Zahlt meine Krankenkasse?",
      answer: "Es handelt sich um Selbstzahlerleistungen. Private Krankenversicherungen erstatten telemedizinische Leistungen häufig – Sie erhalten eine Rechnung zur Einreichung, eine Erstattung kann jedoch nicht garantiert werden. Gesetzlich Versicherte tragen die Kosten in der Regel selbst. Wir empfehlen jedoch, bei Ihrer Kasse nachzufragen, ob eine Übernahme im Rahmen von Bonusprogrammen oder Gesundheitskonten möglich ist.",
    },
    {
      question: "Welche Smartwatches funktionieren?",
      answer: "Wir analysieren EKGs von Apple Watch, Samsung Galaxy Watch, Withings ScanWatch, Garmin-Uhren und anderen Smartwatches mit EKG-Funktion. Wichtig ist, dass Sie das EKG als PDF exportieren oder einen Screenshot erstellen können.",
    },
    {
      question: "Ersetzt die Online-Bewertung meinen Kardiologen vor Ort?",
      answer: "Unsere telemedizinische Beratung ist eine Ergänzung zur regulären ärztlichen Versorgung. Sie eignet sich hervorragend für eine erste Einschätzung, Zweitmeinungen oder die Interpretation von Smartwatch-Daten. Bei akuten Beschwerden oder für körperliche Untersuchungen ist ein Arztbesuch vor Ort notwendig.",
    },
    {
      question: "Wie sicher sind meine Daten?",
      answer: "Ihre Daten werden DSGVO-konform verarbeitet und über verschlüsselte Verbindungen übertragen. Wir nutzen zertifizierte Server in der EU und haben strenge Datenschutzmaßnahmen implementiert. Nur die Ärztin und notwendige Praxis-Assistenz haben Zugriff auf Ihre Unterlagen.",
    },
    {
      question: "Ist die telemedizinische Beratung rechtlich abgesichert?",
      answer: "Ja, Dr. Suwelack ist vollständig approbierte Fachärztin für Innere Medizin und Kardiologie. Die Beratung erfolgt nach den Regeln der Fernbehandlung gemäß Berufsordnung und MBO-Ä.",
    },
    {
      question: "Wie funktioniert die Zahlung?",
      answer: "Die Zahlung erfolgt sicher über Stripe. Sie können mit Kreditkarte, Lastschrift oder anderen gängigen Zahlungsmethoden bezahlen. Die Rechnung erhalten Sie automatisch per E-Mail.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Häufige Fragen
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
            Noch Fragen?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Services
          </p>
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
