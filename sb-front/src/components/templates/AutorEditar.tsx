import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AutorEditar(){
    const navigate = useNavigate();
    const { id } = useParams();
    const [nomeAutor, setNomeAutor] = useState("")
    const [nacionalidadeAutor, setNacionalidadeAutor] = useState("")

    
    useEffect(()=> {
        if(id){
            axios.put("biblioteca/api/autor/atualizar/"+id)
            .then(response => { console.log(response) })
            .catch(error => console.error("Problema ao editar o autor!",error))
        }
    },[])

    return
}

export default AutorEditar