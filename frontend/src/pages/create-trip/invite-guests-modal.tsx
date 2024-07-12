import { X, AtSign, Plus } from "lucide-react"
import { FormEvent } from "react";

interface InviteGuestsModalProps{
  closeGuestsModal: () => void
  emailsToInvite: string[]
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
  removeEmailsToInvite: (email: string) => void
}


export function InviteGuestsModal(props: InviteGuestsModalProps){
  return(
    <div className="fixed bg-black/60 inset-0 flex items-center justify-center">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
             <div className="space-y-2">
              <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">
                    Selecionar convidados
                  </h2>
                  <button onClick={props.closeGuestsModal}>
                    <X className="size-5" />
                  </button>
                </div>
                <p className="text-zinc-400 text-sm">
                  Os convidados irão receber e-mails para confirmar a participação na viagem.
                </p>
            
            </div>

            <div className="flex flex-wrap gap-2">
              {props.emailsToInvite.map((email) =>{
                return(
                  <div key={email} className="py-1.5 px-2.5 bg-zinc-800 rounded-md flex items-center gap-2">
                  <span className="text-zinc-400">{email}</span>
                  <button onClick={() => props.removeEmailsToInvite(email)}>
                    <X className="size-3" />
                  </button>
                </div>
                )
                })
              }
             

            </div>

            <form onSubmit={props.addNewEmailToInvite} className="bg-zinc-950 text-zinc-400 p-2.5 rounded-lg flex items-center">
              <div className="flex items-center gap-2 flex-1 px-2" >
                <AtSign className="size-4" />
                <input 
                  type="email"
                  name="email" 
                  placeholder="Digite o e-mail do convidado" 
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-sm" 
                />
              </div>
              <button type="submit" className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                  Convidar
                  <Plus className="size-5" />
                </button>

             

            </form>

            </div>

          </div>
  )
  
}