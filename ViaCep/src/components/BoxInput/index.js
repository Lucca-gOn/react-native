import { Input } from "../Input"
import { Label } from "../Label"
import { FieldContent } from "./style"

export const BoxInput = ({
    fieldWidth = 100, 
    editable = true, 
    textLabel, 
    placeholder, 
    fieldValue = null, 
    onchangeText= null, 
    KeyType = "default", 
    maxLength}) => {
    return(
        //FieldContent (Segura a label e o input)
            //Label
            //Input
        //FieldContent
        
        <FieldContent fieldWidth={fieldWidth}>
            <Label textLabel={textLabel} />

            <Input
                placeholder={placeholder}
                editable={editable}
                KeyType={KeyType}
                maxLenght={maxLength}
                fieldValue={fieldValue}
                onchangeText={onchangeText}
            />
        </FieldContent>
    )
}