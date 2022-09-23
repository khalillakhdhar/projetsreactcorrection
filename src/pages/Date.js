import React from 'react'
export default class Produit extends React.Component {
    constructor()
    {
        super();
        this.state = {
            anne:'',
            mois:'',
            jour:'',
            res:'',
        }
    }
    onChange= e=> {
        this.setState({ [e.target.name] :e.target.value});
    };
     verifAnnee(a)
{
    return a>1900;
    // return true if a>1900
}
 verifMois(m)
{
    if(m>0 && m<=12 )
    return true;
    else 
    return false;
}

 verifJours(j,m,a)
{
    if(j<1|| j>31)
    return false;
    if(!this.verifAnnee(a)|| !this.verifMois(m))
    return false;
  var shortMonth=["4","6","9","11"]; // initialisation
    if(shortMonth.includes(m))
    {
        console.log("short");
        if(j<=30)
        return true;
        else 
        return false;
    }
    else if(parseInt(m)===2)
    {
        if(parseInt(a)%4===0)
        {
            console.log("bisextile");
            console.log("m=",m);
            if(parseInt(j)<=29)
            return true;
            else 
            return false;
        }
        else
        {
            console.log("non bisextile");
            if(parseInt(j)<=28)
            return true;
            else 
            return false;
        }

    }
    else
    {
        console.log("long");
        if(parseInt(j)<=31)
        return true;
        else
        return false;
    }
}
    verif =(e)=>{
        e.preventDefault();
        let a=this.state.anne;
        let m=this.state.mois;
        let j=this.state.jour;
        let msg='';
       if(this.verifJours(j,m,a))

        msg=<p>date correcte</p>
        else
        msg=<p>date incorrecte!</p>

        this.setState({  anne:'',
            mois:'',
            jour:'',
            res:msg,})
        
        
    }
    
    render() {
        return(
            <div><h2>Produit</h2>
                        <form  >

             Anné:<input className="form-control" type="number" min="1" value={this.state.anne} onChange={this.onChange} name="anne"></input><br></br>
             mois:<input className="form-control" type="number" min="1" value={this.state.mois} onChange={this.onChange} name="mois"></input><br></br>
             jour:<input className="form-control" type="number" min="1" value={this.state.jour} onChange={this.onChange} name="jour"></input><br></br>
             {this.state.res}
             <br></br><button onClick={this.verif} className='btn btn-primary' type="submit" >Verifier</button>
             
             </form>

            </div>
            
            
            )
    }
}