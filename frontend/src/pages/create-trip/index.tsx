import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { InviteGuestsModal } from "./invite-guests-modal"
import { ConfirmTripModal } from "./confirm-trip-modal"
import { DestinationAndDataStep } from "./steps/destination-and-date-step"
import { InviteGuestsStep } from "./steps/invite-guests-step"
import { DateRange } from "react-day-picker"
import { api } from "../../lib/axios"


export function CreateTripPage() {
const navigate = useNavigate()



  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

  const [emailsToInvite, setEmailsToInvite] = useState([])



  //colecting information
  const [destination,setDestination] = useState('')
  const [range, setRange] = useState<DateRange | undefined>();
  const [ownerName,setOwnerName] = useState('')
  const [ownerEmail,setOwnerEmail] = useState('')





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
  
  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true)
  }
  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false)
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
  async function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!destination) {
      return
    }

    if (!range?.from || !range?.to) {
      return
    }

    if (emailsToInvite.length === 0) {
      return
    }

    if (!ownerName || !ownerEmail) {
      return
    }

    console.log(destination)
    console.log(range)
    console.log(ownerName)
    console.log(ownerEmail)
    console.log(emailsToInvite)
    

    const response = await api.post('/trips', {
      destination,
      starts_at: range.from,
      ends_at: range.to,
      emails_to_invite: emailsToInvite,
      owner_name: ownerName,
      owner_email: ownerEmail
    })

    const { tripId } = response.data

    navigate(`/trips/${tripId}`)
  }


  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10 gap-3">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" className="" />
          <p className="text-zinc-300 text-lg ">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className="space-y-4">
          <DestinationAndDataStep 
            closeGuestsInput={closeGuestsInput}
            openGuestsInput={openGuestsInput}
            isGuestsInputOpen={isGuestsInputOpen}
            setDestination ={setDestination}
            setRange ={setRange}
            range ={range}
          />
      
          {isGuestsInputOpen && (
              <InviteGuestsStep 
                emailsToInvite={emailsToInvite}
                openConfirmTripModal={openConfirmTripModal}
                openGuestsModal={openGuestsModal}
              />
          )}


        </div>
            <p className="text-zinc-500 text-sm">Ao planejar sua viagem pela plann.er você automaticamente concorda<br/>
            com nossos <a href="#" className="text-zinc-300 underline">termos de uso</a> e <a href="#" className="text-zinc-300 underline">políticas de privacidade.</a></p>
      </div>


        {isGuestsModalOpen && (
          <InviteGuestsModal 
            emailsToInvite={emailsToInvite}
            addNewEmailToInvite={addNewEmailToInvite}
            closeGuestsModal={closeGuestsModal}
            removeEmailsToInvite={removeEmailsToInvite}
          />        
        )}

        {isConfirmTripModalOpen &&(
          <ConfirmTripModal 
            closeConfirmTripModal={closeConfirmTripModal}
            createTrip={createTrip}
            setOwnerName={setOwnerName}
            setOwnerEmail={setOwnerEmail}
            
          />
          
        )}
       
    </div>
  )
}

