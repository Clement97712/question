import React, { Component } from 'react';
import './App.css';
import Bouton from './Components/Bouton';
import Sentence  from './Components/Phrase';


class App extends Component {  

    
    



    state=({
      num: 0,
      toggle:true,
      etat:"none",
      nombrereponse:0,
      reponseOrdi:["Usain Bolt","Kevin Durant"],
      reponseUser:[],
      data:[
      {
          question:"Quel sprinter detient un record sur 100 metres ? ",
          reponse:["Usain Bolt","Jimmy Vicaut","Justin Gatlin"]
      },
      {
          question:"Quels basketteur n'a pas jouer pour les Lakes (Los Angeles)?",
          reponse:["Kobe bryant","Marc Gasol","Kevin Durant"]
      },
      { question:"Esperons que vos reponses soient justes? ",
        reponse:["Voir reponse"]
      }
      
    
    ]

    });


    /* Partie Fonctions */

  action=(e)=>{
    let i;
      if(this.state.num<this.state.data.length-1){
      let rep =e.target.value;
      let array =this.state.reponseUser;
      array.push(rep);
      this.setState({ 
        num:++this.state.num
        
      });
      
      
      console.log(this.state.reponseUser);

    }
    
    else{
      console.log("Fin et resultat");
      this.setState({
        num:this.state.data.length-1
      })

      if(this.state.toggle){ 
      for(i=0;i<=this.state.reponseUser.length-1;i++){
         if(this.state.reponseUser[i]===this.state.reponseOrdi[i]){
            this.setState({
              nombrereponse:++this.state.nombrereponse,
              etat:"block"
            })
         }
         
      }
      console.log("Nombre reponse: "+this.state.nombrereponse);
      this.setState({
        toggle:false
      })
      }
      else{
        this.setState({
          toggle:false
        })
      }
    }
    
  }


  render() {

      let num =this.state.num;
      let answers = this.state.data[num].reponse.map((el,index)=>{
        return(<Bouton key={index} text={el} value={el} fonction={this.action.bind(this)}></Bouton>);
      });
      
      
    
    return (
      <div className="App">
      <Sentence question={this.state.data[num].question}/>
      <div className="container">
        {answers}
        
      </div>

        <div>
            <p style={{display:this.state.etat}}>le nombre de reponse exacte {this.state.nombrereponse}/{this.state.data.length-1}</p>
        </div>
      </div>
    );
  }
}

export default App;
