import './App.css'
// clip-path: polygon(0 0, 0 87%, 11% 100%, 100% 100%, 100% 17%, 96% 14%, 96% 0);
// second option for the nav item clip-path: polygon(0% 0%, 100% 0%, 100% 10%, 72% 11%, 60% 18%, 35% 18%, 23% 11%, 1% 10%);

function App() {

  return (
    <>
    @import "tailwindcss";

@theme {
  /* ... */
}
@layer components {
  .clip {
 clip-path: polygon(0% 0%, 100% 0%, 100% 40%, 70% 29.82%, 65.64% 100%, 31.91% 100%, 29.04% 29.14%, 24.94% 29.04% ,0% 40%);
/* background-color: #000000;
    clip-path: path("M 0,0 L 1920,0 L 1920,10 L 853,10 L 843,60 L 467,60 L 457,10 L 0,10  Z"); */
  }
}
<nav class="w-full h-16 bg-[#3B0270] clip">
    <ul class="flex h-full justify-center space-x-4 text-[#20c5b5]  items-center">
      <li>Home</li>
      <li>About</li>
      <li>Service</li>
      <li>Certeficate</li>
      <li>Projects</li>
    </ul>
</nav>
    </>
  )
}

export default App
