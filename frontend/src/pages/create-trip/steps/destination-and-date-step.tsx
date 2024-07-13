import { MapPin, Calendar, Settings2, ArrowRight, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

interface DestinationAndDataStepProps{
  isGuestsInputOpen: boolean
  range: DateRange | undefined
  closeGuestsInput: () => void
  openGuestsInput: () => void
  setDestination: (destination: string) => void
  setRange: (dates: DateRange | undefined) => void
  
}

 

export function DestinationAndDataStep(props: DestinationAndDataStepProps){
  const [isDatePikerOpen, setIsDatePikerOpen] = useState(false);

  function openDatePiker(){
    setIsDatePikerOpen(true);
  }
  function closeDatePiker(){
    setIsDatePikerOpen(false);
  }


  const displayedDate = props.range && props.range.from && props.range.to ? format(props.range.from,'d/LL').concat('-').concat(format(props.range.to,'d/LL'))  : null

  return(
    <div className="bg-zinc-900 text-zinc-300 h-16 rounded-xl px-4 flex items-center shadow-shape">

    <div className="flex items-center gap-2 flex-1">
      <MapPin className="size-5" />
      <input 
        disabled={props.isGuestsInputOpen} 
        type="text" 
        placeholder="Para onde você vai?" 
        className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
        onChange={event => props.setDestination(event.target.value)}
      />
    </div>

    <button onClick={openDatePiker} className="flex items-center gap-2" disabled={props.isGuestsInputOpen} >
      <Calendar className="size-5" />
      <span className="text-lg text-ellipsis text-left text-zinc-400 w-40 flex-1">
        {displayedDate || 'Quando?'} 

      </span>
      
    </button>

    <div className="w-px h-6 bg-zinc-800 mx-2"></div>

    {props.isGuestsInputOpen ?(
    <Button variant="segundary" onClick={props.closeGuestsInput} >
      Alterar local/data 
      <Settings2 className="size-5" />
    </Button>
    ):
    (
      <Button onClick={props.openGuestsInput}>
        Continuar 
        <ArrowRight className="size-5" />
      </Button>
    )}

    {isDatePikerOpen &&(
        <div className="fixed bg-black/60 inset-0 flex items-center justify-center">
          <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
           <div className="space-y-2">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  Escolha Data da Viagem
                </h2>
                <button onClick={closeDatePiker}>
                  <X className="size-5" />
                </button>
              </div>
            </div>
            <DayPicker mode="range" selected={props.range} onSelect={props.setRange}  />


          </div>
        </div>
    )}

  
  </div>
    
  )
}