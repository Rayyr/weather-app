# First App - Weather Forecast

A modern Next.js weather application that provides real-time weather forecasts using the OpenWeatherMap API.

## Features

- 🌤️ Real-time weather information for any city
- 📅 Multi-day weather forecast
- 🎨 Modern UI with Tailwind CSS
- ⚡ Built with Next.js 16 and React 19
- ⚙️ TypeScript support
- 🔍 ESLint configuration for code quality

## Tech Stack

- **Framework:** [Next.js]16.2.4
- **React:** 19.2.4
- **Styling:** [Tailwind CSS] 4.2.4
- **Language:** TypeScript 5
- **Linting:** ESLint 9
- **API:** [OpenWeatherMap API](https://openweathermap.org/)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/first-app.git
cd first-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file and add your OpenWeatherMap API key:
```env
# Get your free API key from https://openweathermap.org/
NEXT_PUBLIC_API_KEY=your_api_key_here
//NEXT_PUBLIC..:to mske the key accesable from client side which is the browser
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The app will automatically reload as you make changes to the code.

### Building for Production

```bash
npm run build
npm start
```

 

## Project Structure

```
first-app/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main weather page component
│   ├── layout.tsx         # Root layout
│   ├── app.css            # App-specific styles
│   └── globals.css        # Global styles
├── public/                # Static assets
├── assets/                # Image assets
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── eslint.config.mjs      # ESLint configuration
```

## How to Use

1. Enter a city name in the search box
2. View current weather and forecast data
3. Click on specific days to see detailed information
4. Get alerts if the city is not found

## Environment Variables

- `NEXT_PUBLIC_WEATHER_API_KEY` - Your OpenWeatherMap API key (required)

 
 
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
