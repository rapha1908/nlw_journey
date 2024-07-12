import { Plus } from "lucide-react";
import { useState } from "react"
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { CreateListModal } from "./create-list-modal";
import { Activities } from "./activities";
import { DestinationAndDate } from "./destination-and-date";
import { Button } from "../../components/button";




export function TripDetail(){
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)
  const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] = useState(false)
  const [isCreateLinkGuestModalOpen, setIsCreateGuestModalOpen] = useState(false)

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

  function openCreateGuestModal(){
    setIsCreateGuestModalOpen(true);
  }
  function closeCreateGuestModal(){
    setIsCreateGuestModalOpen(false);
  }

  return (
    <div className="max-w-6xl py-10 mx-auto space-y-8">
      <DestinationAndDate />   
      <main className="flex gap-16 px-4 ">
        
        <div className="flex-1 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <Button onClick={openCreateActivityModal} >
              <Plus className="size-5" />
              Cadastrar atividade 
            </Button>
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