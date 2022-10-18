export default function Hero() {
    return (
      <div className="flex 
                      flex-col 
                      md:justify-center 
                      md:items-center 
                      text-left 
                      md:text-center 
                      gap-5 
                      z-10">
        <div className="bg-skin-yellow 
                        py-1 
                        px-2 
                        sm:px-4 
                        max-w-xs 
                        rounded-sm 
                        text-sm 
                        tracking-wider 
                        font-semibold">
            ARE YOU A WEB3 WINE GEEK?
        </div>
        <div className="font-bold text-5xl leading-snug lg:text-6xl tracking-tight md:max-w-xl lg:max-w-2xl lg:leading-snug">
            Join us to shape the future of P2P wine markets
        </div>
  
        <div className="text-base leading-7 text-skin-hero-body max-w-lg">
            A growing community of wine enthusiasts are creating wine data 
            resources as a public good and kicking off a badass P2P marketplace 
            for fine drops.
        </div>
      </div>
    );
  }
  