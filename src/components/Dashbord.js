import React, { useState } from "react";
import heartImage from '../heart-svgrepo-com.svg'
function Dashbord() {
    const [nomberMax,setNomberMax]=useState()
    const [score,setScore]=useState(0)
    const [essaie,setEssaie]=useState(3)
    const [resultatfinal,setresultatfinal]=useState()
    const [afficher,setafficher]=useState("")
    const [reponse,setReponse]=useState()
    const [Message,setMessage]=useState()
    const [MessageErr,setMessageErr]=useState()
    const [FinGame,setFinGame]=useState()
    const [stop,setStop]=useState(false)


    const calcMultip=()=>{
        let nomber1=Math.floor(Math.random()*nomberMax)
        let nomber2=Math.floor(Math.random()*nomberMax)
        let resultat=Number(nomber1)*Number(nomber2)

        if(nomberMax==null || nomberMax==0 ){
            setafficher('')
            setMessageErr("Entrez un nombre maximal, s'il vous plaît !")
        }else{
            setMessageErr('')
            setafficher(nomber1.toString() + ' X ' + nomber2.toString()); 
        }
        
        setresultatfinal(resultat)
       // Afficher le message d'erreur pendant 3 secondes
       setTimeout(() => {
        setMessageErr("");
      }, 3000);
      
    }


    const Verifier=()=>{
        if((nomberMax==null || nomberMax==0) ){
            setMessageErr("Entrez un nombre maximal, s'il vous plaît !")
        }else{
            setMessageErr('')
            if(reponse==null){
                setMessageErr("Entrez une réponse, s'il vous plaît !")
            }else{
                   if(resultatfinal===Number(reponse)){
            setMessage('Voilà !')
              setScore(score+1)
              calcMultip()
        }else{
            setMessage('Incorrect !')
            setEssaie(essaie===0?0:essaie-1)
        } 
            }
              
        }
       if(essaie==1){
        setStop(true)
        setFinGame(`Le nombre d'essais est terminé. Voici votre score : ${score}`);

       }
        // Afficher le message d'erreur pendant 3 secondes
        setTimeout(() => {
            setMessageErr("");
          }, 3000);
    }

  

    const handleEffacer = () => {
        window.location.reload();
      };



     
        const generateImages = (num) => {
          const images = [];
          for (let i = 0; i < num; i++) {
            images.push(<img key={i} src={heartImage}  alt="Image" style={{width:'25px'}} />);
          }
          return images;
        };
      
    
  return (
    <frames>
  <div class="container card shadow-lg mt-4 p-3">
  <div class="d-flex justify-content-between">
    <h3 class="text-primary text-sm text-md-lg text-center">Essayez-vous sur table de multiplication</h3>
    <div class="score fs-5 d-flex justify-content-center align-items-center gap-4">
      <div>
        Nombre d'essais: (
        {generateImages(essaie).map((heart, index) => (
          <React.Fragment key={index}>
            {heart}
          </React.Fragment>
        ))})
      </div>
      <span class="text-success bard"> | </span>
      <div>
        <span>Votre Score: </span>
        <b class="text-danger">{score}</b>
      </div>
    </div>
  </div>
  <hr />
  <div class="row justify-content-center">
    <h4 class="col-12 col-md-4 text-center text-success">
      Entrez le nombre maximal
    </h4>

    <div class="col-12 col-md-6">
      <input type="number" min="0" onChange={(e) => { setNomberMax(e.target.value) }} class="form-control" />
    </div>
    
    <div class="col-12 col-md-2 start-btn">
      <button onClick={calcMultip} type="submit" class="btn btn-success col-10">
        Start
      </button>
    </div>

  </div>
  <div class="container mt-4">
    <div class="container row col-12">
      <div class="d-flex col-6">
        <div class="col-12 col-md-6 fs-4 text-primary">
          nombre Calculer
        </div>
      </div>
      <div class="d-flex col-6">
        <input readOnly value={afficher} type="text" class="form-control col-6" />
      </div>
    </div>
    <div class="container row col-12 mt-3">
      <div class="d-flex col-6">
        <div class="col-12 col-md-6 fs-4 text-primary">
          Votre reponse
        </div>
      </div>
      <div class="d-flex col-6">
        <input type="number" readOnly={stop} min="0" onChange={(e) => { setReponse(e.target.value) }} class="form-control col-6" />
      </div>
    </div>
    <div class="container row col-12 mt-3">
      <div class="d-flex col-6">
        <div class="col-12 col-md-6 fs-4 text-primary">Message</div>
      </div>
      <div class="d-flex col-6">
        <input readOnly type="text" value={Message} class="form-control col-6" />
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-center gap-3 mt-5 col-12">
  <button class="btn btn-success col-5" onClick={Verifier}>Verifier</button>
  <button class="btn btn-danger col-5" onClick={handleEffacer}>Restart</button>
  
  </div>
</div>


{MessageErr && (
  <div class="container col-sm-12 col-md-12 col-lg-12 text-center alert alert-danger mt-1">
    {MessageErr}
  </div>
)}

{FinGame && (
  <div class="container col-sm-12 col-md-12 col-lg-12 text-center alert alert-success mt-1">
    {FinGame}
  </div>
)}

    </frames>
  );
}

export default Dashbord;
