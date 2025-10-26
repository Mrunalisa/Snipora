import { useLocation } from "react-router-dom";

function Paste() {
  const location = useLocation();
  const pastes = location.state?.pastes || [];

  return (  
    <div>
    <h1> Pastes</h1>
   
    {pastes.map(paste => (
      <><h3>{paste.title}</h3><p>{paste.content}</p></>
    ))}
    </div>
  );

}