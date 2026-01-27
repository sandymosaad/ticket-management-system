import style from "./deleteConfirm.module.css"
import {deleteTicket} from '../../lib/data-service'
import { useRouter } from "next/navigation";
import { toast } from 'sonner';

export default function DeleteConfirm({id , setShowDeleteModal}){
const router =useRouter()
async function handleDelete() {
  await deleteTicket(id);
  setShowDeleteModal(false)
  toast.success('Ticket deleted successfully!');
  router.push("/tickets");
}

    return<>
     <div className={style.modalOverlay}>
    <div className={style.modal}>
        <h1>Delete Ticket</h1>
        <p>Are you sure you want to delete this ticket?</p>
        <div className={style.buttons}>
            <button className={style.confirmButton} onClick={handleDelete}>Ok</button>
            <button className={style.cancelButton} onClick={()=>setShowDeleteModal(false)}>Cancel</button>
        </div>
    </div>
    </div>

        </>
}