import React from 'react'
export default class Parite extends React.Component {
    constructor()
    {
        super();
        this.state = {
           x:'',
            res:'',
        }
    }
    onChange= e=> {
        this.setState({ [e.target.name] :e.target.value});
    };
    evaluer =(e)=>{
        e.preventDefault();
        let v=this.state.x;
        let msg='';
      if(v%2===0)
      {
         msg=<p>le nombre {v} <strong>est paire</strong></p>
      }
      else
      {
         msg=<p>le nombre {v} <strong>est impaire</strong></p>
      }
        this.setState({  x:'',
            
            res:msg})
        
        
    }
    
    render() {
        return(
            <div><h2>Produit</h2>
                        <form  onSubmit={this.evaluer}>

             x:<input className="form-control" type="number" min="1" value={this.state.x} onChange={this.onChange} name="x"></input><br></br>
             
             {this.state.res}
             <br></br><button  className='btn btn-primary' type="submit" >evaluer</button>
             
             </form>

            </div>
            
            
            )
    }
}