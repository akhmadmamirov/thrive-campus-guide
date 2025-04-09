
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';

interface DailyQuoteProps {
  className?: string;
}

const quotes = [
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    text: "Mental health is not a destination, but a process. It's about how you drive, not where you're going.",
    author: "Noam Shpancer"
  },
  {
    text: "You don't have to control your thoughts. You just have to stop letting them control you.",
    author: "Dan Millman"
  },
  {
    text: "Self-care is not self-indulgence, it is self-preservation.",
    author: "Audre Lorde"
  },
  {
    text: "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.",
    author: "Unknown"
  },
  {
    text: "Be patient with yourself. Self-growth is tender; it's holy ground. There's no greater investment.",
    author: "Stephen Covey"
  },
  {
    text: "The most beautiful people we have known are those who have known defeat, suffering, struggle, loss, and have found their way out of the depths.",
    author: "Elisabeth Kübler-Ross"
  }
];

export function DailyQuote({ className }: DailyQuoteProps) {
  const [quote, setQuote] = useState<{text: string, author: string} | null>(null);
  
  useEffect(() => {
    // Generate a random quote on component mount based on the day
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const quoteIndex = dayOfYear % quotes.length;
    setQuote(quotes[quoteIndex]);
  }, []);

  if (!quote) return null;

  return (
    <Card className={className}>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Quote className="h-5 w-5 mt-1 text-thrive-purple" />
          <div>
            <p className="text-sm font-medium">{quote.text}</p>
            <p className="text-xs text-gray-500 mt-2">— {quote.author}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
