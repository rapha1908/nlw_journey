import { X, Tag, Calendar } from "lucide-react";

interface isCreateActivityModalProps{
  closeCreateActivityModal: ()=>void

}

export function CreateActivityModal(props:isCreateActivityModalProps){
  return (
    <div className="fixed bg-black/60 inset-0 flex items-center justify-center">
    <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
     <div className="space-y-2">
      <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">
           Cadastrar atividade
          </h2>
          <button onClick={props.closeCreateActivityModal}>
            <X className="size-5" />
          </button>
        </div>
        <p className="text-zinc-400 text-sm">
        Todos convidados podem visualizar as atividades.
        </p>
    
    </div>

    <form className="space-y-3">
      <div className="flex items-center gap-2 flex-1 px-5 py-2.5 bg-zinc-950 text-zinc-400 p-2.5 rounded-lg " >
        <Tag className="size-4" />
        <input 
          type="text"
          name="activity" 
          placeholder="Qual a atividade?" 
          className="bg-transparent  placeholder-zinc-400 outline-none flex-1 text-sm" 
        />
      </div>
      <div className="flex items-center gap-2">
      <div className="flex items-center gap-2 flex-1 px-5 py-2.5 bg-zinc-950 text-zinc-400 p-2.5 rounded-lg " >
        <Calendar className="size-4" />
        <input 
          type="datetime-local"
          name="occurs_at" 
          placeholder="Data e Horario da Atividades" 
          className="bg-transparent placeholder-zinc-400 outline-none flex-1 text-sm [color-scheme:dark]" 
        />
      </div>

      </div>
      
      <button type="submit" className="bg-lime-300 w-full justify-center text-lime-950 rounded-lg px-5 h-10 font-medium flex items-center gap-2 hover:bg-lime-400">
        Salvar atividade
      </button>

     

    </form>

    </div>

  </div>

  )
}