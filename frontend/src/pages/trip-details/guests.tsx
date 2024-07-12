import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

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


            <Button variant='segundary'>
              <UserCog className="size-5" />
              Gerenciar convidados 
            </Button>

          </div>

  )
}