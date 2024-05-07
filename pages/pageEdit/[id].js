import EditPage from "@/js/components/EditPage";
import {useRouter} from 'next/router';
import NavigationBar from "@/js/components/NavigationBar";

export default function Edit() {
  const router = useRouter();
  const { id } = router.query;
    return (
      <div>
        <NavigationBar/>
       <EditPage productId={id}/>
      </div>
      
    )
  }