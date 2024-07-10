import { MapPin, Calendar, ArrowRight, UserRoundPlus,Settings2,X,AtSign,Plus } from "lucide-react"
import { FormEvent, FormEventHandler, useState } from "react"


export function App() {

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)

  const [emailsToInvite, setEmailsToInvite] = useState([
    'rapha.santi@gmail.com',
  ])

//crio uma função para alterar o estado
  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput(){
    setIsGuestsInputOpen(false)
  }


  function openGuestsModal() {
    setIsGuestsModalOpen(true)
  }
  function closeGuestsModal() {
    setIsGuestsModalOpen(false)
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) {
      return
    }

    if (emailsToInvite.includes(email)) {
      return
    }


    setEmailsToInvite(
      [...emailsToInvite, email]
    )

    event.currentTarget.reset()

  }

  function removeEmailsToInvite(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)
    setEmailsToInvite(newEmailList)

  }


  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10 gap-3">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" className="" />
          <p className="text-zinc-300 text-lg ">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className="space-y-4">
          <div className="bg-zinc-900 text-zinc-300 h-16 rounded-xl px-4 flex items-center shadow-shape">

            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5" />
              <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="size-5" />
              <input disabled={isGuestsInputOpen} type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 outline-none w-40" />
            </div>

            <div className="w-px h-6 bg-zinc-800 mx-2"></div>

            {isGuestsInputOpen ?(
            <button onClick={closeGuestsInput} className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
              Alterar local/data 
              <Settings2 className="size-5" />
            </button>
            ):
            (
              <button onClick={openGuestsInput} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                Continuar 
                <ArrowRight className="size-5" />
              </button>
            )}

          
          </div>

          {isGuestsInputOpen && (
              <div className="bg-zinc-900 text-zinc-300 h-16 rounded-xl px-4 flex items-center shadow-shape">

                <button onClick={openGuestsModal} className="flex items-center gap-2 flex-1">
                  <UserRoundPlus className="size-5" />
                  <span className="text-lg placeholder-zinc-400 outline-none flex-1 text-left">Para onde você vai?</span>
                </button>
  
                <div className="w-px h-6 bg-zinc-800 mx-2"></div>
  
                <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                  Confirmar viagem 
                  <ArrowRight className="size-5" />
                </button>
              </div>
          )}


        </div>


            <p className="text-zinc-500 text-sm">Ao planejar sua viagem pela plann.er você automaticamente concorda<br/>
            com nossos <a href="#" className="text-zinc-300 underline">termos de uso</a> e <a href="#" className="text-zinc-300 underline">políticas de privacidade.</a></p>
      </div>


        {isGuestsModalOpen && (
          <div className="fixed bg-black/60 inset-0 flex items-center justify-center">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
             <div className="space-y-2">
              <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">
                    Selecionar convidados
                  </h2>
                  <button onClick={closeGuestsModal}>
                    <X className="size-5" />
                  </button>
                </div>
                <p className="text-zinc-400 text-sm">
                  Os convidados irão receber e-mails para confirmar a participação na viagem.
                </p>
            
            </div>

            <div className="flex flex-wrap gap-2">
              {emailsToInvite.map((email) =>{
                return(
                  <div key={email} className="py-1.5 px-2.5 bg-zinc-800 rounded-md flex items-center gap-2">
                  <span className="text-zinc-400">{email}</span>
                  <button onClick={() => removeEmailsToInvite(email)}>
                    <X className="size-3" />
                  </button>
                </div>
                )
                })
              }
             

            </div>

            <form onSubmit={addNewEmailToInvite} className="bg-zinc-950 text-zinc-400 p-2.5 rounded-lg flex items-center">
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
        )}






    </div>
  )
}

