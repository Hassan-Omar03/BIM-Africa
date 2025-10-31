import React from 'react'
import map from "../../Assests/map.png"

export default function Map() {
  return (
    <div>
         <section className="relative z-20 mx-auto w-full max-w-[1200px] mt-12 sm:mt-16 py-10 sm:py-16 lg:py-20 overflow-hidden">
              {/* background map */}
<div
  className="absolute inset-0 z-0 bg-center bg-no-repeat
             bg-cover md:bg-cover sm:bg-contain"
  style={{
    backgroundImage: `url(${map.src})`,
  }}
/>

                {/* optional dark overlays for better text contrast */}
                {/* <div className="absolute inset-0 z-10 bg-black/60 sm:bg-black/40 pointer-events-none" /> */}
        
                {/* content */}
                <div className="relative z-20 mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-10 text-center sm:text-left">
                  <h2 className="text-white text-3xl sm:text-5xl md:text-6xl  leading-tight mb-6">
                    Our{" "}
                    <span className="text-[#ff1f00]">Global</span>
                    <br className="hidden sm:block" />
                    <span className="block sm:hidden mt-2">Offices</span>
                    <span className="hidden sm:inline"> Offices</span>
                  </h2>
        
                  {/* left-accent paragraph */}
                  <div className="relative mb-10 max-w-3xl">
                    <span className="absolute left-0 top-2 bottom-2 w-[5px] bg-[#ff1f00] rounded-full" />
                    <p className="text-white/80 pl-6">
                      We are proud to have a global presence with offices in two <br /> strategic
                      locations, connecting Europe, Africa, and Asia through <br /> our
                      international network.
                    </p>
                  </div>
        
                  <div className="grid lg:grid-cols-2 pt-6 gap-6 lg:gap-8">
                    {/* Luxembourg */}
                    <div className="bg-black border border-[#2a2a2a]  rounded-3xl p-6 lg:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-black/70 border border-[#ff1f00] text-[#ff1f00] flex items-center justify-center font-bold text-2xl tracking-tight">
                          LU
                        </div>
                        <h3 className="text-white text-2xl">Luxembourg</h3>
                      </div>
                      <p className="text-[#ff1f00] font-medium mb-2">At the heart of Europe’s business hub.</p>
                      <p className="text-white/85 text-sm">A trusted point of contact for our European clientele.</p>
                    </div>
        
                    {/* Mauritius */}
                    <div className="bg-black border border-[#2a2a2a] rounded-3xl p-6 lg:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-black/70 border border-[#ff1f00] text-[#ff1f00] flex items-center justify-center font-bold text-2xl tracking-tight">
                          MU
                        </div>
                        <h3 className="text-white text-2xl">MAURITIUS</h3>
                      </div>
                      <p className="text-[#ff1f00] font-medium mb-2">At the heart of Africa’s business hub.</p>
                      <p className="text-white/85 text-sm">The heart of our operations, connecting Africa to the world.</p>
                    </div>
                  </div>
                </div>
              </section>
    </div>
  )
}
