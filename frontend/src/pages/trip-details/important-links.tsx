import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

interface ImportantLinksProps{
  openCreateLinkModal: () => void
}


export function ImportantLinks(props: ImportantLinksProps){
  return(
    <div className="space-y-6">
    <h2 className="text-xl font-semibold">Links Importantes</h2>
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-2">
        <div className="space-y1.5 flex-1">
          <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
          <a href="#" className="block text-zinc-500 text-sm truncate hover:text-zinc-200">
            https://www.airbnb.com.br/rooms/104700011
          </a>
        </div>
        <Link2 className="text-zinc-400 size-5" />
      </div>

    </div>

    <div className="space-y-5">
      <div className="flex items-center justify-between gap-2">
        <div className="space-y1.5 flex-1">
          <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
          <a href="#" className="block text-zinc-500 text-sm truncate hover:text-zinc-200">
            https://www.airbnb.com.br/rooms/104700011
          </a>
        </div>
        <Link2 className="text-zinc-400 size-5" />
      </div>

    </div>


    <Button variant="segundary" onClick={props.openCreateLinkModal}>
      <Plus className="size-5" />
      Cadastrar novo link 
    </Button>

  </div>
 
  )
}