export const plansMap = [
    {
      id: "basic",
      name: "Basic",
      description: "Get started with SpeakEasy!",
      price: "10",
      items: ["3 Blog Posts", "3 Transcription"],
      paymentLink: "https://buy.stripe.com/test_eVa3fvcnXaTTb3a4gg",
      priceId:"price_1Q97yC1Eg4hSxn8HFni7s1Ve"

    },
    {
      id: "pro",
      name: "Pro",
      description: "All Blog Posts, let’s go!",
      price: "19.99",
      items: ["Unlimited Blog Posts", "Unlimited Transcriptions"],
      paymentLink: "https://buy.stripe.com/test_3cs4jzew58LL6MU4gh",
      priceId:"price_1Q97yC1Eg4hSxn8HbE2mFhiL"
    },
  ];
  
  export const ORIGIN_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "";