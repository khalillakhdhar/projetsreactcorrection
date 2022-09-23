import React from 'react'
export default class Produit extends React.Component {
    constructor()
    {
        super();
        this.state = {
            prix:0,
            quantite:0,
            res:'',
        }
    }
    onChange= e=> {
        this.setState({ [e.target.name] :e.target.value});
    };
    calculer =(e)=>{
        e.preventDefault();
        let p=this.state.prix;
        let q=this.state.quantite;
        let prixf=p*q;
        let taxe=prixf* 0.12;
        let msg=<p>le prix totale est:<strong> ${prixf}</strong> les taxe sont <strong>${taxe}</strong> le prix finale est <strong>${prixf-taxe} </strong></p>
        this.setState({  prix:0,
            quantite:0,
            res:msg,})
        
        
    }
    
    render() {
        return(
            <div><h2>Produit</h2>
                        <form  >

             Prix unitaire:<input className="form-control" type="number" min="1" value={this.state.prix} onChange={this.onChange} name="prix"></input><br></br>
             quantite:<input className="form-control" type="number" min="1" value={this.state.quantite} onChange={this.onChange} name="quantite"></input><br></br>
             {this.state.res}
             <br></br><button onClick={this.calculer} className='btn btn-primary' type="submit" >Ajouter</button>
             
             </form>

            </div>
            
            
            )
    }
}