import React,{ Component } from 'react';

 class SearchBar extends Component {
   constructor(props) {
     super(props)
     this.state = {
       term:''
     }
     this._onInputChange = this._onInputChange.bind(this);
   }
   _onInputChange (input) {
     this.setState({ term: input });
     this.props.onInput(this.state.term);
   }
   render(){
     return (

        <div className="container">
           <input
           value={this.state.term}
           onChange={ e => this._onInputChange(e.target.value) }
           placeholder="Let's Start"
           />
       </div>
     );
   }
}

export default SearchBar;
