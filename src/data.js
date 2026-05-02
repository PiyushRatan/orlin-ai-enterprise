export const divisionData = {
  "1": {
    name: "AI Lead & Outreach Engine",
    description: "Generate and qualify leads automatically.",
    services: [
      {
        id: "lead-capture",
        title: "1️⃣ AI Lead Capture & Qualification",
        flow: [
          "Website Form / Landing Page",
          "Zapier Trigger",
          "OpenAI Lead Scoring",
          "Zoho CRM Storage",
          "Auto Tagging (Hot / Warm / Cold)"
        ],
        extra: "OpenAI analyzes: Budget, Industry, Urgency, Fit score"
      },
      {
        id: "cold-outreach",
        title: "2️⃣ Personalized Cold Outreach System",
        purpose: "Automated AI-personalized emails/DMs.",
        flow: [
          "Prospect List Uploaded",
          "Zapier sends prospect data to OpenAI",
          "OpenAI generates personalized message",
          "Email sent via Gmail/Zoho",
          "Replies tracked",
          "CRM auto-updated"
        ],
        extra: "Optional: LinkedIn scraping + AI personalization."
      },
      {
        id: "referral-system",
        title: "3️⃣ Automated Referral System",
        flow: [
          "Client completes project",
          "Zapier triggers referral email",
          "Unique referral link generated",
          "Referral tracked",
          "Reward automation triggered"
        ]
      }
    ]
  },
  "2": {
    name: "AI Sales & Conversion System",
    description: "Convert leads automatically.",
    services: [
      {
        id: "appointment-booking",
        title: "4️⃣ AI Appointment Booking Automation",
        flow: [
          "Lead clicks booking link",
          "Calendar sync",
          "Zoho CRM updated",
          "Reminder emails",
          "SMS reminder",
          "No-show follow-up automation"
        ]
      },
      {
        id: "product-matching",
        title: "5️⃣ Product Matching System",
        flow: [
          "User answers quiz",
          "OpenAI analyzes answers",
          "Best product/service recommended",
          "CRM tagged",
          "Follow-up campaign triggered"
        ]
      },
      {
        id: "plan-generator",
        title: "6️⃣ Customized Plan Generator",
        flow: [
          "Client submits requirements",
          "Zapier sends to OpenAI",
          "OpenAI generates tailored plan",
          "PDF generated",
          "Auto email sent",
          "Sales notified"
        ]
      },
      {
        id: "ecommerce-assistant",
        title: "7️⃣ E-commerce AI Shopping Assistant",
        flow: [
          "Visitor chats with AI",
          "AI understands intent",
          "Recommends products",
          "Tracks behavior",
          "Triggers abandoned cart sequence"
        ]
      }
    ]
  },
  "3": {
    name: "AI Chatbot & Experience Suite",
    description: "Automate conversations & support. Built using: Botpress + OpenAI",
    services: [
      {
        id: "website-chatbot",
        title: "8️⃣ Website AI Chatbot",
        extra: "Captures: Name, Need, Budget. Sends to CRM."
      },
      {
        id: "staff-training",
        title: "9️⃣ Staff Training Chatbot",
        flow: [
          "Employee asks question",
          "Bot searches knowledge base",
          "AI answers instantly",
          "Logs query",
          "Manager dashboard updates"
        ]
      },
      {
        id: "onboarding-assistant",
        title: " Onboarding Chat Assistant",
        flow: [
          "New client signs",
          "Bot guides onboarding",
          "Collects documents",
          "Updates CRM",
          "Notifies project team"
        ]
      },
      {
        id: "airbnb-support",
        title: "11️⃣ Airbnb Guest Support Chatbot",
        extra: "Guest asks: Check-in time, WiFi password, Nearby attractions. Bot replies instantly. Escalates to human if needed."
      },
      {
        id: "restaurant-chatbot",
        title: "12️⃣ Restaurant Chatbot System",
        extra: "Customer: Views menu, Books table, Places order. Order sent to backend. CRM updated."
      },
      {
        id: "sop-search",
        title: "13️⃣ SOP Search Chatbot",
        extra: "Employee types: “How to process refund?”. AI searches SOP database. Returns exact procedure."
      }
    ]
  },
  "4": {
    name: "AI Operations & Workflow Automation",
    description: "Internal automation.",
    services: [
      {
        id: "crm-automation",
        title: "14️⃣ AI CRM Automation",
        flow: [
          "Auto pipeline stage updates",
          "Auto task assignment",
          "Auto deal probability scoring"
        ]
      },
      {
        id: "workflow-automation",
        title: "15️⃣ Internal Workflow Automation",
        flow: [
          "New client signed",
          "Project created in Zoho Projects",
          "Task assigned",
          "Slack/Email notification",
          "Invoice generated"
        ]
      },
      {
        id: "hr-automation",
        title: "16️⃣ HR & Team Automation",
        flow: [
          "New hire added",
          "Onboarding checklist auto-created",
          "Training bot assigned",
          "Document folder created"
        ]
      }
    ]
  },
  "5": {
    name: "AI Retention & Growth Systems",
    description: "Increase lifetime value.",
    services: [
      {
        id: "email-automation",
        title: "17️⃣ AI Email Automation",
        extra: "Triggered by: New lead, Missed call, Abandoned cart, No-show, Upsell opportunity. Multi-step sequences."
      },
      {
        id: "content-automation",
        title: "18️⃣ AI Content Automation",
        flow: [
          "Client requests content",
          "OpenAI generates blogs, captions, scripts",
          "Stored",
          "Approved",
          "Scheduled"
        ]
      },
      {
        id: "analytics-dashboard",
        title: "19️⃣ AI Analytics & Intelligence Dashboard",
        flow: [
          "Zoho CRM data",
          "Synced to Zoho Analytics",
          "Dashboard shows: Leads, Conversion rate, Revenue, Appointment rate, Sales rep performance",
          "Updates automatically"
        ]
      }
    ]
  }
};

export const plans = [
  { id: 'basic', name: 'Basic', price: '99', desc: 'Essential Automation Setup' },
  { id: 'pro', name: 'Pro', price: '299', desc: 'Full Pipeline Integration' },
  { id: 'premium', name: 'Premium', price: '999', desc: 'Custom AI Strategy & Support' },
];
