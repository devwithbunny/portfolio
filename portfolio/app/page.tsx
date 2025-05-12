export default function Home() {
  return (
    <>
      <div className="bg-[#000] text-[#F5F5F5] px-[24px]">
        {/* Hero page */}
        <div className="min-h-screen  flex justify-center items-center">
          <div className="flex flex-col gap-[30px] ">
            <div className="pt-[40px] pb-[25px] border-b-[1px] border-gray-500">
              <h1 className="text-[34px] tracking-tighter">About Me</h1>
            </div>
            <div>
              <p className="text-[24px]  tracking-tighter">Once Upon A Time</p>
            </div>
            <div>
              <p className="text-[16px] ">
                Our partners at De-Extinction came to us determined to challenge
                the status quo in disposable packaged goods. Fueled by a desire
                for change, a distaste for empty promises and the will to tackle
                the industry head-on we took the first steps down this path
                together.
              </p>
            </div>
            <div>
              <p className="opacity-[.5] text-[14px] leading-[120%]">
                Valenzuela, Philippines
              </p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="min-h-full pb-[50px]">
          <div className="flex flex-col gap-[20px]">
            <div className="pt-[50px] pb-[24px]">
              <p className="text-[24px] font-semibold">RELEVANT PROJECTS</p>
            </div>
            <div className="w-full border-1 rounded-[10px] h-[200px]"></div>
            <div className="w-full border-1 rounded-[10px] h-[200px]"></div>
            <div className="w-full border-1 rounded-[10px] h-[200px]"></div>
            <div className="w-full border-1 rounded-[10px] h-[200px]"></div>
          </div>
        </div>

        {/* Footer */}

        <div className="h-[377px] pb-[50px] w-full flex justify-start items-center ">
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[2px]">
              <div className="text-[14px]">Twitter</div>
              <div className="text-[14px]">GitHub</div>
              <div className="text-[14px]">LinkedIn</div>
              <div className="text-[14px]">Instagram</div>
            </div>
            <div>
              <p className="text-[14px] opacity-[0.5]">
                © 2025 Koto Studio Ltd, a private limited company incorporated
                in England and Wales under company number 9297454, registered at
                1st Floor, 127-131, Great Suffolk St, London SE1 1PP
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
