import React from 'react';
import ReactDOM from 'react-dom';
import Catalog from "../../components/pages/catalog/catalog.js";

export default class CatalogList extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() {
        return (
            <div>
                <input type="text"
                       placeholder="&#xF002;Search by catalog"
                       value={this.state.value}
                       onChange={this.handleChange} />
            </div>
        );
    }
}

ReactDOM.render(
    <CatalogList />,
    document.getElementById('root')
);


//            search : 'Level Up'
//        };
//    }
//    updateSearch (event){
//        this.setState({search:event.target.value.substr(0,20)});
//    }
//    render(){
//        let filteredCatalog= this.props.catalog.filter(
//            (catalog)=>{
//                return catalog.name.toLowerCase().indexOf(
//                    this.state.search.toLowerCase()) !== -1;
//            }
//        );
//        return(
//            <div>
//                <input type = "text"
//                       placeholder ="Search by catalog"
//                       value ={this.state.search}
//                       onChange ={this.updateSearch.bind(this)}/>
//                <ul>
//                    {filteredCatalog.map((catalog)=>{
//                        return <Catalog catalog = {catalog}
//                                        key = {catalog.id}/>
//                    })}
//                </ul>
//            </div>
//        )
//    }
//}
//
//export default CatalogList;