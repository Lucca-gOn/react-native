import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, RowContainer, ScrollForm } from "./style";

export function HomeScreen() {

    //hooks - states

    //hooks - effect
    //chamada da API

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
                    maxLenght={9}
                    placeholder="Cep..."
                    keyboardType="numeric"
                    fieldWidth={100}
                />
                <BoxInput
                    textLabel="Logradouro"
                    placeholder="Logradouro..."
                    fieldWidth={100}
                />
                <BoxInput
                    textLabel="Bairro"
                    placeholder="Bairro..."
                    fieldWidth={100}
                />
                <BoxInput
                    textLabel="Cidade"
                    placeholder="Cidade..."
                    fieldWidth={100}
                />
                <RowContainer>
                    <BoxInput
                        textLabel="Estado"
                        placeholder="Estado..."
                        fieldWidth={70}
                    />
                    <BoxInput
                        textLabel="UF"
                        placeholder="UF"
                        fieldWidth={20}
                    />
                </RowContainer>

            </ContainerForm>
        </ScrollForm>
    )
}