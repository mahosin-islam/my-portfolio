
import './globals.css';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-[#F9FAFB]">
      
            <main className="flex-1 overflow-y-auto">
              {children}
            </main>
   
      </body>
    </html>
  );
}