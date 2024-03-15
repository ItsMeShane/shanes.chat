const MessagePrompts = [
    "Tell me about Shane.",
    "What kind of professional experience does Shane have?",
    "What projects has Shane worked on?",
    "What technologies is Shane proficient in?",
    "What challenges has Shane overcome in previous projects?",
    "How does Shane stay updated with industry trends?",
    "What certifications or training does Shane have?",
    "Can you provide examples of Shane's problem-solving skills?",
    // "Tell me about a successful collaboration Shane has been a part of.",
    "How does Shane approach learning new technologies?",
    "What programming languages is Shane comfortable working with?",
    // "Describe a situation where Shane demonstrated leadership skills.",
    // "What methodologies does Shane follow in project development?",
    // "What feedback have colleagues given about working with Shane?",
    "How does Shane prioritize and manage time effectively?",
    "Share a notable achievement or recognition Shane has received.",
    "What are Shane's goals for professional development?",
    "Can you provide examples of Shane's attention to detail in projects?",
    "How can I contact Shane?",
  ];


  export default function getRandomMessage() {
    const index = Math.floor(Math.random() * MessagePrompts.length);
    return MessagePrompts[index];
  }
  