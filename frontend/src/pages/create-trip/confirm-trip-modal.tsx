import { X, User, Mail } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface ConfirmTripModalProps{
  closeConfirmTripModal : () => void
  createTrip : (event: FormEvent<HTMLFormElement>) => void


}


export function ConfirmTripModal(props: ConfirmTripModalProps){
  return(
    <div className="fixed bg-black/60 inset-0 flex items-center justify-center">
    <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
     <div className="space-y-2">
      <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            Confirmar criação da viagem
          </h2>
          <button onClick={props.closeConfirmTripModal}>
            <X className="size-5" />
          </button>
        </div>
        <p className="text-zinc-400 text-sm">
          Para concluir a criação da viagem para <span className="text-zinc-100"> Florianópolis, Brasil</span> nas datas de <span className="text-zinc-100">16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:
        </p>
    
    </div>

    <form onClick={props.createTrip} className="space-y-3">
      <div className="flex items-center gap-2 flex-1 px-5 py-2.5 bg-zinc-950 text-zinc-400 p-2.5 rounded-lg " >
        <User className="size-4" />
        <input 
          type="text"
          name="name" 
          placeholder="Seu nome completo" 
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-sm" 
        />
      </div>
      <div className="flex items-center gap-2 flex-1 px-5 py-2.5 bg-zinc-950 text-zinc-400 p-2.5 rounded-lg " >
        <Mail className="size-4" />
        <input 
          type="email"
          name="email" 
          placeholder="Seu e-mail pessoal" 
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-sm" 
        />
      </div>
      <Button size="full" type="submit" className="bg-lime-300 w-full justify-center text-lime-950 rounded-lg px-5 h-10 font-medium flex items-center gap-2 hover:bg-lime-400">
         Confirmar criação da viagem
      </Button>

     

    </form>

    </div>

  </div>

  )
}