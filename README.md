# Perplexity AI Clone

A fully functional AI-powered search and reasoning platform built with Next.js 14, TypeScript, and Tailwind CSS. This clone replicates the core functionality of Perplexity AI with real-time search capabilities.

## Features

- 🔍 **AI-Powered Search** - Get instant answers with intelligent reasoning
- 💬 **Chat Interface** - Conversational UI similar to Perplexity
- 📚 **Source Citations** - View sources for all answers
- 🎨 **Modern UI** - Clean, dark-themed interface with smooth animations
- ⚡ **Real-time Responses** - Fast, streaming responses
- 📱 **Responsive Design** - Works on all devices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Lucide React Icons
- **Markdown**: React Markdown with GFM support
- **AI Integration**: Bhindi API / OpenRouter

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Bhindi API key (get one at [bhindi.io](https://bhindi.io))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/prakharmandloi/perplexity-clone.git
cd perplexity-clone
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Add your Bhindi API key to `.env`:
```env
BHINDI_API_KEY=your_api_key_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add your `BHINDI_API_KEY` environment variable
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/prakharmandloi/perplexity-clone)

### Manual Deployment

```bash
npm run build
npm start
```

## Configuration

### API Integration

The app uses Bhindi's Perplexity agent by default. To customize:

Edit `app/api/search/route.ts`:

```typescript
// Change the agent or add multiple agents
agents: ['perplexity', 'exa', 'google-search']
```

### Styling

Customize the theme in `app/globals.css`:

```css
:root {
  --background: #0a0a0a;
  --foreground: #ededed;
}
```

## Project Structure

```
perplexity-clone/
├── app/
│   ├── api/
│   │   └── search/
│   │       └── route.ts      # API endpoint for search
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main chat interface
├── public/                   # Static assets
├── .env.example              # Environment variables template
├── next.config.mjs           # Next.js configuration
├── package.json              # Dependencies
├── tailwind.config.ts        # Tailwind configuration
└── tsconfig.json             # TypeScript configuration
```

## Features Breakdown

### Chat Interface
- Real-time message streaming
- User and AI message differentiation
- Auto-scroll to latest message
- Loading states

### Search API
- Integrated with Bhindi Perplexity agent
- Error handling and fallbacks
- Source citation extraction
- Markdown response formatting

### UI/UX
- Dark theme optimized for readability
- Smooth animations and transitions
- Responsive design for mobile/tablet/desktop
- Custom scrollbar styling

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `BHINDI_API_KEY` | Your Bhindi API key | Yes |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For issues or questions:
- Open an issue on GitHub
- Contact: prakharmandloi22@gmail.com

## Acknowledgments

- Inspired by [Perplexity AI](https://perplexity.ai)
- Built with [Bhindi](https://bhindi.io)
- Powered by Next.js and Vercel

---

Made with ❤️ by [Prakhar Mandloi](https://github.com/prakharmandloi)
