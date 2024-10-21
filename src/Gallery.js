import image1 from "./images/pupp1.png"
import image2 from "./images/pupp2.png"
import image3 from "./images/pupp3.png"
import image4 from "./images/pupp4.png"
import image5 from "./images/pupp5.png"
import image6 from "./images/pupp6.png"
import image7 from "./images/pupp7.png"
import image8 from "./images/pupp8.png"

function Gallery(){
    return(
<>
<div style={{display:"flex",justifyContent:"center", textAlign:"center"}}>
<div style={{display: "flex", gap: 5, backgroundColor:"#DDDDDD", width: "80vw", height: "80vh", padding: "2vw", marginTop:"10vw", flexWrap:"wrap", justifyContent:"center", textAlign:"center"}}>

<div style={{width:"14vw",backgroundColor:"white", height:"15vw", display: "inline", textAlign:"center", padding:"1vw", border:"solid",borderColor:"#7F7F7F" }}>
<img src={image1} style={{width:"13vw"}}></img>
<p style={{}}>Julie's Rabbit Ears</p>
</div>
<div style={{width:"14vw",backgroundColor:"white", height:"15vw", display: "inline", textAlign:"center", padding:"1vw", border:"solid",borderColor:"#7F7F7F" }}>
<img src={image2} style={{width:"13vw"}}></img>
<p style={{}}>Julie's Rabbit Ears</p>
</div>
<div style={{width:"14vw",backgroundColor:"white", height:"15vw", display: "inline", textAlign:"center", padding:"1vw", border:"solid",borderColor:"#7F7F7F" }}>
<img src={image3} style={{width:"13vw"}}></img>
<p style={{}}>Julie's Rabbit Ears</p>
</div>
<div style={{width:"14vw",backgroundColor:"white", height:"15vw", display: "inline", textAlign:"center", padding:"1vw", border:"solid",borderColor:"#7F7F7F" }}>
<img src={image4} style={{width:"13vw"}}></img>
<p style={{}}>Julie's Rabbit Ears</p>
</div>
<div style={{width:"14vw",backgroundColor:"white", height:"15vw", display: "inline", textAlign:"center", padding:"1vw", border:"solid",borderColor:"#7F7F7F" }}>
<img src={image5} style={{width:"13vw"}}></img>
<p style={{}}>Julie's Rabbit Ears</p>
</div>
<div style={{width:"14vw",backgroundColor:"white", height:"15vw", display: "inline", textAlign:"center", padding:"1vw", border:"solid",borderColor:"#7F7F7F" }}>
<img src={image6} style={{width:"13vw"}}></img>
<p style={{}}>Julie's Rabbit Ears</p>
</div>
<div style={{width:"14vw",backgroundColor:"white", height:"15vw", display: "inline", textAlign:"center", padding:"1vw", border:"solid",borderColor:"#7F7F7F" }}>
<img src={image7} style={{width:"13vw"}}></img>
<p style={{}}>Julie's Rabbit Ears</p>
</div>
<div style={{width:"14vw",backgroundColor:"white", height:"15vw", display: "inline", textAlign:"center", padding:"1vw", border:"solid",borderColor:"#7F7F7F" }}>
<img src={image8} style={{width:"13vw"}}></img>
<p style={{}}>Julie's Rabbit Ears</p>
</div>




</div>
</div>




</>
    )
}
export default Gallery