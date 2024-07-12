import { Plus } from "lucide-react";
import { useState } from "react"
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { CreateListModal } from "./create-list-modal";
import { Activities } from "./activities";
import { DestinationAndDate } from "./destination-and-date";




export function TripDetail(){
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)
  const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] = useState(false)

  function openCreateActivityModal(){
    setIsCreateActivityModalOpen(true);
  }
  function closeCreateActivityModal(){
    setIsCreateActivityModalOpen(false);
  }

  function openCreateLinkModal(){
    setIsCreateLinkModalOpen(true);
  }
  function closeCreateLinkModal(){
    setIsCreateLinkModalOpen(false);
  }

  return (
    <div className="max-w-6xl py-10 mx-auto space-y-8">
      <DestinationAndDate />   
      <main className="flex gap-16 px-4 ">
        
        <div className="flex-1 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button onClick={openCreateActivityModal} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
              <Plus className="size-5" />
              Cadastrar atividade 
            </button>
          </div>

          <Activities />

        </div>
        
        
        <div className="w-60  space-y-6">
         <ImportantLinks 
         openCreateLinkModal={openCreateLinkModal}
         />
          <div className="w-full h-px bg-zinc-800"></div>
          <Guests />
        </div>

      </main>


      {isCreateActivityModalOpen && (
        <CreateActivityModal 
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}

      {isCreateLinkModalOpen && (
        <CreateListModal 
          closeCreateLinkModal={closeCreateLinkModal}
        />
      )}

    </div>
  )
}