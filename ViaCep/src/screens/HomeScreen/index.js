import { useEffect, useState } from "react";
import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, RowContainer, ScrollForm } from "./style";
import axios, { Axios } from "axios";

export function HomeScreen() {

    //hooks - states
    const [cep, setCep] = useState("51021784826")
    const [logradouro, setLogradouro] = useState("")
    const [bairro, setBairro] = useState("")
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")
    const [uf, setUf] = useState("")
    //hooks - effect
    //chamada da API

    useEffect(async () => {
        try {
            if (cep != "" && cep.length === 11) {
                //retorno da aplicação
               const endereco = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            };

            if (endereco.error) {
                alert("Verifique o CEP");
                return;
            }

            setLogradouro(endereco.data.logradouro);
            setBairro(endereco.data.bairro);
            setCidade(endereco.data.cidade);
            setEstado(endereco.data.estado);
            setUf(endereco.data.uf);

        } catch (error) {
            console.log("Erro");
            console.log(error);
        }
    }, [cep]) //array de dependecia
                //Na primeira opção, ele roda somente quando recarrega a pagina e passando "cep", ele recarrega ao passar o CEP.

    return (
        //ScrollForm
        //ContainerForm
        //BoxInput
        //label
        //input

        <ScrollForm>
            <ContainerForm>
                <BoxInput
                    textLabel="Informar CEP"
                    maxLenght={11}
                    placeholder="Cep..."
                    keyboardType="numeric"
                    fieldWidth={100}
                    fieldValue={cep}
                    onChangeText={tx => setCep(tx)}
                />
                <BoxInput
                    textLabel="Logradouro"
                    placeholder="Logradouro..."
                    fieldWidth={100}
                    fieldValue={logradouro}
                />
                <BoxInput
                    textLabel="Bairro"
                    placeholder="Bairro..."
                    fieldWidth={100}
                    fieldValue={bairro}
                />
                <BoxInput
                    textLabel="Cidade"
                    placeholder="Cidade..."
                    fieldWidth={100}
                    fieldValue={cidade}
                />
                <RowContainer>
                    <BoxInput
                        textLabel="Estado"
                        placeholder="Estado..."
                        fieldWidth={70}
                        fieldValue={estado}
                    />
                    <BoxInput
                        textLabel="UF"
                        placeholder="UF"
                        fieldWidth={20}
                        fieldValue={uf}
                    />
                </RowContainer>

            </ContainerForm>
        </ScrollForm>
    )
}