import Kitchen from "./Kitchen";
import Bath from "./Bath";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";

const FloorPlan = (props) => {
  return ( 
    <>
      <Kitchen />
      <Bath size={'Half'}/>
      <LivingRoom />
      <Bedroom bedNum={1}/>
      <Bath size={'Full'}/>
      <Bedroom bedNum={2}/>
      <Bath size={'Half'}/>
      <Bedroom bedNum={3}/>
    </>
  );
}

export default FloorPlan;