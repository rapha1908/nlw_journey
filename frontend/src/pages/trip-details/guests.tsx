import { CircleDashed, UserCog } from "lucide-react";

export function Guests(){
  return(
    <div className="space-y-6">
            <h2 className="text-xl font-semibold">Convidados</h2>
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-2">
                <div className="space-y1.5 flex-1">
                  <span className="block font-medium text-zinc-100">Jessica White</span>
                  <span className="block text-zinc-500 text-sm truncate text-sm">
                    jessica.white44@yahoo.com
                  </span>
                </div>
                <CircleDashed className="text-zinc-400 size-5" />
              </div>

            </div>

            <div className="space-y-5">
              <div className="flex items-center justify-between gap-2">
                <div className="space-y1.5 flex-1">
                  <span className="block font-medium text-zinc-100">Dr. Rita Pacocha</span>
                  <span className="block text-zinc-500 text-sm truncate text-sm">
                    lacy.stiedemann@gmail.com                  
                  </span>
                </div>
                <CircleDashed className="text-zinc-400 size-5" />
              </div>

            </div>


            <button className="w-full bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700">
              <UserCog className="size-5" />
              Gerenciar convidados 
            </button>

          </div>

  )
}