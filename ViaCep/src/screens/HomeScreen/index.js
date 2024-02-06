import { useEffect, useState } from "react";
import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, RowContainer, ScrollForm } from "./style";
import axios, { Axios } from "axios";

export function HomeScreen() {

    //hooks - states
    const [cep, setCep] = useState("09951340")
    const [logradouro, setLogradouro] = useState("")
    const [bairro, setBairro] = useState("")
    const [localidade, setLocalidade] = useState("")
    const [estado, setEstado] = useState("")
    const [uf, setUf] = useState("")
    //hooks - effect
    //chamada da API

    useEffect(() => {
        async function buscarEndereco() {
            if (cep != "" && cep.length === 8) {
                try {
                    const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

                    if (resposta.data.erro) {
                        alert("CEP não encontrado.");
                        return;
                    }

                    setLogradouro(resposta.data.logradouro);
                    setBairro(resposta.data.bairro);
                    setLocalidade(resposta.data.localidade);
                    setUf(resposta.data.uf);
                
                } catch (error) {
                    console.error(error);
                    alert("Erro ao buscar o CEP.");
                }
            }
        }

        buscarEndereco();
    }, [cep]);//array de dependecia
    //Na primeira opção "[]", ele roda somente quando recarrega a pagina e passando "cep", ele recarrega ao passar o CEP.

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
                    maxLenght={8}
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
                    fieldValue={localidade}
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
                        fieldWidth={25}
                        fieldValue={uf}
                    />
                </RowContainer>

            </ContainerForm>
        </ScrollForm>
    )
}