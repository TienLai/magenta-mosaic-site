
import BackgroundVideo from '@/components/BackgroundVideo';
import Profile from '@/components/Profile';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between relative overflow-hidden">
      <BackgroundVideo />
      
      <div className="absolute top-0 left-0 w-full py-4 px-6 flex justify-end">
        <a 
          href="/resume.pdf" 
          className="px-6 py-2 rounded-full bg-gradient-to-r from-redMagenta to-magenta text-white font-medium hover:opacity-90 transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
      
      <main className="container z-10 px-4 mt-20 mb-24">
        <Profile />
      </main>
      
      <footer className="w-full py-4 text-white/60 text-sm z-10 mt-8 mb-4">
        <p>© {new Date().getFullYear()} Tien Lai. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
