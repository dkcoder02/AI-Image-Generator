import ImageGenerator from '@/components/ImageGenerator';
import { Wand2 } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Wand2 className="h-12 w-12 text-purple-400" />
            <h1 className="text-4xl font-bold text-white">AI Image Generator</h1>
          </div>
          <p className="text-gray-400 text-lg">
            Transform your ideas into stunning images using OpenAI&apos;s DALL-E 3
          </p>
        </div>

        <ImageGenerator />
      </div>
    </main>
  );
}