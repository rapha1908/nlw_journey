import { UserRoundPlus, ArrowRight } from "lucide-react";

interface  InviteGuestsStepProps{
  openGuestsModal: ()=>void
  emailsToInvite: string[]
  openConfirmTripModal: ()=>void

}

export function InviteGuestsStep({
  openGuestsModal,
  emailsToInvite,
  openConfirmTripModal
}: InviteGuestsStepProps){
  return (
    <div className="bg-zinc-900 text-zinc-300 h-16 rounded-xl px-4 flex items-center shadow-shape">

                <button onClick={openGuestsModal} className="flex items-center gap-2 flex-1">
                  <UserRoundPlus className="size-5" />
                  {emailsToInvite.length > 0 ? (
                    <span className="text-lg placeholder-zinc-100 outline-none flex-1 text-left">{emailsToInvite.length} pessoa(s) convidada(s)</span>

                  ):
                  (
                  <span className="text-lg placeholder-zinc-400 outline-none flex-1 text-left">Quem estará na viagem?</span>
                  )}
                </button>
  
                <div className="w-px h-6 bg-zinc-800 mx-2"></div>
  
                <button onClick={openConfirmTripModal} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                  Confirmar viagem 
                  <ArrowRight className="size-5" />
                </button>
              </div>
  )
}