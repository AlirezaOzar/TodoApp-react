import Select from "react-select";

const options = [
    {value:"All", label:"All"},
    {value:"completed", label:"completed"},
    {value:"uncompleted", label:"uncompleted"},
]

const SelectTodo = ({onChange,selectedOption}) => {
    return ( 
        <div>
           <Select className="md:min-w-[250px]" options={options} onChange={onChange} value={selectedOption}/>
        </div>
     );
}
 
export default SelectTodo;