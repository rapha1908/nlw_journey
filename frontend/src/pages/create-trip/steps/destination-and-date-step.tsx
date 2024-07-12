import { MapPin, Calendar, Settings2, ArrowRight } from "lucide-react";

interface DestinationAndDataStepProps{
  isGuestsInputOpen: boolean
  openGuestsInput: () => void
  closeGuestsInput: () => void
  
}



export function DestinationAndDataStep(props: DestinationAndDataStepProps){
  return(
    <div className="bg-zinc-900 text-zinc-300 h-16 rounded-xl px-4 flex items-center shadow-shape">

    <div className="flex items-center gap-2 flex-1">
      <MapPin className="size-5" />
      <input disabled={props.isGuestsInputOpen} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
    </div>

    <div className="flex items-center gap-2">
      <Calendar className="size-5" />
      <input disabled={props.isGuestsInputOpen} type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 outline-none w-40" />
    </div>

    <div className="w-px h-6 bg-zinc-800 mx-2"></div>

    {props.isGuestsInputOpen ?(
    <button onClick={props.closeGuestsInput} className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
      Alterar local/data 
      <Settings2 className="size-5" />
    </button>
    ):
    (
      <button onClick={props.openGuestsInput} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
        Continuar 
        <ArrowRight className="size-5" />
      </button>
    )}

  
  </div>
    
  )
}